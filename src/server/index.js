/* eslint-disable global-require, no-console */
import path from 'path'
import compression from 'compression'
import express from 'express'
import format from 'date-fns/format'
import graphqlHTTP from 'express-graphql'
import morgan from 'morgan'
import { makeExecutableSchema } from 'graphql-tools'

import data from './data/main'
import renderMiddleware from './middleware/render'

// Schemas
import { Job, Repo, Talk, Query, Contributor, Project } from './types'

const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000
const app = express()

const typeDefs = Query.concat(Job, Project, Repo, Talk, Contributor)

const resolvers = {
  Query: {
    name: () => data.name,
    email: () => data.email,
    twitter: () => data.twitter,
    wikipedia: () => data.wikipedia,
    goodreads: () => data.goodreads,
    currentHome: () => data.currentHome,
    github: () => data.github,
    jobs: () => data.jobs,
    repos: () => data.repos,
    contributors: () => data.contributors,
    countries: () => data.countries,
    talks: () =>
      data.talks.map(talk => ({
        ...talk,
        date: format(talk.date, 'DD/MM/YY')
      })),
    projects: () => data.projects
  }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

if (isProduction) {
  app.use(compression())
} else {
  const {
    webpackDevMiddleware,
    webpackHotMiddleware
  } = require('./middleware/webpack')

  app.use(webpackDevMiddleware)
  app.use(webpackHotMiddleware)
}

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.use(morgan(isProduction ? 'combined' : 'dev'))
app.use(express.static(path.resolve(__dirname, '../build')))
app.use(renderMiddleware)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'))
})

app.listen(port, console.log(`Server running on port http://localhost:${port}`))
