import { Header } from "~/components/component/Header";
import { Sidebar } from "~/components/component/Sidebar";
import classNames from "classnames/bind";
import style from "./DefaultLayout.module.scss";
import Footer from "~/components/component/Footer";

const cx = classNames.bind(style);

function DefaultLayout({ children}) {
    return(
        <div className={'body'}>
            <Header/>
            <div className={cx("wrapper")}>
                <Sidebar/>
                <div className="content">
                    { children }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DefaultLayout;