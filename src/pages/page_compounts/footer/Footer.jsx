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
                                    <img src="/imgs/logo.png" alt="" />
                                    givestation
                                </div>
                            </div>

                            <div className='footer_content'>
                                <>
                                    <div className='footer_data'>
                                        <h4 className='h4_footer'>Products</h4>
                                        <div className='footer_hyp'><a href="https://youbuidl.dev/">YouBuild</a></div>
                                        <div className='footer_hyp'><a href="https://youbuidl.dev/">GiveBridge</a></div>
                                        <div className='footer_hyp'><a href="https://youbuidl.dev/mint-domain">GiveStation Domain Service</a> </div>
                                        <div className='footer_hyp'><a href="https://opensea.io/collection/givnaut-by-givestation">Givnaut NFT</a></div>
                                    </div>

                                    <div className='footer_data'>
                                        <h4 className='h4_footer'>Community</h4>
                                        <div className='footer_hyp'><a href="https://twitter.com/givestation">Twitter</a> </div>
                                        <div className='footer_hyp'><a href="https://discord.com/givestation">Discord</a></div>
                                        <div className='footer_hyp'><a href="https://linkedin/givestation">Linkedln</a></div>
                                        <div className='footer_hyp'><a href="https://medium.com/@givestation">Medium</a></div>
                                    </div>

                                </>
                                <div className='footer_data'>
                                    <h4 className='h4_footer'>Developers</h4>
                                    <div className='footer_hyp'><a href="https://givestation.gitbook.io/givestation/">Docs</a></div>
                                    <div className='footer_hyp'><a href="https://github.com/givestation">Github</a></div>
                                    <div className='footer_hyp'><a href="#">Brand Kits</a></div>
                                    <div className='footer_hyp'><a href="info@givestation.org">Get in touch</a></div>
                                </div>
                            </div>
                        </> :
                        <>
                            <div className='footer_data logo_spe' >
                                <div className='footer_logo'>
                                    <img src="/imgs/logo.png" alt="" />
                                    givestation
                                </div>
                            </div>

                            <div className='footer_data'>
                                <h4 className='h4_footer'>Products</h4>
                                <div className='footer_hyp'><a href="https://youbuidl.dev/">YouBuild</a></div>
                                <div className='footer_hyp'><a href="https://youbuidl.dev/">GiveBridge</a></div>
                                <div className='footer_hyp'><a href="https://youbuidl.dev/mint-domain">GiveStation Domain Service</a> </div>
                                <div className='footer_hyp'><a href="https://opensea.io/collection/givnaut-by-givestation">Givnaut NFT</a></div>
                            </div>

                            <div className='footer_data'>
                                <h4 className='h4_footer'>Community</h4>
                                <div className='footer_hyp'><a href="https://twitter.com/givestation">Twitter</a> </div>
                                <div className='footer_hyp'><a href="https://discord.com/givestation">Discord</a></div>
                                <div className='footer_hyp'><a href="https://linkedin/givestation">Linkedln</a></div>
                                <div className='footer_hyp'><a href="https://medium.com/@givestation">Medium</a></div>
                            </div>

                            <div className='footer_data'>
                                <h4 className='h4_footer'>Developers</h4>
                                <div className='footer_hyp'><a href="https://givestation.gitbook.io/givestation/">Docs</a></div>
                                <div className='footer_hyp'><a href="https://github.com/givestation">Github</a></div>
                                <div className='footer_hyp'><a href="#">Brand Kits</a></div>
                                <div className='footer_hyp'><a href="info@givestation.org">Get in touch</a></div>
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