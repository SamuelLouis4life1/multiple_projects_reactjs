import { Routes, Route } from "react-router-dom";

import { USER_ROLES, requireAll } from "./utils/userRoles";
import RequiredAuth from "./utils/requiredAuth";

//#region Public Pages
import Home from "./pages/public/home";
import HomeIndex from "./pages/public/home";
import HomeDetails from "./pages/public/home/detail";
import NotFound from "./pages/public/errors/notFound";
import SignIn from "./pages/public/auth/signIn";
import PasswordReset from "./pages/public/auth/passwordReset";
import ResetPassword from "./pages/public/auth/resetPassword";
import Checkout from "./pages/public/checkout";
import AccessDenied from "./pages/public/errors/accessDenied";
import Products from "./pages/public/products";
import ProductDetail from "./pages/public/products/detail";
import CartPage from "./pages/public/cart";
import OrderPage from "./pages/public/order";
//#endregion

//#region Customer Pages
import Account from "./pages/customer/account";
import AccountEdit from "./pages/customer/account/edit";
import CustomerOrders from "./pages/customer/orders";
import InvoicePage from "./pages/customer/orders/invoice";
//#endregion

//#region Admin Pages
import AdminOrders from './pages/admin/orders';
import AdminProducts from './pages/admin/products';
import AdminAddProduct from './pages/admin/products/add';
import AdminEditProduct from './pages/admin/products/edit';
import AdminPaymentMethodsPage from "./pages/admin/payment";
import AdminUserProfiles from "./pages/admin/users/profiles";
import AdminCustomers from './pages/admin/customers';
import ReportInvoice from './pages/admin/reports/invoice';
//#endregion

//#region Remover - Templates Exemplo
import EmailTemplate from "./pages/temp/email";
import RouteElement from "./components/routeElement";
import AdminUsers from "./pages/admin/users";
//#endregion

//region Multiple Projects
import CalculatorApp from "./pages/public/multipleProjects/calculatorApp"
import WeatherApp from "./pages/public/multipleProjects/weatherApp"
import TodoList from "./pages/public/multipleProjects/todoList"

//#endregion

const PageRoutes = [
	{
		path: "/health/live",
		name: "health-check",
		pageSettings: {
			header: false,
			footer: false,
			breadcrumb: false,
			sidebar: false,
			settingButton: false,
			title: "Health - Ecommerce App",
		},
		element: <span>Ecommerce App is Healthy!</span>,
	},
	{
		path: "",
		name: "home",
		pageSettings: {
			header: true,
			footer: true,
			breadcrumb: true,
			settingButton: true,
			sidebar: false,
			title: "Ecommerce App",
		},
		element: <Home />,
		children: [
			{
				path: "products",
				name: "products.index",
				element: <Products />,
				children: [
					{
						path: ":id",
						name: "products.detail",
						element: <ProductDetail />,
					},
				],
			},
			{
				path: "index",
				name: "home.index",
				element: <HomeIndex />,
				children: [
					{
						path: ":id",
						name: "index.detail",
						element: <HomeDetails />,
					},
				],
			},
			{
				path: "cart",
				name: "cart",
				element: <CartPage />,
			},
			{
				path: "checkout",
				name: "checkout",
				element: <Checkout />,
			},
			{
				path: "order/:id",
				name: "order.detail",
				element: <OrderPage />,
			},
			{
				path: "auth",
				name: "auth",
				pageSettings: {
					header: false,
					footer: false,
					breadcrumb: false,
					sidebar: false,
					title: "Ecommerce App",
				},
				children: [
					{
						path: "signin",
						name: "signin",
						element: <SignIn />,
					},
					{
						path: "passwordreset",
						name: "passwordreset",
						element: <PasswordReset />,
					},
					{
						path: "resetpassword/:token",
						name: "resetpassword",
						element: <ResetPassword />,
					},
				],
			},

			//#region Multiple project Pages
			{
				path: "multiple",
				name: "multiple",
				pageSettings: {
					header: true,
					footer: true,
					breadcrumb: true,
					settingButton: true,
					sidebar: false,
					title: "Multiple project",
				},
				children: [
					{
						path: "calculator",
						name: "calculator",
						element: <CalculatorApp />,
					},
					{
						path: "weather",
						name: "weather",
						element: <WeatherApp />,
					},
					{
						path: "todo-list",
						name: "todolist",
						element: <TodoList />,
					},
				],
			},

			//#region

			//#region Customer Pages
			{
				roles: [USER_ROLES.CUSTOMER],
				path: "account",
				name: "account.index",
				pageSettings: {
					sidebar: true,
				},
				element: <Account />,
				children: [
					{
						path: "edit",
						name: "account.edit",
						element: <AccountEdit />,
					},
					{
						path: "orders",
						name: "account.orders",
						element: <CustomerOrders />,
						children: [
							{
								path: ":id",
								name: "account.orderDetail",
								children: [
									{
										path: "invoice",
										name: "accountOrderInvoice",
										pageSettings: {
											sidebar: false,
											header: false,
											footer: false,
											breadcrumb: false,
											title: "nf - Ecommerce App",
										},
										element: <InvoicePage />
									}
								]
							}
						]
					},
				],
			},
			//#endregion
			//#region Admin Pages
			{
				roles: [USER_ROLES.ADMIN, USER_ROLES.SELLER],
				path: "admin",
				name: "admin.index",
				pageSettings: {
					sidebar: true,
				},
				element: <NotFound />,
				children: [
					{
						path: "orders",
						name: "admin.orders",
						element: <AdminOrders />,
					},
					{
						path: "products",
						name: "admin.products",
						element: <AdminProducts />,
						children: [
							{
								roles: [USER_ROLES.ADMIN],
								path: "add",
								name: "admin.productAdd",
								element: <AdminAddProduct />
							},
							{
								roles: [USER_ROLES.ADMIN],
								path: ":id",
								name: "admin.productEdit",
								element: <AdminEditProduct />
							},
						]
					},
					{
						roles: [USER_ROLES.ADMIN],
						path: "payments",
						name: "admin.payments",
						element: <AdminPaymentMethodsPage />,
					},
					{
						path: "users",
						name: "admin.users",
						roles: [USER_ROLES.ADMIN],
						element: <AdminUsers />,
						children: [
							{
								path: "profiles",
								name: "admin.userProfiles",
								element: <AdminUserProfiles />,
							}
						]
					},
					{
						path: "customers",
						name: "admin.customers",
						element: <AdminCustomers />
					},
					{
						path: "reports/invoices",
						name: "admin.reports.invoices",
						element: <ReportInvoice />
					},
				],
			},
			//#endregion
			// TODO: Remover Exemplo =====>
			{
				path: "MultipleRoles",
				roles: [requireAll([USER_ROLES.ADMIN, USER_ROLES.CUSTOMER])],
				element: <div>MultipleRoles</div>,
			},
			{
				path: "temp/email",
				pageSettings: {
					header: false,
					footer: false,
					breadcrumb: false,
					sidebar: false,
					title: "Ecommerce App",
				},
				element: <EmailTemplate />,
			},
			// <===== TODO: Remover Exemplo
			{
				path: "AccessDenied",
				element: <AccessDenied />,
			},
		],
	},
];

export default function EcommerceRoutes() {
	function mountRoute(
		{ path, element, name, roles, children, pageSettings },
		fatherRouteItems = [],
		fatherPageSettings = {}
	) {
		const settings = { ...fatherPageSettings, ...pageSettings };

		const routeItem = { path, name };
		const routeItems = name
			? [...fatherRouteItems, routeItem]
			: fatherRouteItems;

		const routePath = routeItems.map((x) => x.path).join("/");

		const hasRoles = roles && roles.length > 0;

		if (children) {
			return (
				<Route
					key={routePath}
					path={path}
					element={hasRoles && <RequiredAuth requiredRoles={roles} />}
				>
					{element && (
						<Route
							key={routePath + "/"}
							path=""
							element={
								<RouteElement
									element={element}
									routeItems={routeItems}
									pageSettings={settings}
								/>
							}
						/>
					)}
					{children.map((route) => mountRoute(route, routeItems, settings))}
					<Route key={routePath + "/*"} path="*" element={<NotFound />} />
				</Route>
			);
		}

		if (hasRoles) {
			return (
				<Route key={routePath} element={<RequiredAuth requiredRoles={roles} />}>
					<Route
						path={path}
						element={
							<RouteElement
								element={element}
								routeItems={routeItems}
								pageSettings={settings}
							/>
						}
					/>
				</Route>
			);
		}

		return (
			<Route
				key={routePath}
				path={path}
				element={
					<RouteElement
						element={element}
						routeItems={routeItems}
						pageSettings={settings}
					/>
				}
			/>
		);
	}

	return (
		<Routes>
			{PageRoutes.map((route) => mountRoute(route))}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}