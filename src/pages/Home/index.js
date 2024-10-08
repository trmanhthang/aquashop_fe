import classNames from "classnames/bind";
import style from "./Home.module.scss";
import {useEffect} from "react";
import PathHistoryService from "~/services/path";
import {Card} from "~/components/component/Card";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import Button from "~/components/component/Button";
import {useDispatch, useSelector} from "react-redux";
import ProductService from "~/services/product";
import {switchProducts} from "~/slices/productSlice";

const cx = classNames.bind(style);

function Home() {
    const products = useSelector(state => state.products?.products);
    const page = useSelector(state => state.products?.page);
    const totalPages = useSelector(state => state.products?.totalPages);

    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const data = await ProductService.getAll();

        const initial = {
            products: data?.content,
            totalItem: data?.totalElements,
            currentPage: data?.pageable?.pageNumber,
            itemPerPage: data?.size,
            totalPages: data?.totalPages
        }
        dispatch(switchProducts(initial));
    }
    useEffect(() => {
        PathHistoryService.savePathHistory();

        fetchProducts().then();
    }, [dispatch]);

    return (
        <>
            <section className={cx("slider_introduce")}>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    pagination={{clickable: true, type: "bullets"}}
                    speed={1000}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                >
                    <SwiperSlide>
                        <div className={cx("wrapper_item")}>
                            <img
                                src={"https://wpbingosite.com/wordpress/darion/wp-content/uploads/2024/03/slider-1-1.jpg"}
                                alt={""}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={cx("wrapper_item")}>
                            <img
                                src={"https://wpbingosite.com/wordpress/darion/wp-content/uploads/2024/03/slider-1-1.jpg"}
                                alt={""}/>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={cx("wrapper_item")}>
                            <img
                                src={"https://wpbingosite.com/wordpress/darion/wp-content/uploads/2024/03/slider-1-1.jpg"}
                                alt={""}/>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </section>
            <section className={cx("product_list")}>
                <div className={"grid wide"}>
                    <div className={cx("heading_section_products")}>
                        <h1>New Products</h1>

                        <Button rounded small to={"/"}>View All</Button>
                    </div>
                    <div className={cx("wrapper_products")}>
                        <div className={"row"}>
                            {products.slice(0, 4).map((product, index) => {
                                return (
                                    <div key={index} className={"col l-4"}>
                                        <Card data={product}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className={cx("slider_team")}>
                <div className={cx('wrapper_team')}>
                    <h1>Team</h1>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        speed={1000}
                        loop={true}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false
                        }}
                    >
                        <SwiperSlide>
                            <div className={cx('container_items')}>
                                <div className={cx('slide_avatar')}>
                                    <img src={"https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg"} alt={""}/>
                                </div>
                                <p className={cx('description')}>
                                    Đây là một đoạn flexing về thành viên team shop, hãy flex mô tả gì đó về thành viên
                                    này (kĩ năng, trình độ, sở thích).
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={cx('container_items')}>
                                <div className={cx('slide_avatar')}>
                                    <img src={"https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg"} alt={""}/>
                                </div>
                                <p className={cx('description')}>
                                    Đây là một đoạn flexing về thành viên team shop, hãy flex mô tả gì đó về thành viên
                                    này (kĩ năng, trình độ, sở thích).
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={cx('container_items')}>
                                <div className={cx('slide_avatar')}>
                                    <img src={"https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg"} alt={""}/>
                                </div>
                                <p className={cx('description')}>
                                    Đây là một đoạn flexing về thành viên team shop, hãy flex mô tả gì đó về thành viên
                                    này (kĩ năng, trình độ, sở thích).
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>

    )
}

export default Home;
