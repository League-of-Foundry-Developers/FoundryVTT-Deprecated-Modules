import { Settings } from "./settings.js";

const CACHE_LENGTH = 1000 * 60 * 60 * 24; // 1 day
const BATCH_SIZE = 20;

export class ManifestRepository {
    static batch = [];
    static batchPromise = Promise.resolve();

    static getManifest(module, forge=true, currentVersion=false) {
        const version = currentVersion ? game.data.version : null;
        const key = this.getCacheKey(module, forge, version);
        let manifest = this.getCachedManifest(key);
        if(manifest) {
            return manifest;
        }
        manifest = this.getManifestFromForge(module, version);
        this.cacheManifest(manifest, key);
        return manifest;
    }

    static async getManifestFromForge(module, currentVersion) {
        await this.batchPromise;

        let url = "https://forge-vtt.com/api/bazaar/manifest/" + module.data.name;
        if(currentVersion) {
            url += "?coreVersion=" + game.data.version;
        }
        let manifest = fetch(url).then(response => response.json().then(json => json.manifest));

        this.addToBatch(manifest);
        return manifest;
    }

    static getCachedManifest(key) {
        const manifestRecord = Settings.getManifestCache()[key];
        if(!manifestRecord) {
            return;
        }
        if(new Date().getTime() > (manifestRecord.time + CACHE_LENGTH)) {
            return;
        }
        return Promise.resolve(manifestRecord.manifest);
    }

    static cacheManifest(manifestPromise, key) {
        manifestPromise.then(manifest => {
            if(manifest) {
                const cache = Settings.getManifestCache();
                cache[key] = {
                    manifest,
                    time: new Date().getTime()
                }
                Settings.setManifestCache(cache);
            }
        }).catch(err => console.log("Issue caching manifest."));
        // This error should pop up elsewhere as well, so don't 
    }

    static getCacheKey(module, forge, version) {
        let key = module.data.name + "|" + module.data.version;
        key += forge ? "|useForge" : "";
        key += version ? "|" + version : "";
        return key;
    }

    // To prevent inadventently causing a DDOS attack, after every X requests,
    // we'll wait for them to finish before making any new ones
    static addToBatch(manifestPromise) {
        if(this.batch.length >= BATCH_SIZE) {
            console.log("Waiting for batch.");
            // Not entirely sure this won't let some slip through, but it seems to work well enough
            this.batchPromise = Promise.all(this.batch);
            this.batch = [];
        }
        this.batch.push(manifestPromise);
    }
}