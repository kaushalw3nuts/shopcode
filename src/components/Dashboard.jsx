import Image from "next/image";
import { useState } from "react";
import Profilepic from "@/images/profile-icon.webp";

const Navbar = () => {

	const [sidebar, setSidebar] = useState(380);
	const sideHandel = () => {
		setSidebar(sidebar === 380 ? 0 : 380);
	}

	return (
		<>
			<div>
				<aside className="bg-indigo-950 fixed top-0 left-0 h-full transition-all duration-[0.6s] ease-in-out" style={{ width: sidebar }}>
					
				</aside>
				<section className="h-screen transition-all duration-[0.6s] ease-in-out" style={{ marginLeft: sidebar }}>
					<nav className="bg-black py-6 px-6 border-b border-b-zinc-700 border-solid flex items-center justify-between">
						<div className="flex items-center">
							<button className="flex items-center justify-center" onClick={sideHandel}>
								<i className="ri-menu-2-fill text-xl flex h-5 items-center justify-center"></i>
							</button>
							<h1 className="uppercase text-white ml-4 text-lg">Shopcode</h1>
						</div>
						<div className="relative">
							<button className="w-10 flex relative after:content-[''] after:block after:p-[50%] rounded-full overflow-hidden">
								<Image src={Profilepic} alt="icon" width={40} hight={40} className="w-full h-full object-cover absolute left-0 top-0" />
							</button>
							<div className="">
								
							</div>
						</div>
					</nav>
				</section>
			</div>
		</>
	)
}

export default Navbar;