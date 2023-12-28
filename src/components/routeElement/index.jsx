import { Suspense, useContext, useEffect } from "react";
import { PageSettingsContext } from "../../context/PageContext";
import Fallback from "../../pages/public/fallback";


export default function RouteElement({
	element,
	routeItems,
	pageSettings={
        breadcrumb: true,
        footer: true,
        header: true,
        sidebar: false,
		settingButton: true,
        title: "Multiple Projects"
    }
}) {
	const pageCtx = useContext(PageSettingsContext);
	useEffect(() => {
		pageCtx.setRouteItems(routeItems);
		pageCtx.setPageBreadcrumb(pageSettings.breadcrumb);
		pageCtx.setPageHeader(pageSettings.header);
		pageCtx.setPageFooter(pageSettings.footer);
		pageCtx.setpageSettingButton(pageSettings.settingButton);
		pageCtx.setPageSidebar(pageSettings.sidebar);
		document.title = pageSettings.title;
		return () => {
			pageCtx.setRouteItems([]);
			pageCtx.setPageBreadcrumb(true);
			pageCtx.setPageHeader(true);
			pageCtx.setPageFooter(true);
			pageCtx.setpageSettingButton(true);
			pageCtx.setPageSidebar(false);
			document.title = "Multiple Projects";
		}
	}, [pageCtx, pageSettings, routeItems]);

	return (
		<Suspense fallback={<Fallback />}>
				{element}
		</Suspense>
	);
}