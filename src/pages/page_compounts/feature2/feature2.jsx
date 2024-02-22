import React from 'react'
import './feature2.css'
import Widget from '../../../compounts/widget/widget'
import Vector from '../../../../public/svg/Vector'
import Donor from '../../../../public/svg/donor'
import Handshake from '../../../../public/svg/Handshake'
import CurrencyEth from '../../../../public/svg/CurrencyEth'

function feature2() {
    return (
        <div className='feature2' id='feature'>
            <div className='widget_cont'>
                <Widget icon={<Vector />} title={"Quadratic Funding"}
                    body={"Utilizes a quadratic formula to distribute funds, providing greater support to projects with broader community backing."}
                />
                <Widget icon={<Donor />} title={"Donors Reward"}
                    body={"Rewards donors with incentives or benefits for their contributions, encouraging greater participation and engagement."}
                />
                <Widget icon={<Handshake />} title={"COC"}
                    body={"This mechanism that allows at least 50% of contributors to approve withdrawal requests from campaign creators."}
                />
                <Widget icon={<CurrencyEth />} title={"Decentralized"}
                    body={"GiveStation enables anyone to create an on-chain campaign in a few minutes."}
                />
            </div>
        </div>
    )
}

export default feature2