import Swal from "sweetalert2";

const Toast = {
    alert: (status = 'success' || 'warning' || 'error', message, then) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: status,
            title: message
        }).then(() => then);
    }
}

export default Toast;