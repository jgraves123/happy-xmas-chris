import React, {Component} from 'react';
import PopUp from "./PopUp";
import ReactDOM from 'react-dom';
import './index.css';
import Page4 from "./Page4";





export default class Page3 extends Component {
    state = {
        cal_open: false,
        contacts_open: false,
        notes_open: false,
        help_open: false,
        cal: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/calendar.png?raw=true",
        contacts: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/contacts.png?raw=true",
        notes: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/notes.png?raw=true",
        letter: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/phd-letter.png?raw=true",
        map: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/map.jpeg?raw=true",
        math: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/map-math.png?raw=true",
        help: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/help.png?raw=true",
        message: false,
        mess: ""
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


    page4 = () => {
        ReactDOM.render(
            <React.StrictMode>
                <Page4/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }


    handleChangeMess = (event) => {
        this.setState({
            mess: event.target.value
        });
    }

    check_message = (event) => {
        event.preventDefault();
        this.temp = this.state.mess === "congrats"
        this.setState({
            message: this.temp
        });
    }





    render() {
        return(
            <div>
                <body>
                {/*<Confetti/>*/}
                <header id="main-header">
                    <div className="container">
                        <h1 align='center'>Receiving PhD</h1>
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
                    {this.state.help_open ? <PopUp title="Help" x="1572" y="512" width="100%" image={this.state.help} padding="34%" toggle={this.helpPop} /> : null}

                </div>
                <h2 align="center" className="subheading">Yay! You've finished presenting your thesis!</h2>
                <h3 align="center" className="subheading">Now you must visit Stanford to officially be awarded your doctorate! <br/> Along the way can you decode the message left in the tracks (or should I say contrails)?</h3>
                <div className="scaling-svg-container" style={{paddingBottom: "50%"}}>
                    <svg className="scaling-svg" viewBox={"0 0 1542 1204"}>
                        <image x={.2*1542} width="60%" href={this.state.letter}/>
                    </svg>
                </div>
                <div className="scaling-svg-container" style={{paddingBottom: "65%"}}>
                    <svg className="scaling-svg" viewBox={"0 0 6500 4000"}>
                        <image x={0*6500} width="100%" href={this.state.map}/>
                    </svg>
                </div>
                <div className="scaling-svg-container" style={{paddingBottom: "25%"}}>
                    <svg className="scaling-svg" viewBox={"0 0 1672 422"}>
                        <image x={0.05*1672} width="90%" href={this.state.math}/>
                    </svg>
                </div>
                {!this.state.message ?
                    <div align="center">
                        <div style={{width: "40%", paddingBottom: "5%"}}>
                            <h2> Enter the secret message below <br />(8 undercase letters):</h2>
                            <form id="path-answer" onSubmit={this.check_message}>
                                <label>
                                    <input type="text" value={this.state.pt2_value} placeholder="Secret Message" onChange={this.handleChangeMess} />
                                </label>
                                <input type="submit" value="Submit"/>
                            </form>
                        </div>
                    </div>
                    :
                    <div align={"center"} style={{paddingBottom: "5%"}}>
                        <button className="button" onClick={this.page4}><h3>Success! Click to Continue</h3></button>
                    </div>}

                </body>
            </div>
        );
    }
}



ReactDOM.render(<Page3 />, document.getElementById("root"));
