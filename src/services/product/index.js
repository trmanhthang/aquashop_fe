import {productApi} from "~/api";

const ProductService = {
    getAll : async () => {
        return await productApi.getAllPublic();
    }
}

export default ProductService;