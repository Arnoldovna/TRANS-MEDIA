import p5 from "p5";

const sketch = p5 => {
    var canvas;

    // Set height and width of canvas
    const canvasWidth = p5.windowWidth;
    const canvasHeight = p5.windowHeight;

    // make library globally available
    window.p5 = p5;

    // Setup function
    p5.setup = () => {
        let canvas = p5.createCanvas(canvasWidth, canvasHeight);
        // canvas.parent("sketch");
        p5.background(5, 55, 255);
    };

    // Draw function
    p5.draw = () => {
        // ...
    };

    // Test function, accesible from outside
    p5.test = () => {
        console.log("testing -->");
    };
};
export default sketch;
