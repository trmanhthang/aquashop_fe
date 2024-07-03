import classNames from "classnames/bind";
import style from "./Logo.module.scss";
import {Link} from "react-router-dom";
import images from "~/assets/images";

const cx = classNames.bind(style);
function Logo() {

    return(
        <div className={cx('container')}>
            <Link to={'/'}>
                <img src={images.logo} alt={'Logo'}/>
            </Link>
        </div>
    )
}

export default Logo;