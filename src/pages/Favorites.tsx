import Data from '../test-data.json'
import ProductTile from '../components/ProductTile';

const Favorites = () => {
    let favorites = localStorage.getItem('favorites');
    let parsedFavorites = favorites != null ? JSON.parse(favorites) : null
    console.log(parsedFavorites)

    //Loop through parsedFavorites array

    //For every number in array, find that id in the test data

    const returnFavorites = () => {
        let heartedData: any = [];
        let returnData;

        if(parsedFavorites != null){
            parsedFavorites.map((x: any) => {
                // const featuredItems = Data.filter(item => item.featured);
                let filteredData = Data.filter(data => data.id === x)
                heartedData.push(filteredData[0])
                console.log(heartedData)
            })
    
            returnData = heartedData.map((item: any) => {
                let heartStyle = parsedFavorites?.includes(item.id) ? "solid" : "outline"
                return(
                    <ProductTile key={item.id} id={item.id} product={item.name} price={item.price} img={item.thumbnail} path={item.path} heartStyle={heartStyle}/>
                )
            })
        } else {
            return(
                <h1>No favorites yet</h1>
            )
        }

        return returnData
    }


    return(
        <div className='p-3'>
            <div className='flex flex-row flex-wrap justify-evenly items-center gap-5'>
            {returnFavorites()}
            </div>
        </div>
    )
}

export default Favorites