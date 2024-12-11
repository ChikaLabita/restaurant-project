(()=>{"use strict";var n,r={249:(n,r,A)=>{A.d(r,{A:()=>B});var e=A(354),o=A.n(e),t=A(314),i=A.n(t),a=A(417),C=A.n(a),d=new URL(A(222),A.b),p=new URL(A(772),A.b),s=i()(o()),l=C()(d),c=C()(p);s.push([n.id,`@font-face {\n  font-family: 'Quicksand';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(${l}) format('woff2'),\n       url(${c}) format('woff');\n}\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml,\nbody {\n  font-family: 'Quicksand', sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\n.skiptomain {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  padding: 10px;\n  background-color: #b31500;\n  color: #fff;\n  text-decoration: none;\n  font-size: 16px;\n  z-index: 1000;\n  transition: top 0.3s ease-in-out;\n  &:focus {\n    top: 10px;\n    background-color: #ffecec;\n    color: #b31500;\n    min-width: 44px;\n    min-height: 44px;\n  }\n}\nheader {\n  margin: 12px 160px;\n  text-align: center;\n  a {\n    text-decoration: none;\n    font-weight: 800;\n    color: #6e0000;\n    padding: 12px;\n    min-width: 44px;\n    min-height: 44px;\n    &:focus {\n      background-color: #6e0000;\n      color: #fff;\n    }\n    &:focus-visible {\n      background-color: #fc4955;\n      color: #fff;\n    }\n  }\n  nav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    ul {\n      display: flex;\n      list-style: none;\n      li {\n        a {\n          color: #6e0000;\n          text-decoration: none;\n          min-width: 44px;\n          min-height: 44px;\n          transition: color 0.3s ease-in-out;\n          border-radius: 18px;\n          padding: 12px;\n        }\n      }\n    }\n    button {\n      min-width: 44px;\n      min-height: 44px;\n      color: #fff;\n      border: none;\n      border-radius: 5px;\n      cursor: pointer;\n      transition: background-color 0.3s ease-in-out;\n    }\n  }\n}\n\nh2 {\n  font-weight: bold;\n  font-size: 24px;\n  color: #6e0000;\n}\n\n.menu-button {\n  display: none;\n}\n.sidebar {\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100vh;\n  width: 250px;\n  z-index: 999;\n  box-shadow: -10px 0 10px rgba(202, 116, 116, 0.1);\n  background-color: rgba(26, 23, 23, 0.377);\n  backdrop-filter: blur(10px);\n  display: none;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  button {\n    min-width: 44px;\n    min-height: 44px;\n    border: none;\n    background: none;\n    font-size: 24px;\n    font-weight: 800;\n    color: #ffffff;\n  }\n  li {\n    list-style: none;\n    padding: 8px;\n    a {\n      display: block;\n      color: #ffff;\n      min-width: 44px;\n      min-height: 44px;\n    }\n    &:hover {\n      background-color: #8d8282;\n      color: #fff;\n    }\n  }\n}\narticle {\n  padding: 32px;\n  overflow: hidden;\n  width: 100%;\n}\n.explore-resto {\n  font-weight: bold;\n  color: #7D0A0A;\n  text-decoration: none;\n  font-size: 24px;\n  text-align: center;\n  padding: 10px;\n}\n.restaurants {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  padding: 32px;\n  margin: 0px 160px;\n}\n.restaurant {\n  padding: 24px;\n  margin-bottom: 16px;\n  border-radius: 12px;\n  box-shadow: 2px 7px 13px 0px rgba(73, 73, 73, 0.2);\n  overflow: hidden;\n  width:  100%;\n  justify-content: center;\n  &:hover {\n    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);\n    transform: translateY(-5px);\n  }\n  img {\n    width: 100%;\n    height: auto;\n    border-radius: 8px;\n    transition: transform 0.3s ease-in-out;\n    &:hover {\n      transform: translateY(-3px);\n    }\n  }\n  a {\n    text-decoration: none;\n    color: #fdfdfd;\n    margin-bottom: 8px;\n    min-width: 44px;\n    min-height: 44px;\n    transition: color 0.3s ease-in-out;\n  }\n  .restoNames {\n    font-weight: bold;\n    font-size: 24px;\n    color: #6e0000;\n  }\n  .more-detail {\n    background-color: #6e0000;\n    padding: 10px 16px;\n    margin-bottom: 8px;\n    border-radius: 8px;\n    transition: background-color 0.3s ease;\n    &:hover {\n      background-color: #575757;\n    }\n  }\n  .restoCity {\n    font-size: 18px;\n    color: #575757;\n    margin-bottom: 12px;\n  }\n  .restoDescript {\n    text-align: justify;\n  }\n}\n.star {\n  color: gold;\n}\n.hero {\n  position: relative;\n  overflow: hidden;\n}\n.heroImage {\n  object-fit: cover;\n}\n.hero-text {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #ffff;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.616);\n}\n.restaurant-card {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1fr;\n  gap: 12px;\n  overflow: hidden;\n  margin: 0 50px;\n  div.rating {\n    color: #0000008c;\n    text-align: left;\n    font-weight: bold;\n  }\n  .restoNames {\n    font-weight: bold;\n    font-size: 24px;\n  }\n  .restoCity {\n    font-size: 18px;\n    color: #00000041;\n    margin-bottom: 12px;\n  }\n  .restoDescript {\n    text-align: justify;\n    margin-bottom: 18px;\n  }\n}\n.food-container,\n.drink-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.menu-item {\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  text-align: center;\n  background-color: #f9f9f9;\n}\n.restaurant-container {\n  max-width: 800px;\n  margin: 20px auto;\n  padding: 20px;\n  background-color: #f9f9f9;\n}\nh3 {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.review-item {\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  padding: 15px;\n  margin-bottom: 15px;\n  background-color: #fff;\n  transition: box-shadow 0.3s;\n  hover {\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  };\n  p {\n    margin: 10px 0 0;\n    color: #555;\n    font-size: 14px;\n  };\n  strong {\n    color: #333;\n    font-size: 16px;\n  }\n}\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\nfooter {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 24px;\n  color: #ffff;\n  background-color: #7D0A0A;\n}\n@media (min-width: 1200px) {\n  .heroImage {\n    height: 50vh;\n  }\n}\n@media screen and (max-width: 800px) {\n  header {\n    margin: 12px 32px;\n  }\n  .menu-button {\n    display: block;\n    background: none;\n    font-weight: 800;\n    font-size: 24px;\n    color: #6e0000;\n    border: none;\n    cursor: pointer;\n  }\n  .hideSide {\n    display: none;\n  }\n  article {\n    padding: 20px;\n  }\n  .restaurants {\n    grid-template-columns: repeat(1, 1fr);\n    gap: 16px;\n    padding: 16px;\n    margin: 0 18px;\n  }\n  .restaurant-card {\n    grid-template-columns: 1fr;\n  }\n  #img img {\n    width: 100%;\n    margin: 0 auto;\n    display: block;\n  }\n \n  .menu-item {\n    padding: 8px;\n  }\n  .review-item {\n    padding: 10px;\n  }\n  footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n  }\n}\n@media screen and (max-width: 500px) {\n  header {\n    margin: 12px 32px;\n  }\n  .sidebar {\n    width: 100%;\n  }\n  .restaurants {\n    grid-template-columns: repeat(1, 1fr);\n    gap: 16px;\n  }\n}`,"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"AAAA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB;6DACqD;AACvD;AACA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;;EAEE,oCAAoC;EACpC,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,OAAO;EACP,aAAa;EACb,yBAAyB;EACzB,WAAW;EACX,qBAAqB;EACrB,eAAe;EACf,aAAa;EACb,gCAAgC;EAChC;IACE,SAAS;IACT,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,gBAAgB;EAClB;AACF;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB;IACE,qBAAqB;IACrB,gBAAgB;IAChB,cAAc;IACd,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB;MACE,yBAAyB;MACzB,WAAW;IACb;IACA;MACE,yBAAyB;MACzB,WAAW;IACb;EACF;EACA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB;MACE,aAAa;MACb,gBAAgB;MAChB;QACE;UACE,cAAc;UACd,qBAAqB;UACrB,eAAe;UACf,gBAAgB;UAChB,kCAAkC;UAClC,mBAAmB;UACnB,aAAa;QACf;MACF;IACF;IACA;MACE,eAAe;MACf,gBAAgB;MAChB,WAAW;MACX,YAAY;MACZ,kBAAkB;MAClB,eAAe;MACf,6CAA6C;IAC/C;EACF;AACF;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;AACA;EACE,eAAe;EACf,MAAM;EACN,QAAQ;EACR,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,iDAAiD;EACjD,yCAAyC;EACzC,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,2BAA2B;EAC3B;IACE,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,cAAc;EAChB;EACA;IACE,gBAAgB;IAChB,YAAY;IACZ;MACE,cAAc;MACd,YAAY;MACZ,eAAe;MACf,gBAAgB;IAClB;IACA;MACE,yBAAyB;MACzB,WAAW;IACb;EACF;AACF;AACA;EACE,aAAa;EACb,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,qBAAqB;EACrB,eAAe;EACf,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,aAAa;EACb,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,kDAAkD;EAClD,gBAAgB;EAChB,YAAY;EACZ,uBAAuB;EACvB;IACE,yCAAyC;IACzC,2BAA2B;EAC7B;EACA;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,sCAAsC;IACtC;MACE,2BAA2B;IAC7B;EACF;EACA;IACE,qBAAqB;IACrB,cAAc;IACd,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,kCAAkC;EACpC;EACA;IACE,iBAAiB;IACjB,eAAe;IACf,cAAc;EAChB;EACA;IACE,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,sCAAsC;IACtC;MACE,yBAAyB;IAC3B;EACF;EACA;IACE,eAAe;IACf,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;AACF;AACA;EACE,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,sCAAsC;AACxC;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,uBAAuB;EACvB,SAAS;EACT,gBAAgB;EAChB,cAAc;EACd;IACE,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;EACnB;EACA;IACE,iBAAiB;IACjB,eAAe;EACjB;EACA;IACE,eAAe;IACf,gBAAgB;IAChB,mBAAmB;EACrB;EACA;IACE,mBAAmB;IACnB,mBAAmB;EACrB;AACF;AACA;;EAEE,aAAa;EACb,4DAA4D;EAC5D,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;AAC3B;AACA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,2BAA2B;EAC3B;IACE,yCAAyC;EAC3C,CAAA;EACA;IACE,gBAAgB;IAChB,WAAW;IACX,eAAe;EACjB,CAAA;EACA;IACE,WAAW;IACX,eAAe;EACjB;AACF;AACA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;EACzB,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;AACA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE;IACE,YAAY;EACd;AACF;AACA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,cAAc;IACd,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,cAAc;IACd,YAAY;IACZ,eAAe;EACjB;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,qCAAqC;IACrC,SAAS;IACT,aAAa;IACb,cAAc;EAChB;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,WAAW;IACX,cAAc;IACd,cAAc;EAChB;;EAEA;IACE,YAAY;EACd;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,6BAA6B;EAC/B;AACF;AACA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,WAAW;EACb;EACA;IACE,qCAAqC;IACrC,SAAS;EACX;AACF",sourcesContent:["@font-face {\r\n  font-family: 'Quicksand';\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-display: swap;\r\n  src: url('font/Quicksand-Medium.woff2') format('woff2'),\r\n       url('font/Quicksand-Medium.woff') format('woff');\r\n}\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nhtml,\r\nbody {\r\n  font-family: 'Quicksand', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.skiptomain {\r\n  position: absolute;\r\n  top: -40px;\r\n  left: 0;\r\n  padding: 10px;\r\n  background-color: #b31500;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n  z-index: 1000;\r\n  transition: top 0.3s ease-in-out;\r\n  &:focus {\r\n    top: 10px;\r\n    background-color: #ffecec;\r\n    color: #b31500;\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n  }\r\n}\r\nheader {\r\n  margin: 12px 160px;\r\n  text-align: center;\r\n  a {\r\n    text-decoration: none;\r\n    font-weight: 800;\r\n    color: #6e0000;\r\n    padding: 12px;\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n    &:focus {\r\n      background-color: #6e0000;\r\n      color: #fff;\r\n    }\r\n    &:focus-visible {\r\n      background-color: #fc4955;\r\n      color: #fff;\r\n    }\r\n  }\r\n  nav {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    ul {\r\n      display: flex;\r\n      list-style: none;\r\n      li {\r\n        a {\r\n          color: #6e0000;\r\n          text-decoration: none;\r\n          min-width: 44px;\r\n          min-height: 44px;\r\n          transition: color 0.3s ease-in-out;\r\n          border-radius: 18px;\r\n          padding: 12px;\r\n        }\r\n      }\r\n    }\r\n    button {\r\n      min-width: 44px;\r\n      min-height: 44px;\r\n      color: #fff;\r\n      border: none;\r\n      border-radius: 5px;\r\n      cursor: pointer;\r\n      transition: background-color 0.3s ease-in-out;\r\n    }\r\n  }\r\n}\r\n\r\nh2 {\r\n  font-weight: bold;\r\n  font-size: 24px;\r\n  color: #6e0000;\r\n}\r\n\r\n.menu-button {\r\n  display: none;\r\n}\r\n.sidebar {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  height: 100vh;\r\n  width: 250px;\r\n  z-index: 999;\r\n  box-shadow: -10px 0 10px rgba(202, 116, 116, 0.1);\r\n  background-color: rgba(26, 23, 23, 0.377);\r\n  backdrop-filter: blur(10px);\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n  button {\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n    border: none;\r\n    background: none;\r\n    font-size: 24px;\r\n    font-weight: 800;\r\n    color: #ffffff;\r\n  }\r\n  li {\r\n    list-style: none;\r\n    padding: 8px;\r\n    a {\r\n      display: block;\r\n      color: #ffff;\r\n      min-width: 44px;\r\n      min-height: 44px;\r\n    }\r\n    &:hover {\r\n      background-color: #8d8282;\r\n      color: #fff;\r\n    }\r\n  }\r\n}\r\narticle {\r\n  padding: 32px;\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\n.explore-resto {\r\n  font-weight: bold;\r\n  color: #7D0A0A;\r\n  text-decoration: none;\r\n  font-size: 24px;\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n.restaurants {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 24px;\r\n  padding: 32px;\r\n  margin: 0px 160px;\r\n}\r\n.restaurant {\r\n  padding: 24px;\r\n  margin-bottom: 16px;\r\n  border-radius: 12px;\r\n  box-shadow: 2px 7px 13px 0px rgba(73, 73, 73, 0.2);\r\n  overflow: hidden;\r\n  width:  100%;\r\n  justify-content: center;\r\n  &:hover {\r\n    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);\r\n    transform: translateY(-5px);\r\n  }\r\n  img {\r\n    width: 100%;\r\n    height: auto;\r\n    border-radius: 8px;\r\n    transition: transform 0.3s ease-in-out;\r\n    &:hover {\r\n      transform: translateY(-3px);\r\n    }\r\n  }\r\n  a {\r\n    text-decoration: none;\r\n    color: #fdfdfd;\r\n    margin-bottom: 8px;\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n    transition: color 0.3s ease-in-out;\r\n  }\r\n  .restoNames {\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    color: #6e0000;\r\n  }\r\n  .more-detail {\r\n    background-color: #6e0000;\r\n    padding: 10px 16px;\r\n    margin-bottom: 8px;\r\n    border-radius: 8px;\r\n    transition: background-color 0.3s ease;\r\n    &:hover {\r\n      background-color: #575757;\r\n    }\r\n  }\r\n  .restoCity {\r\n    font-size: 18px;\r\n    color: #575757;\r\n    margin-bottom: 12px;\r\n  }\r\n  .restoDescript {\r\n    text-align: justify;\r\n  }\r\n}\r\n.star {\r\n  color: gold;\r\n}\r\n.hero {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.heroImage {\r\n  object-fit: cover;\r\n}\r\n.hero-text {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #ffff;\r\n  text-align: center;\r\n  background-color: rgba(0, 0, 0, 0.616);\r\n}\r\n.restaurant-card {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: 1fr;\r\n  gap: 12px;\r\n  overflow: hidden;\r\n  margin: 0 50px;\r\n  div.rating {\r\n    color: #0000008c;\r\n    text-align: left;\r\n    font-weight: bold;\r\n  }\r\n  .restoNames {\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n  }\r\n  .restoCity {\r\n    font-size: 18px;\r\n    color: #00000041;\r\n    margin-bottom: 12px;\r\n  }\r\n  .restoDescript {\r\n    text-align: justify;\r\n    margin-bottom: 18px;\r\n  }\r\n}\r\n.food-container,\r\n.drink-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\r\n  gap: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n.menu-item {\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  background-color: #f9f9f9;\r\n}\r\n.restaurant-container {\r\n  max-width: 800px;\r\n  margin: 20px auto;\r\n  padding: 20px;\r\n  background-color: #f9f9f9;\r\n}\r\nh3 {\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n}\r\n.review-item {\r\n  border: 1px solid #ddd;\r\n  border-radius: 5px;\r\n  padding: 15px;\r\n  margin-bottom: 15px;\r\n  background-color: #fff;\r\n  transition: box-shadow 0.3s;\r\n  hover {\r\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\r\n  };\r\n  p {\r\n    margin: 10px 0 0;\r\n    color: #555;\r\n    font-size: 14px;\r\n  };\r\n  strong {\r\n    color: #333;\r\n    font-size: 16px;\r\n  }\r\n}\r\n.like {\r\n  width: 55px;\r\n  height: 55px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #db0000;\r\n  position: fixed;\r\n  bottom: 16px;\r\n  right: 16px;\r\n  border-radius: 50%;\r\n  border: 0;\r\n  font-size: 18px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\nfooter {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  padding: 24px;\r\n  color: #ffff;\r\n  background-color: #7D0A0A;\r\n}\r\n@media (min-width: 1200px) {\r\n  .heroImage {\r\n    height: 50vh;\r\n  }\r\n}\r\n@media screen and (max-width: 800px) {\r\n  header {\r\n    margin: 12px 32px;\r\n  }\r\n  .menu-button {\r\n    display: block;\r\n    background: none;\r\n    font-weight: 800;\r\n    font-size: 24px;\r\n    color: #6e0000;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n  .hideSide {\r\n    display: none;\r\n  }\r\n  article {\r\n    padding: 20px;\r\n  }\r\n  .restaurants {\r\n    grid-template-columns: repeat(1, 1fr);\r\n    gap: 16px;\r\n    padding: 16px;\r\n    margin: 0 18px;\r\n  }\r\n  .restaurant-card {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  #img img {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    display: block;\r\n  }\r\n \r\n  .menu-item {\r\n    padding: 8px;\r\n  }\r\n  .review-item {\r\n    padding: 10px;\r\n  }\r\n  footer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n  }\r\n}\r\n@media screen and (max-width: 500px) {\r\n  header {\r\n    margin: 12px 32px;\r\n  }\r\n  .sidebar {\r\n    width: 100%;\r\n  }\r\n  .restaurants {\r\n    grid-template-columns: repeat(1, 1fr);\r\n    gap: 16px;\r\n  }\r\n}"],sourceRoot:""}]);const B=s},810:(n,r,A)=>{var e=A(72),o=A.n(e),t=A(825),i=A.n(t),a=A(659),C=A.n(a),d=A(56),p=A.n(d),s=A(540),l=A.n(s),c=A(113),B=A.n(c),f=A(249),g={};g.styleTagTransform=B(),g.setAttributes=p(),g.insert=C().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=l(),o()(f.A,g),f.A&&f.A.locals&&f.A.locals}},A={};function e(n){var o=A[n];if(void 0!==o)return o.exports;var t=A[n]={id:n,exports:{}};return r[n](t,t.exports,e),t.exports}e.m=r,n=[],e.O=(r,A,o,t)=>{if(!A){var i=1/0;for(p=0;p<n.length;p++){for(var[A,o,t]=n[p],a=!0,C=0;C<A.length;C++)(!1&t||i>=t)&&Object.keys(e.O).every((n=>e.O[n](A[C])))?A.splice(C--,1):(a=!1,t<i&&(i=t));if(a){n.splice(p--,1);var d=o();void 0!==d&&(r=d)}}return r}t=t||0;for(var p=n.length;p>0&&n[p-1][2]>t;p--)n[p]=n[p-1];n[p]=[A,o,t]},e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var A in r)e.o(r,A)&&!e.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:r[A]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(n=r.currentScript.src),!n)){var A=r.getElementsByTagName("script");if(A.length)for(var o=A.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=A[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{e.b=document.baseURI||self.location.href;var n={446:0};e.O.j=r=>0===n[r];var r=(r,A)=>{var o,t,[i,a,C]=A,d=0;if(i.some((r=>0!==n[r]))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(C)var p=C(e)}for(r&&r(A);d<i.length;d++)t=i[d],e.o(n,t)&&n[t]&&n[t][0](),n[t]=0;return e.O(p)},A=self.webpackChunkrestaurant_project=self.webpackChunkrestaurant_project||[];A.forEach(r.bind(null,0)),A.push=r.bind(null,A.push.bind(A))})(),e.nc=void 0;var o=e.O(void 0,[109,608,738,266],(()=>e(458)));o=e.O(o)})();
//# sourceMappingURL=app~04e4ec69.bundle.js.map