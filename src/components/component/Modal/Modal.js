import classNames from "classnames/bind";
import style from "./Modal.module.scss";

const cx = classNames.bind(style);

function Modal({ children, closeModal }) {
    return(
        <section className={cx('modal')}>
            <div className={cx('overplay_modal')} onClick={ closeModal }></div>
            { children }
        </section>
    )
}

export default Modal;