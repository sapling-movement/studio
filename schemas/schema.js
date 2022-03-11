import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import articleList from './objects/articleList'
import pageBase from './objects/pageBase'
import imageWithCaption from './objects/imageWithCaption'
import portableText from './objects/portableText'
import translation from './objects/translation'

import navigation from './documents/navigation'
import uiTranslations from './documents/uiTranslations'

import modularPage from './pageTypes/modularPage'
import blogPost from './pageTypes/blogPost'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    articleList,
    pageBase,
    imageWithCaption,
    portableText,
    translation,
    navigation,
    uiTranslations,
    modularPage,
    blogPost
  ]),
})
