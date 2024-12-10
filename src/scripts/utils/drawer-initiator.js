const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    if (drawer.style.display === 'flex') {
      this.hideSidebar(drawer);
    } else {
      this.showSidebar(drawer);
    }
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    this.hideSidebar(drawer);
  },

  showSidebar(drawer) {
    drawer.style.display = 'flex'; // Show the sidebar
  },

  hideSidebar(drawer) {
    drawer.style.display = 'none'; // Hide the sidebar
  },
};

export default DrawerInitiator;