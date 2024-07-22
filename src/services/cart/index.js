import cartApi from "~/api/cartApi";

const CartService = {
    getAll: async () => {
        return await cartApi.getAll();
    },
}

export default CartService;