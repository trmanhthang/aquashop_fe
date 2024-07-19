import classNames from "classnames/bind";
import style from "./Detail.module.scss";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ProductService from "~/services/product";
import Button from "~/components/component/Button";
import {Minus, Plus} from "lucide-react";
import {numberWithCommas} from "~/services/number";
import {Modal, Review} from "~/components/component/Modal";

const cx = classNames.bind(style);

function Detail() {
    const param = useParams();
    const initialStateProduct = {
        name: '',
        image: '',
        price: 0,
        description: '',
    }

    const [product, setProduct] = useState(initialStateProduct);
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false);

    const [messages, setMessages] = useState([]);

    const increaseQuantity = () => {
        console.log(quantity)
        setQuantity(quantity + 1);
    }

    const reduceQuantity = () => {
        if (quantity !== 1) {

            setQuantity(quantity - 1);
        }
    }

    const showHideModal = () => {
        setShowModal(!showModal);
    }

    useEffect(() => {
        const response = ProductService.findById(param.id);
        response
            .then(res => {
                setProduct(res.data);
            })
            .catch(error => {
                console.log(error)
            })

        // WebSocketService.connect(() => {
        //     WebSocketService.subscribe('/topic/messages', message => {
        //         setMessages(prevMessages => [...prevMessages, message]);
        //     });
        // });
        //
        // return () => {
        //     WebSocketService.disconnect();
        // };
    }, [param.id]);

    return (
        <>
            <section className={cx('detail_product')}>
                <div className={'grid wide'}>
                    <div className={'row'}>
                        <div className={'col l-7'}>
                            <div className={cx('container_image')}>
                                <div className={cx('')}>

                                </div>
                                <div className={cx('image_main')}>
                                    <img src={''} alt={'Ảnh sản phẩm'}/>
                                </div>
                            </div>
                        </div>

                        <div className={'col l-5'}>
                            <div className={cx('container_info')}>
                                <div className={cx('header_info')}>
                                    <h1 className={cx('header_title')}>
                                        {product.name}
                                    </h1>
                                    <p className={cx('header_price')}>{numberWithCommas(parseInt(product.price))}đ</p>
                                </div>
                                <div className={cx('product_service')}>
                                    <div className={'row'}>
                                        <div className={'col l-4'}>
                                            <div className={cx('container_select')}>
                                                <div className={cx('group_btn')}>
                                                    <Button
                                                        no_background
                                                        lefticon={<Minus strokeWidth={1}/>}
                                                        onClick={reduceQuantity}
                                                    />
                                                    <div className={cx('quantity')}>
                                                        <input defaultValue={quantity} onChange={event => setQuantity(parseInt(event.target.value))}/>
                                                    </div>
                                                    <Button
                                                        no_background
                                                        righticon={<Plus strokeWidth={1}/>}
                                                        onClick={increaseQuantity}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('col l-8')}>
                                            <div className={cx('container_btn')}>
                                                <Button
                                                    large
                                                    rounded
                                                    no_background
                                                >
                                                    Thêm vào giỏ hàng
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('container_btn')}>
                                    <Button
                                        large
                                        rounded
                                        no_background
                                    >
                                        Đặt Hàng
                                    </Button>
                                </div>

                                <div className={cx('container_desc')}>
                                    <span>Mô tả: </span>
                                    <div className={cx('desc_content')}>
                                        {product.description}
                                    </div>
                                </div>
                                <div className={cx('container_navigate')}>
                                    <div className={cx('wrapper_categories')}>
                                        <span>Danh mục: </span>
                                        <div className={cx('categories')}>
                                            <span className={cx('categories_item')}>

                                            </span>
                                        </div>
                                    </div>

                                    <div className={cx('wrapper_contacts')}>
                                        <span>Liên hệ: </span>
                                        <div className={cx('contacts')}>
                                            <span className={cx('contacts_item')}>

                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cx('reviews_product')}>
                <div className={'grid wide'}>
                    <div className={cx('wrapper_reviews')}>
                        <h1 className={cx('title_reviews')}>
                            Đánh giá (1)
                        </h1>
                        <div className={cx('show_reviews')}>

                            {/* Review Items */}
                            <div className={cx('reviews_items')}>
                                <div className={cx('reviewer_info')}>
                                    <div className={cx('reviewer_avatar')}>
                                        <img
                                            src={'https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg'}
                                            alt={'Ảnh đại diện'}/>
                                    </div>
                                    <div className={cx('reviewer_detail')}>
                                        <h1 className={cx('reviewer_name')}>Wpbingo</h1>
                                        <span className={cx('review_time')}>November 6, 2020</span>
                                    </div>
                                </div>
                                <div className={cx('review_content')}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec
                                        est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare
                                        lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus
                                        eu, suscipit id nulla.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button
                                no_background
                                rounded
                                onClick={showHideModal}
                            >
                                Viết đánh giá
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            {showModal &&
                <Modal onClick={showHideModal}>
                    <Review onClick={showHideModal} name={product.name} id={param.id}/>
                </Modal>
            }
        </>
    )
}

export default Detail;