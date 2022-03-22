import React from "react"
import TwitterLogo from "../images/twitter-square-brands.svg"
import FacebookLogo from "../images/facebook-square-brands.svg"
import InstagramLogo from "../images/instagram-square-brands.svg"
import LinkedinLogo from "../images/linkedin-brands.svg"
import GithubLogo from "../images/github-square-brands.svg"

export default function Footer() {
    return(
        <div className="footer">
            <div className="footer--content">
                <a href="#">
                    <img src={TwitterLogo}  className="footer--logo"/>
                </a>
                <a href="#">
                    <img src={FacebookLogo}  className="footer--logo"/>
                </a>
                <a href="#">
                    <img src={InstagramLogo}  className="footer--logo"/>
                </a>
                <a href="#">
                    <img src={LinkedinLogo} className="footer--logo"/>
                </a>
                <a href="#">
                    <img src={GithubLogo}  className="footer--logo"/>
                </a>
            </div>
        </div>
    )
}