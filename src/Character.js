class Character {
  constructor(content) {
    this.id = content.characterId;
    this.lastPlayed = (Date.parse(content.dateLastPlayed)/1000).toString();
    this.sessionPlayed = content.minutesPlayedThisSession;
    this.totalPlayed = content.minutesPlayedTotal;
    this.light = content.light;

    const keys = Object.keys(content.stats);
    for (let statI = 0; statI < keys.length; statI++) {
      content.stats[characterStats[keys[statI]]] = content.stats[keys[statI]];
      delete content.stats[keys[statI]];
    }
    this.stats = content.stats;
    this.raceHash = content.raceHash;
    this.raceType = content.raceType;
    this.genderHash = content.genderHash;
    this.genederType = content.genderType;
    this.classHash = content.classHash;
    this.emblem = content.emblemPath;
    this.embemBackground = content.emblemBackgroundPath;
    this.emblemColor = '#' + ((1 << 24) + (content.emblemColor.red << 16) + (content.emblemColor.green << 8) + content.emblemColor.green).toString(16).slice(1);
    this.progression = content.levelProgression;
  }
}


const characterStats = {
  144602215: 'Intellect',
  209426660: 'Defense',
  392767087: 'Resilience',
  925767036: 'Ammo Capacity',
  943549884: 'Handling',
  1735777505: 'Discipline',
  1935470627: 'Power',
  1943323491: 'Recovery',
  2762071195: 'Efficiency',
  2837207746: 'Swing Speed',
  2996146975: 'Mobility',
  3555269338: 'Zoom',
  3897883278: 'Defense',
  3988418950: 'Time to Aim Down Sights',
  4244567218: 'Strength'
};


module.exports = Character;
