import './About.css';
import { useState } from 'react';

import Test from '../TestComponent/Test';

function About()
{

  const [ a , setA ] = useState(10);  
  const [ b , setB ] = useState(20);
  const [ count , setCount ] = useState(0);
  const [ cDate , setDate ] = useState(Date());
  const [ mks , setMks ] = useState([34,56,78,65,43]);
  const [ users , setUsers ] = useState({"uid":1,"username":"admin@gmail.com","password":12345});


  setTimeout(()=>{
    setDate(Date());    
  },1000);

  const handleIncrement=()=>{
    setCount(count => count+1);    
  }

  const handleDecrement=()=>{
    setCount(count => count-1);    
  }

  return(
    <div class="about wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-12 col-md-12">
                <div class="about-text">

<h1>React State</h1>

<hr/>

<h1>User details : iterate object KEYS</h1>
{/* 👇️ iterate object KEYS */}
{Object.keys(users).map((key) => (
            <h2>
              {key}: {users[key]}
            </h2>
            ))
}

<h1>User details : iterate object values</h1>
{/* 👇️ iterate object KEYS */}
{Object.values(users).map((value) => (
            <h2>
              {value}
            </h2>
            ))
}

<hr/>
<h1>User details : Manual access</h1>
<p>UserID : {users.uid}</p>
<p>Username : {users.username}</p>
<p>Password : {users.password}</p>


<hr/>
<h1>Marks List : Loop access</h1>
{
  mks.map((x,i) => (
    <p>
      {x} ---> {i}
    </p>
  ))
}

<h1>Marks List : Manual access</h1>
<p>marks 1 : {mks[0]}</p>
<p>marks 2 : {mks[1]}</p>
<p>marks 3 : {mks[2]}</p>
<p>marks 4 : {mks[3]}</p>
<p>marks 5 : {mks[4]}</p>

<hr/>

<h2>Counter : {count}</h2>
<button onClick={handleIncrement} >+</button>
&nbsp;&nbsp;
<button onClick={handleDecrement} >-</button>
<br/>
<hr/>

<h2>Current Date & Time : {cDate}</h2>
<br/>
<h2>Add</h2>
<p>a = {a}</p>
<p>b = {b}</p>                    
<p>add = {a+b}</p>           

<hr/><hr/>

<Test a={a} b={b} />

                </div>
            </div>
        </div>
    </div>
</div>

  );
}

export default About;