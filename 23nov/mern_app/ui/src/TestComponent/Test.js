import './Test.css';

function Test(props)
{

  return(<div>            
<h1>Test Component</h1>

<h2>Add</h2>
<p>a = {props.a}</p>
<p>b = {props.b}</p>                    
<p>add = {props.a+props.b}</p>



</div>
  );
}

export default Test;