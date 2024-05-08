import {Poppins} from "next/font/google";
import "./globals.scss";
import '../styles/Typography/Typography.scss'
import Head from "next/head";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

export const metadata = {
    title: "Bloggios",
    description: "Concatenating Perceptions",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <Head>
            <meta charSet="utf-8"/>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        </Head>
        <body className={poppins.className}>{children}</body>
        </html>
    );
}
