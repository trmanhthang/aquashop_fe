import classNames from "classnames/bind";
import style from "./Notification.module.scss";
import Button from "~/components/component/Button";
import {X} from "lucide-react";

const cx = classNames.bind(style);

function Notification({ onClick, children }) {
    return(
        <section className={cx('modal_notification')}>
            <div className={cx('header_modal')}>
                <h3>Thông báo</h3>
                <div className={cx('btn_close')}>
                    <Button
                        no_background
                        lefticon={<X size={18}/>}
                        onClick={onClick}
                    />
                </div>
            </div>

            <div className={cx('body_modal')}>
                { children }
            </div>
        </section>
    )
}

export default Notification;