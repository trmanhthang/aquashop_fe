import Header from "~/components/component/Header/Header";
import Footer from "~/components/component/Footer/Footer";
import Sidebar from "~/components/component/Sidebar/Sidebar";
import classNames from "classnames/bind";
import style from "./DefaultLayout.module.scss";

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