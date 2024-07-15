import {useSelector} from "react-redux";

function Test() {
    const product = useSelector(state => state?.products?.products)

    return(
        <div>
            { product.map((item, index) => {
                return (<p>{item?.name}</p>);
            })

            }
        </div>
    )
}

export default Test