import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
            <div className='container-fluid' id='navbar'>
                <div className="row header" >
                <Link to="/" className='nopad'>
                <img alt='helpers.cme' className=' col border-end header_logo ' src="https://i.imgur.com/tK7xEsk.png"/>
                </Link>
                <Link to='/menhelperlist' className='col border-end tohover' style={{ textDecoration: 'none', color:"black"}}>
                Men
                </Link>
                <Link to='/womenhelperlist' className='col border-end tohover ' style={{ textDecoration: 'none', color:"black"}}>
                Women
                </Link>
                <Link to='/login' className='col border-end tohover' style={{ textDecoration: 'none', color:"black"}}>
                Login
                </Link>
                <Link to='/mycart'  className='col border-end tohover' style={{ textDecoration: 'none', color:"black"}}>
                <div className='header_optionBasket'>
                       <ShoppingCartIcon /> 
                       <p>Cart</p>
                </div>
                </Link>  
            </div>
        </div>
            
    )
}

export default Header
