import Image from "next/image";
import { useState } from "react";
import Profilepic from "@/images/profile-icon.webp";
import Product from "../Product";

const Dashboard = () => {

	const [sidebar, setSidebar] = useState(380);
	const sideHandel = () => {
		setSidebar(sidebar === 380 ? 0 : 380);
	}

	const [profileMenu, setProfileMenu] = useState(false);
	const profileHandel = () => {
		setProfileMenu(!profileMenu);
	}

	return (
		<>
			<div>
				<aside className="bg-indigo-950 fixed top-0 left-0 h-full transition-all duration-[0.6s] ease-in-out" style={{ width: sidebar }}>
					
				</aside>
				<section className="h-screen transition-all duration-[0.6s] ease-in-out" style={{ marginLeft: sidebar }}>
					<nav className="bg-black py-6 px-6 border-b border-b-zinc-700 border-solid flex items-center justify-between">
						<div className="flex items-center">
							<button className="flex" onClick={sideHandel}>
								<i className="ri-menu-2-fill text-xl flex h-5 items-center justify-center"></i>
							</button>
							<h1 className="uppercase text-white ml-4 text-lg">Shopcode</h1>
						</div>
						<div className="relative">
							<button className="w-10 flex relative after:content-[''] after:block after:p-[50%] rounded-full overflow-hidden" onClick={profileHandel}>
								<Image src={Profilepic} alt="icon" width={40} hight={40} className="w-full h-full object-cover absolute left-0 top-0" />
							</button>
							{ profileMenu && 
								<div className="absolute right-0 top-12 bg-zinc-400 rounded text-center">
									<div className="px-5 py-3 border-b border-b-gray-300">
										<span className="flex justify-center text-[18px] leading-none font-semibold text-white capitalize">Thomas</span>
										<p className="text-[16px] leading-none font-normal lowercase mt-2 text-white">er@gmail.com</p>
									</div>
									<div className="px-5 py-3">
										<button className="flex justify-center items-center w-full bg-red-600 px-3 py-3 rounded text-[16px] text-white leading-none font-medium capitalize transition-all duration-[0.4s] ease-in-out hover:bg-blue-600">
											<i className="ri-logout-box-line flex mr-2"></i>
											Logout
										</button>
									</div>
								</div> 
							}
						</div>
					</nav>
					<Product />
				</section>
			</div>
		</>
	)
}

export default Dashboard;