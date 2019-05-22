module.exports = {
  vuex: false,
  model: {
    path: '/api/user',
    cache: true,
    columns: {
      id: '@guid',
      name: '@cname'
    }
  }
}
