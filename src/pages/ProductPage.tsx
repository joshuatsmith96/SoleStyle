import { useParams } from "react-router";
import Data from '../test-data.json'

const ProductPage = () => {

    let id:any = useParams().id;
    console.log(id)
    let selectedData = Data.filter(item => item.path.includes(id))[0]
    console.log(selectedData)

    return(
        <div>
            <h1>Product: ${selectedData.name}</h1>
            <h2>${selectedData.price}</h2>
        </div>
    )
}

export default ProductPage