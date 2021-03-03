import React,{Component,useState} from 'react';

function App()
{
  const [my_name,changeMyName] = useState("Pratik");
  const [my_age,changeMyage] = useState("24");

const buttonClicked = () =>
{
  changeMyName("wisdom");
}

const myStyle =
{
  color:"red",
  backgroundColor:"lightblue",
  padding: "10px",
  margin: "20px"
}

  return(
  <div>
        <h1 style={myStyle}>Hello World {my_name}</h1>
        <h2>and my age is:{my_age}</h2>

        <button onClick={buttonClicked}> change name </button> 
  </div>
 );

}

export default App;