import './AddSubcategory.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _webapiadmin } from '../BaseAPIUrls';

function AddSubcategory()
{

  const [file, setFile] = useState()
  const [catName , setCatName] = useState();
  const [subcatName , setSubCatName] = useState();
  const [output , setOutput] = useState();
  const [cDetails , setCategoryDetails] = useState([]);

  useEffect(()=>{
    axios.get(_webapiadmin+"addsubcategory").then((result)=>{
     //console.log(result.data.cDetails);
     setCategoryDetails(result.data.cDetails);
    })
  },[]);

  const handleChange=(event)=>{
    setFile(event.target.files[0])
  }
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    var formData = new FormData();
    formData.append('catname', catName);
    formData.append('subcatname', subcatName);
    formData.append('caticon', file);
    const config = {
        'content-type': 'multipart/form-data'
    };
    axios.post(_webapiadmin+"addsubcategory", formData, config).then((response) => {
      setCatName("");
      setSubCatName("");
      setOutput("Sub Category Added Successfully....");
    });
  }
 
    
  return(
    <div class="about wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12 col-md-12">
                <div class="about-text">
                <h1>Add Sub Category</h1>
<font color="blue">{output}</font>
<form onSubmit={handleSubmit} >

<label>
Category Name:
<select value={catName}
onChange={e => setCatName(e.target.value)} >
<option>Select Category</option>  
{
  cDetails.map((row) => (
  <option>{row.catname}</option>
  ))
} 
</select>  
</label>
<br/><br/>

<label>
Sub Category Name:
<input type="text" value={subcatName}
onChange={e => setSubCatName(e.target.value)} />
</label>
<br/><br/>

<label>
Sub Category Icon:
<input type="file"
onChange={handleChange} />
</label>
<br/><br/>

<input type="submit" value="Add Sub Category" />

</form>
                </div>
            </div>
        </div>
    </div>
</div>

  );
}

export default AddSubcategory;