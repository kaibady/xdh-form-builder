const _import = require('../utils/view-import/' + process.env.NODE_ENV)

export default {
  routes: [
    {
      path: '/',
      component: _import('layout'),
      children: [
        {
          path: '',
          component: _import('index')
        },
        {
          path: 'marker/:id',
          component: _import('marker')
        }
      ]
    },
    {
      path: '/test',
      component: _import('test')
    },
    {
      path: '*',
      component: _import('404')
    }
  ]
}
