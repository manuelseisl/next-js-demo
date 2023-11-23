"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GTMProvider = () => {
	const pathname = usePathname();

	useEffect(() => {
		window.dataLayer.push({
			event: "page_view",
			page: window.location.href
		});
	}, [pathname]);

	return null;
};

export default GTMProvider;
