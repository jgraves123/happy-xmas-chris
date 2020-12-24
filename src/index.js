import React, {Component} from 'react';
import PopUp from "./PopUp";
import ReactDOM from 'react-dom';
import './index.css';
import Page2 from "./Page2";



class Home extends Component {
    state = {
        cal_open: false,
        contacts_open: false,
        notes_open: false,
        help_open: true,
        cal: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/calendar.png?raw=true",
        contacts: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/contacts.png?raw=true",
        notes: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/notes.png?raw=true",
        intro: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/intro-letter.png?raw=true",
        path: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/path.jpeg?raw=true",
        help: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/help.png?raw=true",
        colors: ["red", "blue", "green", "yellow", "orange", "purple", "white", "black"],
        cir1: 0,
        cir2: 0,
        cir3: 0,
        cir4: 0,
        part1: false,
        pt2_value: "",
        part2: false,
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

    check_part1 = () => {
        this.temp = (this.state.cir1 === 6) && (this.state.cir2 === 4) && (this.state.cir3 === 2) && (this.state.cir4 === 1)
        this.setState({
            part1: this.temp
        });
    };


    page2 = () => {
        ReactDOM.render(
            <React.StrictMode>
                <Page2/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }


    handleChange = (event) => {
        console.log(event)
        this.setState({
            pt2_value: event.target.value
        });
    }

    check_part2 = (event) => {
        event.preventDefault();
        this.temp = ("524" === this.state.pt2_value)
        this.setState({
            part2: this.temp,
            pt2_val: ""
        });
    }




    render() {
        return(
            <div>
                <body>
                {/*<Confetti/>*/}
                <header id="main-header">
                    <div className="container">
                        <h1 align='center'>Begin Your Journey</h1>
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
                <h2 align="center" className="subheading">Hello Chris, First we need to confirm your identity. </h2>
                <h3 align="center" className="subheading">Please read the documents provided and enter our two factor authorization to continue.</h3>
                <section>
                    <div className="scaling-svg-container" style={{display: "inline-block", width: "50%"}}>
                        {/*resizing*/}
                        <svg className="scaling-svg" viewBox="0 0 994 1400"> {/* Needs auto
                         updating*/}
                            <image x={.1*994} width="80%" href={this.state.intro}/>
                        </svg>
                    </div>
                    <div className="scaling-svg-container" style={{display: "inline-block", width: "50%"}}>
                        <svg className="scaling-svg" viewBox="0 0 994 1400"> {/* Needs auto
                         updating*/}
                            <image x={.1*994} width="80%" href={this.state.path}/>
                        </svg>
                    </div>

            </section>
                <h2 align="center">Two Factor Identification</h2>
                <div align={"center"}>
                    <div className="scaling-svg-container" align="center" style={{paddingBottom: "0%", display: "inline-block", width: "42%"}}>
                        {!this.state.part1 ?
                            <>
                            <div className="scaling-svg-container" style={{paddingBottom: "20%"}}>
                                <svg className="scaling-svg" viewBox="-20 -20 600 150">
                                    <circle cx="121" cy="40" r="39" className="click" stroke="white"
                                            fill={this.state.colors[this.state.cir1]}
                                            onClick={() => this.setState({cir1: (this.state.cir1 + 1) % 8})}/>
                                    <circle cx="231" cy="40" r="39" className="click" stroke="white"
                                            fill={this.state.colors[this.state.cir2]}
                                            onClick={() => this.setState({cir2: (this.state.cir2 + 1) % 8})}/>
                                    <circle cx="341" cy="40" r="39" className="click" stroke="white"
                                            fill={this.state.colors[this.state.cir3]}
                                            onClick={() => this.setState({cir3: (this.state.cir3 + 1) % 8})}/>
                                    <circle cx="451" cy="40" r="39" className="click" stroke="white"
                                            fill={this.state.colors[this.state.cir4]}
                                            onClick={() => this.setState({cir4: (this.state.cir4 + 1) % 8})}/>
                                </svg>
                            </div>
                            <button className="button" onClick={this.check_part1}><h3>Check</h3></button>
                            </>
                         : <button className="dull-button"><h3>Success</h3></button> }
                    </div>
                    <div className="scaling-svg-container" style={{paddingBottom: "0%", display: "inline-block", width: "42%"}}>
                        {!this.state.part2 ?
                            <>
                        <h2> How many possible paths (of length 12) did you have up to this point?</h2>
                        <form id="path-answer" onSubmit={this.check_part2}>
                            <label>
                                <input type="text" value={this.state.pt2_value} placeholder="Number of Paths" onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit"/>
                        </form>
                            </>
                            : <button className="dull-button"><h3>Success</h3></button> }
                    </div>

                </div>
                <div align={"center"} style={{paddingBottom: "5%"}}>
                {(this.state.part1 && this.state.part2) ?
                    <button className="button" onClick={this.page2}><h3>Continue</h3></button>
                    : null}
                </div>
                </body>
                {/*<footer id="main-footer">*/}
                {/*    <h3>Contact info?</h3>*/}
                {/*</footer>*/}
            </div>
        );
    }
}



ReactDOM.render(<Home />, document.getElementById("root"));

export default Home;
