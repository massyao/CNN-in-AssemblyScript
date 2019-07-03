export default class Shape {
    constructor(public width: f64, public height: f64, public depth: f64) {
        this.width = NativeMath.floor(width);
        this.height = NativeMath.floor(height);
        this.depth = NativeMath.floor(depth);
    }

    get_size(): f64 {
        return this.width * this.height * this.depth;
    }
}