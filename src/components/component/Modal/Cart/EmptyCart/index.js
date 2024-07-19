import classNames from "classnames/bind";
import style from "./EmptyCart.module.scss";
import Button from "~/components/component/Button";
import images from "~/assets/images";

const cx = classNames.bind(style);

function EmptyCart() {
    return(
        <div className={cx('wrapper')}>
            <div className={cx('image_empty-cart')}>
                <img src={images.empty_cart} alt={"Ảnh minh hoạ"}/>
            </div>
            <Button
                to={"/shop"}
                rounded
            >
                Tới cửa hàng
            </Button>
        </div>
    )
}

export default EmptyCart;