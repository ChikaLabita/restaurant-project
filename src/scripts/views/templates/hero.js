class heroContent extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
          <img class="lazyload heroImage"
          src="images/hero-image_2-large.jpg"
          alt="Restaurant" width="100%" height="auto"
           loading="eager" />
        <div class="hero-text">
          <h1>Welcome to Our Restaurant Catalog</h1>
          <span>Discover the best dining experiences.</span>
        </div>
          `;
  }
}

if (!customElements.get('hero-content')) {
  customElements.define('hero-content', heroContent);
}
