# Deprecated Modules
Deprecated Modules is a module that will warn game masters whenever they use a module that they shouldn't be using anymore. This includes modules that have been integrated into core Foundry, modules that have been entirely replaced by other modules, and modules that have broken and are no longer being maintained.

Deprecated Modules is smart about which version of Foundry you're using when it checks your modules. For example, Deselection is a module that was integrated into core Foundry in 0.7.3. If you're using Deselection in an earlier version of Foundry, Deprecated Modules will not warn you about it.

![Example](images/ExampleWarning.png)

# 0.8.x Compatibility Checker

To assist you in preparing for an upgrade to Foundry VTT 0.8.x, this module also has a module compatibility checker. It will check your system and active modules to see which are confirmed to be 0.8.x compatible and which are not. To use it, click "Check Compatibility for 0.8.x" in Deprecated Module's settings.

![Settings](images/Settings.png)

Most modules will be put into one of three categories:

* ![Good](images/Compatible.png) This module's current version is compatible with 0.8.x.
* ![Download](images/Download.png) This module has a 0.8.x compatible version, but you currently don't have it downloaded.
* ![Spreadsheet](images/CheckSpreadsheet.png) This module may or may not be compatible with 0.8.x. Check the linked spreadsheet for more info.
* ![Incompatible](images/Incompatible.png) (Systems Only) This system is not compatible with 0.8.x. **DO NOT UPGRADE TO 0.8.X YET.**

![CompatibilityCheckWindow](images/CompatibilityCheck.png)

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