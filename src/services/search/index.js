import {productApi} from "~/api";

const SearchService = {
    searchPublic: async (data) => {
        const response = await productApi.searchPublic(data);
        return response.data;
    }
}

export default SearchService;