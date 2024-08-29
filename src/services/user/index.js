import userApi from "~/api/userApi";

const UserService = {
    detail: () => {
        userApi.info().then((res) => {
            console.log(res.data);
        });
    },

    info: () => {
        let userInfo = localStorage.getItem("info");
        if (userInfo) {
            return JSON.parse(userInfo);
        } else {
            return null;
        }
    },

    getId: () => {
        let userId = localStorage.getItem("id");
        if (userId) {
            return userId;
        } else {
            return "";
        }
    }
}

export default UserService;