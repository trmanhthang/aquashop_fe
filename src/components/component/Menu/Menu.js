import classNames from "classnames/bind";
import style from "./Menu.module.scss";

const cx = classNames.bind(style);

function Menu({ equidistant, children }) {

    const classes = cx('menu', {
        equidistant,
    });

    return(
        <div className={cx('wrapper')}>
            <ul className={classes}>
                { children }
            </ul>
        </div>
    )
}

export default Menu;