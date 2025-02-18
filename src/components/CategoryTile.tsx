import { Link } from "react-router";

interface TileProps {
  img?: string;
  title: string;
  path?: string;
}

const CategoryTile: React.FC<TileProps> = ({ img, title }) => {
  return (
    <Link to={`/category/${title}`}>
      <div className="shadow-lg hover:shadow-gray-400 rounded-lg relative w-[200px] h-[200px] flex-shrink-0 md:w-[225px] md:h-[225px] lg:w-[275px] lg:h-[275px] xl:w-[350px] xl:h-[350px] 2xl:w-[400px] 2xl:h-[400px] cursor-pointer">
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#00000077] rounded-lg flex flex-col items-start justify-end py-3 px-5 text-white">
          <h2 className="lg:text-2xl">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoryTile;
