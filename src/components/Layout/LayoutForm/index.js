import classNames from "classnames/bind";
import style from './LayoutForm.module.scss'
import images from "~/assets/images";

const cx = classNames.bind(style);

function LayoutForm({children}) {
    return(
        <div className={cx('body')}>
            <div className={'grid wide'}>
                <div className={cx('container')}>
                    <section className={cx('form')}>
                        <div className={'row'}>
                            <div className={'col l-6'}>
                                <section className={cx('container_image')}>
                                    <img src={images.form} alt={'image'}/>
                                </section>
                            </div>

                            <div className={'col l-6'}>
                                <section className={cx('container_form')}>
                                    {children}
                                </section>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default LayoutForm;