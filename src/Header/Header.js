import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from '../StateProvider/StateProvider';
import {auth} from '../firebase';

function Header() {
    const [{basket,user},] = useStateValue();

    const handleAuth = ()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
            <div className='container-fluid' id='navbar'>
                <div className="row header" id='rowhead' >
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
                {user?'My Profile':'Sign in'}
                </Link>
                <Link to='/mycart'  className='col border-end tohover' style={{ textDecoration: 'none', color:"black"}}>
                <div className='header_optionBasket'>
                       <ShoppingCartIcon /> 
                       <span>{basket?.length}</span>
                </div>
                </Link>  
            </div>
        </div>
            
    )
}

export default Header
