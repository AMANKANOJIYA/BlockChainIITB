import { assert } from 'console';
import React, { useState} from 'react'


function Modal(props) {
    console.log(props)
    if ( props.data.enabled ) {
        return (
            <div className='modal'>
                <div className='innerModal'>
                    <div className='modal__section horizontal'>
                        <img src={props.data.nft.image} />
                        <div className='modal__title'>{props.data.nft.name} is being bridged from<br /><b>Ethereum Chain</b> to <b>Solana Chain</b></div>
                    </div>
                    <div className='modal__section'>
                        <div className='progress-title'>Bridging</div>
                        <div className='progress-bar'>
                            <div className='progress-bar--progress'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default Modal; 