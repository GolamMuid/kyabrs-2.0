import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";
import SolutionSlider from "../SolutionSlider";

const ClinicalData = () => {
	return (
		<div className=" px-4 text-bgPrimary">
			<div className="container mx-auto">
				<div className="mb-9">
					<Breadcrumb
						link1="/solutions"
						title1="Solutions"
						title2="Clinical Data Management"
					/>
				</div>

				<div className="max-h-[140px] md:max-h-[300px] w-full flex items-center justify-center rounded-lg overflow-hidden mb-6">
					<Image
						src={"/assets/images/solutions/clinical-service/hero.jpg"}
						height={400}
						width={1280}
						alt="Laboratory Services"
						className="rounded-lg w-full"
					/>
				</div>

				<p className="text-2xl mb-6"> Clinical Data Management </p>
			</div>

			<div className="container mx-auto text-bgPrimary">
				<Image
					src="/assets/images/solutions/clinical data.jpg"
					height={480}
					width={720}
					alt="feasibility study"
					className="h-auto w-auto mx-auto rounded-lg mb-10"
				/>

				<div className="text-justify">
					<p className="">
						At KYAMCH-BRS, we deliver high-quality data management and
						biostatistics services, ensuring confidence in your data throughout
						the drug development process. Our approach is responsive, flexible,
						and knowledgeable, with each study conducted with your goals in
						mind. Our Data Management team enhances efficiency, reduces
						development costs, and anticipates data risks.
					</p>
					<br />

					<p className="font-bold text-brandPrimaryLs2">Data Management: </p>
					<p className="mb-4">
						We deliver quality data with integrity. Our team collaborates with
						sponsored project teams to create detailed plans for clinical trial
						data collection, organization, validation, and analysis. We ensure a
						cost-effective, secure, and regulatory-compliant data management
						process. Trusted by sponsors, our extensive knowledge and experience
						are combined with superior therapeutic and regulatory expertise.
						<br />
						Our robust data collection, validation, and analysis processes
						prioritize precision and efficiency while maintaining the highest
						levels of data quality and integrity.
					</p>
					<p className="font-bold text-brandPrimaryLs2 mb-2">
						Our expert team help you in:
					</p>
					<ul className="list-none pl-0 text-base">
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Design case report forms (CRFs) following standard regulations.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Performs data entry of paper CRFs.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Validates all project-specific components of the data management
							system.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Reviews clinical data for errors and trends.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Reconciles serious adverse events.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Produces real-time clinical trial metrics.
						</li>
						<li className="relative pl-6 mb-2">
							<span className="absolute left-0 text-brandPrimaryLs2 font-extrabold">
								•
							</span>
							Data Safety Monitoring Board (DSMB) support.
						</li>
					</ul>

					<div className="container mx-auto mt-8">
						<SolutionSlider />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ClinicalData;
