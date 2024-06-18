// Exercise1 
const constructPoint2D = (x) => (y) => ({
    Position: [x, y]
});
const constructRandomPoint2D = (min) => (max) => ({
    Position: [Math.floor(Math.random() * (max - min + 1) + min), Math.floor(Math.random() * (max - min + 1) + min)]
});
const constructPoint2Dextended = (x) => (y) => ({
    Position: [x, y],
    ReadLoactionA: function () {
        return this.Position[0];
    },
    ReadLocationB: function () {
        return this.Position[1];
    },
    distance: function (y) {
        return Math.sqrt((this.Position[0] - y.Position[0]) ** 2 + (this.Position[1] - y.Position[1]) ** 2);
    }
});
// Exercise3
//# sourceMappingURL=Exercise2.js.map