# Overview

## Installation Methods

NocoBase supports three installation methods.

- [Docker (recommended)](./docker-compose.md)
- [create-nocobase-app](./create-nocobase-app.md)
- [Git source code](./git-clone.md)

## How to choose

**Docker (recommended)**:

Suitable for no-code scenarios, no code to write. When upgrading, just download the latest image and reboot.

**create-nocobase-app**:

The business code of the project is completely independent and supports low-code development.

**Git source code**:

If you want to experience the latest unreleased version, or want to participate in the contribution, you need to make changes and debug on the source code, it is recommended to choose this installation method, which requires a high level of development skills, and if the code has been updated, you can git pull the latest code.

## Which version to install?

The list of released versions for each installation method is shown below:

- [Docker Released Versions List](https://hub.docker.com/r/nocobase/nocobase/tags)
- [create-nocobase-app list of released versions](https://www.npmjs.com/package/create-nocobase-app?activeTab=versions)
- [List of Git source code releases](https://github.com/nocobase/nocobase/tags)

Release Notes

- The default branch for source installations is the main branch (unstable), but you can switch to a specific tag branch if you want (released versions, relatively stable versions)
- create-nocobase-app installs the latest released (tagged) version by default, but you can install by version if you want.
- docker has different tags
  - main is the latest (unstable) image on the main branch.
  - latest is the latest (tagged) version of the main branch.
  - v0.19.0-alpha.1
  - v0.18.0-alpha.9
  - v0.18.0-alpha.8
  - ...

:::warning
- The main branch is updated frequently and is unstable, so if you want to try it out, you can install this version;
- If stability is your main concern, you should install the latest (tagged) release.
:::.