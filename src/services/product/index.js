import {productApi} from "~/api";

const ProductService = {
    getAll : async () => {
        return await productApi.getAllPublic();
    },

    findById: async (id) => {
        return await productApi.findById(id);
    }
}

export default ProductService;