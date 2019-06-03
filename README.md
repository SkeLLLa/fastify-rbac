# fastify-rbac

<!-- <div align="center">
  <img src="https://gitlab.com/m03geek/fastify-rbac/raw/master/logo.png" alt="fastify-rbac logo"/>
</div> -->

[![NPM Version](https://img.shields.io/npm/v/fastify-rbac.svg)](https://www.npmjs.com/package/fastify-rbac)
[![Downloads Count](https://img.shields.io/npm/dm/fastify-rbac.svg)](https://www.npmjs.com/package/fastify-rbac)
[![Vunerabilities Count](https://snyk.io/test/npm/fastify-rbac/badge.svg)](https://www.npmjs.com/package/fastify-rbac)
[![Build Status](https://gitlab.com/m03geek/fastify-rbac/badges/master/pipeline.svg)](https://gitlab.com/m03geek/fastify-rbac/commits/master)
[![License](https://img.shields.io/npm/l/fastify-rbac.svg)](https://gitlab.com/m03geek/fastify-rbac/blob/master/LICENSE)
<!-- [![Coverage Status](https://gitlab.com/m03geek/fastify-rbac/badges/master/coverage.svg)](https://gitlab.com/m03geek/fastify-rbac/commits/master) -->

RBAC (Role-based access control) plugin for Fastify.

This plugin uses [fast-rbac](https://gitlab.com/m03geek/fast-rbac/) under the hood.

## ToC
- [fastify-rbac](#fastify-rbac)
  - [ToC](#toc)
  - [Fastify support](#fastify-support)
  - [Installation](#installation)
  - [Features and requirements](#features-and-requirements)
  - [Usage](#usage)
    - [Plugin options](#plugin-options)
  - [Docs](#docs)
  - [Changelog](#changelog)
  - [See also](#see-also)
  - [License](#license)

## Fastify support

- **v1.x.x** - supports `>= fastify-1.0.0`

## Installation

```sh
npm i fastify-rbac --save
```

<sub>[Back to top](#toc)</sub>

## Features and requirements

* Wildcard rules support
* Inheritance support
* Typescript support

--- 

* Requires fastify `>=1.0.0`.
* Node.js `>=8.9.0`.

<sub>[Back to top](#toc)</sub>

## Usage

Add it to your project like regular fastify plugin. Use `register` method and pass options to it.

```js
const fastify = require('fastify');
const app = fastify();

const rbacPlugin = require('fastify-rbac');
app.register(rbacPlugin, { /* rbac options */ });
```

It exposes `rbac` to fastify instance `fastify.rbac` which you may use to check/add/remove roles and permissions.


<sub>[Back to top](#toc)</sub>

### Plugin options

See [RBAC Options](https://gitlab.com/m03geek/fast-rbac/blob/master/docs/interfaces/rbac.options.md).

## Docs

See plugin [docs](docs/README.md). 

Also refer to [RBAC docs](https://gitlab.com/m03geek/fast-rbac/blob/master/docs/README.md).

<sub>[Back to top](#toc)</sub>

## Changelog

See [changelog](CHANGELOG.md).

<sub>[Back to top](#toc)</sub>

## See also

* [fastify-acl-auth](https://www.npmjs.com/package/fastify-acl-auth)

<sub>[Back to top](#toc)</sub>

## License

Licensed under [MIT](./LICENSE).

<sub>[Back to top](#toc)</sub>
