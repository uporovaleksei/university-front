import { format } from 'date-fns'

export default defineNuxtPlugin(date => {
  try {
    return format(new Date(date), 'dd.MM.yyyy')
  } catch {
    return date
  }
})
