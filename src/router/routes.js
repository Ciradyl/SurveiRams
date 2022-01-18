
const routes = [

  {path: '/', name: "login", component: () => import('layouts/AuthenticationLayout.vue'),},
//new routing


{
  path: '/home',
  component: () => import('src/layouts/Main.vue'),
  children: [
    { path: '/home', name: "home", component: () => import('src/pages/PageHome.vue'),},
    { path: '/admin', name: "admin", component: () => import('src/pages/PageHomeAdmin.vue'),},
    { path: '/assignments', name: "assignments", component: () => import('pages/PageAssignments.vue'),},
    { path: '/scheduling', name: "schedule", component: () => import('src/pages/PageScheduling.vue'),},
    { path: '/route', name: "route", component: () => import('src/pages/PageRoute.vue'),},
    { path: '/feedback', name: "feedback", component: () => import('src/pages/PageFeedback.vue'),},
    { path: '/feedbackview', name: "feedbackview", component: () => import('src/pages/PageFeedbackView.vue'),},
    { path: '/guardprofile', name: "guard profile", component: () => import('src/pages/PageGuardProfile.vue'),},    
  ]
},
{
  path: '/patrolmode',
  component: () => import('src/layouts/AssignmentLayout.vue'),
  children: [
    { path: '/patrollingmode', name: "patrollingmode", component: () => import('src/pages/PagePatrollingMode.vue') },  
    { path: '/assignmentdetails', name: "assignmentdetails", component: () => import('src/pages/PageAssignmentDetails.vue') }, 
    { path: '/reporthub', name: "reporthub", component: () => import('src/pages/PageReportHub.vue') },  
    { path: '/patrollingreport', name: "patrollingreport", component: () => import('src/pages/PagePatrollingReport.vue') },  
    { path: '/patrolsummary', name: "patrolsummary", component: () => import('src/pages/PagePatrolSummary.vue') },  
  ]
},
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
