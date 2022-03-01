import Star from './Star';

export default class Stars {
  private stars;

  constructor(quantity: number) {
    this.stars = Array(quantity)
      .fill(0)
      .map(
        () =>
          new Star([
            Math.random() * 200 - 100,
            Math.random() * 200 - 100,
            Math.random() * 200 - 100,
          ])
      );
  }

  getStars() {
    return this.stars;
  }
}
