import React from "react";
import { Grid } from "@mui/material"
import "./page2.css"
import skywallet from "../../assets/page2/skywallet.svg"
import skyclub from "../../assets/page2/skyclub.svg"
import currency from "../../assets/page2/currency.svg"
import location from "../../assets/page2/location.svg"
import lock from "../../assets/page2/lock.svg"
import work from "../../assets/page2/work.svg"
import game from "../../assets/page2/game.svg"
import tokens from "../../assets/page2/tokens.svg"
import camera from "../../assets/page2/camera.svg"
import membership from "../../assets/page2/membership.svg"
export default function Page2(props) {
    return (
        <div className="page">
            <div className="left-container">
                <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                    <img src={skywallet} alt="" style={{ width: "30%" }} />
                    <span className="left-title">Your everyday crypto wallet</span>
                </div>

                <Grid container spacing={0} sx={{ height: "60%" }}>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid className="page2-card" item xs={4} sx={{ background: "#D7AF09" }}>
                        <img src={currency} alt="" style={{ height: "20%"}} />
                        <span>Use across any app and currency</span>
                    </Grid>
                    <Grid className="page2-card" item xs={4} sx={{ background: "#C9A409;" }}>
                        <img src={location} alt="" style={{ height: "20%" }} />
                        <span>One place for all your Web3 possessions</span>
                    </Grid>
                    <Grid className="page2-card" item xs={4} sx={{ background: "#C9A409" }}>
                        <img src={lock} alt="" style={{ height: "20%"}} />
                        <span>Simple and secure</span>
                    </Grid>
                    <Grid className="page2-card" item xs={4} sx={{ background: "#E1B706" }}>
                        <img src={work} alt="" style={{ height: "20%" }} />
                        <span>Works everywhere</span>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                </Grid>
            </div>
            <div className="right-container">
                <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                    <img src={skyclub} alt="" style={{ width: "30%" }} />
                    <span className="right-title">Exclusive, for you and your community</span>
                </div>

                <Grid container spacing={0} sx={{ height: "60%" }}>

                    <Grid className="page2-card" item xs={4} sx={{ background: "#D7AF09", boxShadow: "0px 4px 34px rgba(0, 0, 0, 0.15)" }}>
                        <img src={game} alt="" style={{ height: "20%"}} />
                        <span>Chat, play games, and host events</span>
                    </Grid>
                    <Grid className="page2-card" item xs={4} sx={{ background: "#C9A409", boxShadow: "0px 4px 34px rgba(0, 0, 0, 0.15)" }}>
                        <img src={tokens} alt="" style={{ height: "20%" }} />
                        <span>Create your own DAO and Tokens in 1 click</span>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid className="page2-card" item xs={4} sx={{ background: "#E1B706", boxShadow: "0px 4px 34px rgba(0, 0, 0, 0.15)" }}>
                        <img src={camera} alt="" style={{ height: "20%" }} />
                        <span>Create eco-friendly NFT artwork and tickets </span>
                    </Grid>
                    <Grid className="page2-card" item xs={4} sx={{ background: "#D7AF09" }}>
                        <img src={membership} alt="" style={{ height: "20%" }} />
                        <span>Offer exclusive content and NFT memberships</span>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}