const fetch = require('node-fetch');
const Profile = require('./Profile');
const Character = require('./Character');

class Client {
  constructor(apikey) {
    if (!apikey) throw new Error('You must supply an API Key.');
    this.base = 'https://bungie.net/Platform/Destiny2';
    this.options = {
      headers: {
        'X-API-Key': apikey
      }
    };
  }

  /**
   * @param {string} displayName The display name of the user
   * @param {string} platform Either `1`: xbox, `2`: psn, `4`: battlenet, `254`: bungie
   * @returns {Promise<Object>} Object containing info for this player
   */

  getProfile(displayName, platform) {
    return new Promise((resolve, reject) => {
      if (!displayName) reject('No display name provided.');

      let membershipId;
      fetch(`${this.base}/SearchDestinyPlayer/${platform.toString()}/${encodeURIComponent(displayName)}`, this.options)
        .then(res => res.json())
        .then(player => {
          if (player.ErrorCode === 2101) reject(new Error(player.Message));
          if (!player.Response.length) reject('This player does not exist.');
          membershipId = player.Response[0].membershipId;
          fetch(`${this.base}/${platform}/Profile/${membershipId}?components=Profiles,Characters`, this.options)
            .then(res => res.json())
            .then(profile => {
              resolve({
                profile: new Profile(profile.Response.profile.data),
                characters: Object.keys(profile.Response.characters.data).map(key => new Character(profile.Response.characters.data[key]))
              });
            })
            .catch(err => reject(err));
        })
        .catch(err => reject(err));
    });
  }
}

module.exports.Client = Client;
