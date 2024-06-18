// Exercise1 

interface Point2D {
    readonly Position: [number, number];
}

const constructPoint2D: (x: number ) => ( y: number) => Point2D = (x)=> (y) => ({
    Position: [x, y]
});

const constructRandomPoint2D: (min: number) =>(max: number) => Point2D = (min) => (max) => ({
    Position: [Math.floor(Math.random() * (max - min + 1) + min), Math.floor(Math.random() * (max - min + 1) + min)]
}); 

// Exercise2 

interface Point2Dextended extends Point2D {
    ReadLoactionA: (this: Point2Dextended) => number;
    ReadLocationB: (this: Point2Dextended) => number;
    distance: (this: Point2Dextended, y:Point2Dextended) => number;
}

const constructPoint2Dextended: (x: number) => (y: number) => Point2Dextended = (x) => (y) => ({
    Position: [x, y],
    ReadLoactionA: function(this: Point2Dextended) {
        return this.Position[0];
    },
    ReadLocationB: function(this: Point2Dextended) {
        return this.Position[1];
    },
    distance: function(this: Point2Dextended, y: Point2Dextended) {
        return Math.sqrt((this.Position[0] - y.Position[0]) ** 2 + (this.Position[1] - y.Position[1]) ** 2);
    }
});

// Exercise3

