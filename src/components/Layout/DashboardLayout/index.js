import classNames from "classnames/bind";
import style from './DashboardLayout.module.scss';
import { HeaderDashboard } from "~/components/component/Header";
import {SidebarDashboard} from "~/components/component/Sidebar";

const cx = classNames.bind(style);
function DashboardLayout({ children }) {
    return(
        <div className={'body'}>
            <SidebarDashboard/>
            <div className={cx("wrapper")}>
                <HeaderDashboard/>
                <div className={cx("content")}>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;