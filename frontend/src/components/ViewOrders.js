import React, { useState, useEffect} from 'react';
import axios from "axios";
import AdminNavBar from './AdminNavBar';
import DeliveryAdminSideBar from './NavBar/DeliveryAdminSideBar';


export default function ViewOrders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const { data } = await axios.get("http://localhost:5000/order/")
            console.log(data)
            setOrders(data)
        }
        getOrders();
    }, [])

    const handleproceedClick= (orderID, name, contactNO, address)=>{
        localStorage.setItem("orderID", orderID);
        localStorage.setItem("customerName", name);
        localStorage.setItem("customerContactNumber", contactNO);
        localStorage.setItem("deliveryAddress", address);
        window.location.href = "/add-delivery"
    }

    return (
        <div>
             <AdminNavBar/>
            <DeliveryAdminSideBar/>
            <div className="container">
                <br></br>
                <h1 className="text-center">Checkout Details</h1>
                <br></br>
                <br></br>
                <div className="row">
                    <div>
                        <form>
                            <div>
                            <table className="table table-striped table borderd">
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Customer Name</th>
                                        <th>Customer Contact</th>
                                        <th>Address</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map(orders =>
                                            <tr key={orders.orderID}> 
                                                <td> {orders.orderID}</td>                                          
                                                <td> {orders.name}</td>
                                                <td>{orders.contactNO}</td>
                                                <td>{orders.address}</td>
            
                                                <td>
                                                <button type="button" onClick={()=>{handleproceedClick(orders.orderID, orders.name, orders.contactNO, orders.address)}} className="btn btn-outline-success">Proceed</button>
                                                </td>                                   
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}