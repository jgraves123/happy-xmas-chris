import React, {Component} from 'react';
import "./index.css";
import Confetti from 'react-confetti'
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import music from './jingle.mp3'
//...


// Render a YouTube video player


class Page5 extends Component {


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
                    <h2>Merry Christmas Chris! Hope this was fun to do with your family!</h2>
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