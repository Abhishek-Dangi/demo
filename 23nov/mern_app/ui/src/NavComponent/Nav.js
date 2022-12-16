import './Nav.css';

import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';

function Nav()
{
    const [menulist , setMenuState] = useState();

    useEffect(()=>{
     setInterval(()=>{
        if(localStorage.getItem("role")=="admin")
        {
         setMenuState(<div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
         <div class="navbar-nav mr-auto">
             <a class="nav-item nav-link active"><Link style={{'color':'white'}} to="/admin">Admin Home</Link></a>
             <a class="nav-item nav-link"><Link style={{'color':'white'}} to="/admin/manageusers">Manage Users</Link></a>
             <a class="nav-item nav-link"><Link style={{'color':'white'}} to="/admin/addcategory">Add Category</Link></a>
             <a class="nav-item nav-link"><Link style={{'color':'white'}} to="/admin/addsubcategory">Add Sub Category</Link></a>
             <a class="nav-item nav-link"><Link style={{'color':'white'}} to="/admin/addproperty">Add Property</Link></a>
             <a class="nav-item nav-link"><Link style={{'color':'white'}} to="/logout">Logout</Link></a>
          </div>
        </div>)    
        }
        else if(localStorage.getItem("role")=="user")
        {
         setMenuState(<div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
         <div class="navbar-nav mr-auto">
             <a class="nav-item nav-link active"><Link style={{'color':'white'}} to="/user">User Home</Link></a>
             <a class="nav-item nav-link"><Link style={{'color':'white'}} to="/user/viewproperty">View Property</Link></a>
             <a class="nav-item nav-link"><Link style={{'color':'white'}} to="/logout">Logout</Link></a>
          </div>
        </div>)    
        }                     
        else
        {
         setMenuState(<div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
         <div class="navbar-nav mr-auto">
             <a class="nav-item nav-link active"><Link style={{'color':'white'}} to="/">Home</Link></a>
             <a class="nav-item nav-link"><Link style={{'color':'white'}} to="/about">About</Link></a>
             <a class="nav-item nav-link"><Link style={{'color':'white'}} to="/contact">Contact</Link></a>
             <a class="nav-item nav-link"><Link style={{'color':'white'}} to="/service">Service</Link></a>
             <a class="nav-item nav-link"><Link style={{'color':'white'}} to="/register">Register</Link></a>
             <a class="nav-item nav-link"><Link style={{'color':'white'}} to="/login">Login</Link></a>
             {/*<div class="nav-item dropdown">
                 <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                 <div class="dropdown-menu">
                     <a href="" class="dropdown-item">Blog Page</a>
                     <a href="" class="dropdown-item">Follow Us</a>
                 </div>
             </div>*/}
             
         </div>
         <div class="ml-auto">
             <a class="btn" href="#">Get A Quote</a>
         </div>
     </div>)    
        }
     },2000);  
    },[]);
    
    
  return(
    <div class="nav-bar">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                        <a href="#" class="navbar-brand">MENU</a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        {menulist}
                        
                    </nav>
                </div>
            </div>
  );
}

export default Nav;