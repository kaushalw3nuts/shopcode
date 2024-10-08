

const Navbar = () => {
	return (
		<>
			<div>
				<aside className="w-[380px] bg-indigo-950 fixed top-0 left-0 h-full">
					
				</aside>
				<section className="h-screen" style={{ marginLeft: 380 }}>
					<nav className="bg-black py-4 px-6 border-b border-b-zinc-700 border-solid">
						<div className="flex items-center">
							<button className="flex items-center justify-center">
								<i className="ri-menu-2-fill text-xl flex h-5 items-center justify-center"></i>
							</button>
							<h1 className="uppercase text-white ml-3 text-lg">Shopcode</h1>
						</div>
					</nav>
				</section>
			</div>
		</>
	)
}

export default Navbar;