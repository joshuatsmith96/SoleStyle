interface SectionProps {
  children: React.ReactNode;
  title: string;
}

const Section: React.FC<SectionProps> = ({ children, title }) => {
  return (
    <div className="Section flex flex-col py-2 px-4 md:px-15 md:items-center xl:py-10">
      <div className="center 2xl:w-[85%]">
        <h3 className="mb-3 py-3 text-xl font-medium lg:text-2xl xl:text-3xl">{title}</h3>
        <div className="hideScrollers whitespace-nowrap flex flex-row items-center gap-5 overflow-x-auto text-lg md:justify-between xl:gap-15 py-5 px-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Section;