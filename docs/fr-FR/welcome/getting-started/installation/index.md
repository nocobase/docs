# Overview

## Installation Methods

NocoBase supports three installation methods.

- [Docker (recommended)](./docker-compose.md)
- [create-nocobase-app](./create-nocobase-app.md)
- [Git source code](./git-clone.md)

## How to choose the Installation method?

### Docker (recommended)

Suitable for no-code scenarios, no code to write. When upgrading, just download the latest image and reboot.

### create-nocobase-app

The business code of the project is completely independent and supports low-code development.

### Git source code

If you want to experience the latest unreleased version, or want to participate in the contribution, you need to make changes and debug on the source code, it is recommended to choose this installation method, which requires a high level of development skills, and if the code has been updated, you can git pull the latest code.

## Which version to install?

### Latest version

This is a stable and well-tested version and only bug fixed will be made. This version is recommended.

### Beta version

This version includes new features that are about to be released and it has been preliminarily tested, but still have known or unknown issues, primarily for testing and feedback. Ideal for early testers willing to try new features and provide feedback.

### Alpha version

A development version containing the latest features, which may be incomplete or unstable. Suitable for technical users interested in cutting-edge features. Not recommended for production use.

| Version  | Source code branch | Docker images version (recommended)      | create-nocobase-app version  | Specific version                             |
| -------- | ------------------ | ----------------------------------------- | ---------------------------- | -------------------------------------------- |
| `Latest` | `main`             | `nocobase/nocobase:latest-full`          | `create-nocobase-app@latest` | `1.3.51`<br />`1.3.52`<br />...              |
| `Beta`   | `next`             | `nocobase/nocobase:beta-full`            | `create-nocobase-app@beta`   | `1.4.0-beta.1`<br/>`1.4.0-beta.2`<br />...   |
| `Alpha`  | `develop`          | `nocobase/nocobase:alpha-full`           | `create-nocobase-app@alpha`  | `1.5.0-alpha.1`<br/>`1.5.0-alpha.2`<br />... |
