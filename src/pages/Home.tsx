//Components
import Section from "../components/Section"
import CategoryTile from "../components/CategoryTile"
import Hero from "../components/Hero"

//Images
import SportImage from '../assets/category-sport.jpg'
import MenImage from '../assets/category-men.jpg'
import WomenImage from '../assets/category-women.jpg'

export default function Home(){
    return(
        <div className="Home">
            <Hero />
            <Section title="Shop by Category">
                <CategoryTile title="Men" img={MenImage}/>
                <CategoryTile title="Women" img={WomenImage}/>
                <CategoryTile title="Sports" img={SportImage}/>
            </Section>
            <div className="mb-[2000px]"></div>
        </div>
    )
}