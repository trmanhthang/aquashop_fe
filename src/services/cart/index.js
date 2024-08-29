import cartApi from "~/api/cartApi";

const CartService = {
    getAll: async () => {
        const res = await cartApi.getAll();
        return res.data;
    },
}

export default CartService;