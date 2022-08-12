class Complex {
    constructor(re = 0, im = 0) {
        this.re = re;
        this.im = im;
    }
    square() {
        return new Complex(this.re ** 2 - this.im ** 2, 2 * this.re * this.im);
    }
    add(x) {
        return new Complex(this.re + x.re, this.im + x.im);
    }
    sub(x) {
        return new Complex(this.re - x.re, this.im - x.im);
    }
    distSq() {
        return this.re ** 2 + this.im ** 2;
    }
    dist() {
        return Math.sqrt(this.distSq());
    }
    toString() {
        return `${this.re} + ${this.im}i`;
    }
    inBound() {
        return this.distSq() <= 4;
    }
    abs() {
        return new Complex(Math.abs(this.re), Math.abs(this.im));
    }
}
const cmath = {
    square: (x) => {
        return x.square();
    },
    add: (a, b) => {
        return a.add(b);
    },
    sub: (a, b) => {
        return a.sub(b);
    }
};
export { Complex, cmath };
