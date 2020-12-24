import React, { Component } from "react";

export default class TrappistPopUp extends Component {
    state = {
        seen: false,
        hover: false,
        text: "Hover over planets to learn more about them.",
        e: "TRAPPIST-1 e is the most likely planet in the system to be habitable according to" +
            " research released in 2018. The planet is about earth sized and with a similar" +
            " density, leading to speculation that it consists of a similar rocky surface to the" +
            " earth. Planetary Habitability Catalog labeled it as \"one of the most potentially" +
            " habitable exoplanets discovered so far.\" Researchers estimate that the planet" +
            " has a 35% chance of being habitable.",
        fg: "TRAPPIST-1 f and TRAPPIST-1 g are also both in the habitable zone. Scientists" +
            " estimate that there is a 15% chance of each of them being habitable.",
        cdh: "TRAPPIST-1 c, d, and h are close to the habitable range, but their relatively lower" +
            " densities make them less likely to have a solid rock surface. Researchers estimate" +
            " each of these has a 5% change of being able to support human life.",
        b: "TRAPPIST-1 b is very unlikely to support life as it is too close to the TRAPPIST-1" +
            " star."
    };


// <p>TRAPPIST-1 f and TRAPPIST-1 g are also both in the habitable zone. Scientists estimate
// that there is a 15% chance of them being habitable.
// and c, d, and
// h are close
// to the
// range, but their relatively lower densities make them less likely to have a solid rock surface. Researchers estimate each of these has between a 5% and 15% chance of being habitable.


    togglePopE = () => {
        console.log("I'm here")
        this.setState({
            text: this.state.e
        });
    };

    togglePopFG = () => {
        console.log("I'm here")
        this.setState({
            text: this.state.fg
        });
    };

    togglePopCDH = () => {
        console.log("I'm here")
        this.setState({
            text: this.state.cdh
        });
    };

    togglePopB = () => {
        console.log("I'm here")
        this.setState({
            text: this.state.b
        });
    };

    toggleHoverPop = () => {
        console.log("I'm here")
        this.setState({
            hover: !this.state.hover
        });
    };

    handleClick = () => {
        this.props.toggle();
    };



    render() {
        return (
            <div className="modal">
                <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
                    <h2 align="center" className="greytext">TRAPPIST-1</h2>
                    <p align="center" className="popUpP">TRAPPIST-1 is a star located  40 lightyears away with seven terrestrial planets (composed primarily of silicate rocks or metals), which is the most of any known planetary system. Three of these planets are in the habitable zone with a fourth right on the edge.</p>
                    <div className="scaling-svg-container" style={{paddingBottom: "36%"}}>
                        <svg className="scaling-svg"viewBox="0 0 1190 554"> {/* Needs
                         auto
                         updating*/}
                            <image x="119" width="80%" href="https://raw.githubusercontent.com/jgraves123/ESCovid-2.0/master/images/trappist_sys.jpg?raw=true"/>
                            <circle cx="223" cy="268" r="60" className="clickable-done" onMouseEnter={this.togglePopB}/>
                            <circle cx="355" cy="268" r="56" className="clickable-done" onMouseEnter={this.togglePopCDH}/>
                            <circle cx="491" cy="268" r="42" className="clickable-done" onMouseEnter={this.togglePopCDH}/>
                            <circle cx="626" cy="268" r="50" className="clickable-done" onMouseEnter={this.togglePopE}/>
                            <circle cx="757" cy="267" r="56" className="clickable-done" onMouseEnter={this.togglePopFG}/>
                            <circle cx="890" cy="266" r="60" className="clickable-done" onMouseEnter={this.togglePopFG}/>
                            <circle cx="1025" cy="266" r="40" className="clickable-done" onMouseEnter={this.togglePopCDH}/>


                        </svg>
                    </div>
                    <div>
                        <h3 align="center">{this.state.text}</h3>
                    </div>
                </div>
            </div>
        );
    }
}