//import the schema creator
import createSchema from '@sanity/cli'
//import schema types
import testimonials from './testimonials'

export default createSchema({
  name: 'testimonials',
  types: schemaTypes.concat([testimonials]),
})
