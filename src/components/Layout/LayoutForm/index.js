import classNames from "classnames/bind";
import style from './LayoutForm.module.scss'
import images from "~/assets/images";

const cx = classNames.bind(style);

function LayoutForm({children}) {
    return(
        <div className={cx('body')}>
            <div className={cx('container')}>
                <section className={cx('form')}>
                    <div className={cx('form_items')}>
                        <section className={cx('container_image')}>
                            <img src={images.form} alt={'Ảnh minh hoạ'}/>
                        </section>
                    </div>

                    <div className={cx('form_items')}>
                        <section className={cx('container_form')}>
                            {children}
                        </section>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default LayoutForm;