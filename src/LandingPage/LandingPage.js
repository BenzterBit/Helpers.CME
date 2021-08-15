import React from 'react'
import './LandingPage.css'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import { CenterFocusStrong } from '@material-ui/icons'
import {Link} from 'react-router-dom'

function LandingPage() {
    return (
        
        <div className="landingpagemain">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="landinginfo">
            <h1>About</h1> 
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book. It has survived not 
            only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum</p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus sem in sem consequat semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non lacus vitae urna vestibulum commodo in vel mi. Maecenas sodales sem ut sem molestie, sed suscipit lorem iaculis. Nulla convallis semper tincidunt. Maecenas placerat, orci non pellentesque bibendum, ipsum leo pellentesque justo, sed aliquam orci justo id tellus. Nullam facilisis tellus non nisi condimentum dapibus. Donec efficitur sagittis eros, eu fringilla ligula lobortis ut. Aliquam erat volutpat. Vestibulum et tristique arcu, non iaculis dolor. Sed sodales augue quis nulla tincidunt, ut vulputate turpis eleifend. Nulla finibus viverra dictum. Nulla euismod est ex, auctor rhoncus ipsum condimentum in. Proin tempus, erat et ornare dictum, justo erat porta mi, a ullamcorper leo lacus eu tortor.

Ut lorem neque, molestie auctor scelerisque eu, euismod et leo. Proin mattis pharetra nibh in mollis. Nullam varius libero non neque sodales aliquet. Cras in mollis sem, vulputate laoreet nunc. Maecenas sed elementum nibh. Curabitur a feugiat nibh, at tempor sapien. Ut suscipit at nisl at ullamcorper. Quisque volutpat felis vitae velit eleifend rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce viverra, arcu porttitor posuere commodo, dolor sem maximus tortor, quis ornare mauris lectus at quam. Etiam porta fermentum mi. Fusce eget malesuada neque, in dictum mauris.

Nullam felis orci, cursus et risus eget, blandit consectetur turpis. Nunc sit amet fringilla sem. Etiam eu lobortis purus. Etiam arcu velit, pharetra ut ornare mattis, pulvinar vitae nulla. Nam pretium lacinia sollicitudin. Donec lobortis malesuada lectus. Sed finibus mauris felis, ut finibus diam feugiat vel.

Nulla consectetur in neque eu dignissim. Suspendisse pharetra lacinia odio non porta. Praesent faucibus libero eu lectus egestas finibus. Aenean venenatis augue enim, tristique bibendum sem tristique nec. Curabitur pharetra eros at ligula pretium porttitor. Vestibulum non aliquet ex. Cras turpis tortor, facilisis nec egestas et, vestibulum non diam. Nunc nec leo sit amet augue varius vulputate sed eu tellus. Duis tempus, velit et egestas rhoncus, odio eros vehicula purus, eget pulvinar felis libero sit amet metus. In ornare nisl et purus ullamcorper condimentum. Fusce rhoncus lectus eget metus elementum, et auctor neque aliquam.

Etiam mollis lectus ac lobortis dignissim. Integer convallis porta purus, non mattis quam laoreet in. Etiam euismod ac nibh vel hendrerit. Donec quis tortor tortor. Pellentesque vel aliquam nunc. Aliquam dapibus tortor elit, et molestie justo malesuada vel. Vestibulum faucibus sed lectus nec placerat. Donec vehicula facilisis lorem, et efficitur diam pharetra interdum. Maecenas accumsan erat eget sapien molestie rhoncus.
            </div>

            <div style={{textAlign:'center'}}>
                <h3 class="headingtext">
                    Common Services we offer!!!</h3>
                <div class="servicesdiv border-end">
                    <big>
                        <img src="https://i.imgur.com/W17cHXS.png" alt="clothwash" /></big>
                        <br/><small>Cloth Wash</small>
                </div>
                <div class="servicesdiv border-end">
                    <big>
                        <img src="https://i.imgur.com/0R76iOV.png" alt="Cook" /></big><br/><small>Cook</small>
                </div>
                <div class="servicesdiv border-end">
                    <big>
                        <img src="https://i.imgur.com/J1zfDqq.png" alt="Housecleaner" style={{width:"129px", height:"129px"}} /></big><br/>
                        <small>House Cleaning</small>
                </div>
                <div class="servicesdiv">
                    <big>
                        <img src="https://i.imgur.com/jnz73u2.png" alt="Washingplate" style={{width:"129px", height:"129px"}} /></big><br/>
                        <small>Washing Dishes</small>
                </div>
            </div>
            <div class="container-fluid footer" style={{background:"#323232" ,color:"white" , margin:"0"}}>
                <div class="row ">
                    <div class="col-6 border-end">
                    <h3>Helpers.CME</h3>
                    <br/>
                    An app to bring all types of helpers in the CME to one platform, to ease in hire and provide more jobs.
                    </div>
                    <div class="col" style={{display:"flex", flexDirection:"column"}}>
                    <h3>About Helpers.CME</h3>
                    <br></br>
                    <Link to="/contact" style={{ textDecoration: 'none', color:"white"}}>
                        Contact
                    </Link>
                    <Link to="/aboutus" style={{ textDecoration: 'none', color:"white"}}>
                        About us
                    </Link>
                    </div>
                </div>
            </div>
            </div>  
            
        
    )
}

export default LandingPage
