import Breadcrumb from "@/components/ui/breadcrumb/Breadcrumb";
import Image from "next/image";
import TherapeuticAreasCarousel from "./TherapeuticAreasCarousel";

const CellularGeneTherapy = () => {
  return (
    <div className="px-4 text-bgPrimary">
      <div className="container mx-auto">
        <div className="mb-9">
          <Breadcrumb
            link1="/expertise"
            title1="Expertise"
            title2="Cellular & Gene Therapy"
          />
        </div>

        <div className="max-h-[140px] md:max-h-[300px] w-full flex items-center justify-center rounded-lg overflow-hidden mb-6">
          <Image
            src={"/assets/images/expertise/area-hero.jpg"}
            height={400}
            width={1280}
            alt="Expertise"
            className="rounded-lg w-full"
          />
        </div>

        <p className="text-2xl mb-6"> Cellular & Gene Therapy </p>
      </div>

      <div className="container mx-auto text-bgPrimary">
        <Image
          src="/assets/images/expertise/cell.jpg"
          height={480}
          width={720}
          alt="Cellular & Gene Therapy"
          className="h-auto w-auto mx-auto rounded-lg mb-10"
        />

        <div className="pt-4">
          <p className="text-base font-medium mb-10">
            The sponsors offer an experienced team of experts who take an active
            role in the field and are at the forefront of rapidly evolving
            development.
          </p>
        </div>

        <TherapeuticAreasCarousel />
      </div>
    </div>
  );
};

export default CellularGeneTherapy;
