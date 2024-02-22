import React from 'react'
import './footer.css'

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer_body'>
                    <div className='footer_data logo_spe' >
                        <div className='footer_logo'>
                            <img src="/imgs/blogo.png" alt="" />
                            givestation
                        </div>
                    </div>

                    <div className='footer_data'>
                        <h4 className='h4_footer'>Products</h4>
                        <div className='footer_hyp'>YouBuild</div>
                        <div className='footer_hyp'>GiveBridge</div>
                        <div className='footer_hyp'>GiveStation Domain Service </div>
                        <div className='footer_hyp'>Givnaut NFT</div>
                    </div>

                    <div className='footer_data'>
                        <h4 className='h4_footer'>Community</h4>
                        <div className='footer_hyp'>Twitter </div>
                        <div className='footer_hyp'>Discord</div>
                        <div className='footer_hyp'>Linkedln</div>
                        <div className='footer_hyp'>Medium</div>
                    </div>

                    <div className='footer_data'>
                        <h4 className='h4_footer'>Developers</h4>
                        <div className='footer_hyp'>Docs</div>
                        <div className='footer_hyp'>Github</div>
                        <div className='footer_hyp'>Brand Kits</div>
                        <div className='footer_hyp'>Get in touch</div>
                    </div>
                </div>


            </div>
            <div className='copyright'>
                <div className='inner_copy'>© 2024 GiveStation. All Rights Reserved.</div>
            </div>
        </>
    )
}

export default Footer