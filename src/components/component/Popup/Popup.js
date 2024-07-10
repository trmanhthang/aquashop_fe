import classNames from "classnames/bind";
import style from "./Popup.module.scss";
import {forwardRef} from "react";

const cx = classNames.bind(style);

function Popup ({children, width, backgroundColor, topPosition, leftPosition, rightPosition, bottomPosition}) {

    return (
        <div className={cx('popup')}
             style={{top: topPosition, left: leftPosition, right: rightPosition, bottom: bottomPosition}}
        >

            <ul className={cx('wrapper')} style={{backgroundColor: backgroundColor, width: width}}>
                {children}
            </ul>
        </div>
    )
}

export default Popup;