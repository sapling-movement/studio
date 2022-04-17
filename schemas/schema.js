import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import articleList from './objects/articleList'
import heroSection from './objects/heroSection'
import pageBase from './objects/pageBase'
import imageWithCaption from './objects/imageWithCaption'
import portableText from './objects/portableText'
import translation from './objects/translation'
import vectorText from './objects/vectorText'

import author from './documents/author'
import navigation from './documents/navigation'
import uiTranslations from './documents/uiTranslations'

import category from './pageTypes/category'
import modularPage from './pageTypes/modularPage'
import blogPost from './pageTypes/blogPost'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    articleList,
    heroSection,
    pageBase,
    imageWithCaption,
    portableText,
    translation,
    vectorText,
    author,
    navigation,
    uiTranslations,
    category,
    modularPage,
    blogPost
  ]),
})
