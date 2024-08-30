import classNames from "classnames/bind";
import style from "./ImageDetail.module.scss";
import {X} from "lucide-react";

const cx = classNames.bind(style);

function ImageDetail({url, closeModal}) {
    return (
        <div className={cx("container")}>
            <div className={cx("container_image")}>
                {url &&
                    <img src={url} alt={"Ảnh"}/>
                }
            </div>

            <div className={cx("btn_close")} onClick={closeModal}>
                <X size={16} strokeWidth={3}/>
            </div>
        </div>
    )
}

export default ImageDetail;