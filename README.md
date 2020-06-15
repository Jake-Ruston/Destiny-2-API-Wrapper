# Destiny 2 [![npm downloads](https://img.shields.io/npm/dt/destiny2.svg?maxAge=3600)](https://www.npmjs.com/package/destiny2) [![Dependencies](https://img.shields.io/david/jake-ruston/destiny2.svg?maxAge=3600)](https://david-dm.org/jake-ruston/destiny2) [![RunKit](https://badge.runkitcdn.com/destiny2.svg)](https://npm.runkit.com/destiny2)

<img src="https://img.pngio.com/destiny-destiny-2-logo-transparent-hd-png-download-1600x1598-destiny-logo-png-840_819.png" alt="destiny 2" width="250" align="right" />

##### [Changelog](https://github.com/Jake-Ruston/Destiny-2-API-Wrapper/wiki/Changelog) | [Issues](https://github.com/Jake-Ruston/Destiny-2-API-Wrapper/issues)

A simple, easy to use module for interacting with the Destiny 2 API.

## Setup and Installation
```
$ npm i destiny2
```

## Getting Started
```js
// Bring in the Destiny 2 module
const { Client } = require('destiny2');
// Create an instance of the client with your API Key
const client = new Client('TOKEN');

client.getProfile('PushyParachute4', '1').then(data => console.log(data));
```
- `display name` is required and must be a string.
- `platform` is required. Possible platforms are `1`: xbox, `2`: psn, `4`: battlenet, `254`: bungie

## Example Response
```js
{
  profile: Profile {
    platform: ['1', 'xbl', 'xbox'],
    displayName: 'PushyParachute4',
    id: '4611686018437887088',
    lastPlayed: '1511455471'
  },
  characters: [Character {
      id: '2305843009269193703',
      lastPlayed: '1511455471',
      sessionPlayed: '18',
      totalPlayed: '4798',
      light: 305,
      stats: [Object],
      raceHash: 898834093,
      raceType: 2,
      genderHash: 3111576190,
      genederType: 0,
      classHash: 3655393761,
      emblem: '/common/destiny2_content/icons/f22db8b10d12aafc012343dc9165299c.jpg',
      embemBackground: '/common/destiny2_content/icons/f96d2c28c4902a79de4101f79fc855b9.jpg',
      emblemColor: '#371f1f',
      progression: [Object]
    },
    Character {
      id: '2305843009269193704',
      lastPlayed: '1510933178',
      sessionPlayed: '3',
      totalPlayed: '1728',
      light: 303,
      stats: [Object],
      raceHash: 3887404748,
      raceType: 0,
      genderHash: 3111576190,
      genederType: 0,
      classHash: 671679327,
      emblem: '/common/destiny2_content/icons/dbc42b541333a49226e2cb50746773c2.jpg',
      embemBackground: '/common/destiny2_content/icons/7f812326eefc3697671f098be78e436f.jpg',
      emblemColor: '#a26363',
      progression: [Object]
    },
    Character {
      id: '2305843009269193705',
      lastPlayed: '1511089221',
      sessionPlayed: '73',
      totalPlayed: '956',
      light: 296,
      stats: [Object],
      raceHash: 2803282938,
      raceType: 1,
      genderHash: 3111576190,
      genederType: 0,
      classHash: 2271682572,
      emblem: '/common/destiny2_content/icons/fc2a2d570b2a6be1fff0de19e22504bd.jpg',
      embemBackground: '/common/destiny2_content/icons/cc46632e2fe7f7ec633b849b70389b12.jpg',
      emblemColor: '#100505',
      progression: [Object]
    }
  ]
}
```
