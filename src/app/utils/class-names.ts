type ClassNameType = string | boolean | undefined | null

export const classNames = (...classNames: ClassNameType[]): string =>
  classNames.filter(Boolean).join(' ').replace(/\s\s+/g, ' ').trim()
