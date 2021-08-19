import React from 'react'
import './LandingPage.css'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import {Link} from 'react-router-dom'

function LandingPage() {
    return (
        
        <div className="landingpagemain">
            

                <br/>
                <br/>
                <br/>
                <div style={{textAlign:'center'}} id='howitwork' className='container-fluid'>
                    <h3 className="headingtext">
                        How does it work?</h3>
                        <br/>
                    <div className='row'>
                    <div className="howitworkdiv col">
                        <i>
                            <img src="https://i.imgur.com/OBhFhpB.png" style={{width:'70px'}} alt="Step 1 - Search" />
                        </i><br/><big>Search</big>
                        <p>
                        <br/>Navigate through the Men/Women pages <br/>and pick a Maid you want to hire<br/> based on your requirments</p>
                    </div>
                    <div className="howitworkdiv col">
                        <i>
                            <img src="https://i.imgur.com/daTQkki.png" style={{width:'70px'}} alt="Step 2 - Add services" />
                        </i><br/><big>Add Services</big>
                        <p>
                        <br/> View the complete profile of the Helper<br/> and add all the serives you require.
                        </p>
                    </div>
                    <div className="howitworkdiv col">
                        <i>
                            <img src="https://i.imgur.com/UsvkK6s.png" style={{width:'70px'}} alt="Step 3 - Sit back and relax" />
                        </i><br/><big>Meet, Select & Relax</big>
                        <p>
                        <br/>   Talk to the maid on the phone or meet her personally. 
                            <br/>Confirm the maid and enjoy the postpaid Helper Service.
                        </p>
                    </div>

                    </div>
                    
                </div>
            

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            


            
            <div style={{textAlign:'center', justifyContent:'center'}} id='whatweoffer'>
                <h3 className="headingtext">
                    Common Services we offer!!!</h3>
                    <br/>
                <div className=" startservicediv servicesdiv border-end">
                    <big>
                        <img src="https://i.imgur.com/W17cHXS.png" alt="clothwash" /></big>
                        <br/><small>Washing Clothes</small>
                </div>
                <div className="servicesdiv border-end">
                    <big>
                        <img src="https://i.imgur.com/0R76iOV.png" alt="Cook" /></big><br/><small>Cook</small>
                </div>
                <div className="servicesdiv border-end">
                    <big>
                        <img src="https://i.imgur.com/J1zfDqq.png" alt="Housecleaner" style={{width:"129px", height:"129px"}} /></big><br/>
                        <small>House Cleaning</small>
                </div>
                <div className="servicesdiv">
                    <big>
                        <img src="https://i.imgur.com/jnz73u2.png" alt="Washingplate" style={{width:"129px", height:"129px"}} /></big><br/>
                        <small>Washing Dishes</small>
                </div>
                
            </div>
            <br/>
            <br/>
            <br/>
            <br/>

                
                <div className="container-fluid" id='whyus' style={{textAlign:'center'}}>
                    <h3 className="headingtext">
                        Why Use Helpers.CME?</h3>
                        <br/>
                    <div className='row'>
                        <div className="homewhydiv col border-end" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                            <i>
                                <img src="https://i.imgur.com/EnyEcmQ.png" alt="Quick & Easy" />
                            </i><big>Quick & Easy</big>
                            <p>
                                No need to wait for maid <br/>to come for interview. <br/>Search - View profile - Select
                            </p>
                        </div>
                        <div className="homewhydiv col border-bottom" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                            <i>
                                <img src="https://i.imgur.com/R5AcJEI.png" alt="Safe & Reliable" />
                            </i><big>Safe & Reliable </big>
                            <p>
                                Your safety is our first priority.<br/> CME does a thorough background check of every maid 
                            </p>
                        </div>

                    </div>
                    <div className='row'>
                        <div className="homewhydiv col border-end border-top" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                            <i>
                                <img src="https://i.imgur.com/OhlTERf.png" alt="Multiple Options" />
                            </i><big>Multiple Options</big>
                            <p>
                                Watch as many profiles as you want.<br/> Select only the one you find best
                            </p>
                        </div>
                        <div className="homewhydiv col" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                            <i>
                                <img src="https://i.imgur.com/7Xyeiml.png" alt="High Quality" />
                            </i><big>High Quality</big>
                            <p>
                                Only skilled maids are registered with us.
                            </p>
                        </div>
                    </div>
                    
                    
                </div>
                
            
            <div className="container-fluid footer" style={{background:"#323232" ,color:"white" , margin:"0"}}>
                <div className="row " style={{alignItems:'center', paddingLeft:'10px'}}>
                    <div className="col border-end" >
                    <h3 style={{color:'blue'}}>Helpers.CME</h3>
                    
                    An app to bring all types of helpers in the CME to one platform,<br/> to ease in hire and provide more jobs.
                    </div>
                    <div className="col" >
                    <h3 style={{color:'blue'}}>About Helpers.CME</h3>
                    
                    <div style={{display:"flex", flexDirection:"column"}} >
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
            </div>  
            
        
    )
}

export default LandingPage
