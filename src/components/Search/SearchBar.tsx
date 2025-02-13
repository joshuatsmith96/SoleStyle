import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import customData from '../../test-data.json'
import { useState } from "react";

export default function SearchBar() {
    let shoes = customData;
  function filterItems(arr: string[], query: string) {
    // Filter the items
    const filteredItems = arr.filter((el) =>
      el.toLowerCase().includes(query.toLowerCase())
    );

    // Return the filtered items as a list
    return filteredItems;
  }
  
  const shoeNames = shoes.map(shoe => shoe.name);

  const [text, setText] = useState("");

  return (
    <div className="SearchBar relative bg-gray-100 flex flex-row items-center justify-between py-2 px-3 rounded-lg md:w-[400px]">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-600" />
      <input
        type="text"
        placeholder="Search"
        className="w-full focus:outline-none pl-3"
        onChange={(e) => setText(e.target.value)}
      />
      
      {/* Search suggestions div */}
      <div
        className="SearchSuggestion absolute left-0 w-full mt-1 bg-white rounded-md shadow-lg max-h-40 overflow-y-auto z-10"
        style={{ top: "100%" }}
      >
        {text && (
          <ul className="list-none p-2">
            {filterItems(shoeNames, text).map((item, index) => (
              <li key={index} className="py-1 px-2 hover:bg-gray-200 cursor-pointer w-full flex flex-row">
                <a href={"/product/" + shoes.find(shoe => shoe.name === item)?.path} className="w-full">{item}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
