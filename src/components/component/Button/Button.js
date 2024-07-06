import classNames from "classnames/bind";
import style from './Button.module.scss'
import {Link} from "react-router-dom";

const cx = classNames.bind(style);

function Button({to, href, primary, large, medium, small, children, onClick, lefticon, righticon, ...passProps}) {
    let Comp = 'button';

    const props = {
        to,
        href,
        onClick,
        lefticon,
        righticon,
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
        medium,
        small,
    });

    return (
        <Comp className={classes} {...props}>
            { lefticon && <span className={cx('icon')}>{ lefticon }</span> }
            <span className={cx('title')}>{children}</span>
            { righticon && <span className={cx('icon')}>{ righticon }</span> }
        </Comp>
    )
}

export default Button;