import classNames from "classnames/bind";
import style from './Button.module.scss'
import {Link} from "react-router-dom";

const cx = classNames.bind(style);

function Button({to, href, primary, large, children, onClick, ...passProps}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    )
}

export default Button;