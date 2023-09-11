# oazo-configuration

Creates a configuration file for Summer.fi front end (and other) projects. This is a simple CLI tool that creates a configuration file for the project. The end result is a JSON file that contains the configuration for the project.

## Installation and creating a config

This was created with `bun` in mind, but should work with `yarn/npm` as well. To install with `bun` [follow the instructions](https://bun.sh/docs/installation):

### Install dependencies:

<details open>
  <summary>Bun</summary>
  <pre>bun install</pre>
</details>
<details>
  <summary>Yarn</summary>
  <pre>yarn install</pre>
</details>
<details>
  <summary>Npm</summary>
  <pre>npm install</pre>
</details>

### Create configs:

<details open>
  <summary>Bun</summary>
  <pre>bun dle</pre>
</details>
<details>
  <summary>Yarn</summary>
  <pre>yarn dle</pre>
</details>
<details>
  <summary>Npm</summary>
  <pre>npm run dle</pre>
</details>

### Output

The config is generated in `dist/` folder. To use in `oasis-borrow` just copy the `oasis-borrow-development.json` to the main folder.
