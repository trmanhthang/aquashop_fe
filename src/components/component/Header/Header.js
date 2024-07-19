import classNames from "classnames/bind";
import style from "./Header.module.scss";
import Logo from "~/components/component/Logo/Logo";
import {Menu, MenuItem} from "~/components/component/Menu";
import {UserRound, ShoppingCart, LogIn, Upload, Bell} from "lucide-react";
import {FormSearch} from "~/components/component/Form";
import {Popup} from "~/components/component/Popup";
import PopupItemText from "~/components/component/Popup/Item/PopupItemText";
import {useEffect, useState} from "react";
import Button from "~/components/component/Button";
import WebsocketService from "~/utils/websocket";

const cx = classNames.bind(style);

function Header() {
    const [navUser, setNavUser] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [notification, setNotification] = useState({})

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShadow(true);
        } else {
            setShadow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })

    return (
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
                                    <MenuItem inline fontSize={'18px'} fontWeight={600} text={'Trang Chủ'} route={'/'}/>
                                    <MenuItem inline fontSize={'18px'} fontWeight={600} text={'Cửa Hàng'} route={'/'}/>
                                    <MenuItem inline fontSize={'18px'} fontWeight={600} text={'Danh Mục'} route={'/'}/>
                                    <MenuItem inline fontSize={'18px'} fontWeight={600} text={'Sản phẩm'} route={'/'}/>
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
                                                   righticon={<ShoppingCart size={20} color={'#333333'}/>}/>
                                        </div>

                                        <span className={cx('notification_quantity')}>1</span>
                                    </div>

                                    <div className={cx('container_icon')}>
                                        <div className={cx('icon')}>
                                            <Button iconOnly no_background type={'button'}
                                                   righticon={<Bell size={20} color={'#333333'}/>}/>
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
    )
}

export default Header;