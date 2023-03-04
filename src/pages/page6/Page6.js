import React from "react";
import "./page6.css"
import big_arrow from "../../assets/page6/big_arrow.svg"
import small_arrow from "../../assets/page6/small_arrow.svg"
import background from "../../assets/page6/background.svg"
import avatar from "../../assets/page6/avatar.svg"

function isElementInViewport(element) {
    var bounding = element.getBoundingClientRect();
    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
        return true;
    } else {
        return false;
    }
}
const Avatar = (props) => {
    return (
        <div className="page6-card">
            <div className="page6-card-img">
                <img src={avatar} style={{ width: "100%", opacity: "80%" }} alt=""></img>
            </div>
            <span className="page6-card-title">Ankit Arora</span>
            <span className="page6-card-content">Co-Founder</span>
        </div>
    )
}

export default function Page6(props) {
    const toggleArrow = () => {
        let t = document.getElementById('page6-horizontal-scroll').children
        const state ={
            left:true,
            right:true
        }
        if (isElementInViewport(t[0])) {
            const elem = document.getElementById('right_arrow')
            elem.src = big_arrow
            elem.style.transform = 'rotate(0deg)'
            const elem2 = document.getElementById('left_arrow')
            elem2.src = small_arrow
            elem2.style.transform = 'rotate(0deg)'
            state.left = false

        }else{
            const elem2 = document.getElementById('left_arrow')
            elem2.src = big_arrow
            elem2.style.transform = 'rotate(180deg)'
        }
        if (isElementInViewport(t[t.length - 1])) {
            const elem2 = document.getElementById('left_arrow')
            elem2.src = big_arrow
            elem2.style.transform = 'rotate(180deg)'
            const elem = document.getElementById('right_arrow')
            elem.src = small_arrow
            elem.style.transform = 'rotate(180deg)'
            state.right = false
        }else{
            const elem = document.getElementById('right_arrow')
            elem.src = big_arrow
            elem.style.transform = 'rotate(0deg)'
        }
        return state
    }
    const scroll_left = () => {
        const state = toggleArrow()
        if(!state.right) return
        let temp = parseInt(document.getElementById('page6-horizontal-scroll').style.left.replace("%", ""))
        document.getElementById('page6-horizontal-scroll').style.left = temp - 30 + "%";

    }
    const scroll_right = () => {
        const state = toggleArrow()
        if(!state.left) return
        let temp = parseInt(document.getElementById('page6-horizontal-scroll').style.left.replace("%", ""))
        document.getElementById('page6-horizontal-scroll').style.left = temp + 30 + "%";

    }
    return (
        <div className="page page6">
            <div className="page6-header">
                <span>The metasky Team</span>
                <div style={{ display: "flex" }}>
                    <img id="left_arrow" className="arrow" src={small_arrow} onClick={scroll_right} alt=""></img>
                    <img id="right_arrow" className="arrow" src={big_arrow} onClick={scroll_left} alt=""></img>
                </div>
            </div>
            <div className="page6-conatiner">
                <div style={{ position: "absolute", width: '100%', height: "100%", padding: "0% 10% 0% 2%" }}>
                    <img style={{ width: '100%', height: "100%" }} src={background} alt=""></img>
                </div>
                <div style={{ position: "relative", width: '100%', height: "100%" }}>
                    <div style={{ left: "0%" }} id="page6-horizontal-scroll" className="page6-horizontal-scroll">
                        <Avatar />
                        <Avatar />
                        <Avatar />
                        <Avatar />
                        <Avatar />
                        <Avatar />
                        <Avatar />
                        <Avatar />
                        <Avatar />
                    </div>
                </div>
            </div>


        </div>
    )
}