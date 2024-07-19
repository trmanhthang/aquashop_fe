import Index from "~/pages/Home";
import Login from "~/pages/Login";
import Signup from "~/pages/Signup";
import LayoutNoSidebar from "~/components/Layout/LayoutNoSidebar";
import Search from "~/pages/Search";
import DefaultLayout from "~/components/Layout/DefaultLayout";
import ErrorServer from "~/pages/ErrorServer";
import Detail from "~/pages/Detail";
import Test from "~/pages/Test";


const publicRoutes = [
    { path: '/', component: Index, layout: LayoutNoSidebar },
    { path: '/login', component: Login, layout: null },
    { path: '/signup', component: Signup, layout: null },
    { path: '/search', component: Search, layout: DefaultLayout },
    { path: '/error', component: ErrorServer, layout: null },
    { path: '/detail/:id', component: Detail, layout: LayoutNoSidebar },
    { path: '/test', component: Test, layout: null }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }