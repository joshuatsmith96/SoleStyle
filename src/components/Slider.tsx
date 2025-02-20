import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";

interface SliderProps {
  data: any;
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  let img = data.thumbnail;
  const [showThumbs, setShowThumbs] = useState(false)

  useEffect(() => {
    handleScreenSizeChange()
  }, [])

  function handleScreenSizeChange() {
    const screenWidth = window.innerWidth;
    const targetWidth = 600; // Example target width
    if (screenWidth >= targetWidth) {
      console.log('Enable thumbnails')
      setShowThumbs(true)
    } else {
      setShowThumbs(false)
      console.log('Disable thumbnails')
    }
  }

  window.addEventListener("resize", handleScreenSizeChange)

  return (
    <Carousel
    className="carousel sm:w-[600px] overflow-x-visible md:bingbong"
    swipeScrollTolerance={5}
    emulateTouch
    showThumbs={showThumbs}
    showStatus={false}>
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
  );
};

export default Slider;
