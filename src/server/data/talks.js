const isPast = require('date-fns/is_past')

const talks = [
  {
    name: 'Occupy All Tweets: An Insider Perspective',
    event: 'Public Lives/Private Platform: The Politics of Twitter',
    date: new Date(2017, 5, 14),
    done: !!isPast(new Date(2017, 5, 14)),
    video: 'https://www.pscp.tv/w/1LyGBBOeDZpGN?t=45m33s',
    slides: 'https://bit.ly/OccupyTwitter',
    location: 'Amsterdam, Netherlands'
  },
  {
    name: 'Organising Ourselves: Design Pattern Matters',
    event: 'Ruby UnConf',
    date: new Date(2019, 5, 27),
    done: !!isPast(new Date(2019, 5, 27)),
    video: 'https://www.pscp.tv/w/1LyGBBOeDZpGN?t=45m33s',
    slides: 'https://bit.ly/OccupyTwitter',
    location: 'Amsterdam, Netherlands'
  },
  {
    name: 'Offensive Privacy Workshop',
    event: 'Heinrich-Boell Stiftung',
    date: new Date(2019, 7, 6),
    done: !!isPast(new Date(2019, 7, 6)),
    video: '',
    slides: 'https://bit.ly/offensiveprivacy',
    location: 'Berlin, Germany'
  }
]

module.exports = talks.sort((a, b) => (a.date > b.date ? -1 : 1))
