"use strict";
// Exercise 1 
Object.defineProperty(exports, "__esModule", { value: true });
const constructPoint2D = (x) => (y) => ({
    Position: [x, y]
});
const constructRandomPoint2D = (min) => (max) => ({
    Position: [Math.floor(Math.random() * (max - min + 1) + min), Math.floor(Math.random() * (max - min + 1) + min)]
});
const constructPoint2Dextended = (x) => (y) => ({
    Position: [x, y],
    firstcoordinate: function () { return this.Position[0]; },
    secondcoordinate: function () { return this.Position[1]; },
    distance: function (other) {
        return Math.sqrt(Math.pow(this.Position[0] - other.Position[0], 2)
            +
                Math.pow(this.Position[1] - other.Position[1], 2));
    }
});
const constructBlob = () => ({
    Position: [Math.floor(Math.random() * 100) - 50, Math.floor(Math.random() * 100) - 50],
    Speed: Math.floor(Math.random() * 5) + 1
});
const constructBlobextended = () => ({
    Position: [Math.floor(Math.random() * 100) - 50, Math.floor(Math.random() * 100) - 50],
    Speed: Math.floor(Math.random() * 5) + 1,
    move: function () {
        this.Position[0] += Math.floor(Math.random() * 7) - 3;
        this.Position[1] += Math.floor(Math.random() * 7) - 3;
        if (this.Position[0] > 50)
            this.Position[0] = 50;
        if (this.Position[0] < -50)
            this.Position[0] = -50;
    }
});
const constructWorld = (t) => ({
    blob1: constructBlob(),
    blob2: constructBlob(),
    Tick: t,
    Run() {
        if (this.Tick > 0) {
            this.Tick--;
            this.b1 = this.b1.move();
            this.b2 = this.b2.move();
            this.Run();
        }
    }
});
//# sourceMappingURL=Exercise2.js.map