import {Link} from "react-router-dom";
import classNames from "classnames/bind";
import style from "../Popup.module.scss";

const cx = classNames.bind(style);

function PopupItemText({ title, leftIcon, rightIcon, to }) {
    return(
        <li className={cx('popup_item-text')}>
            <Link className={cx('item_link')} to={ to }>
                { leftIcon && <span className={cx('icon')}>{ leftIcon }</span>}
                <span className={cx('title')}>{title}</span>
                { rightIcon && <span className={cx('icon')}>{ rightIcon }</span>}
            </Link>
        </li>
    )
}

export default PopupItemText;