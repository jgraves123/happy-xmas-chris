import React, {Component} from 'react';
import PopUp from "./PopUp";
import ReactDOM from 'react-dom';
import './index.css';
import Page5 from "./Page5";





export default class Page4 extends Component {
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
        location: false,
        loc: ""
    };


    calPop = () => {
        this.setState({
            cal_open: !this.state.cal_open,
            contacts_open: false,
            notes_open: false,
            help_open: false,
        });
    };

    contactsPop = () => {
        this.setState({
            contacts_open: !this.state.contacts_open,
            cal_open: false,
            notes_open: false,
            help_open: false,
        });
    };

    notesPop = () => {
        this.setState({
            notes_open: !this.state.notes_open,
            cal_open: false,
            contacts_open: false,
            help_open: false,
        });
    };

    helpPop = () => {
        this.setState({
            help_open: !this.state.help_open,
            cal_open: false,
            contacts_open: false,
            notes_open: false,
        });
    };


    page5 = () => {
        ReactDOM.render(
            <React.StrictMode>
                <Page5/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }


    handleChangeLoc = (event) => {
        this.setState({
            loc: event.target.value
        });
    }

    check_Loc = (event) => {
        event.preventDefault();
        this.temp = this.state.loc === "Faneuil Hall"
        if (!this.temp) {
            alert("Incorrect Code")
        }
        this.setState({
            location: this.temp
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
                <h1 align="center" className="subheading">Almost time to Celebrate!</h1>
                <h2 align="center" className="subheading">It's December 23rd, and you made it to Stanford and back in time to celebrate Christmas! As you land in Boston though, you have a sinking feeling that you're forgetting something and wrack you mind to figure it out. Where are you supposed to go before leaving the city??</h2>
                {!this.state.location ?
                    <div align="center">
                        <div style={{width: "40%", paddingBottom: "5%"}}>
                            <h2>Where do you need to stop before finally being ready to celebrate the holiday?</h2>
                            <form id="path-answer" onSubmit={this.check_Loc}>
                                <label>
                                    <input type="text" value={this.state.pt2_value} placeholder="Where to stop??" onChange={this.handleChangeLoc} />
                                </label>
                                <input type="submit" value="Submit"/>
                            </form>
                        </div>
                    </div>
                :
                    <div align={"center"} style={{paddingBottom: "5%"}}>
                        <button className="button" onClick={this.page5}><h3>Success! Click to Continue</h3></button>
                    </div>}
                </body>
            </div>
        );
    }
}



ReactDOM.render(<Page4 />, document.getElementById("root"));


