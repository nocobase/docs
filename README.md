# NocoBase V1 Documentation (Archived)

> **This repository is archived and no longer maintained.** V2 documentation lives in the main repository: [nocobase/nocobase](https://github.com/nocobase/nocobase) (under the `docs/` directory). For the latest docs, visit [docs.nocobase.com](https://docs.nocobase.com).

If you need to access the V1 documentation, you can run it locally:

## Local Development

```bash
git clone https://github.com/nocobase/docs.git
cd docs
yarn install

# Run English docs
yarn dev:en

# Run Chinese docs
yarn dev

# Run French docs
yarn dev:fr

# Run Japanese docs
yarn dev:ja

# Run Russian docs
yarn dev:ru
```

## Build

```bash
yarn build
```

Note: `yarn dev` and `yarn dev:en` cannot be run at the same time.
