import './Header.css';
import { useState , useEffect } from 'react';

function Header()
{

    const [ HeaderContent , setHeaderContent ] = useState();
    const [ trackemail , setTrackEmail ] = useState(localStorage.getItem("email"));

    useEffect(()=>{
     setInterval(()=>{
        if(localStorage.getItem("role")=="admin")
        {
         setHeaderContent(<div class="row">
         <div class="col-4">
         </div>
         <div class="col-4">
         </div>
         <div class="col-4">
             <div class="top-bar-item">
                 <div class="top-bar-text">
                     <h3>Welcome Admin</h3>
                     <p>{trackemail}</p>
                 </div>
             </div>
         </div>
     </div>);    
        }
        else if(localStorage.getItem("role")=="user")
        {
         setHeaderContent(<div class="row">
         <div class="col-4">
         </div>
         <div class="col-4">
         </div>
         <div class="col-4">
             <div class="top-bar-item">
                 <div class="top-bar-text">
                     <h3>Welcome User</h3>
                     <p>{trackemail}</p>
                 </div>
             </div>
         </div>
        </div>);    
        }                     
        else
        {
         setHeaderContent(<div class="row">
         <div class="col-4">
             <div class="top-bar-item">
                 <div class="top-bar-icon">
                     <i class="flaticon-calendar"></i>
                 </div>
                 <div class="top-bar-text">
                     <h3>Opening Hour</h3>
                     <p>Mon - Fri, 8:00 - 9:00</p>
                 </div>
             </div>
         </div>
         <div class="col-4">
             <div class="top-bar-item">
                 <div class="top-bar-icon">
                     <i class="flaticon-call"></i>
                 </div>
                 <div class="top-bar-text">
                     <h3>Call Us</h3>
                     <p>XXX XXX XXXX</p>
                 </div>
             </div>
         </div>
         <div class="col-4">
             <div class="top-bar-item">
                 <div class="top-bar-icon">
                     <i class="flaticon-send-mail"></i>
                 </div>
                 <div class="top-bar-text">
                     <h3>Email Us</h3>
                     <p>info@example.com</p>
                 </div>
             </div>
         </div>
     </div>);    
        }
     },2000);  
    },[]);

  return(
    <div class="top-bar">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-md-12">
                            <div class="logo">
                                <h1 style={{'font-size':'40px'}} >RoomRent.com</h1>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-7 d-none d-lg-block">
                        {HeaderContent}    
                        </div>
                    </div>
                </div>
            </div>
            
  );
}

export default Header;