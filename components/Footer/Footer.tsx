export const Footer = () => {
	return (
		<footer className="fixed bottom-0 w-full">
			<div className="mx-auto flex w-full max-w-[1440px] items-center justify-between p-4 text-label-md md:px-16">
				<span>Sattva`23 Safarnama &copy; 2023</span>
				<ul className="flex space-x-4">
					<li>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://instagram.com/sattva.2023"
						>
							Ig
						</a>
					</li>
					<li>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.facebook.com/sattvafest"
						>
							Fa
						</a>
					</li>
					<li>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.youtube.com/@mpstmessattva1974/streams"
						>
							YT
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};
