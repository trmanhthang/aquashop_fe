import classNames from "classnames/bind";
import style from "./Menu.module.scss";
import {Link} from "react-router-dom";

const cx = classNames.bind(style);

function MenuItem({ route, data, text, inline, fontSize, fontWeight }) {

    const classes = cx('menu_item', {
        inline,
    });

    return(
        <li className={classes} style={{fontSize: fontSize, fontWeight: fontWeight}}>
            <Link className={cx('text')} to={ route }>
                { text && <span>{ text }</span> }
            </Link>
        </li>
    )
}

export default MenuItem;