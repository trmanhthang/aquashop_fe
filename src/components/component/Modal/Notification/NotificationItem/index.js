import classNames from "classnames/bind";
import style from "./NotificationItem.module.scss";
import {X} from "lucide-react";

const cx = classNames.bind(style);

function NotificationItem({ data, onMouse, onClick, onClickDelete }) {
    return (
        <div className={cx('container_item', data?.status === "NEW" ? 'picker' : '')} onMouseEnter={ onMouse } onClick={ onClick }>
            <div className={cx('wrapper')}>
                <div className={cx('wrapper_content')}>
                    <h4>{ data?.title }</h4>
                    <p>{ data?.content }</p>
                </div>
            </div>

            <div className={cx('btn_delete')} onClick={ onClickDelete }>
                <X size={12} color={"#888"} />
            </div>
        </div>
    )
}

export default NotificationItem;