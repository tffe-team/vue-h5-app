const host = process.env.NODE_ENV === 'production' ? '/h5/' : '/api/'
export const listApi = {
  'getlist': host + 'getlist/list'
}
