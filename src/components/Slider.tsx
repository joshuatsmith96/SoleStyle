import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

interface SliderProps {
  data: any;
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  let img = data.thumbnail;

  //Get Data for specific item
  // let selectedData = Data.filter(item => item.id.includes("1"))[0]

  return (
    <div className="sm:w-[600px] z-0">
      <Carousel className="">
        <div className="h-full">
          <img src={`../${img}`} />
        </div>
        <div className="h-full">
          <img src={`../${img}`} />
        </div>
        <div className="h-full">
          <img src={`../${img}`} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
