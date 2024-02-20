import Script from "next/script";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<Script
					id="google-tag-manager"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
					window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied'
  });

    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WDH54DJD');
  `
					}}
				/>
			</head>
			<body>
				{children}
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-WDH54DJD"
						height="0"
						width="0"
						style="display:none;visibility:hidden"
					></iframe>
				</noscript>
			</body>
		</html>
	);
}
