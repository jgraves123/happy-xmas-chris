import React, { Component } from "react";

export default class PopUp extends Component {


    render() {
        console.log("it me folks")
        return (
            <div className="modal">
                <div className="modal_content">
                    <form>
                        <h3>Register!</h3>
                        <label>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        <br />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        );
    }
}