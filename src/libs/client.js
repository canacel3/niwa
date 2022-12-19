import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'niwa',
  apiKey: process.env.API_KEY,
})
