class Complex {
    re: number;
    im: number;

    constructor(re: number = 0, im: number = 0) {
        this.re = re;
        this.im = im;
    }

    square(): Complex {
        return new Complex(this.re ** 2 - this.im ** 2, 2 * this.re * this.im);
    }

    add(x: Complex): Complex {
        return new Complex(this.re + x.re, this.im + x.im);
    }

    sub(x: Complex): Complex {
        return new Complex(this.re - x.re, this.im - x.im);
    }

    distSq(): number {
        return this.re ** 2 + this.im ** 2
    }

    dist(): number {
        return Math.sqrt(this.distSq())
    }

    toString(): string {
        return `${this.re} + ${this.im}i`;
    }

    inBound(): boolean {
        return this.distSq() <= 4;
    }

    abs(): Complex {
        return new Complex(Math.abs(this.re), Math.abs(this.im));
    }
}

const cmath = {
    square: (x: Complex): Complex => {
        return x.square();
    },
    
    add: (a: Complex, b: Complex): Complex => {
        return a.add(b);
    },

    sub: (a: Complex, b: Complex): Complex => {
        return a.sub(b);
    }
};

export { Complex, cmath }