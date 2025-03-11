import { useParams } from "react-router";
import Data from '../test-data.json'
import ProductTile from "../components/ProductTile";

const CategoryPage = () => {
    let favorites = localStorage.getItem('favorites');
    let parsedFavorites = favorites != null ? JSON.parse(favorites) : null

    let category:any = useParams().id
    category = category != undefined ? category : "favorites"
    let categoryData;
    if(category != "favorites"){
        categoryData = Data.filter(item => item.categories.toString().toLowerCase().includes(category))
    } else {
        let favorites = localStorage.getItem('favorites');
        let parsedFavorites = favorites != null ? JSON.parse(favorites) : null
        let heartedData:any = []
        parsedFavorites ? parsedFavorites.map((x: any) => {
            // const featuredItems = Data.filter(item => item.featured);
            let filteredData = Data.filter(data => data.id === x)
            heartedData.push(filteredData[0])
            console.log(heartedData)
        }) : "";
        categoryData = heartedData;
    }


    const capitalizeWords = (str:string) => {
        return str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    return(
        <div className="mt-4 p-5 lg:mt-12 md:flex md:flex-col">
            <h1 className="text-xl font-medium lg:text-3xl">{capitalizeWords(category)}</h1>
            <h3 className="text-md text-gray-500 lg:text-lg">{categoryData.length} Products</h3>
            <div className="flex flex-col justify-center items-center gap-5 mt-5 md:items-start md:justify-start md:flex-row md:flex-wrap">
                {categoryData.map((item:any) => {
                    let heartStyle = parsedFavorites?.includes(item.id) ? "solid" : "outline"
                    return(
                        <ProductTile key={item.id} id={item.id} product={item.name} price={item.price} img={item.thumbnail} path={item.path} heartStyle={heartStyle}/>
                    )
                })}
                <h1 className={`w-full text-center text-xl font-medium py-50 ${categoryData.length === 0 ? 'block' : 'hidden'}`}>Nothing To Display Yet</h1>
            </div>
        </div>
    )
}

export default CategoryPage