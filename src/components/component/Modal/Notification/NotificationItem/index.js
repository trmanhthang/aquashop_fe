import classNames from "classnames/bind";
import style from "./NotificationItem.module.scss";

const cx = classNames.bind(style);

function NotificationItem({ icon, title, content }) {
    return (
        <div className={cx('container_item')}>
            <div className={cx('wrapper')}>
                <div className={cx('icon')}>
                    { icon }
                </div>

                <div className={cx('wrapper_content')}>
                    <h4>{ title }</h4>
                    <p>{ content }</p>
                </div>
            </div>
        </div>
    )
}

export default NotificationItem;