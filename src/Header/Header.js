import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        
            <div className="header">
                <Link to="/">
                <img alt='helpers.cme' className='header_logo' src="https://i.imgur.com/tK7xEsk.png"/>
                </Link>
                <Link to='/menhelperlist' style={{ textDecoration: 'none', color:"black"}}>
                Men
                </Link>
                <Link to='/womenhelperlist' style={{ textDecoration: 'none', color:"black"}}>
                Women
                </Link>
                <Link to='/login' style={{ textDecoration: 'none', color:"black"}}>
                Login
                </Link>
                <Link to='/mycart' style={{ textDecoration: 'none', color:"black"}}>
                <div className='header_optionBasket'>
                       <ShoppingBasketIcon /> 
                       <p>Cart</p>
                </div>
                </Link>  
            </div>
    )
}

export default Header
