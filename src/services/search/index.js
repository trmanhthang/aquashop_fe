import {searchApi} from "~/api";
import AuthenticationService from "~/services/auth";

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
                AuthenticationService.refresh(navigate);
                navigate("/login");
                break;
            case 403:
                console.log("Error: 401");
                AuthenticationService.refresh(navigate);
                navigate("/login");
                break;
        }
    })
    return products;
}

export { searchPublic };