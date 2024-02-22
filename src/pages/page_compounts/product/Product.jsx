import React from 'react'
import './product.css'
import Products from '../project/Products'
import Product_show from '../../../compounts/prod/Product'
function Product() {
    return (
        <div className='products_r' id='products'>
            <h1 className='h1_prod'>Our Products</h1>
            <div className='galary_prod'>
                <Product_show img={'/imgs/youbuidl.png'} title={"YouBuidl"} tag={"Grant Application"}
                    body={"YouBuidl is a hyperstructure grant Dapp that uses web3 incentives to drive more donations to public goods projects."} />
                <Product_show img={'/imgs/give.png'} title={"GiveBridge"} tag={"Cross-Chain Bridge"}
                    body={"A Debridge powered cross-chain bridge that enables users to move assets across blockchains."} />
                <Product_show img={'/imgs/globe.png'} title={"GNS"} tag={"GivesSation  Name Service "}
                    body={"The official TLD for GiveStation. It is a Web3 domain name service that aims to bring decentralization and ownership back to the users of GiveStation."} />
                <Product_show img={'/imgs/nft.png'} title={"Givnaut NFT"} tag={"GiveStation NFT"}
                    body={"GIVnaut is an NFT collection created by the GiveStation team. They are pioneers that powers and govern the GiveStation ecosystem."} />
            </div>

        </div>
    )
}

export default Product