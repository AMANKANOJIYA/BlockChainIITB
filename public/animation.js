// sel.options[sel.selectedIndex].text


const mapArt = {
    Ethereum: ["Ethereum Bridge","/images/ethr.png","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui possimus repellat aliquid cum reiciendis aliquam, vel provident magnam quia?","linear-gradient(164deg,#dc92f4,#ffff)","#dc92f4"],
    Solana: ["Solana Bridge","/images/sola.png","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui possimus repellat aliquid cum reiciendis aliquam, vel provident magnam quia?","linear-gradient(168deg, rgb(171, 102, 255), rgb(20, 241, 149))","rgb(171, 102, 255)"],
    Avalanch: ["Avalanch Bridge","/images/aval.png","Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui possimus repellat aliquid cum reiciendis aliquam, vel provident magnam quia?","linear-gradient(164deg, #e84142, #ffff)", "#e84142"],
}

const selectionTo = document.getElementById("crypto_to");

selectionTo.addEventListener("change", () => {
    var textFromInput = document.getElementById("crypto_to").options[document.getElementById("crypto_to").selectedIndex].text;
    var smallMap = mapArt[textFromInput];
    document.getElementById("heading").innerText = smallMap[0];
    document.getElementById("bigImage").src = smallMap[1];
    document.getElementById("cryptoText").innerText = smallMap[2];
    document.getElementById("App").style.background = smallMap[3];
    document.getElementById("transfer").style.backgroundColor = smallMap[4];
});


// if (typeof web3 !== 'undefined') {
//     web3 = new Web3(ethereum);
//     console.log(web3.eth.accounts);
// } else {
//     // set the provider you want from Web3.providers
//     web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// }

// var address = "";
// var minter_address = "";

// async function mint(amount) {
//     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//     const account = accounts[0];
//     const tx = await contract.methods.mint(amount).send({from:account});
// }

// async function claim(amount) {
//     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//     const account = accounts[0];
//     const tx = await contract.methods.transferFrom(minter_address, account, amount).send({from:account}).on('receipt', function(receipt) {
//         console.log(receipt);
//     }).on('error', function(error) {
//         console.log(error);
//     });

// }