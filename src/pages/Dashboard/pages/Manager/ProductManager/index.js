import classNames from "classnames/bind";
import style from "./ProductManager.module.scss";
import Button from "~/components/component/Button";
import {ImageDetail, Modal} from "~/components/component/Modal";
import {useState} from "react";

const cx = classNames.bind(style);

function ProductManager() {
    const [flagImageModal, setFlagImageModal] = useState(false);
    const [currentUrlImage, setCurrentUrlImage] = useState("");

    const handleShowImageModal = (url) => {
        setCurrentUrlImage(url);
        handleImageModal();
    }

    const handleImageModal = () => {
        setFlagImageModal(!flagImageModal);
    }

    return (
        <>
            <section className={cx("wrapper")}>
                <div className={cx("wrapper_action")}>

                </div>

                <div className={cx("body")}>
                    <div className={cx("container_btn")}>

                    </div>

                    <table>
                        <thead>
                        <tr style={{backgroundColor: "#78a5e7", color: "#fff"}}>
                            <th>STT</th>
                            <th>Sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                            <th>Trạng thái</th>
                            <th>Tác vụ</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <span>1</span>
                            </td>
                            <td>
                                <div className={cx("wrap_product")}>
                                    <span className={cx("product_image")} onClick={() => handleShowImageModal("https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg")}>
                                        <img
                                            src={"https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"}
                                            alt={"Ảnh sản phẩm"}
                                        />
                                    </span>
                                    <div className={cx("product_info")}>
                                        <span className={cx("product_name")}>Bể bán cạn</span>
                                        <span className={cx("product_size")}>Thông số: 10.20.30</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className={cx("product_quantity")}>10</span>
                            </td>
                            <td>
                                <span className={cx("product_price")}>
                                    10.000đ
                                </span>
                            </td>
                            <td>
                                <div style={{display: "flex", justifyContent: "center"}}>
                                    <span className={cx("product_status", "public")}>
                                        Public
                                    </span>
                                </div>
                            </td>
                            <td style={{width: "26%"}}>
                                <div className={cx("wrap_btn")}>
                                    <span className={cx("container_btn")}>
                                        <Button
                                            small
                                            style={{
                                                backgroundColor: "#67c23a",
                                                padding: "6px 10px",
                                                color: "#fff",
                                                minWidth: "80px"
                                            }}
                                        >
                                            Chi tiết
                                        </Button>
                                    </span>

                                    <span className={cx("container_btn")}>
                                        <Button
                                            small
                                            style={{
                                                backgroundColor: "#409eff",
                                                padding: "6px 10px",
                                                color: "#fff",
                                                minWidth: "80px"
                                            }}
                                        >
                                            Sửa
                                        </Button>
                                    </span>

                                    <span className={cx("container_btn")}>
                                        <Button
                                            small
                                            style={{
                                                backgroundColor: "#f56c6c",
                                                padding: "6px 10px",
                                                color: "#fff",
                                                minWidth: "80px"
                                            }}
                                        >
                                            Xoá
                                        </Button>
                                    </span>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/**
             Modal hiển thị ảnh
             */}
            {flagImageModal &&
                <Modal closeModal={handleImageModal}>
                    <ImageDetail url={currentUrlImage} closeModal={handleImageModal}/>
                </Modal>
            }
        </>
    )
}

export default ProductManager;