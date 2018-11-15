isVideoPlaying = false;

function videoLoad() {
    video.loop();
    capture.hide();
    button.hide();
    isVideoPlaying = true;
}

function toggleRecording() {
    if (recorder.state != "recording") {
        recorder.start();
        button.html("Stop");
    } else {
        // https://stackoverflow.com/a/34259326
        recorder.ondataavailable = e => {
            video = createVideo(URL.createObjectURL(e.data), videoLoad);
        };

        recorder.stop();
        button.html("Record");
    }
}

function draw() {}

function setup() {
    createCanvas(480, 120);

    button = createButton("Record");
    button.position(20, 20);
    button.size(100, 50);
    button.mousePressed(toggleRecording);

    var constraints = {
        video: {
            mandatory: {
                minWidth: 330,
                minHeight: 240,
                echoCancellation: true // is this working??
            },
            optional: [{ maxFrameRate: 30 }]
        },
        audio: false
    };
    capture = createCapture(constraints, function(stream) {
        // create a recorder object with the camera stream
        recorder = new MediaRecorder(stream, {
            // mimeType: 'video/mp4'
        });
    });
}
