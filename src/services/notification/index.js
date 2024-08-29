import {notificationApi} from "~/api";

const NotificationService = {
    getAll: async () => {
        const res = await notificationApi.getAll();
        return res.data;
    },

    setStatus: async (id) => {
        const res = await notificationApi.setStatus(id);
        return res.data;
    },

    delete: async (id) => {
        const res = await notificationApi.delete(id);
        return res.data;
    }
};

export default NotificationService;