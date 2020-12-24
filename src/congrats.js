import React, {Component} from 'react';
import "./index.css";
import Confetti from 'react-confetti'
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import music from './end.mp3'
//...


// Render a YouTube video player


function home(){
    console.log("here too?")
    window.location.reload();
}

class Congrats extends Component {


    render(){
        //send drum beats played

        return(

            <div>
                <body>
                <ReactAudioPlayer src={music} autoPlay="true"/>
                <Confetti/>
                <header id="main-header">
                    <div className="container">
                        <h1 align='center'>Congratulations!!</h1>
                    </div>
                </header>
                <div align="center">
                    <ReactPlayer url='https://www.youtube.com/watch?v=fhYMh6KTJMQ' playing="true" loop="true" volume="null" muted="true"/>
                </div>
                {/*<section><div className="container"><img src={ship} className="image" usemap="#wayout" alt=""/>*/}
                {/*    <map name="wayout">*/}
                {/*        <area shape="polygon" coords="1, 1, 20vw, 1, 20vw, 20vw, 1, 20vw" title="View" href="gliese876.html"></area>*/}
                {/*    </map>*/}
                {/*    </div></section>*/}
                <div height="400">
                </div>

                <div align="center">
                    <h2>You have successfully set course for {this.props.planet}! <br/> The fate of the world is in your hands.</h2>
                    <button className="button"><h2>Join the Leaderboard</h2></button>
                </div>
                </body>
                {/*<footer id="main-footer">*/}
                {/*    <h3>Contact info?</h3>*/}
                {/*</footer>*/}
            </div>
        )
    }
}

export default Congrats;