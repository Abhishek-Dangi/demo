import { Navigate , useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { _webapi } from '../BaseAPIUrls';
import axios from 'axios';

function VerifyUser()
{
    const params = useParams();

    useEffect(()=>{
        axios.get(_webapi+"verifyuser?email="+params.email).then((result)=>{
         console.log("Verification done!!!!");
        })
    },[]);

    return(
        <div>
            <Navigate to='/login' />
        </div>
    )
}

export default VerifyUser
