// import CollapseCard from "../CollapseCard/CollapseCard";
import Accordion from "../Accordion/Accordion";
import DeliveryCycle from "../DeliveryCycle/DeliveryCycle";
import FeaturedPost from "../FeaturedPost/FeaturedPost";
import Footer from "../Footer/Footer";
import Header from "../Header/Header"
import LatestItems from "../LatestItems/LatestItems";
import Testimonials from "../Testimonials/Testimonials";
// import Navbar from "../Navbar/Navbar"

const Home = () => {
    return(
        <div className="Home">
            {/* <Navbar /> */}
            <Header />
            <DeliveryCycle />
            <LatestItems />
            {/* <CollapseCard /> */}
            <FeaturedPost />
            <Testimonials />
            <Accordion />
            <Footer />
        </div>
    )
}


export default Home;