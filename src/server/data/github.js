const axios = require('axios')

export const repos = axios(
  'https://api.github.com/users/shushugah/repos?type=all&per_page=100'
)
  .then(repos =>
    repos.data.map(repo => ({
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
      language: repo.language,
      stars: repo.stargazers_count,
      fork: repo.fork,
      owner: repo.owner.login
    }))
  )
  .then(repos => repos.filter(r => !r.fork))
  .then(repos => repos.sort((a, b) => b.stars - a.stars))

export const contributors = axios(
  'https://api.github.com/repos/shushugah/graphql-resume/contributors'
).then(contributors =>
  contributors.data.map(contributor => ({
    name: contributor.login,
    url: contributor.html_url
  }))
)
