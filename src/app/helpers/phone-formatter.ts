interface PhoneFormatter {
  children: string
}

const PhoneFormatter = ({ children }: PhoneFormatter) => {
  return children
    ?.replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{4})/, '$1-$2')
}

export default PhoneFormatter
