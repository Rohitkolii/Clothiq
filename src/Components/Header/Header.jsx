
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import './Header.css'
const Header = () => {

    const Links = {
        Link: '/shop',
        LinkText: 'Explore More'
    }
        
    return(
        <div className='headerBanner'>
            <Navbar />
            <div className='inner-header'>
            <div className='header-title'>
                <p>Summer Sale is on</p>
                <h1>Find your style</h1>
                <p className='sale-h'>Sale</p>
                <h1>Choose your Fashion</h1>
                <Button Links={Links} />
            </div>

            <div className='header-img'>
                {/* <img src="./images/headphone.png" alt='headerimg' /> */}
                <img src="./images/headerimg.png" alt='headerimg' />
            </div>
            </div>
        </div>
    )
}

export default Header;