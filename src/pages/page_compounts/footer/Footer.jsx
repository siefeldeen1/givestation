import React from 'react'
import './footer.css'

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer_body'>
                    {window.innerWidth < 1000 ?
                        <>
                            <div className='footer_data logo_spe' >
                                <div className='footer_logo'>
                                    <img src="/imgs/blogo.png" alt="" />
                                    givestation
                                </div>
                            </div>

                            <div className='footer_content'>
                                <div className='footer_data'>
                                    <h4 className='h4_footer'>Products</h4>
                                    <div className='footer_hyp'><a href="#">YouBuild</a></div>
                                    <div className='footer_hyp'><a href="#">GiveBridge</a></div>
                                    <div className='footer_hyp'><a href="#">GiveStation Domain Service</a> </div>
                                    <div className='footer_hyp'><a href="#">Givnaut NFT</a></div>
                                </div>

                                <div className='footer_data'>
                                    <h4 className='h4_footer'>Community</h4>
                                    <div className='footer_hyp'><a href="#">Twitter</a> </div>
                                    <div className='footer_hyp'><a href="#">Discord</a></div>
                                    <div className='footer_hyp'><a href="#">Linkedln</a></div>
                                    <div className='footer_hyp'><a href="#">Medium</a></div>
                                </div>

                                <div className='footer_data'>
                                    <h4 className='h4_footer'>Developers</h4>
                                    <div className='footer_hyp'><a href="#">Docs</a></div>
                                    <div className='footer_hyp'><a href="#">Github</a></div>
                                    <div className='footer_hyp'><a href="#">Brand Kits</a></div>
                                    <div className='footer_hyp'><a href="#">Get in touch</a></div>
                                </div>
                            </div>
                        </> :
                        <>
                            <div className='footer_data logo_spe' >
                                <div className='footer_logo'>
                                    <img src="/imgs/blogo.png" alt="" />
                                    givestation
                                </div>
                            </div>

                            <div className='footer_data'>
                                <h4 className='h4_footer'>Products</h4>
                                <div className='footer_hyp'><a href="#">YouBuild</a></div>
                                <div className='footer_hyp'><a href="#">GiveBridge</a></div>
                                <div className='footer_hyp'><a href="#">GiveStation Domain Service</a> </div>
                                <div className='footer_hyp'><a href="#">Givnaut NFT</a></div>
                            </div>

                            <div className='footer_data'>
                                <h4 className='h4_footer'>Community</h4>
                                <div className='footer_hyp'><a href="#">Twitter</a> </div>
                                <div className='footer_hyp'><a href="#">Discord</a></div>
                                <div className='footer_hyp'><a href="#">Linkedln</a></div>
                                <div className='footer_hyp'><a href="#">Medium</a></div>
                            </div>

                            <div className='footer_data'>
                                <h4 className='h4_footer'>Developers</h4>
                                <div className='footer_hyp'><a href="#">Docs</a></div>
                                <div className='footer_hyp'><a href="#">Github</a></div>
                                <div className='footer_hyp'><a href="#">Brand Kits</a></div>
                                <div className='footer_hyp'><a href="#">Get in touch</a></div>
                            </div>
                        </>
                    }
                </div>


            </div>
            <div className='copyright'>
                <div className='inner_copy'>© 2024 GiveStation. All Rights Reserved.</div>
            </div>
        </>
    )
}

export default Footer