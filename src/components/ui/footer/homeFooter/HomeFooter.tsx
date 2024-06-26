"use client";

import OurAchievements from "./ourAchievement/OurAchievements";
import Footer from "./Footer";
import WhoWeAre from "./WhoWeAre";
import { usePathname } from "next/navigation";

const HomeFooter = () => {
	const pathName = usePathname().toString();
	return (
		<div className=" ">
			{(pathName === "/" || pathName === "/test-mahfuz") && (
				<>
					<OurAchievements />
					<WhoWeAre />
				</>
			)}

			<Footer />
		</div>
	);
};

export default HomeFooter;
// "use client";

// import Image from "next/image";

// const HomeFooter = () => {
// 	return (
// 		<div className="relative flex items-center justify-center overflow-hidden h-screen">
// 			<Image
// 				src={`/assets/images/home/KYAMCH-BRS.png`}
// 				width={1920}
// 				height={1080}
// 				alt="KYAMCH-BRS"
// 				className="h-screen w-full object-cover"
// 			/>

// 			<div className="absolute inset-0  flex  items-center justify-center h-screen">
// 				<div className=" text-white max-w-[1024px]">
// 					<div className="uppercase font-bold">
// 						<p className="text-4xl mb-8 text-left p-4">
// 							KYAMCH <br />
// 							BIO-RESEARCH <br /> SERVICES
// 						</p>

// 						<p className="text-justify p-4">
// 							Khwaja Yunus Ali Bioresearch Services (KYAMCH-BRS) is (one of the) the
// 							oldest and pioneer contract research organization in Bangladesh.
// 							We are specialized in clinical trials. KYAMCH-BRS is a
// 							therapeutically-focused, scientifically-driven CRO.
// 							Highly-accomplished and industry-renowned medical leadership.
// 							Dedicated screening area. 106 beds for volunteer separated in 4
// 							different unit. Clinical trial facility over 40,000 sq. ft. KYAMCH-BRS
// 							has capabilities of phase I-III clinical trials. Specialized in
// 							bioequivalence study. Two separate ICU.
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default HomeFooter;
