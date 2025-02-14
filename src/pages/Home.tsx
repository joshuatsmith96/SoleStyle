//Data
import Data from '../test-data.json'

//Components
import RollingSection from "../components/RollingSection"
import CategoryTile from "../components/CategoryTile"
import Hero from "../components/Hero"

//Category Images
import SportImage from '../assets/category-sport.jpg'
import MenImage from '../assets/category-men.jpg'
import WomenImage from '../assets/category-women.jpg'
import ProductTile from "../components/ProductTile"
import NewsLetterSection from '../components/NewsletterSection'

export default function Home(){

    const featuredItems = Data.filter(item => item.featured);
    const onSale = Data.filter(item => item.categories.includes("Sale"));

    return(
        <div className="Home">
            <Hero />
            <RollingSection title="Shop by Category">
                <CategoryTile title="Men" img={MenImage}/>
                <CategoryTile title="Women" img={WomenImage}/>
                <CategoryTile title="Sports" img={SportImage}/>
            </RollingSection>
            <RollingSection title="Featured Products" scrollButtons>
                {/* <ProductTile product="Fun Super Hero Sneakers" price="$45.00" img={shoe1}/> */}
                {featuredItems.map((item) => {
                    return(
                        <ProductTile product={item.name} price={item.price} img={item.thumbnail} path={item.path}/>
                    )
                })}
            </RollingSection>
            <RollingSection title="On Sale" scrollButtons>
                {/* <ProductTile product="Fun Super Hero Sneakers" price="$45.00" img={shoe1}/> */}
                {onSale.map((item) => {
                    return(
                        <ProductTile product={item.name} price={item.price} img={item.thumbnail} path={item.path}/>
                    )
                })}
            </RollingSection>
            <NewsLetterSection />
            <div className="mb-[2000px]"></div>
        </div>
    )
}