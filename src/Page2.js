import React, {Component} from 'react';
import PopUp from "./PopUp";
import ReactDOM from 'react-dom';
import './index.css';
import Page3 from "./Page3";




export default class Page2 extends Component {
    state = {
        cal_open: false,
        contacts_open: false,
        notes_open: false,
        help_open: false,
        cal: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/calendar.png?raw=true",
        contacts: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/contacts.png?raw=true",
        notes: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/notes.png?raw=true",
        intro: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/intro-letter.png?raw=true",
        path: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/path.jpeg?raw=true",
        password: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/password.png?raw=true",
        letters: ["A", "B", "C", "D", "E", "F", "G", "H"],
        phone_number: "",
        phone: false,
        pass: "",
        computer: false,
        slides: false,
        slide1: 0,
        slide2: 1,
        slide3: 2,
        slide4: 3,
        slide5: 4,
        slide6: 5,
        slide7: 6,
        slide8: 7,
    };


    calPop = () => {
        this.setState({
            cal_open: !this.state.cal_open
        });
    };

    contactsPop = () => {
        this.setState({
            contacts_open: !this.state.contacts_open
        });
    };

    notesPop = () => {
        this.setState({
            notes_open: !this.state.notes_open
        });
    };

    helpPop = () => {
        this.setState({
            help_open: !this.state.help_open
        });
    };


    page3 = () => {
        ReactDOM.render(
            <React.StrictMode>
                <Page3/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }


    handleChangePhone = (event) => {
        this.setState({
            phone_number: event.target.value
        });
    }

    handleChangePass = (event) => {
        this.setState({
            pass: event.target.value
        });
    }

    check_phone = (event) => {
        console.log(this.state.phone_number)
        event.preventDefault();
        this.temp = ("617-916-5316" === this.state.phone_number)
        this.setState({
            phone: this.temp,
        });
    }

    check_pass = (event) => {
        console.log(this.state.pass)
        event.preventDefault();
        this.temp = ("FAMILY" === this.state.pass)
        this.setState({
            computer: this.temp,
        });
    }

    check_slides = () => {
        this.temp = (this.state.slide1 === 2) && (this.state.slide2 === 6) && (this.state.slide3 === 7) && (this.state.slide4 === 1) && (this.state.slide5 === 3) && (this.state.slide6 === 0) && (this.state.slide7 === 4) && (this.state.slide8 === 5)
        console.log(this.temp)
        console.log(this.state.slide1)
        this.setState({
            slides: this.temp
        });
    };




    render() {
        return(
            <div>
                <body>
                {/*<Confetti/>*/}
                <header id="main-header">
                    <div className="container">
                        <h1 align='center'>Thesis Defense</h1>
                    </div>
                </header>
                <nav id="navbar">
                    <div className="container">
                        <ul>
                            <li><a onClick = "window.location.reload();">Home</a></li>
                            <li><a onClick={this.calPop}>Calendar</a></li>
                            <li><a onClick={this.contactsPop}>Contacts</a></li>
                            <li><a onClick={this.notesPop}>Notes</a></li>
                            <li><a onClick={this.helpPop}>Help</a></li>
                        </ul>
                    </div>
                </nav>
                <div height="400">
                    {/*if state is true, do this pop-up*/}
                    {this.state.cal_open ? <PopUp title="Decemeber 2020" x="1840" y="1130" width="100%" image={this.state.cal} padding="62%" toggle={this.calPop} /> : null}
                    {this.state.contacts_open ? <PopUp title="Contact List" x="744" y="1164" width="60%" image={this.state.contacts} padding="96%" toggle={this.contactsPop} /> : null}
                    {this.state.notes_open ? <PopUp title="My Notes" x="1188" y="1422" width="80%" image={this.state.notes} padding="96%" toggle={this.notesPop} /> : null}
                    {this.state.help_open ? <PopUp title="Help" x="1188" y="1422" width="80%" image={this.state.notes} padding="96%" toggle={this.helpPop} /> : null}

                </div>
                {!this.state.phone ?
                    <div align="center">
                        <div align="center" style={{width: "80%"}}>
                            <h2 align="center" className="subheading">Finishing Presentation</h2>
                            <h3 align="center" className="subheading">You need to finish up your
                                presentation, but realize it isn't saved under you're account. Why
                                would that be?????</h3>
                            <h3 align="center" className="subheading">You realize it's because
                                you've been loaning a computer, but you don't have the password.
                                You'll need to find the cell phone number of the computer's owner to
                                find the computer's password.</h3>
                            <form id="path-answer" onSubmit={this.check_phone}>
                                <label>
                                    <input type="text" value={this.state.pt2_value} ref="val"
                                           placeholder={"Enter Phone Number"}
                                           onChange={this.handleChangePhone}
                                           style={{marginRight: 10, width: "40%"}}/>
                                </label>
                                <input type="submit" value="Submit"
                                       style={{marginLeft: 10, width: "40%"}}/>
                            </form>
                        </div>
                    </div>
                    :
                    <div>
                        <h2 align="center" className="subheading">Decode Password</h2>
                        <h3 align="center" className="subheading">Ali didn't want to send you his password directly, so she encrypted it below. See if you can crack it!</h3>
                        <div className="scaling-svg-container" style={{paddingBottom: "38%"}}>
                            <svg className="scaling-svg" viewBox={"0 0 718 644"}> {/* Needs
                         auto
                         updating*/}
                                <image x={.3*718} width={"40%"} href={this.state.password}/>
                            </svg>
                        </div>
                    </div>
                }
                {!this.computer ?
                    <div align="center">
                    <div algin="center" style={{margin: "10", paddingBottom: "3%", width: "40%"}}>
                        <h3> Please enter Computer Password</h3>
                        <form id="path-answer" onSubmit={this.check_pass}>
                            <label>
                                <input type="text" value={this.state.pt2_value} placeholder="Password" onChange={this.handleChangePass} style={{width: "60%"}}/>
                            </label>
                            <input type="submit" value="Submit" style={{width: "60%"}}/>
                        </form>
                    </div>
                    </div>
                    : <button className="dull-button"><h3>Success</h3></button> }
                <div align="center" >
                    {!this.state.computer ?
                        <div align="center">
                        <table width="80%">
                            <tr>
                                <td style={{textAlign: "center", padding: "10%"}}>Please enter computer password above :(</td>
                            </tr>
                        </table>
                        </div>
                    :
                        <>
                            <div className="scaling-svg-container" style={{paddingBottom: "15%"}}>
                                <svg className="scaling-svg" viewBox="-20 -20 620 100">
                                    <rect x="20" y="0" width="50" height="50" className="click" stroke="white"
                                            onClick={() => this.setState({slide1: (this.state.slide1 + 1) % 8})}/>
                                    <text x="45" y="25" fill="red" textAnchor="middle" alignmentBaseline="central">{this.state.letters[this.state.slide1]}</text>
                                    <rect x="90" y="0" width="50" height="50" className="click" stroke="white"
                                          onClick={() => this.setState({slide2: (this.state.slide2 + 1) % 8})}/>
                                    <text x="115" y="25" fill="red" textAnchor="middle" alignmentBaseline="central">{this.state.letters[this.state.slide2]}</text>
                                    <rect x="160" y="0" width="50" height="50" className="click" stroke="white"
                                          onClick={() => this.setState({slide3: (this.state.slide3 + 1) % 8})}/>
                                    <text x="185" y="25" fill="red" textAnchor="middle" alignmentBaseline="central">{this.state.letters[this.state.slide3]}</text>
                                    <rect x="230" y="0" width="50" height="50" className="click" stroke="white"
                                          onClick={() => this.setState({slide4: (this.state.slide4 + 1) % 8})}/>
                                    <text x="255" y="25" fill="red" textAnchor="middle" alignmentBaseline="central">{this.state.letters[this.state.slide4]}</text>
                                    <rect x="300" y="0" width="50" height="50" className="click" stroke="white"
                                          onClick={() => this.setState({slide5: (this.state.slide5 + 1) % 8})}/>
                                    <text x="325" y="25" fill="red" textAnchor="middle" alignmentBaseline="central">{this.state.letters[this.state.slide5]}</text>
                                    <rect x="370" y="0" width="50" height="50" className="click" stroke="white"
                                          onClick={() => this.setState({slide6: (this.state.slide6 + 1) % 8})}/>
                                    <text x="395" y="25" fill="red" textAnchor="middle" alignmentBaseline="central">{this.state.letters[this.state.slide6]}</text>
                                    <rect x="440" y="0" width="50" height="50" className="click" stroke="white"
                                          onClick={() => this.setState({slide7: (this.state.slide7 + 1) % 8})}/>
                                    <text x="465" y="25" fill="red" textAnchor="middle" alignmentBaseline="central">{this.state.letters[this.state.slide7]}</text>
                                    <rect x="510" y="0" width="50" height="50" className="click" stroke="white"
                                          onClick={() => this.setState({slide8: (this.state.slide8 + 1) % 8})}/>
                                    <text x="535" y="25" fill="red" textAnchor="middle" alignmentBaseline="central">{this.state.letters[this.state.slide8]}</text>
                                </svg>
                            </div>
                            {!this.state.slides ?
                                <button className="button" onClick={this.check_slides}><h3>Check Order</h3></button>
                            : <button className="button" onClick={this.page3}><h3>Success!! Click to Continue</h3></button>}
                        </>}
                </div>

                <div align={"center"} style={{paddingBottom: "5%"}}>
                        <button className="button" onClick={this.page3}><h3>Continue</h3></button>
                </div>

                </body>
            </div>
        );
    }
}



ReactDOM.render(<Page2 />, document.getElementById("root"));
