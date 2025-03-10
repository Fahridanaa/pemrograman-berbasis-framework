import React from "react";
import Link from "next/link";

const HomePages = () => {
	return (
		<div>
			<h1>Selamat Datang Di Website Saya!</h1>
			<p>Ini adalah halaman utama.</p>
			<Link href="/about"> Tentang Kami</Link>
		</div>
	);
};

export default HomePages;
