const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'no', title: 'Norwegian' },
  { id: 'fr', title: 'French' }
]

export const baseLanguage = supportedLanguages.find(l => l.isDefault)

export const localeString = {
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? null : 'translations'
  }))
}

export const localeContent = {
  title: 'Localized Content',
  name: 'localeContent',
  // type: 'block',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'array',
    of: [{ type: 'block' }],
    fieldset: lang.isDefault ? null : 'translations'
  }))
}