import classNames from "classnames/bind";
import style from './Button.module.scss'
import {Link} from "react-router-dom";

const cx = classNames.bind(style);

function Button({
                    to,
                    href,
                    primary,
                    large,
                    medium,
                    small,
                    iconOnly,
                    no_background,
                    children,
                    onClick,
                    lefticon,
                    righticon,
                    ...passProps
                }) {
    let Comp = 'button';

    const props = {
        to,
        href,
        onClick,
        lefticon,
        righticon,
        ...passProps,
    }

    const customClasses = {
        primary,
        large,
        medium,
        small,
        iconOnly,
        no_background,
    }

    const classes = cx('wrapper', customClasses);

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (lefticon || righticon && children) {
        delete customClasses.iconOnly;
    }

    return (
        <Comp className={classes} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            {children && <span className={cx('title')}>{children}</span>}
            {righticon && <span className={cx('icon')}>{righticon}</span>}
        </Comp>
    )
}

export default Button;