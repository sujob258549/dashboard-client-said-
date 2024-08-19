import { FaShuttleVan } from "react-icons/fa";
import { GiVillage } from "react-icons/gi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const OurFeatureSection = () => {
  return (
    <section className="text-black">
      <h1 className="text-center text-3xl font-bold md:text-5xl ">Our Feture section</h1>
      <p className="text-center w-[90%] md:w-[70$] lg:w-[60%] mx-auto md:py-7 py-4">Our Company is vary good company Our company facility is vary good and our company dalivary time daly 24/7 hou Our selar is vari good and time mentens is vari good  </p>
      <div className="container py-12 mx-auto">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          <div className="flex flex-col justify-center p-5 rounded-md" style={{ boxShadow: "1px 1px 10px" }}>
            <div className="flex justify-center">
              <MdOutlineAccessTimeFilled className="text-4xl"></MdOutlineAccessTimeFilled>
            </div>

            <h1 className="mt-4 text-xl text-center font-semibold ">Our Servises 24/7 day</h1>

            <p className="mt-2 text-center">Our Company is vary good company Our company facility is vary good and our company dalivary time daly 24/7 hou Our selar is vari good and time mentens is vari good</p>
          </div>
          <div className="flex flex-col justify-center p-5 rounded-md" style={{ boxShadow: "1px 1px 10px" }}>
            <div className="flex justify-center">
              <FaShuttleVan className="text-4xl"></FaShuttleVan>
            </div>

            <h1 className="mt-4 text-xl text-center font-semibold ">
              Fast delivery time</h1>

            <p className="mt-2 text-center">Our servise man is vary storng but they are time menten and any pleace servise timely provide</p>
          </div>
          <div className="flex flex-col justify-center p-5 rounded-md" style={{ boxShadow: "1px 1px 10px" }}>
            <div className="flex justify-center">
              <GiVillage className="text-4xl"></GiVillage>
            </div>

            <h1 className="mt-4 text-xl text-center font-semibold ">Service is provided anywhere</h1>

            <p className="mt-2 text-center">Our company dalivary man alows time rady and our branse This country any pleace any time provide servises</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurFeatureSection;
