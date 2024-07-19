import classNames from "classnames/bind";
import style from "./Header.module.scss";
import Logo from "~/components/component/Logo/Logo";
import {Menu, MenuItem} from "~/components/component/Menu";
import {UserRound, LogIn, Upload, Bell, ShoppingBag} from "lucide-react";
import {FormSearch} from "~/components/component/Form";
import {Popup} from "~/components/component/Popup";
import PopupItemText from "~/components/component/Popup/Item/PopupItemText";
import {useEffect, useState} from "react";
import Button from "~/components/component/Button";
import {Modal} from "~/components/component/Modal";
import Cart from "~/components/component/Modal/Cart/Cart";
import {useSelector} from "react-redux";
import {Notification, NotificationItem} from "~/components/component/Modal/Notification";
import CartItem from "~/components/component/Modal/Cart/CartItem/CartItem";

const cx = classNames.bind(style);

function Header() {
    const cart = useSelector(state => state.cart.products)
    const [navUser, setNavUser] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [notification, setNotification] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShadow(true);
        } else {
            setShadow(false);
        }
    }

    const handleModalCart = () => {
        setShowCart(!showCart);
    }

    const handleModalNotification = () => {
        setShowNotification(!showNotification)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })

    return (
        <>
            <header className={cx('header', shadow ? 'shadow' : "")}>
                <div className={'grid wide'}>
                    <div className={cx('wrapper')}>
                        <div className={'row'}>
                            <div className={'col l-2'}>
                                <Logo medium/>
                            </div>

                            <div className={'col l-6'}>
                                <div className={cx('container_element')}>
                                    <Menu equidistant>
                                        <MenuItem inline fontSize={'18px'} fontWeight={600} text={'Trang Chủ'}
                                                  route={'/'}/>
                                        <MenuItem inline fontSize={'18px'} fontWeight={600} text={'Cửa Hàng'}
                                                  route={'/'}/>
                                        <MenuItem inline fontSize={'18px'} fontWeight={600} text={'Danh Mục'}
                                                  route={'/'}/>
                                        <MenuItem inline fontSize={'18px'} fontWeight={600} text={'Sản phẩm'}
                                                  route={'/'}/>
                                        <MenuItem inline fontSize={'18px'} fontWeight={600} text={'Blog'} route={'/'}/>
                                    </Menu>
                                </div>
                            </div>

                            <div className={'col l-4'}>
                                <div className={cx('container_element')}>
                                    <div className={cx('wrapper_nav')}>
                                        <div className={cx('container_icon')}>
                                            <FormSearch/>
                                        </div>

                                        <div className={cx('container_icon')}>
                                            <div className={cx('icon')}>
                                                <Button iconOnly no_background type={'button'}
                                                        righticon={<UserRound size={20} color={'#333333'}/>}
                                                        onClick={() => setNavUser(!navUser)}
                                                />
                                            </div>

                                            {navUser &&
                                                <Popup width={"200px"} backgroundColor={"#fff"} rightPosition={"-100px"}
                                                       hidden={navUser}>
                                                    <PopupItemText leftIcon={<LogIn size={16} color={"#333333"}/>}
                                                                   to={"/login"} title={"Đăng nhập"}/>
                                                    <PopupItemText leftIcon={<Upload size={16} color={"#333333"}/>}
                                                                   to={"/signup"} title={"Đăng ký"}/>
                                                </Popup>
                                            }
                                        </div>

                                        <div className={cx('container_icon')}>
                                            <div className={cx('icon')}>
                                                <Button iconOnly no_background type={'button'}
                                                        righticon={<ShoppingBag size={20} color={'#333333'}
                                                                                onClick={handleModalCart}/>}/>
                                            </div>

                                            <span className={cx('notification_quantity')}>1</span>
                                        </div>

                                        <div className={cx('container_icon')}>
                                            <div className={cx('icon')}>
                                                <Button iconOnly no_background type={'button'}
                                                        righticon={<Bell size={20} color={'#333333'}/>}
                                                        onClick={handleModalNotification}/>
                                            </div>

                                            <div className={cx('notification_active')}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {showCart &&
                <Modal onClick={handleModalCart}>
                    <Cart onClick={handleModalCart}>
                        { cart.map(item => {
                            return(<CartItem/>);
                        })}
                    </Cart>
                </Modal>
            }

            {showNotification &&
                <Modal onClick={handleModalNotification}>
                    <Notification onClick={handleModalNotification}>
                        { notification.map(item => {
                            return (<NotificationItem />);
                        })}
                    </Notification>
                </Modal>
            }
        </>
    )
}

export default Header;