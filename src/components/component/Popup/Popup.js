import classNames from "classnames/bind";
import style from "./Popup.module.scss";

const cx = classNames.bind(style);

function Popup({children}) {
    return (
        <div className={cx('popup')}>
            <ul className={cx('wrapper')}>
                { children }
            </ul>
        </div>
    )
}

export default Popup;