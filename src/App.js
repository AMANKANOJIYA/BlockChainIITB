import './App.css';
import ScriptTag from 'react-script-tag';
import { useEffect, useState} from 'react';
import Web3 from 'web3';
import Net from 'web3-net';
import jQuery from 'jquery';
import NftList from './components/NftList';
import Modal from './components/Modal';

function App() {
    const [data, setData] = useState({assets:[]});
    useEffect(async () => {
        let response = await fetch("https://rinkeby-api.opensea.io/api/v1/assets?owner=0xc06fc11fe6500cf8ef3072bffa1568c0d7fe7784")
        const tempData = await response.json();
        setData(tempData);
    }, []);
    
    const getWeb3 = () => {
    return new Promise((resolve, reject) => {
            window.addEventListener("load", async () => {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                try {
                await window.ethereum.request({ method: "eth_requestAccounts" });
                resolve(web3);
                } catch (error) {
                reject(error);
                }
            } else {
                reject("Must install MetaMask");
            }
            });
        });
    };

    (async () => {
        const web3 = await getWeb3();
        const data = await jQuery.getJSON("./contracts/nft.json");
        var myContract = new web3.eth.Contract(data.abi, '0x7d9E5aE18D496A014D94355E9De8cEc6BA655B57');
        document.getElementById("transfer").addEventListener("click", () => {
            const _Id = document.getElementById("token_input").value;
            const _tokenURI = "23456789";
            myContract.methods.burn(_Id).send({from: window.ethereum.selectedAddress});
            myContract.methods.claimItem(_tokenURI).send({from: window.ethereum.selectedAddress});
        })
    })()

  return (
      <div className="App" id="App">
          <Modal/>
      <div className="mainContainor">
        <div className="left block_in">
            <div className="contentLeft">
                <h1 style={{marginBottom: "15px"}} id="heading">Ethereum Bridge</h1>
                <p id="cryptoText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui possimus repellat aliquid cum reiciendis aliquam, vel provident magnam quia?</p>
            </div>
            <img src="/images/ethr.png" className = "contentimg" id="bigImage" />
        </div>
        <div className="right block_in">
            <div className="block">
                <p className="tag">From:</p>
                <div className="from">
                    <div className="ether">
                        <div className="content_ether">
                            <img src="/images/ethr.png" className ="logosmall" />
                            <p className="tag_in">Ethereum Chain</p>
                        </div>
                    </div>
                    <div className="input_ether elementInput">
                        <NftList arr = {data.assets}/>
                    </div>
                </div>
                <p className="tag">To:</p>
                <div className="to"> 
                            <select name="chain" id="chain" className="ether etherTo" >
                                <option value="Avalanche" className="tag_in">Avalanche</option>
                                <option value="Solana" className="tag_in">Solana</option>
                          </select>
                </div>
            </div>
            {/* <p className = "Text ">Transaction is Secure and Encrypted</p> */}
            <div className ="button" id="transfer">Transfer</div>
        </div>
          </div>
          <ScriptTag src='animation.js'/>
    </div>
  );
}

export default App;
