import { baseLanguage } from './localeSettings';

export const article = {
  title: 'Article',
  name: 'article',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'localeString'
    },
    {
      title: 'Meta title',
      name: 'meta_title',
      type: 'localeString'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 96)
      },
    },
    {
      title: 'Content',
      name: 'content',
      type: 'localeContent',
    }
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`,
      // author: 'author.name',
      // media: 'image',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  }
}