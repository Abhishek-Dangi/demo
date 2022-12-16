import './Addproperty.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _webapiadmin } from '../BaseAPIUrls';

function Addproperty()
{

  const [scDetails , setSubCategoryDetails] = useState([]);
  const [file, setFile] = useState()
  const [title , setTitle] = useState();
  const [catName , setCatName] = useState();
  const [description , setDescription] = useState();
  const [output , setOutput] = useState();

  useEffect(()=>{
    axios.get(_webapiadmin+"fetchsubcategory").then((result)=>{
     setSubCategoryDetails(result.data.scDetails);
    })
  },[]);

  const handleChange=(event)=>{
    setFile(event.target.files[0])
  }
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    var formData = new FormData();
    formData.append('title', title);
    formData.append('subcatname', catName);
    formData.append('description', description);
    formData.append('caticon', file);
    const config = {
        'content-type': 'multipart/form-data'
    };
    axios.post(_webapiadmin+"addproperty", formData, config).then((response) => {
      setCatName("");
      setTitle("");
      setDescription("");
      setOutput("Property Added Successfully....");
    });
  }
 
    
  return(
    <div class="about wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12 col-md-12">
                <div class="about-text">
                <h1>Add Rental Property</h1>
<font color="blue">{output}</font>
<form onSubmit={handleSubmit} >

<label>
Title:
<input type="text" value={title}
onChange={e => setTitle(e.target.value)} />
</label>
<br/><br/>

<label>
Category Name:
<select value={catName}
onChange={e => setCatName(e.target.value)} >
<option>Select Category</option>  
{
  scDetails.map((row) => (
  <option>{row.subcatname}</option>
  ))
} 
</select>  
</label>
<br/><br/>

<label>
Description:
<br/>
<textarea rows="5" cols="30" value={description}
onChange={e => setDescription(e.target.value)}></textarea>
</label>
<br/><br/>

<label>
Property Icon:
<input type="file"
onChange={handleChange} />
</label>
<br/><br/>

<input type="submit" value="Add Property" />

</form>
                </div>
            </div>
        </div>
    </div>
</div>

  );
}

export default Addproperty;