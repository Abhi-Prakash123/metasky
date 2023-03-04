import React from "react"
import "./page3.css"
import spikes_one from "../../assets/page3/spikes_one.svg"
import spikes_two from "../../assets/page3/spikes_two.svg"
import iron_samurai from "../../assets/page3/iron_samurai.svg"
import iron_samurai_1 from "../../assets/page3/iron_samurai_1.svg"
import iron_samurai_2 from "../../assets/page3/iron_samurai_2.svg"
export default function Page3(props) {

    return (
        <div className="page page3">
            <img className="spike_left" src={spikes_one} alt=""></img>
            <img className="spike_right" src={spikes_two} alt=""></img>
            <div className="iron-samurai">
                <div style={{ position: "relative", width:"60%" }}>
                    <img className="iron-samurai-1" src={iron_samurai_1} alt=""></img>
                    <img className="iron-samurai-2" src={iron_samurai_2} alt=""></img>
                </div>
            </div>
            <span className="page3-header-1">Tanukibles</span>
            <span className="page3-header-2">Play 2 Earn Game</span>
            <span className="page3-header-3">9999 Tanuki NFTs up for grabs</span>
        </div>
    )
}