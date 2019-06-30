const jobs = [
  {
    company: 'Democracy Works',
    title: 'Data Fellow',
    location: 'New York City',
    started: 'Sep 2014',
    finished: 'November 2014'
  },
  {
    company: 'DaWanda GmbH',
    title: 'Backend Developer',
    location: 'Berlin',
    started: 'February 2017',
    finished: 'August 2018'
  },
  {
    company: 'Bitspire GmbH',
    title: 'FullStack Developer',
    location: 'Berlin',
    started: 'August 2016',
    finished: 'October 2016'
  },
  {
    company: 'Curated Shopping Group GmbH',
    title: 'Software Engineer',
    location: 'Berlin',
    started: 'December 2018',
    finished: 'June 2019'
  }
]

module.exports = jobs.sort((a, b) => (a.date > b.date ? -1 : 1))
