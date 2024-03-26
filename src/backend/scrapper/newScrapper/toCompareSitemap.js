module.exports = {
  "_id": "daraz_api_call",
  "startUrl": [
    "https://www.daraz.pk/catalog/?q=samsung"
  ],
  "selectors": [
    {
      "id": "title",
      "multiple": false,
      "parentSelectors": [
        "cardFinal"
      ],
      "regex": "",
      "selector": "div.title-wrapper--IaQ0m",
      "type": "SelectorText"
    },
    {
      "id": "price",
      "multiple": false,
      "parentSelectors": [
        "cardFinal"
      ],
      "regex": "",
      "selector": "span.currency--GVKjl",
      "type": "SelectorText"
    },
    {
      "id": "cardFinal",
      "multiple": true,
      "parentSelectors": [
        "_root"
      ],
      "selector": "div.gridItem--Yd0sa",
      "type": "SelectorElement"
    },
    {
      "id": "reviews",
      "multiple": true,
      "parentSelectors": [
        "cardFinal"
      ],
      "regex": "",
      "selector": "span.ratig-num--KNake",
      "type": "SelectorText"
    },
    {
      "id": "image",
      "multiple": false,
      "parentSelectors": [
        "cardFinal"
      ],
      "selector": "img",
      "type": "SelectorImage"
    }
  ]
};
