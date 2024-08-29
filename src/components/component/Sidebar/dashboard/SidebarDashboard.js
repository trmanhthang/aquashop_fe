import classNames from "classnames/bind";
import style from "./SidebarDashboard.module.scss";
import images from "~/assets/images";
import {ChevronDown, ClipboardList, ContactRound} from "lucide-react";
import {Link} from "react-router-dom";
import {useState} from "react";

const cx = classNames.bind(style);

function SidebarDashboard() {
    const basePath = "/dashboard";
    const [currentIndexMenu, setCurrentIndexMenu] = useState(undefined);
    const [currentIndexMenuChild, setCurrentIndexMenuChild] = useState(undefined);
    const [countItemMenu, setCountItemMenu] = useState(0);
    const menuDashboard = [
        {
            icon: <ClipboardList size={20} color="#575757" strokeWidth={3} />,
            title: "Quản lý sản phẩm",
            menuChildren: [
                {
                    title: "Danh sách sản phẩm",
                    path: basePath + "/manager/product"
                }
            ]
        },
        {
            icon: <ContactRound size={20} color="#575757" strokeWidth={3} />,
            title: "Quản lý tài khoản",
            menuChildren: [
                {
                    title: "Danh sách tài khoản",
                    path: basePath + "/manager/account"
                }
            ]
        }
    ];

    const handleDropDown = (index) => {
        let menuChild = menuDashboard[index];
        if(currentIndexMenu !== index) {
            setCurrentIndexMenu(index);
            setCountItemMenu(menuChild.menuChildren.length * 56);
        } else {
            setCurrentIndexMenu(undefined);
        }
    }

    return (
        <section className={cx("sidebar")}>
            <div className={cx("heading_sidebar")}>
                <span className={cx("logo")}>
                    <img src={images.logo} alt={"Ảnh đại diện"}/>
                </span>
                <span className={cx("name_store")}>
                    Ngọc AquaDesign
                </span>
            </div>
            <nav>
                {menuDashboard.map((item, index) => {
                    return(
                        <div key={index} className={cx("wrap_nav")} onClick={() => handleDropDown(index)}>
                            <div
                                className={cx("nav_item")}
                                style={currentIndexMenu === index ? {backgroundColor: "#888"} : {}}
                            >
                                <div className={cx("wrapper")}>
                                    <span className={cx("nav_icon")}>
                                        {item.icon}
                                    </span>
                                    <span className={cx("nav_title")}>
                                        {item.title}
                                    </span>
                                </div>
                                <span
                                    className={cx("icon_down")}
                                    style={currentIndexMenu === index ? { rotate: '180deg' } : {}}
                                >
                                    <ChevronDown size={18} strokeWidth={3} color={"#474747"}/>
                                </span>
                            </div>

                            <div
                                className={cx("wrap_nav_children")}
                                style={currentIndexMenu === index ? {height: `${countItemMenu}px`} : {}}
                            >
                                {item.menuChildren.map((item, index) => {
                                    return(
                                        <Link key={index} className={cx("nav_item_children")} to={item.path}>
                                            <span className={cx("nav_title title_children")}>
                                                {item.title}
                                            </span>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </nav>
        </section>
    )
}

export default SidebarDashboard;