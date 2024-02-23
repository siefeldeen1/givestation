import React, { useEffect } from 'react'
import Button from '../../../compounts/button/btn'
import './header.css'
import { CiShare1 } from "react-icons/ci";

function header() {
    useEffect(() => {
        if (window.innerWidth < 900) {
            document.querySelector(".nav_items").style.display = "none"
        }
    }, [])

    return (
        <div className='header_bg'>
            <header>
                <div className='logo'>
                    <img src="/imgs/logo.png" alt="" />
                    <div className='text_logo'>givestation</div>
                </div>

                <div className='nav_items'>
                    <div className='header_nav'><a className='a_tag' href="#project">Project</a></div>
                    <div className='header_nav'><a className='a_tag' href="#feature">Feature</a></div>
                    <div className='header_nav'><a className='a_tag' href="#products">Products</a></div>
                    <div className='header_nav'><a className='a_tag' href="#partners">Partners</a></div>
                </div>

                <div>
                    <Button text={<a href="https://youbuidl.dev/create-project">Submit a Grant</a>} classname={"header_btn_res"} styles={{ fontSize: "16px", fontWeight: "bold" }} />
                </div>
            </header>

            <section className='header_section'>
                <div className='header_text'>
                    Empowering the <br />future of public goods via <br /><span className='colored_header'>community-funded grants</span>
                </div>

                <div className='header_btns'>
                    <Button text={`Read More`} classname={"explore_more_res"} styles={{ background: "#343F58", color: "white", padding: "16px 35px", fontSize: "14px", height: "100%" }} />
                    <Button text={<a href=" https://youbuidl.dev/">Explore Grants</a>} classname={"explore_more_res"} icon={<CiShare1 size={22} style={{ marginBottom: "2px" }} />} styles={{ background: "linear-gradient(0.25turn, rgba(52, 149, 255, 1)20%, rgba(78, 206, 201, 1)100%)", color: "white", padding: "13px 36px", fontSize: "15px", height: "100%" }} />
                </div>
            </section>

        </div>
    )
}

export default header