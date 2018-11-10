import React from "react";
import p5 from "p5";
import sketch from "./sketch";
import ReactDOM from "react-dom";

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log("JUHUUUUUU start.js");
        const sketchTest = new p5(sketch);
        // sketch.test();
    }
    render() {
        return <h1>HEEEEE</h1>;
    }
}

ReactDOM.render(<Component />, document.getElementById("main"));
