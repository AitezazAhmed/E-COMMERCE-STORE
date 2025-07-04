import { create } from "zustand";
import axios from "../lib/axios";
import { toast } from "react-hot-toast";
export const useUserStore = create((set, get) => ({
	user: null,
	loading: false,
	checkingAuth: true,
	logout: async () => {
		try {
			await axios.post("/auth/logout");
			set({ user: null });
		} catch (error) {
			toast.error(error.response?.data?.message || "An error occurred during logout");
		}
	},
	checkAuth: async () => {
		set({ checkingAuth: true });
		try {
			const response = await axios.get("/auth/check-auth");
			set({ user: response.data, checkingAuth: false });
		} catch (error) {
			console.log(error.message);
			set({ checkingAuth: false, user: null });
		}
	},
	signup: async ({ fullName, email, password, confirmPassword }) => {
		set({ loading: true });
		if (password !== confirmPassword) {
			set({ loading: false });
			return toast.error("Passwords do not match");
		}

		try {
			const res = await axios.post("/auth/signup", { fullName, email, password });
			set({ user: res.data, loading: false });
			console.log(res.data)
			toast.success("Account created successfully");

		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.message || "An error occurred");
		}
	},
	login: async (email, password) => {
		set({ loading: true });

		try {
			const res = await axios.post("/auth/login", { email, password });
			set({ user: res.data, loading: false });
			console.log(res.data)
			toast.success("Login successfully");
		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.message || "An error occurred");
		}
	}
	
	
})
	
);