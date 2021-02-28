# Deprecated Modules
Deprecated Modules is a module that will warn game masters whenever they use a module that they shouldn't be using anymore. This includes modules that have been integrated into core Foundry, modules that have been entirely replaced by other modules, and modules that have broken and are no longer being maintained.

# List of Deprecated Modules

### Integrated Into Core

These modules provided functionality that is now provided by core Foundry, and so are no longer needed. (You will not receive a warning if you're using a Foundry version earlier than when a module was integrated into Foundry.)

* Deselection
* QuickSceneView
* Batch Permissions by Folder
* Note Text Color
* No Summon Vision
* No Accidental Back Button
* Token Owner Selection Tweak
* Return to Setup

### Replaced

These modules have stopped being maintained, and are either broken or could be broken with any Foundry update. However, all modules in this category have a recommended module that will replicate or even improve the behavior of the replaced module. The suggested replacements will be in parentheses.

* Dynamic Effects (Dynamic After Effects)
* Teleport (Multilevel Tokens)
* Dancing Lights (Community Lighting)
* Darker Vision for 5e (Perfect Vision)
* Darkvision 5e (Perfect Vision)
* Minor QOL (Midi QOL)
* GM Background (Scenery)
* Cursor Zoom (Zoom/Pan Options)

# Module Developers

Deprecated Modules is integrated with Manifest+ to make it easier for you to mark your module as deprecated when you stop maintaining it.
Simply add the following fields to your module.json file, and any users who have Deprecated Modules installed will receive a warning for it. (The "reason" field is required, the rest are optional.)

```
"deprecated": {
  "coreVersion": "0.7.0",
  "reason": "This was added to foundry core.",
  "alternatives": [
    {
      "name": "module_name",
      "manifest": "https://link.com/to/manifest.json"
    }
  ]
}
```

For more information about Manifest+, [go here](https://foundryvtt.wiki/en/development/manifest-plus).

# License
Deprecated Modules is licensed under the MIT License (see LICENSE file), as well as Foundry VTT's [Limited License Agreement for Module Development 05/29/2020](https://foundryvtt.com/article/license/).