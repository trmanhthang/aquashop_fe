import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Signup from "~/pages/Signup";
import NoSidebarLayout from "~/components/Layout/NoSidebarLayout";
import Search from "~/pages/Search";
import DefaultLayout from "~/components/Layout/DefaultLayout";
import ErrorServer from "~/pages/ErrorServer";
import Detail from "~/pages/Detail";
import Test from "~/pages/Test";
import {AccountManager, HomeDashboard, ProductManager} from "~/pages/Dashboard";
import DashboardLayout from "~/components/Layout/DashboardLayout";

const publicRoutes = [
    { path: '/', component: Home, layout: NoSidebarLayout },
    { path: '/login', component: Login, layout: null },
    { path: '/signup', component: Signup, layout: null },
    { path: '/search', component: Search, layout: DefaultLayout },
    { path: '/error', component: ErrorServer, layout: null },
    { path: '/detail/:id', component: Detail, layout: NoSidebarLayout },
    { path: '/test', component: Test, layout: null },
    { path: '/dashboard', component: HomeDashboard, layout: DashboardLayout },
    { path: '/dashboard/manager/product', component: ProductManager, layout: DashboardLayout },
    { path: '/dashboard/manager/account', component: AccountManager, layout: DashboardLayout },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }