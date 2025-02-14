import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

interface SectionProps {
  children: React.ReactNode;
  title: string;
  scrollButtons?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, title, scrollButtons }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -600, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  return (
    <div className="Section relative flex flex-col py-2 px-4 md:px-15 xl:py-10">
      <div className={`absolute top-1/2 justify-between w-[90%] gap-2 mb-2 hidden ${scrollButtons ? 'md:flex' : 'hidden'}`}>
      <button
          className="hover:cursor-pointer text-5xl xl:text-6xl 2xl:text-7xl"
          onClick={scrollLeft}
        >
          <FontAwesomeIcon icon={faChevronCircleLeft}/>
        </button>
        <button
          className="hover:cursor-pointer text-5xl xl:text-6xl 2xl:text-7xl"
          onClick={scrollRight}
        >
          <FontAwesomeIcon icon={faChevronCircleRight}/>
        </button>
      </div>
      <div className="center">
        <h3 className="mt-2 py-1 text-xl font-medium lg:text-2xl xl:text-3xl">
          {title}
        </h3>
        <div
          ref={scrollRef}
          className="hideScrollers whitespace-nowrap flex flex-row items-center gap-5 overflow-x-scroll text-lg md:justify-between xl:gap-15 py-5 px-1"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Section;
