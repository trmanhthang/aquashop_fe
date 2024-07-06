import Home from "~/pages/Home/Home";
import Login from "~/pages/Login/Login";
import Signup from "~/pages/Signup/Signup";


const publicRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: Login, layout: null },
    { path: '/signup', component: Signup, layout: null }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }