import HealthyVolunteers from "@/components/participate/healthyVolunteers/HealthyVolunteers";
import RegistrationForm from "@/components/participate/healthyVolunteers/RegistrationForm";
import React from "react";

const page = () => {
	return (
		<div className="pt-24 lg:pt-32 bg-brandSecondary">
			<HealthyVolunteers />
			<RegistrationForm />
		</div>
	);
};

export default page;