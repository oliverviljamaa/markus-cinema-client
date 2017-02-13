# Markus Cinema Client

[![npm](https://img.shields.io/npm/v/markus-cinema-client.svg)](https://www.npmjs.com/package/markus-cinema-client)
[![GitHub release](https://img.shields.io/github/release/oliverviljamaa/markus-cinema-client.svg)](https://github.com/oliverviljamaa/markus-cinema-client/releases)

[![CircleCI](https://img.shields.io/circleci/project/github/oliverviljamaa/markus-cinema-client/master.svg)](https://circleci.com/gh/oliverviljamaa/markus-cinema-client)
[![Code Climate](https://img.shields.io/codeclimate/coverage/github/oliverviljamaa/markus-cinema-client.svg)](https://codeclimate.com/github/oliverviljamaa/markus-cinema-client/coverage)
[![npm](https://img.shields.io/npm/l/markus-cinema-client.svg)](https://github.com/oliverviljamaa/markus-cinema-client/blob/master/LICENSE)

JavaScript client for fetching data from cinemas that use MARKUS Cinema System.

## Background

Multiple cinemas in Finland, Estonia, Latvia and Lithuania use MARKUS Cinema System that exposes XML with upcoming shows and more.

For example:
* https://www.forumcinemas.ee/XML
* https://www.apollokino.ee/XML
* https://cinamon.ee/xml
* http://www.finnkino.fi/xml
* https://cinamonkino.lv/xml

This is a promise-based JavaScript client that takes care of fetching the XML, parsing it and extracting the relevant data.

## Usage

### Install

`yarn add markus-cinema-client`  
or  
`npm install --save markus-cinema-client`

### Use

```javascript
import { getShows } from 'markus-cinema-client';


const options = { area: 1008, dt: '14.02.2017' };

getShows('http://www.forumcinemas.ee/xml', options).then((shows) => {
  ...
});
```

## Features

Currently, only `getShows` for `Schedule` is implemented. However, most of the API-s also expose `Areas`, `ScheduleDates`, `Events`, `News`, etc.

For features and bugs, feel free to [add issues](https://github.com/oliverviljamaa/markus-cinema-client/issues) or contribute.

## Contributing

1. Run tests in watch mode with `yarn test:watch` or `npm run test:watch` and ensure every line is tested. For a run-once check with ESLint, run `yarn test` or `npm test`.
1. Bump version number according to [semver](http://semver.org/) and add an item that a release will be based on to `CHANGELOG.md`.
1. Submit your pull request from a feature branch and get code reviewed.
1. If the pull request is approved, coverage stays high and CircleCI build passes, you will be able to merge.
1. Code will automatically be released to GitHub and published to npm.
