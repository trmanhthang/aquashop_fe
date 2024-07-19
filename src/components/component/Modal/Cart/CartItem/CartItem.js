import classNames from "classnames/bind";
import style from "./CartItem.module.scss";
import Button from "~/components/component/Button";
import {Minus, Plus} from "lucide-react";

const cx = classNames.bind(style);

function CartItem({ id, name, price, quantity, image }) {
    return (
        <div className={cx('container_item')}>
            <div className={cx('wrapper')}>
                <div className={cx('image')}>
                    <img src={'https://wpbingosite.com/wordpress/darion/wp-content/uploads/2018/05/pro-21.jpg'}
                         alt={'Ảnh sản phẩm'}/>
                </div>
                <div className={cx('wrapper_info')}>
                    <h5>{ name }</h5>
                    <div className={cx('wrapper')}>
                        <div className={'row'}>
                            <div className={'col l-4'}>
                                <div className={cx('group_btn')}>
                                    <Button
                                        no_background
                                        small
                                        lefticon={<Minus size={14} strokeWidth={1}/>}
                                    />
                                    <div className={cx('quantity')}>
                                        <input value={ quantity }/>
                                    </div>
                                    <Button
                                        no_background
                                        small
                                        righticon={<Plus size={14} strokeWidth={1}/>}
                                    />
                                </div>
                            </div>

                            <div className={'col l-7'}>
                                <div className={cx('price')}>
                                    <p>{ price }đ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('btn_remove')}>
                        <Button
                            small
                            no_background
                            text_blur
                        >
                            Xoá
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;