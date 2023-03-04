import React from "react"
import "./page4.css"
import background from "../../assets/page4/background.svg"
export default function Page4(props) {
    return (
        <div className="page page4">
            <img style={{
                width: "100%",
                position: 'absolute',
                top: '-7%'
            }} src={background} alt=""></img>

            <span className="page4-web3">web3</span>

            <div className="page4-content">
                <span>Communities are the lifeblood of society.</span>
                <p>Decentralised communities are going to be the lifeblood of the metaverse. </p>
                <p>Metasky aims to empower influencers, creators and brands to build happy, motivated Web3 communities with a strong sense of belongingness. </p>
            </div>
        </div>
    )
}