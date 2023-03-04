import React from "react"
import "./page7.css"
import kite from "../../assets/page7/kite.svg"
import title from "../../assets/page7/title.svg"
import statue from "../../assets/page7/statue.svg"

export default function Page7(props) {
    return (
        <div className="page page7">
            <img style={{ position: "absolute", bottom: "0", left: "50%", transform: 'translate(-50%, 0)', width: "40%" }} src={statue} alt=""></img>

            <div className="page7-kite-fly" style={{ width: "100%", position: "absolute", top: "0%", left: "0%" }}>
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <img style={{ position: "absolute", width: "100%" }} src={kite} alt=""></img>
                    <img style={{ position: "absolute", width: "50%", left: '50%', transform: "translate(-50%, 130%)" }} src={title} alt=""></img>
                </div>
            </div>
            <div style={{ position: "absolute", top: '35%', width: "100%", display: "flex", justifyContent: 'center' }}>
                <div style={{ background: '#FFD318' }} className="pill-button">JOIN THE TEAM</div>
                <div style={{ border: '1px solid black' }} className="pill-button">BUSINESS INQUIRIES</div>
            </div>

        </div>
    )
}