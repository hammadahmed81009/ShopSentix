module.exports = {
  "_id": "daraz_api_call",
  "startUrl": [
    "https://www.daraz.pk/catalog/?q=samsung"
  ],
  "selectors": [
    {
      "id": "card2",
      "parentSelectors": [
        "_root"
      ],
      "type": "SelectorElement",
      "selector": "div.gridItem--Yd0sa",
      "multiple": true
    },
    {
      "id": "title",
      "parentSelectors": [
        "card2"
      ],
      "type": "SelectorText",
      "selector": "div.title-wrapper--IaQ0m",
      "multiple": true,
      "regex": ""
    },
    {
      "id": "price",
      "parentSelectors": [
        "card2"
      ],
      "type": "SelectorText",
      "selector": "span.currency--GVKjl",
      "multiple": false,
      "regex": ""
    },
    {
      "id": "image",
      "parentSelectors": [
        "card2"
      ],
      "type": "SelectorImage",
      "selector": "img",
      "multiple": true
    },
    {
      "id": "rating",
      "parentSelectors": [
        "card2"
      ],
      "type": "SelectorText",
      "selector": "span.ratig-num--KNake",
      "multiple": true,
      "regex": ""
    },
    {
      "id": "id-a-link",
      "parentSelectors": [
        "card2"
      ],
      "type": "SelectorLink",
      "selector": "a",
      "multiple": true,
      "linkType": "linkFromHref"
    }
  ]
};
