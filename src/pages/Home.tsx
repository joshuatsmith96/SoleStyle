//Data
import Data from '../test-data.json'

//Components
import RollingSection from "../components/RollingSection"
import CategoryTile from "../components/CategoryTile"
import Hero from "../components/Hero"
import ProductTile from "../components/ProductTile"
import NewsLetterSection from '../components/NewsletterSection'

//Category Images
import MenImage from '../assets/men-category.jpg'
import WomenImage from '../assets/category-women.jpg'
import ChildrenImage from '../assets/children-category.jpg'
import InfantImage from '../assets/infant-category.jpg'
import NewArrivals from '../assets/new-category.jpg'
import SaleCategory from '../assets/sale-category.jpg'



export default function Home(){

    const featuredItems = Data.filter(item => item.featured);
    const onSale = Data.filter(item => item.categories.includes("Sale"));
    let favorites = localStorage.getItem('favorites') != null ? localStorage.getItem('favorites') : null;
    let fFavorites:Array<number> = favorites != null ? JSON.parse(favorites) : "";

    return(
        <div className="Home">
            <Hero />
            <RollingSection title="Shop by Category" scrollButtons>
                <CategoryTile title="New Arrivals" path="new arrivals" img={NewArrivals}/>
                <CategoryTile title="Men" path="men" img={MenImage}/>
                <CategoryTile title="Women" path="women" img={WomenImage}/>
                <CategoryTile title="Children" path="children" img={ChildrenImage}/>
                <CategoryTile title="Infant" path="infant" img={InfantImage}/>
                <CategoryTile title="Sale" path="sale" img={SaleCategory}/>
            </RollingSection>
            <RollingSection title="Featured Products" scrollButtons>
                {/* <ProductTile product="Fun Super Hero Sneakers" price="$45.00" img={shoe1}/> */}
                {featuredItems.map((item) => {
                    let heartStyle = fFavorites?.includes(item.id) ? "solid" : "outline"
                    return(
                        <ProductTile key={item.id} id={item.id} product={item.name} price={item.price} img={item.thumbnail} path={item.path} heartStyle={heartStyle}/>
                    )
                })}
            </RollingSection>
            <RollingSection title="On Sale" scrollButtons>
                {/* <ProductTile product="Fun Super Hero Sneakers" price="$45.00" img={shoe1}/> */}
                {onSale.map((item) => {
                    let heartStyle = fFavorites?.includes(item.id) ? "solid" : "outline"
                    console.log("is " + item.name + " hearted? : " + heartStyle)
                    return(
                        <ProductTile key={item.id} id={item.id} product={item.name} price={item.price} img={item.thumbnail} path={item.path} heartStyle={heartStyle}/>
                    )
                })}
            </RollingSection>
            <NewsLetterSection />
            
        </div>
    )
}