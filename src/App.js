import './App.css';
import ScriptTag from 'react-script-tag';
import { useEffect } from 'react';
import Web3 from 'web3';
import Net from 'web3-net';
import jQuery from 'jquery';

function App() {
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
        const data = await jQuery.getJSON("./truffle/build/contracts/ArtCollectible.json");
        var myContract = new web3.eth.Contract(data.abi, '0x7d9E5aE18D496A014D94355E9De8cEc6BA655B57');
        document.getElementById("transfer").addEventListener("click", () => {
            const _Id = document.getElementById("token_input").value;
            const _tokenURI = "23456789";
            console.log(myContract);
            // myContract.methods.burn(_Id).send({from: window.ethereum.selectedAddress});
            // myContract.methods.claimItem(_tokenURI).send({from: window.ethereum.selectedAddress});
        })
    })()


    // const getContract = async (web3) => {
    //     const data = await jQuery.getJSON("./truffle/build/contracts/ArtCollectible.json");
    //     const net = new Net(window.ethereum);
    //     const netId = await web3.eth.getId();
    //     const deployedNetwork = data.networks[netId];
    //     const artCollectible = new web3.eth.Contract(
    //         data.abi,
    //         deployedNetwork && deployedNetwork.address
    //     );
    //     return artCollectible;
    // }; 
    // const web3 = getWeb3();
    // getContract(web3)


    // async function transferNFT(_to, _tokenId) {
    //     const web3 = await getWeb3();
    //     const accounts = await web3.eth.getAccounts();
    //     const contract = await getContract(web3);
    //     await contract.methods.burn(_tokenId).send({ from: accounts[0] });
    //     await contract.methods.burn(_tokenId).send({ from: _to });
    // }


  return (
    <div className="App" id="App">
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
                        <div className="value_ether">
                            <p className ="smalltag">Balance:</p>
                            <p>0.00 ETH</p>
                        </div>
                    </div>
                    <div className="input_ether">
                         <div className="selection">
                            <select name="payment_from" id = "crypto_from"className="crypto">
                                <option value="Ethereum">Ethereum</option>
                                <option value="Avalanch">Avalanch</option>
                                <option value="Solana">Solana</option>
                            </select>
                        </div>
                        <input type="address" className="address_input" placeholder="address..." />
                    </div>
                    <div className="input_ether">
                        <input type="tokan" id="token_input" className="tokan_input" placeholder="tokan..." />
                    </div>
                </div>
                <p className="tag">To:</p>
                <div className="to">
                    <div className="ether">
                        <div className="content_ether">
                            <img src="/images/ethr.png" className ="logosmall" />
                            <p className="tag_in">Ethereum Chain</p>
                        </div>
                        <div className="value_ether">
                            <p className ="smalltag">Balance:</p>
                            <p>0.00 ETH</p>
                        </div>
                    </div>
                    <div className="input_ether">
                        <div className="selection" id="selected">
                            <select name="payment_to" id="crypto_to" className ="crypto">
                                <option value="Ethereum">Ethereum</option>
                                <option value="Avalanch">Avalanch</option>
                                <option value="Solana">Solana</option>
                            </select>
                        </div>
                        <input type="address" className="address_input_to" placeholder="address..." />
                    </div>
                </div>
            </div>
            <p className = "Text ">Transaction is Secure and Encrypted</p>
            <div className ="button" id="transfer">Transfer</div>
        </div>
          </div>
          <ScriptTag src='animation.js'/>
    </div>
  );
}

export default App;
