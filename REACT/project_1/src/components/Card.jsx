import React from 'react'

// Concept of props 
// We use props as we want to create a component once and change its value everytime we use this component so it inherits the properties of component
// Here the component Card is placing value of the props from App.jsx

const Card = (props) => {
  return (
    <div>
      <div style={{border:'2px solid red',height:'300px',width:'200px'}}>
        <h1>MY CAR</h1>
        <p><img src={props.img}></img></p>
        <h2>CAR NAME:{props.name}</h2>    
        <h2>PRICE: {props.price}</h2>  
      
      </div>
    </div>
  )
}

export default Card
