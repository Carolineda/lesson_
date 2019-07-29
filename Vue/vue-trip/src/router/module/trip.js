const tripRoutes = [
  {
    path:'/trip',
    name:'Trip',
    component:() => import('@/views/trip/trip'),
    meta:{
      title:'出行'      //meta窗口标题
    },
    children:[
      {
        path:'map',
        name:'Map',
        component:()=> import('@/components/MapLocation/index'),
        meta:{
          title:'地图'
        }
      }
    ]
  }
]

export default tripRoutes