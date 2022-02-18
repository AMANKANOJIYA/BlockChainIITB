import { assert } from 'console';
import React, { useState} from 'react'


function NftRow(props) {
  let [active, setActive] = useState(false)
  return (
    <div className={active ? "etherElement toggled" : "etherElement"} onClick={()=>setActive(!active)}>
        <div className="elementImage" style={{backgroundImage: `url(${props.image})`}}></div>
        <p>{props.name}</p>
    </div> 
  )
}



function NftList(props) {
  console.log(props.arr)
  return (
      <div className='listNFT'> 
      {props.arr.map((asset) => {
        console.log("mapo")
          return < NftRow name = { asset.name } image = { asset.image_url } />
      })}  
    </div>  
  )
}

export default NftList; 