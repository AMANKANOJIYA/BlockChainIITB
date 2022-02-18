import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { PublicKey, Transaction } from '@solana/web3.js';
import { Connection, programs } from '@metaplex/js';
const { metadata: { Metadata } } = programs;

const connection = new Connection('devnet');
let wallet

export async function setup() {
    return new Promise((resolve, reject) => {
        wallet = new PhantomWalletAdapter();
        wallet.on('readyStateChange', () => {
            resolve()
        })
    })
}

  export async function burnToken(token, updateProgress) {
    let recentBlockhash = await connection.getRecentBlockhash()
    let tx = new Transaction({ recentBlockhash: recentBlockhash.blockhash, feePayer: wallet.publicKey }).add(
        Token.createBurnInstruction(
            TOKEN_PROGRAM_ID,
            new PublicKey(token.mint),
            token.pubkey,
            wallet.publicKey,
            [],
            1
        ), Token.createCloseAccountInstruction(
            TOKEN_PROGRAM_ID,
            token.pubkey,
            wallet.publicKey,
            wallet.publicKey,
            [],
        ),
    )
      
    const {signature} = await window.solana.signAndSendTransaction(tx)
    updateProgress('Burning Token')
    let err = (await connection.confirmTransaction(signature)).value.err
    updateProgress('Burnt Token')
    return err
}
  
  
  export async function mint(token, updateProgress) {
    let res = await fetch('http://localhost:8000/transaction', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(token)
    })

    let serializedTransaction = (await res.json()).data
    let transaction = Transaction.from(Uint8Array.from(serializedTransaction))
    await window.solana.signTransaction(transaction)
    let signature = await connection.sendRawTransaction(transaction.serialize())
    updateProgress('Minting Token')
    let err = (await connection.confirmTransaction(signature)).value.err
    updateProgress('Finished Minting')
    return err
}