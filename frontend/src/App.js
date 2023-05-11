import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyOrders from './screens/MyOrders/MyOrders';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import AdminRegisterScreen from './screens/AdminRegisterScreen/RegisterScreen';
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import AdminLoginScreen from './screens/AdminLoginScreen/LoginScreen';
import SellerLoginScreen from './screens/SellerLoginScreen/SellerLoginScreen';
import SellerRegisterScreen from './screens/SellerRegisterScreen/SellerRegisterScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import Delivery from './screens/Delivery/Delivery';

import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';
import Home from './components/Home';
import Cart from './components/Cart';
import AdminHome from './components/AdminHome';
import SellerHome from './components/SellerHome';
import PrintReport from './components/PrintReport';


import ViewSellerProducts from './components/ViewSellerProducts';

import AddEmployee from './components/AddEmployee';
import ViewEmployees from './components/ViewEmployee';
import Salary from './components/Salary';

import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddEdit from './pages/AddEdit';
import OrderHome from './pages/OrderHome';
import About from './pages/About';
import { View } from './pages/View';
import Edit from './pages/Edit';
import PaymentHome from './components/PaymentHome';
import PaymentView from './components/PaymentView';

import AddDeliveries from './components/AddDelivery';
import ViewDeliveries from './components/ViewDeliveries';
import GenerateReport from './components/GenerateReport';
import ViewOrders from './components/ViewOrders';


import ContactUs from './components/ContactUs';
import DownloadInvoice from './components/DownloadInvoice';

import OrderList from './components/OrderList';
import UserManagement from './components/UserManagement';
import OrderManagement from './components/OrderManagement';

import LoadingPage from './components/LoadingPage';
import RegisterCard from './components/RegisterCard';
import LoginCard from './components/LoginCard';

import AllComplaints from './components/AllComplaints';
import AddComplaint from './components/AddComplaint';

import FaceScrub from './components/FaceScrub';
import BeautyProducts from './components/BeautyProducts';
import NightCream from './components/NightCream';
import FacePack from './components/FacePack';
import BodyScrub from './components/BodyScrub';
import Toner from './components/Toner';

 const App = () =>{


 return (
   <Router>
     <div>
       
       <main>
         <Routes>
          <Route path="/" element={<LoadingPage/>}/>
           <Route path="/register" element={<RegisterScreen />} exact />
           <Route path="/admin-register" element={<AdminRegisterScreen />} exact />
           <Route path="/login" element={<LoginScreen />} exact />
           <Route path="/admin-login" element={<AdminLoginScreen />} exact />
           <Route path="/seller-login" element={<SellerLoginScreen />} exact />
           <Route path="/seller-register" element={<SellerRegisterScreen />} exact />
          

            <Route path ='/RegisterCard' element={<RegisterCard/>}/>
            <Route path ='/LoginCard' element={<LoginCard/>}/>


           <Route path="/myorders" element={<MyOrders />} />
           <Route path="/profile" element={<ProfileScreen />} />
           <Route path="/delivery/:id" element={<Delivery />} />
           
           <Route path="/customer-home" element={<Home/>} />
           <Route path="/admin-home" element={<AdminHome/>} />
           <Route path="/seller-home" element={<SellerHome/>} />
            <Route path="/view" element={<ViewProduct/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/add" element={<AddProduct/>} />
            <Route path="/printreport" element={<PrintReport/>}/>

            {/* Category */}
            <Route path="/face-scrub" element={<FaceScrub/>}/>
            <Route path="/beauty-products" element={<BeautyProducts/>}/>
            <Route path="/night-cream" element={<NightCream/>}/>
            <Route path="/face-pack" element={<FacePack/>}/>
            <Route path="/body-scrub" element={<BodyScrub/>}/>
            <Route path="/toner" element={<Toner/>}/>


            <Route path="/my-products" element={<ViewSellerProducts/>} />

            <Route path="/add-employee" exact element={<AddEmployee/>} />
            <Route path="/View-employee" exact element={<ViewEmployees/>} />
            <Route path="/salary" exact element={<Salary/>} />

            <Route exact path ="/order-home" element = {<OrderHome/>}/>
            <Route path ="/add-order" element ={<AddEdit/>}/>
            <Route path ="/edit/:id" element ={<Edit/>}/>
            <Route path ="/view-order" element ={<View/>}/>
            <Route path ="/about" element ={<About/>}/>
            <Route path ="/payment-home/:id" element ={<PaymentHome/>}/>
            <Route path ="/payment-view/:id" element ={<PaymentView/>}/>

            {/* <Route path="/view-delivery" element={<DeliveryHome />} /> */}
            <Route path="/add-delivery" element={<AddDeliveries />} />
            {/* <Route path="/edit-delivery/:id" element={<EditDelivery />} /> */}
            <Route path="/view-delivery" element={<ViewDeliveries/>}/>
            {/* <Route path="/ViewOrders" element={<ViewOrders/>}/> */}
            <Route path="/GenerateReport" element={<GenerateReport/>}/>

            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/invoice/:id" element={<DownloadInvoice/>}/>

            <Route path="/orderList" element={<ViewOrders/>}/>
            <Route path="/userManagement" element={<UserManagement/>}/>
            <Route path="/orderManagement" element={<OrderManagement/>}/>


            <Route path='/add-feedback' element={<AddComplaint/>}/>
            <Route path='/view-feedback' element={<AllComplaints/>}/>

            

         </Routes>
       </main>
       
     </div>
   </Router>
 );
 }; 

export default App;
