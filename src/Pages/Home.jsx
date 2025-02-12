import AboutUs from "../Components/AboutUs";
import Newslatter from "../Components/Newslatter";
import OurServices from "../Components/OurServices";
import PopularServices from "../Components/PopularServices";
import Slider from "../Components/Slider";

function Home() {
  return (
    <div>
      <Slider />
      <div className=" container mx-auto">
      <PopularServices />
      <OurServices />
      <AboutUs/>
      <Newslatter/>
      </div>
    </div>
  );
}

export default Home;
