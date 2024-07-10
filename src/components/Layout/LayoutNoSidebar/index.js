import Header from "~/components/component/Header/Header";
import Footer from "~/components/component/Footer/Footer";
import classNames from "classnames/bind";
import style from "./LayoutNoSideBar.module.scss";

const cx = classNames.bind(style);

function LayoutNoSidebar({ children }) {
    return (
        <div className={"body"}>
            <Header/>

            <div className={cx("wrapper")}>
                <div className="content">
                    { children }
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default LayoutNoSidebar;