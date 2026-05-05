import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {apiVersion, dataset, projectId} from '../ui/src/sanity/env'
import {schema} from '../ui/src/sanity/schemaTypes'
import {structure} from '../ui/src/sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Eumero Studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
