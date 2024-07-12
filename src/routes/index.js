import Index from "~/pages/Home";
import Login from "~/pages/Login/Login";
import Signup from "~/pages/Signup/Signup";
import LayoutNoSidebar from "~/components/Layout/LayoutNoSidebar";
import Search from "~/pages/Search/Search";
import DefaultLayout from "~/components/Layout/DefaultLayout";
import ErrorServer from "~/pages/500";


const publicRoutes = [
    { path: '/', component: Index, layout: LayoutNoSidebar},
    { path: '/login', component: Login, layout: null },
    { path: '/signup', component: Signup, layout: null },
    { path: '/search', component: Search, layout: DefaultLayout },
    { path: '/500', component: ErrorServer, layout: null },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }