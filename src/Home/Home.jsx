import Bannersection from "./Bannersection";
import OurFeatureSection from "./OurFeatureSection";
import Topdalivarimansection from "./Topdalivarimansection";


const Home = () => {
    return (
       <>
       
       <div className="container mx-auto px-5 md:px-10">
           {/* bannersection */}
           <Bannersection></Bannersection>
           <OurFeatureSection></OurFeatureSection>
           <Topdalivarimansection></Topdalivarimansection>
        </div>
        
       
       </>
    );
};

export default Home;