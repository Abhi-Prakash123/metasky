import React from "react"
import './page5.css'
import background from "../../assets/page5/background.svg"
import background_2 from "../../assets/page5/background_2.svg"
import pill_background from "../../assets/page5/pill_background.svg"
import you from "../../assets/page5/you.svg"
import investors_tag from "../../assets/page5/investors_tag.svg"
import core_team_tag from "../../assets/page5/core_team_tag.svg"
import curve_1 from "../../assets/page5/curve_1.svg"
import curve_2 from "../../assets/page5/curve_2.svg"
const Pill = ({ percentage, title }) => {
    return (
        <div style={{
            position: "relative", height: "100%", margin: "0 2%", display: "flex", flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div className="page5-pill">
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: "absolute",
                    bottom: "0",
                    background: parseInt(percentage) < 50 ? "#252BB5" : "#BC53DF",
                    height: percentage + "%",
                    content: ".",
                    width: '100%'
                }}>
                    <span className="page5-perc">{percentage}%</span>
                </div>
                <img style={{ width: '70%', marginBottom: "20%", zIndex: "5" }} src={pill_background} alt=""></img>

            </div>

        </div>
    )
}
export default function Page5(props) {

    return (
        <div className="page page5">
            <img className="page5-background" src={background} alt=""></img>
            <img className="page5-background" src={background_2} alt=""></img>
            <span className="page5-title">Organization Structure</span>

            <div style={{
                position: "absolute", top: "30%", width: "100%"
            }}>
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <div style={{ position: "absolute", left: "23%", width: "15rem" }}>
                        <img style={{ position: "absolute", width: "100%" }} src={you} alt=""></img>
                        <img style={{ position: "absolute", width: "10%", marginLeft: "15rem", top: "6rem" }} src={curve_1} alt=""></img>
                        <div style={{ position: "absolute", top: "2rem", marginLeft: "2.5rem" }}>
                            <Pill percentage={60} />
                        </div>
                        <span style={{ position: "absolute", marginLeft: "3rem", top: "21rem" }} className="page5-pill-title">COMMUNITY</span>

                    </div>

                    <div style={{ position: "absolute", left: "40%", width: "15rem" }}>
                        <span style={{ position: "absolute", marginLeft: "3rem", }} className="page5-pill-title">INVESTORS</span>

                        <div style={{ position: "absolute", top: "2rem", marginLeft: "2.5rem" }}>
                            <Pill percentage={20} />
                        </div>
                        <img style={{ position: "absolute", width: "100%", top: "14rem" }} src={investors_tag} alt=""></img>
                        <img style={{ position: "absolute", width: "15%", marginLeft: "14.5rem", top: "6rem" }} src={curve_2} alt=""></img>


                    </div>

                    <div style={{ position: "absolute", left: "57%", width: "15rem" }}>
                        <img style={{ position: "absolute", width: "100%" }} src={core_team_tag} alt=""></img>
                        <div style={{ position: "absolute", top: "2rem", marginLeft: "2.5rem" }}>
                            <Pill percentage={60} />
                        </div>
                        <span style={{ position: "absolute", marginLeft: "3rem", top: "21rem" }} className="page5-pill-title">CORE TEAM</span>

                    </div>

                </div>

            </div>
        </div >
    )
}