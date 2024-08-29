import {productApi} from "~/api";

const ProductService = {
    getAll : async () => {
        const res = await productApi.getAllPublic();
        return res.data;
    },

    findById: async (id) => {
        const res = await productApi.findById(id);
        return res.data;
    }
}

export default ProductService;