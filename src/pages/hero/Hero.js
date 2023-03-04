import React from "react"
import { Grid, Box } from '@mui/material';
import "./hero.css"
import hero_background from "../../assets/hero/background.svg"
import kite_icon from "../../assets/hero/kite_icon.svg"
import twitter from "../../assets/hero/twitter.svg"
import discord from "../../assets/hero/discord.svg"
import instagram from "../../assets/hero/instagram.svg"
import circle from "../../assets/hero/circle.svg"
import starts from "../../assets/hero/starts.svg"
import avatar from "../../assets/hero/avatar.svg"
import kite_line from "../../assets/hero/kite_line.svg"
import kite from "../../assets/hero/kite.svg"

const Hero = (props) => {
    return (
        <div className="page">
            <img style={{
                'position': 'absolute',
                'top': '-30vh'
            }} src={hero_background} alt="background" />
            <Box className="container">
                <Box xs={10} sx={{
                    display: "flex",
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Box className="header">
                        <img style={{ "height": "8vh" }} src={kite_icon} alt="kite_icon"></img>
                    </Box>
                    <Box sx={{ height: "3vh", wordSpacing: "100px" }} spacing="10px">
                        <img style={{ "margin": "0 10px" }} src={discord} alt="twitter"></img>
                        <img style={{ "margin": "0 10px" }} src={twitter} alt="twitter"></img>
                        <img style={{ "margin": "0 10px" }} src={instagram} alt="twitter"></img>
                    </Box>
                </Box>
                <Box xs={10} sx={{ 'height': "92vh", position: "relative" }}>
                    <Box className="navigate">
                        <span>SkyClub</span>
                        <span>Sky Wallet</span>
                        <span>Contact Now</span>
                    </Box>
                    <img style={{ 'position': 'absolute', width: "10%", right: "16%", top: "25%" }} src={starts} alt="circle"></img>
                    <img style={{ 'position': 'absolute', width: "40%", right: "20%", top: "10%" }} src={circle} alt="circle"></img>

                    <span className="hero-title">The Web3 Platform Built for You </span>

                    <div className="kite-fly" style={{ 'position': 'absolute', bottom: "60%",left:"20%" }}>
                        <div style={{ 'position': 'relative', width: "80vw" }}>
                            <img style={{
                                width: '80%',
                                position: 'absolute', paddingTop: '5%'
                            }} src={kite_line} alt="circle"></img>
                            <img style={{
                                width: '10%',
                                position: 'absolute',
                                right: '16%',
                                top: '10%'
                            }} src={kite} alt="circle"></img>
                        </div>
                    </div>
                    <img style={{ 'position': 'absolute', width: "10%", right: "30%", bottom: "0" }} src={avatar} alt="circle"></img>
                    <div className="next-page">
                        <div className="pill">
                            <div className="pill-content"></div>
                        </div>
                        <span>Drag</span>
                    </div>
                </Box>
            </Box>
        </div>
    )
}

export default Hero;