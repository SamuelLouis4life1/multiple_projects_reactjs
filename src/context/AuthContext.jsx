import Cookies from "js-cookie";
import * as jwt_decode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { USER_ROLES, verifyRoles } from "../utils/userRoles";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const token = Cookies.get("token");
		const userJson = Cookies.get("user");
		if (token && userJson) setUser(JSON.parse(userJson));
		setIsLoading(false);
	}, []);

	const signIn = async (user, token, expiresIn) => {
		setIsLoading(true);
		let baseResponse;
		try {
			Cookies.set("token", token, { expires: expiresIn });

			const roles = getRoles(token);

			const userObj = { ...user, roles };
			Cookies.set("user", JSON.stringify(userObj), { expires: expiresIn });
			setUser(userObj);
		} catch (error) {
			console.error(error);
			throw new Error("Oooops!");
		} finally {
			setIsLoading(false);
		}

		return baseResponse;
	};

	const getRoles = (token) => {
        const tokenDecoded = jwt_decode(token);
        return typeof tokenDecoded.roles === "string"
            ? [tokenDecoded.roles]
            : tokenDecoded.roles;
	};

	const signOut = () => {
		setUser(null);
		Cookies.remove("token");
		Cookies.remove("user");
	};

	const isAuthenticated = user && Cookies.get("token");

	const hasRoles = (roles) => {
		return verifyRoles(roles, user?.roles ?? "");
	};

	const getUserAreaPath = () => {
		if (!user) return "/multiple_projects_reactjs";
		if (hasRoles(USER_ROLES.ADMIN)) return "/admin";
		if (hasRoles(USER_ROLES.SELLER)) return "/admin";
		if (hasRoles(USER_ROLES.USER)) return "/account";
		return "/multiple_projects_reactjs";
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				signIn,
				signOut,
				isAuthenticated,
				isLoading,
				hasRoles,
				getUserAreaPath,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}