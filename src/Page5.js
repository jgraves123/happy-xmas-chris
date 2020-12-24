import React, {Component} from 'react';
import "./index.css";
import Confetti from 'react-confetti'
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import music from './jingle.mp3'
//...


// Render a YouTube video player


class Page5 extends Component {
    state = {
        christmas: "https://raw.githubusercontent.com/jgraves123/happy-xmas-chris/master/images/Christmas.JPG?raw=true",
    }

    render(){
        //send drum beats played

        return(

            <div>
                <body>
                <ReactAudioPlayer src={music} autoPlay="true"/>
                <Confetti/>
                <header id="main-header">
                    <div className="container">
                        <h1 align='center'>Merry Christmas Chris!!</h1>
                    </div>
                </header>
                {/*<div align="center">*/}
                {/*    <ReactPlayer url='https://www.youtube.com/watch?v=fhYMh6KTJMQ' playing="true" loop="true" volume="null" muted="true"/>*/}
                {/*</div>*/}
                {/*<div height="400">*/}
                {/*</div>*/}

                <div className="scaling-svg-container" style={{paddingBottom: "45%"}}>
                    <svg className="scaling-svg" viewBox={"0 0 2816 2112"}>
                        <image x={.2*2816} width="60%" href={this.state.christmas}/>
                    </svg>
                </div>

                <div align="center">
                    <h2>Hope this was fun to do with your family!</h2>
                    <button className="dull-button"><h2>You Did It!</h2></button>
                </div>
                </body>
                {/*<footer id="main-footer">*/}
                {/*    <h3>Contact info?</h3>*/}
                {/*</footer>*/}
            </div>
        )
    }
}

export default Page5;