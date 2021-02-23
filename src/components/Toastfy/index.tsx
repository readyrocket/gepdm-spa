/* eslint-disable semi */
import { toast, ToastOptions } from 'react-toastify';

const ToastProps: ToastOptions = {
	position: `top-right`,
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
};

const showToastfy = (message = ``) => ({
	sucess: () => toast.success(message, {
		...ToastProps,
		toastId: message.slice(1, 5),
	}),
	error: () => toast.error(message, {
		...ToastProps,
		toastId: message.slice(1, 5),
	}),
	warning: () => toast.dark(message, {
		...ToastProps,
		toastId: message.slice(1, 5),
	}),
	dimmiss: () => toast.dismiss()
});

export { showToastfy };
