import classNames from "classnames/bind";
import style from "./HeadingForm.module.scss";
import Logo from "~/components/component/Logo/Logo";

const cx = classNames.bind(style);

function HeadingForm(props) {

    return(
        <div className={cx('heading')}>
            <Logo small/>

            <div className={cx('content')}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default HeadingForm;