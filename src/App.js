import './App.css';
import ScriptTag from 'react-script-tag';
import { useEffect } from 'react';
import Web3 from 'web3';

function App() {
    const providerURL = "http://127.0.0.1:7545"
    useEffect(() => {
        const web3 = new Web3(providerURL)
        let provider = window.ethereum;
        if (typeof provider !== 'undefined') {
            provider.request({ method: "eth_requestAccounts" }).then(accounts => {
                console.log(accounts);
            }).catch((err) => {
                console.log(err)
            })
        }

    },[])

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
                        <input type="tokan" className="tokan_input" placeholder="tokan..." />
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
            <a href="#" className ="button" id="transfer">Transfer</a>
        </div>
          </div>
          <ScriptTag src='animation.js'/>
    </div>
  );
}

export default App;
