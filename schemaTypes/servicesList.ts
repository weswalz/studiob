import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'servicesList',
  title: 'Services List',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Our Services',
    }),
    defineField({
      name: 'description',
      title: 'Section Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'layout',
      title: 'Layout Style',
      type: 'string',
      options: {
        list: [
          { title: 'Grid', value: 'grid' },
          { title: 'List', value: 'list' },
          { title: 'Cards', value: 'cards' },
        ],
      },
      initialValue: 'cards',
    }),
    defineField({
      name: 'displayOptions',
      title: 'Display Options',
      type: 'object',
      fields: [
        {
          name: 'showImages',
          title: 'Show Images',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'showDescriptions',
          title: 'Show Descriptions',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'showPrices',
          title: 'Show Prices',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'showFeatures',
          title: 'Show Features',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'showCta',
          title: 'Show Call-to-Action',
          type: 'boolean',
          initialValue: true,
        },
      ],
    }),
    defineField({
      name: 'servicesFilter',
      title: 'Services Filter',
      type: 'string',
      options: {
        list: [
          { title: 'All Services', value: 'all' },
          { title: 'Featured Services Only', value: 'featured' },
          { title: 'Custom Selection', value: 'custom' },
        ],
      },
      initialValue: 'all',
    }),
    defineField({
      name: 'selectedServices',
      title: 'Selected Services',
      description: 'Select specific services to display',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'service' }],
        },
      ],
      hidden: ({ parent }) => parent?.servicesFilter !== 'custom',
    }),
    defineField({
      name: 'maxServices',
      title: 'Maximum Services',
      description: 'Maximum number of services to display (leave blank for all)',
      type: 'number',
      hidden: ({ parent }) => parent?.servicesFilter === 'custom',
    }),
    defineField({
      name: 'ctaButton',
      title: 'Section Call-to-Action',
      description: 'Add a call-to-action button at the bottom of the services list',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          initialValue: 'View All Services',
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'string',
        },
        {
          name: 'showButton',
          title: 'Show Button',
          type: 'boolean',
          initialValue: true,
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      layout: 'layout',
    },
    prepare({ title, layout }) {
      return {
        title: title || 'Services List',
        subtitle: `Layout: ${layout}`,
      };
    },
  },
}); 