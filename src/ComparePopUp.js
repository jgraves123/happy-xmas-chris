import React, { Component } from "react";

export default class ComparePopUp extends Component {


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
                    <h2 className="greytext" align="center" style={{marginBottom: "10px"}}>Compare Star Systems</h2>
                    <table border="1" width="80%" align="center" className="table-fill">
                        <thead>
                        <tr align = "center">
                            <th width="40%"></th>
                            <th width="30%">Gliese 876</th>
                            <th>TRAPPIST-1</th>
                        </tr>
                        </thead>
                        <tbody className="table-hover">
                        <tr>
                            <td>Travel Time (Astronauts)</td>
                            <td>9.9 years</td>
                            <td>26.3 years</td>
                        </tr>
                        <tr>
                            <td>Travel Time (Earth</td>
                            <td>31.5 years</td>
                            <td>84.2 years</td>
                        </tr>
                        <tr>
                            <td>Net Success Rate (Assuming Independence)</td>
                            <td>~28%</td>
                            <td>~43%</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
