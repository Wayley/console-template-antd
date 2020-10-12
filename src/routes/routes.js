const routes = [
  {
    path:'/',
    component: '../layouts/BlankLayout',
    routes:[
      {
        path:'/user',
        component: '../layouts/UserLayout',
        routes:[
          {
            path: '/user',
            redirect: '/user/login',
          },
          {
            name:'login',
            path:'/user/login',
            component: '../pages/login',
          },
          {
            name:'reset',
            path:'/user/reset',
            component: '../pages/reset',
          }
        ]
      }
    ]
  }
]

export default routes
