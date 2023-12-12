import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

export default function useAlert() {
	const { t } = useTranslation("common");
	const mountHtml = (message) => {
		if (Array.isArray(message))
			return message.length === 1
				? `<p>${message[0]}<p>`
				: `<ul style="text-align:left;">${message
						.map((x) => `<li>${x}</li>`)
						.join("")}</ul>`;
		else return `<p>${message}<p>`;
	};

	async function fireRequestError(error, title = null) {
		let message = "";
		if (error.response?.data) {
			const errors = error.response.data.errors;
			message = errors?.map((err) => err.message);
		} else {
			message = t("Unexpected error");
		}
		return await Swal.fire({
			title: title ? title : t("Error"),
			html: mountHtml(message),
			icon: "error",
			confirmButtonText: "Ok",
		});
	}

	async function fireSuccess(message, title = null) {
		return await Swal.fire({
			title: title ? title : t("Success"),
			html: mountHtml(message),
			icon: "success",
			confirmButtonText: "Ok",
		});
	}

	async function fireError(message, title = null) {
		return await Swal.fire({
			html: mountHtml(message),
			title: title ? title : t("Error"),
			icon: "error",
			confirmButtonText: "Ok",
		});
	}

	return {
		fireRequestError,
		fireSuccess,
		fireError,
	};
}