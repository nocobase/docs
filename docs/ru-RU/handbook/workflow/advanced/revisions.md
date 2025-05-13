# Revisions

After a configured workflow is triggered at least once, if you want to modify the configuration of the workflow or its nodes, you need to create a new version and then modify it, which also ensures that when reviewing execution history of workflows that have been triggered, they are not affected by future modifications.

On the configuration page of the workflow, you can view existing workflow versions in the version menu in the top right corner:

![View workflow versions](https://static-docs.nocobase.com/ad93d2c08166b0e3e643fb148713a63f.png)

In the more operations ("...") menu on the right side, you can do "copy to new version" based on the current version being viewed:

![Copy workflow to new version](https://static-docs.nocobase.com/2805798e6caca2af004893390a744256.png)

After copying to a new version, click the "Enable"/"Disable" switch. After switching the corresponding version to the enabled status, the new workflow version will take effect.

If you need to use an old version again, switch one from the version menu, and then switch to the enabled status by clicking the "On"/"Off" switch again, then the current viewed version will take effect, and further triggers will run on the corresponding version of the workflow.

When need to disable a workflow, after clicking the "Enable"/"Disable" switch to the disabled status, the workflow will no longer be triggered.

:::info{title=Note}
Different from "Duplicate" a workflow in the workflow management list,"Copy to new version" will still be grouped in the same group of workflows, but can be distinguished by version. However, duplicating a workflow will be make a completely new workflow, unrelated to the previous versions of the workflow, and the execution count will also be reset to zero.
:::
