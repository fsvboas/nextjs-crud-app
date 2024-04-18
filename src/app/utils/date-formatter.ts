import { format, isValid, parseISO } from 'date-fns'

interface DateFormatterProps {
  children: string
}

const dateFormatter = (dateAsString: string) => {
  const date = parseISO(dateAsString)
  const formattedDate = format(date, 'dd/MM/yyyy')
  return isValid(date) ? formattedDate : undefined
}

export const DateFormatter = ({ children }: DateFormatterProps) => {
  const date = parseISO(children)
  if (!isValid(date)) return null
  return dateFormatter(children)
}
