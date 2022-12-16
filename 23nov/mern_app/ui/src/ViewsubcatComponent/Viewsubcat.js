import './Viewsubcat.css';
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { _webapiadmin } from '../BaseAPIUrls';
import { Link } from 'react-router-dom';

function Viewsubcat(props)
{
  const [scDetails , setCategoryDetails] = useState([]);
  const [catnm , setCatName] = useState();
  const params = useParams();  

  useEffect(()=>{
    axios.get(_webapiadmin+"fetchsubcategory?catname="+params.catnm).then((result)=>{
     setCategoryDetails(result.data.scDetails);
    })
  },[]);

  return(
    <div class="about wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12 col-md-12">
<div class="about-text">
<h2>View Rental Property >> {params.catnm}</h2>
<br/>
<center>
<div id="catmain" >
{scDetails.map(
    ele => {
    const image = '/assets/uploads/scicons/' + ele.subcaticonname;
    return(     
        <Link to="">
        <div className="catpart" >
            <br/>
            <img src={image} height="100" width="150" alt=""/>
            <br/>
            <b>{ele.subcatname}</b>
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

export default Viewsubcat;