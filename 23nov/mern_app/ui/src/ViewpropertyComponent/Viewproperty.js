import './Viewproperty.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _webapiadmin } from '../BaseAPIUrls';
import { Link } from 'react-router-dom';

function Viewproperty()
{
  const [cDetails , setCategoryDetails] = useState([]);

  useEffect(()=>{
    axios.get(_webapiadmin+"addsubcategory").then((result)=>{
     //console.log(result.data.cDetails);
     setCategoryDetails(result.data.cDetails);
    })
  },[]);

  return(
    <div class="about wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12 col-md-12">
<div class="about-text">
<h2>View Rental Property</h2>
<br/>
<center>
<div id="catmain" >
{cDetails.map(
    ele => {
    const image = '/assets/uploads/cicons/' + ele.caticonname;
    const path = '/user/viewsubcat/' + ele.catname ;

    return(     
        <Link to={path} >
        <div className="catpart" >
            <br/>
            <img src={image} height="100" width="150" alt=""/>
            <br/>
            <b>{ele.catname}</b>
        </div>
        </Link>
        )
    } 
)} 
</div>
</center>


</div>
            </div>
        </div>
    </div>
</div>

  );
}

export default Viewproperty;