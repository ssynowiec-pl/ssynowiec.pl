const currentYear = new Date().getFullYear();

const Home = () => {
	return (
		<div className="flex h-svh flex-col">
			<main className="flex flex-1 items-center justify-center">
				<h1 className="text-3xl">Stanisław Synowiec | ssynowiec.pl</h1>
			</main>
			<footer className="flex justify-center">
				<p>&copy; {currentYear} ssynowiec.pl. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default Home;
