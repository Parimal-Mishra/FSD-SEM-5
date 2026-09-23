import React from 'react'

const Card = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
      <div style={{border:'2px solid black',height:'250px',width:'200px'}}>
        <h1>Pizza</h1>
        <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_4aGn1VO584EPbMq-rpavYLrYDRt71DqO9uQioHpGyQ&s=10" alt="" height={'100px'} width={"100px"}></img></p>   
        <h2>PRICE: 500</h2>  
      </div>
      <div style={{border:'2px solid black',height:'250px',width:'200px'}}>
        <h1>Noodle</h1>
        <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9uHeOPEv4fV77pSLt-mVgtwXYS1XmIDt2mcBdPb2qwA&s=10" alt="" height={'100px'} width={"100px"}></img></p>   
        <h2>PRICE: 100</h2>  
      </div>
    </div>
  )
}

export default Card
