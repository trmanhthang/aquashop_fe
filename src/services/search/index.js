import {searchApi} from "~/api";

const searchPublic = async (data, navigate) => {
    let products;
    const response = searchApi.searchPublic(data)
    await response.then((data) => {
        console.log(data);
        products = data;
    }).catch((error) => {
        switch (error.response.status) {
            case 401:
                console.log("Error: 401");
                navigate("/login");
                break;
        }
    })
    return products;
}

export { searchPublic };