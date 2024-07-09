import classNames from "classnames/bind";
import style from "./Header.module.scss";
import Logo from "~/components/component/Logo/Logo";
import {Menu, MenuItem} from "~/components/component/Menu";
import Button from "~/components/component/Button/Button";
import { Search } from "lucide-react";
import {FormSearch} from "~/components/component/Form";

const cx = classNames.bind(style);

function Header() {
    return(
        <header className={cx('header')}>
            <div className={'grid wide'}>
                <div className={cx('wrapper')}>
                    <div className={'row'}>
                        <div className={'col l-3'}>
                            <Logo medium />
                        </div>

                        <div className={'col l-6'}>
                            <Menu equidistant>
                                <MenuItem inline text={'Trang Chủ'} route={'/'}/>
                                <MenuItem inline text={'Cửa Hàng'} route={'/'}/>
                                <MenuItem inline text={'Danh Mục'} route={'/'}/>
                                <MenuItem inline text={'Sản phẩm'} route={'/'}/>
                                <MenuItem inline text={'Blog'} route={'/'}/>
                            </Menu>
                        </div>

                        <div className={'col l-3'}>
                            <div className={cx('container_form')}>
                                <FormSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;