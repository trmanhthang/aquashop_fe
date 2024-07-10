import classNames from "classnames/bind";
import style from "../Popup.module.scss";
import {Link} from "react-router-dom";

const cx = classNames.bind(style);

function PopupItemData({ key, id, image, name }) {
    return (
        <li key={ key } className={cx('popup_item')}>
            <Link className={cx('link')} to={"/detail? "}>
                <div className={cx('')}>
                    <div className={cx('image')}>
                        <img src={''} alt={'Ảnh sản phẩm'}/>
                    </div>
                    <div className={cx('')}>
                        {name}
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default PopupItemData;