class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  str() {
    return "(" + this.x + "," + this.y + ")";
  }

  eq(other) {
    return this.x == other.x && this.y == other.y;
  }

  ne(other) {
    return !this.eq(other);
  }

  getP() {
    return [this.x, this.y];
  }

  copy() {
    let v = new Vector(this.x, this.y);
    return v;
  }

  add(other) {
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  subtract(other) {
    return this.add(-other);
  }

  dot(other) {
    return this.x * other.x + this.y * other.y;
  }

  multiply(k) {
    this.x *= k;
    this.y *= k;
    return this;
  }

  negate() {
    return this.multiply(-1);
  }

  divide(k) {
    this.multiply(1/k);
  }

  normalize() {
    return this.divide(this.length());
  }

  length() {
    return Math.sqrt(this.x**2 + this.y**2);
  }

  reflect(normal) {
    n = normal.copy();
    n.multiply( 2 * this.dot(normal) );
    this.subtract(n);
    return this;
  }
}
