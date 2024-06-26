import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";
import TherapeuticAreasCarousel from "./TherapeuticAreasCarousel";

const HematologyOncology = () => {
	return (
		<div className="px-4 text-bgPrimary">
			<div className="container mx-auto">
				<div className="mb-9">
					<Breadcrumb
						link1="/expertise"
						title1="Expertise"
						title2="Hematology & Oncology"
					/>
				</div>

				<div className="max-h-[140px] md:max-h-[300px] w-full flex items-center justify-center rounded-lg overflow-hidden mb-6">
					<Image
						src={"/assets/images/expertise/area-hero.jpg"}
						height={300}
						width={1024}
						alt="Expertise"
						className="rounded-lg w-full"
					/>
				</div>

				<p className="text-2xl mb-6"> Hematology & Oncology </p>
			</div>

			<div className="container mx-auto text-bgPrimary">
				<Image
					src="/assets/images/expertise/hematology.jpg"
					height={480}
					width={720}
					alt="Hematology & Oncology"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>
				<div className="pt-4">
					<p className="text-base font-medium mb-10">
						Our experienced staff at KYAMCH-BRS develop and execute studies
						across a full spectrum of solid tumor and hematologic indications
						and therapies. As a specialized Hematology and Oncology CRO, we
						offer a competitive advantage in navigating the evolving landscape
						of drug and biologic clinical development. Our unique approach to
						clinical research has earned us a reputation for effectively
						managing complex cancer patients.
						<br />
						We assist our clients in developing successful strategies for novel
						therapies, competing for high-performing global sites, expediting
						study start-up and recruitment, and navigating the global regulatory
						landscape for accelerated approvals. With our medical leadership and
						trained staff in hematology and oncology, KYAMCH-BRS ensures
						successful conduct of clinical trials. We looking help our clients:
					</p>
					<ul className="list-none pl-0 pb-4">
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Develop successful strategies for even the most novel therapies.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Compete successfully for high-performing global sites.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Expedite study start-up and recruitment.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Navigate the global regulatory landscape to expedite approvals.{" "}
						</li>
					</ul>
					KYAMCH-BRS has the medical leadership in hematology and oncology
					trained staff to successfully conduct clinical trials.
					<br />
					<br />
				</div>

				<TherapeuticAreasCarousel />
			</div>
		</div>
	);
};

export default HematologyOncology;
