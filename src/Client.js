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
   * @param {string} platform Either `xbl`, `psn`, `pc`
   * @returns {Promise<Object>} Object containing info for this player
   */

  getProfile(displayName, platform) {
    return new Promise((resolve, reject) => {
      if (!displayName) reject('No display name provided.');

      let membershipId;
      fetch(`${this.base}/SearchDestinyPlayer/${platform}/${encodeURIComponent(displayName)}`, this.options)
        .then(res => res.json())
        .then(player => {
          membershipId = player.Response[0].membershipId;
          fetch(`${this.base}/${platform}/Profile/${membershipId}?components=Characters`, this.options)
            .then(res => res.json())
            .then(profile => {
              resolve({
                //profile: new Profile(profile.Response.profile.data)
                characters: Array(profile.Response.characters.data)
                /**
                [ { '2305843009269193703': [Object],
                    '2305843009269193704': [Object],
                    '2305843009269193705': [Object] } ]
                 */
              });
            })
            .catch(err => reject(err));
        })
        .catch(err => reject(err));
    });
  }
}

module.exports.Client = Client;
