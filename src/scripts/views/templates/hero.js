class heroContent extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
    <picture>
      <source srcset="images/hero-image_2-small.jpg" type="image/jpeg">
      <img src="images/hero-image_2-small.jpg" alt="Restaurant" class="heroImage" width="100%" height="400"/>
    </picture>
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
