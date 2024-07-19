import classNames from "classnames/bind";
import style from "./Footer.module.scss";
import Logo from "~/components/component/Logo/Logo";
import Button from "~/components/component/Button";
import {Facebook, Instagram, MapPin, Phone} from "lucide-react";
import {Formik} from "formik";
import {FormContact} from "~/components/component/Form";

const cx = classNames.bind(style);

function Footer() {
    return (
        <footer>
            <div className={cx('footer_wrapper')}>
                <div className={cx('footer_content')}>
                    <div className={'grid wide'}>
                        <div className={cx('wrapper_content')}>
                            <div className={'row'}>
                                <div className={'col l-3'}>
                                    <div className={cx('wrapper')}>
                                        <div className={cx('logo')}>
                                            <Logo/>
                                        </div>

                                        <div className={cx('socials')}>
                                            <div className={cx('socials_container')}>
                                                <Button href={'#'} iconOnly no_background lefticon={<Facebook color={"#333"}/>}/>
                                            </div>

                                            <div className={cx('socials_container')}>
                                                <Button href={'#'} iconOnly no_background lefticon={<Instagram color={"#333"}/>}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={'col l-4'}>
                                    <div className={cx('wrapper')}>
                                        <div className={cx('content_info')}>
                                            <div className={cx('info_icon')}>
                                                <MapPin size={24}/>
                                            </div>
                                            <p>Royal Botanic Gardens, Kew, Richmond, London TW9 3AB, United Kingdom</p>
                                        </div>
                                        <div className={cx('content_info')}>
                                            <div className={cx('info_icon')}>
                                                <Phone size={24}/>
                                            </div>
                                            <p>Royal Botanic Gardens, Kew, Richmond, London TW9 3AB, United Kingdom</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={'col l-5'}>
                                    <div className={cx('wrapper')}>
                                        <h1 className={cx('contact_heading')}>Liên hệ qua email</h1>

                                        <FormContact />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('footer_sign')}>
                        <div className={'grid wide'}>
                            <div className={cx('wrapper_sign')}>
                                <p className={cx('sign')}>
                                    Copyright © 2024. All Right Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;