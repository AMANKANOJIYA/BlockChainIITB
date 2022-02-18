import { assert } from 'console';
import React, { useState, useEffect} from 'react'


function NftRow(props) {
  let [active, setActive] = useState(false)

  return (
    <div className={active ? "etherElement toggled" : "etherElement"} onClick={()=>{setActive(!active); props.setModalData({name: props.name, image: props.image});}}>
        <div className="elementImage" style={{backgroundImage: `url(${props.image})`}}></div>
        <p>{props.name}</p>
    </div> 
  )
}



function NftList(props) {
    const [data, setData] = useState([]);

    useEffect(async () => {
        let response = await fetch("https://rinkeby-api.opensea.io/api/v1/assets?owner=0xc06fc11fe6500cf8ef3072bffa1568c0d7fe7784")
        const tempData = await response.json();
        setData(tempData.assets);
    }, []);

  return (
      <div className='listNFT'> 
      {data.map((asset) => {
          return < NftRow name = { asset.name } image = { asset.image_url } setModalData={props.setModalData} />
      })}  
    </div>  
  )
}

export default NftList; 