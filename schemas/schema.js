import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import pageBase from './pageBase'
import modularPage from './pageTypes/modularPage'
import blogPost from './pageTypes/blogPost'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    pageBase,
    modularPage,
    blogPost
  ]),
})