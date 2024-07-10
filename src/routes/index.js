import Home from "~/pages/Home/Home";
import Login from "~/pages/Login/Login";
import Signup from "~/pages/Signup/Signup";
import LayoutNoSidebar from "~/components/Layout/LayoutNoSidebar";
import Search from "~/pages/Search/Search";
import DefaultLayout from "~/components/Layout/DefaultLayout";


const publicRoutes = [
    { path: '/', component: Home, layout: LayoutNoSidebar},
    { path: '/login', component: Login, layout: null },
    { path: '/signup', component: Signup, layout: null },
    { path: '/search', component: Search, layout: DefaultLayout },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }