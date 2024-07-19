import classNames from "classnames/bind";
import style from "./Cart.module.scss";
import {X} from "lucide-react";
import Button from "~/components/component/Button";
import EmptyCart from "~/components/component/Modal/Cart/EmptyCart";

const cx = classNames.bind(style);

function Cart({ onClick, children }) {
    return(
        <section className={cx('modal_cart')}>
            <div className={cx('header_modal')}>
                <h3>Giỏ hàng</h3>
                <div className={cx('btn_close')}>
                    <Button
                        no_background
                        lefticon={<X size={18}/>}
                        onClick={onClick}
                    />
                </div>
            </div>

            <div className={cx('body_modal')}>
                { children ? children : <EmptyCart />}
            </div>
        </section>
    )
}

export default Cart;