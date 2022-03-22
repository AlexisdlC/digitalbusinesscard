import React from "react"
import MainImg from "../images/IMG-7820.png"
import EmailIcon from "../images/email-icon.png"

export default function Info() {
    return(
        <div className="info">
            <img className="info--image" src={MainImg} />
            <h1 className="info--Name">Huxley Tuxedo</h1>
            <h2 className="info--Job">Cat President</h2>
            <h3 className="info--Website">huxley.tuxedo</h3>
            <button className="info--Email_button"><img className="info--email_icon" src={EmailIcon}/> <span className="info--email_span">Email</span></button>
        </div>
    )
}