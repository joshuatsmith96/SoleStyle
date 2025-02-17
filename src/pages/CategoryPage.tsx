import { useParams } from "react-router";
import Data from '../test-data.json'

const CategoryPage = () => {

    let category:any = useParams().id?.toLowerCase();
    console.log(category)
    let selectedData = Data.filter(item => item.categories.toString().toLowerCase().includes(category))
    console.log(selectedData)

    return(
        <div>
        </div>
    )
}

export default CategoryPage