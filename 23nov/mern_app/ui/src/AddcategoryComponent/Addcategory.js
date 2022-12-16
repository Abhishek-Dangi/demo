import './Addcategory.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _webapiadmin } from '../BaseAPIUrls';

function Addcategory()
{

  const [file, setFile] = useState()
  const [catName , setCatName] = useState();
  const [output , setOutput] = useState();
  
  const handleChange=(event)=>{
    setFile(event.target.files[0])
  }
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('caticon', file);
    const config = {
        'content-type': 'multipart/form-data'
    };
    axios.post(_webapiadmin+"addcategory", formData, config).then((response) => {
      setCatName("");
      setOutput("Category Added Successfully....");
    });
  }
 
    
  return(
    <div class="about wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12 col-md-12">
                <div class="about-text">
                <h1>Add Category</h1>
<font color="blue">{output}</font>
<form onSubmit={handleSubmit} >

<label>
Category Name:
<input type="text" value={catName}
onChange={e => setCatName(e.target.value)} />
</label>
<br/><br/>

<label>
Category Icon:
<input type="file"
onChange={handleChange} />
</label>
<br/><br/>

<input type="submit" value="Add Category" />

</form>
                </div>
            </div>
        </div>
    </div>
</div>

  );
}

export default Addcategory;