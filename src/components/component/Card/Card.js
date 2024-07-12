import classNames from "classnames/bind";
import style from "./Card.module.scss";
import {Link} from "react-router-dom";
import {numberWithCommas} from "~/services/number";

const cx = classNames.bind(style);

function Card({ data }) {
    return(
        <Link key={data?.id } className={cx("wrapper_card")} to={`/detail?id=${ data?.id }`}>
            <div className={cx("container_card")}>
                <div className={cx("image")}>
                    <img src={"https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/449216922_434353229574842_6058409291260639770_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=M3jUdLWZZoAQ7kNvgEuTwET&_nc_ht=scontent.fhan3-2.fna&oh=00_AYAcIVN4UGTTvGo2lsZEeFkmk2LoDTaKgL7_EyeHPYt1qw&oe=669417B2"} alt={"Ảnh sản phẩm"}/>
                </div>

                <div className={cx('content_card')}>
                    <h1 className={cx('title')}>
                        { data?.name }
                    </h1>
                    <div className={cx('info')}>
                        <div className={cx('wrapper_info')}>
                            <p>
                                Giá:
                                <span>{ numberWithCommas(parseInt(data?.price)) }đ</span>
                            </p>
                            <span className={cx("seperate")}>-</span>
                            <p>
                                Số lượng:
                                <span>{ data?.quantity }</span>
                            </p>
                        </div>

                        <p>
                          Kích Thước:
                          <span>
                              { data?.length }.{ data?.width }.{ data?.height }
                          </span>
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;