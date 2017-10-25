const fetch = require('node-fetch');

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
          fetch(`${this.base}/${platform}/Profile/${membershipId}?components=Profiles`, this.options)
            .then(res => res.json())
            .then(profile => {
              resolve({
                profile: profile.Response.profile.data
              });
            })
            .catch(err => reject(err));
        })
        .catch(err => reject(err));
    });
  }
}

module.exports.Client = Client;
