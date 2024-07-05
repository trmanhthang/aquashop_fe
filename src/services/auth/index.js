import authenticationApi from "~/api/authenticationApi";

const login = (values) => {
    const response = authenticationApi.login(values);
    response.then(data => {
        console.log(data);

    }).catch(error => {
        console.log(error)
    })
}

export { login };