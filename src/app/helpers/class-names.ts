type ClassNameType = string | boolean | undefined | null

const classNames = (...classNames: ClassNameType[]): string =>
  classNames.filter(Boolean).join(' ').replace(/\s\s+/g, ' ').trim()

export default classNames
