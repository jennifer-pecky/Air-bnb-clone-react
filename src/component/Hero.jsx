import React from "react";
import img2 from "../images/Group 77.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={img2} alt="" className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by <br /> one-of-a-kind hosts—all without leaving <br /> home.
            </p>
        </section>
    )
}