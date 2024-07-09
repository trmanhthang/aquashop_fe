import classNames from "classnames/bind";
import style from "./Menu.module.scss";
import {Link} from "react-router-dom";

const cx = classNames.bind(style);

function MenuItem({ route, data, text, inline }) {

    const classes = cx('menu_item', {
        inline,
    });

    return(
        <li className={classes}>
            <Link className={cx('text')} to={ route }>
                { text && <span>{ text }</span> }
            </Link>
        </li>
    )
}

export default MenuItem;