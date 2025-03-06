import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

// Define the structure builder for the desk tool
const deskStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(S.documentTypeList('page').title('Pages')),
      
      S.divider(),
      
      S.listItem()
        .title('Services')
        .child(S.documentTypeList('service').title('Services')),
      
      S.listItem()
        .title('Events')
        .child(
          S.list()
            .title('Events')
            .items([
              S.listItem()
                .title('Events')
                .child(S.documentTypeList('event').title('Events')),
              S.listItem()
                .title('Locations')
                .child(S.documentTypeList('location').title('Locations')),
            ])
        ),
      
      S.divider(),
      
      // Return the default list items (users, etc.)
      ...S.documentTypeListItems()
        .filter((listItem: any) => 
          !['page', 'service', 'event', 'location'].includes(listItem.getId())
        ),
    ]);

export default defineConfig({
  name: 'default',
  title: 'Page Builder Studio',

  projectId: 'agm4iydx',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
})
