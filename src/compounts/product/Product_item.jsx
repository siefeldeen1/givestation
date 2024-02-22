import React from 'react'
import './product_item.css'
import { LuShare2 } from "react-icons/lu";
import Button from '../button/btn';

function Product_item() {
    return (
        <div className='product_item'>
            <img className='productimg' src="/imgs/product.png" alt="" />
            <div className='product_ajustor'>
                <div className='product_info'>
                    <div className='part_info'>
                        <div className='title'>
                            GiveStation QF
                            <div className='verify_class'>
                                <img src="/imgs/verify.png" alt="" />
                                <img src="/imgs/blue_verify.png" alt="" />
                            </div>
                        </div>
                        <div className='product_tag'>
                            <img src="/imgs/popular.png" alt="" />
                            Popular
                        </div>
                    </div>
                    <div>
                        <button className='share_btn'><LuShare2 size={24} /></button>
                    </div>
                </div>
                <p className='product_p'>Short Summary Food Shift is an East Bay, California based organization working....</p>
                <div className='readmore'>Read More</div>
                <div className='blue_product'>
                    <div className='data_product'>
                        <div className='higher_data_p'>
                            <div className='blue_data'>
                                $2,661
                                <img src="/imgs/dot.png" style={{ marginTop: "2px" }} alt="" />
                            </div>
                            <div className='data_title'>Raised</div>
                        </div>
                        <div className='data_value_P'>
                            <img src="/imgs/target.png" alt="" />
                            $10,000
                        </div>
                    </div>

                    <div className='data_product'>
                        <div className='higher_data_p'>
                            <div className='green_data'> $1,567</div>
                            <div className='data_title'>QF Matching </div>
                        </div>

                        <div className='data_value_P'>
                            <img src="/imgs/user.png" alt="" />
                            +122
                        </div>
                    </div>
                </div>

                <div className='lower_part_pr'>
                    <div className='user_info_product'>
                        <img src="/imgs/person.png" alt="" />
                        <div className='username_pro'>By 0x000000</div>
                    </div>
                    <Button text={"Donate Now"} styles={{ color: "white", background: "#3EA7E1", padding: "15px 20px", fontSize: "17px", borderRadius: "8px" }} />
                </div>
            </div>
        </div>
    )
}

export default Product_item