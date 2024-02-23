import React from 'react'
import './partner.css'
function Partner() {
    return (
        <div className='partner' id='partners'>

            {window.innerWidth < 1001 ?
                <>
                    <h1 className='partner_title'>Our Proud Partners</h1>
                    <div className='partner_body'>
                        <div className='partner_imgs'>
                            <img src="/imgs/bridge.png" alt="" />
                            <img src="/imgs/wave.png" alt="" />
                            <img src="/imgs/chain.png" alt="" />
                        </div>
                    </div>
                </>
                :
                <div className='partner_body'>
                    <h1 className='partner_title'>Our Proud Partners</h1>
                    <div className='partner_imgs'>
                        <img src="/imgs/bridge.png" alt="" />
                        <img src="/imgs/wave.png" alt="" />
                        <img src="/imgs/chain.png" alt="" />
                    </div>
                </div>

            }
        </div>
    )
}

export default Partner