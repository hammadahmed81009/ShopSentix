module.exports = {
  _id: "reviewSitemap",
  startUrl: [
    "https://www.daraz.pk/products/spider-bottle-gym-shakerwater-bottles-for-gym-protein-multi-purpose-shaker-bottle-500ml-i3529873-s2159041921.html",
  ],
  selectors: [
    {
      id: "review",
      multiple: true,
      parentSelectors: ["_root"],
      regex: "",
      selector: "div.review-content-sl",
      type: "SelectorText",
    },
  ],
};
