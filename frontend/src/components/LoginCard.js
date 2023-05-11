import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import HomeNavBar from './HomeNavBar';
import Footer from './Footer';

function Cards() {
  return (
    <>
    <HomeNavBar/>
    <div className='bod'>
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                    src="images/local.gif"
                    text="Are you Customer? "
                    label="Customer"
                    path="/login"
                />
                <CardItem
                    src="images/foreign.gif"
                    text="Are you Admin ? "
                    label="Admin"
                    path="/admin-login"
                />
                <CardItem
                    src="images/local.gif"
                    text="Are you Seller? "
                    label="Seller"
                    path="/seller-login"
                />
            </ul>
         
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Cards