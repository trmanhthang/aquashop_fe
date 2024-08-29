import classNames from "classnames/bind";
import style from "./HeaderDashboard.module.scss"

const cx = classNames.bind(style);

function HeaderDashboard() {
    return(
        <header className={cx("header")}>
            <div className={cx("header_wrap")}>
                <span>Trang chủ</span>
                <div className={cx("wrap")}>
                    <span className={cx("container_avatar")}>
                        <img src={"https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"} alt={"Ảnh đại diện"}/>
                    </span>
                    <span className={cx("username")}>Trương Mạnh Thắng</span>
                </div>
            </div>
        </header>
    )
}

export default HeaderDashboard;