import classNames from "classnames/bind";
import style from "../Popup.module.scss";
import { Link } from "react-router-dom";
import images from "~/assets/images";

const cx = classNames.bind(style);

function PopupItemData({ data }) {


    return (
        <li className={cx('popup_item')}>
            <Link className={cx('link')} to={`/detail?id=${ data?.id }`}>
                <div className={cx('wrapper_item')}>
                    <div className={cx('image')}>
                        <img src={ images.form } alt={'Ảnh sản phẩm'}/>
                    </div>
                    <div className={cx('item_title')}>
                        { data?.name }
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default PopupItemData;