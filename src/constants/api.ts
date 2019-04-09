const host = process.env.NODE_ENV === 'production' ? '/h5/' : '/api/'
export const helloWordApi = {
  'helloWord': host + 'helloWord/hello.json'
}
