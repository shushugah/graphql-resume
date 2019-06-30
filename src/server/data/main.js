const jobs = require('./resume')
const { repos, contributors } = require('./github')
const talks = require('./talks')
const projects = require('./projects')
const countries = require('./countries')
const basic = require('./basic')

module.exports = {
  ...basic,
  jobs,
  talks,
  projects,
  countries,
  repos,
  contributors
}
