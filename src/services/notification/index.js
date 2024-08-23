import {notificationApi} from "~/api";

const NotificationService = {
    getAll: async () => {
        return await notificationApi.getAll();
    },

    setStatus: async (id) => {
        const res = await notificationApi.setStatus(id);
        return res.data;
    }
};

export default NotificationService;