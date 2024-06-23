// Exercise 1 

interface Point2D {
    readonly Position: [number, number];
}

const constructPoint2D: (x: number ) => ( y: number) => Point2D = (x) => (y) => ({
    Position: [x, y]
});

const constructRandomPoint2D: (min: number) =>(max: number) => Point2D = (min) => (max) => ({
    Position: [Math.floor(Math.random() * (max - min + 1) + min), Math.floor(Math.random() * (max - min + 1) + min)]
}); 

// Exercise 2 

interface Point2Dextended extends Point2D {
    get firstcoordinate(): (this: Point2Dextended) => number;
    get secondcoordinate(): (this: Point2Dextended) => number;
    readonly distance: (this: Point2Dextended, other: Point2Dextended) => number;
}

const constructPoint2Dextended: (x: number) => (y: number) => Point2Dextended = (x) => (y) => ({
    Position: [x, y],
    firstcoordinate: function() { return this.Position[0]; },
    secondcoordinate: function() { return this.Position[1]; },
    distance: function(this: Point2Dextended, other: Point2Dextended)   { 
        return Math.sqrt(
        Math.pow(this.Position[0] - other.Position[0], 2) 
        + 
        Math.pow(this.Position[1] - other.Position[1], 2));
    }
});
    



// Exercise 3
interface blob { 
    readonly Position: [number, number]; 
    readonly Speed: number;
}

const constructBlob: () => blob = () => ({
    Position: [Math.floor(Math.random() * 100) - 50,Math.floor(Math.random() * 100) - 50],
    Speed: Math.floor(Math.random() * 5) + 1
});


// Exercise 4 
interface blobextended extends blob {
    move: () => void;
}

const constructBlobextended: () => blobextended = () => ({
    Position: [Math.floor(Math.random() * 100) - 50,Math.floor(Math.random() * 100) - 50],
    Speed: Math.floor(Math.random() * 5) + 1,
    move: function() {
        this.Position[0] += Math.floor(Math.random() * 7) - 3;
        this.Position[1] += Math.floor(Math.random() * 7) - 3;
        if (this.Position[0] > 50) this.Position[0] = 50;
        if (this.Position[0] < -50) this.Position[0] = -50;
    }
});

// Exercise 5
interface World { 
    readonly blob1: blob;
    readonly blob2: blob;
    readonly Tick: number;
    readonly Run: () => void;
}

const constructWorld: (t: number) => World = (t) => ({
    blob1: constructBlob(),
    blob2: constructBlob(),
    Tick: t,
    Run(): void {
        if (this.Tick > 0) {
            this.Tick--;
            this.b1 = this.b1.move();
            this.b2 = this.b2.move();
            this.Run();
        }
    }
});
