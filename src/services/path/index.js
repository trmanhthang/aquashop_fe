

const savePathHistory = () => {
    let url = window.location.pathname;
    localStorage.setItem('path', url);
}

const getPathHistory = () => {
    const path = localStorage.getItem('path');
    if (path) {
        return path;
    }
}

export { savePathHistory, getPathHistory }