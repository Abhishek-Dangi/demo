import './Manageusers.css';

import { useState , useEffect } from 'react';
import axios from 'axios';
import { _webapi, _webapiadmin } from '../BaseAPIUrls';
import { useNavigate } from 'react-router-dom';

function Manageusers()
{
  
  const navigate = useNavigate();  
  const [userDetails , setUserDetails] = useState([]);
  
  useEffect(()=>{
        axios.get(_webapiadmin+"manageusers").then((result)=>{
         //console.log(result.data.userDetails);
         setUserDetails(result.data.userDetails);
        })
  },[]);        

  const manageUserStatus=(_id,s)=>{
    //alert(_id+"----"+s);
    var apiURL=_webapiadmin+"manageuserstatus?s="+s+"&regid="+_id
    axios.get(apiURL).then((result)=>{
        window.location.reload();    
        //navigate("/manageusers");
    })
  }
    
  return(
    <div class="about wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12 col-md-12">
                <div class="about-text">
<h2>View & Manage User Details</h2>
<br/>
<table class="table table-bordered">
<tr>
<th>ID</th>
<th>Name</th>    
<th>Email</th>
<th>Mobile</th>
<th>Address</th>
<th>City</th>
<th>Gender</th>
<th>Info</th>
<th>Status</th>
<th>Action</th>
</tr>   
{
 userDetails.map((row) => (
 <tr>
    <td>{row._id}</td>
    <td>{row.name}</td>
    <td>{row.email}</td>
    <td>{row.mobile}</td>
    <td>{row.address}</td>
    <td>{row.city}</td>
    <td>{row.gender}</td>
    <td>{row.info}</td>
    <td>
    {row.status == 0 &&
        <a style={{"color":"green"}} onClick={()=>{manageUserStatus(row._id,"verify")}} >Verify User</a>
    }
    {row.status == 1 &&
        <a style={{"color":"orange"}} onClick={()=>{manageUserStatus(row._id,"block")}} >Block User</a>
    }
    </td>
    <td><a style={{"color":"red"}} onClick={()=>{manageUserStatus(row._id,"delete")}} >Delete User</a></td>
 </tr>
 ))
} 
</table>
                </div>
            </div>
        </div>
    </div>
</div>

  );
}

export default Manageusers;