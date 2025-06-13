import Navbar from "../Navbar/Navbar";
import SubHeader from "../SubHeader/SubHeader";
import Footer from '../Footer/Footer'
import { useCartContext } from "../Context/CartContext";
import { ImBin } from "react-icons/im";
import { useEffect } from "react";
import '../Cart/CartContainer.css'
import { useOrder } from "../Context/OrderContext";
import "../Pages/MyOrder.css"

const MyOreder = () =>{

    const {UserOrders, getUserOrders} = useOrder()
    console.log(UserOrders);
    
    const data = {
        hname: 'Home',
        location: 'My Orders',
    }

    useEffect(()=> {
        getUserOrders();
    },[])

    return(
        <>
            <Navbar />
            <SubHeader mydata={data} />
            {
                !!UserOrders.length ?
            <div style={{padding:"20px 0px"}} className="cartTable ot">
            <table>
                <tr>
                    <th>Product</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
            {
                UserOrders && UserOrders?.map(({Product_Name, price, isDelivered ,delivery_date, img, Status, itemcount, ed},i)=> {
                    return(
                        <tr key={i}>
                            <td>
                                <img src={`${process.env.REACT_APP_URL}${img}`} alt={Product_Name} />
                            </td>
                            <td>{Product_Name}
                                <div className='excart'>
                                <p>Price: {price * itemcount} - Qty: {itemcount}</p>
                                {isDelivered ? 
                            <p>"Delivered on"<br />{delivery_date}</p>
                             : 
                             <p>{Status}</p>
                             }
                                </div>
                            </td>
                            <td>{price}</td>
                            <td>{itemcount}</td>
                            <td>{itemcount * price}</td>
                            {isDelivered ? 
                            <td>"Delivered on" <br />{delivery_date}</td>
                             : 
                             <td>{Status}</td>
                             }
                        </tr>
                        )
                    })
                }
            </table> 
            </div>
            :
            <div style={{textAlign:"center", padding: "50px 0", color: "#614BC3"}}>
                <h1>No Orders Found!</h1>
            </div>
            }
            <Footer />
        </>
    )
}

export default MyOreder;