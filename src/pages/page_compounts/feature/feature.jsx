import React from 'react'
import Button from '../../../compounts/button/btn'
import './feature.css'

function feature() {
    return (
        <div className='feature'>
            <div className='feature_body'>
                <div className='cloumn'>
                    <Button text={"Funding is our mission"} styles={{ background: "#CFD9F0", color: "#474747", padding: "14px 15px", fontSize: "18px" }} />
                    <p className='p_feature'>Funding is at the core of our mission at GiveStation. We are dedicated to providing a robust platform that leverages Web3 multi-chain technology to support the funding of open-source public goods.</p>
                    <p className='p_feature' style={{ fontWeight: "600" }}>Fund today, Buidl tomorrow. This is GiveStation.</p>
                </div>

                <div className='gif_cont'>
                    <img className='feature_gif' src="./imgs/gif.gif" alt="" />
                </div>
            </div>
        </div>
    )
}

export default feature