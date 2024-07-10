class PathHistoryService {
    savePathHistory = () => {
        let url = window.location.pathname;
        localStorage.setItem('path', url);
    }

    getPathHistory = () => {
        const path = localStorage.getItem('path');
        if (path) {
            return path;
        }
    }
}

export default new PathHistoryService();