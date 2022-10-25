/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 980:
/***/ (() => {

var section = document.querySelector('.about');
if (window.innerWidth <= 1170 && !section.firstElementChild.classList.contains('about__bg')) {
  var bg = document.createElement("div");
  bg.classList.add('about__bg');
  section.insertBefore(bg, section.firstChild);
}
window.addEventListener('resize', function () {
  if (window.innerWidth <= 1170 && !section.firstElementChild.classList.contains('about__bg')) {
    var _bg = document.createElement("div");
    _bg.classList.add('about__bg');
    section.insertBefore(_bg, section.firstChild);
  }
  if (window.innerWidth > 1170 && section.firstElementChild.classList.contains('about__bg')) {
    section.removeChild(section.firstChild);
  }
});

/***/ }),

/***/ 230:
/***/ (() => {

var open = document.querySelector('.header__content-btn-open'),
  close = document.querySelector('.header__content-btn-close'),
  pageContent = document.querySelector('.main__content'),
  menu = document.querySelector('.header__content-menu'),
  header = document.querySelector('.header'),
  headerContent = document.querySelector('.header__content');
if (window.location.hash === '' || window.location.hash === '#home') {
  menu.firstElementChild.classList.add('selected');
} else {
  menu.childNodes.forEach(function (item) {
    if (item.firstChild.href === window.location.href) {
      item.classList.add('selected');
    }
  });
}
open.addEventListener('click', function () {
  open.hidden = !open.hidden;
  close.hidden = !close.hidden;
  pageContent.style.display = 'none';
  menu.classList.add('opened');
  headerContent.removeChild(menu);
  header.appendChild(menu);
});
close.addEventListener('click', function () {
  open.hidden = !open.hidden;
  close.hidden = !close.hidden;
  pageContent.style.display = 'block';
  menu.classList.remove('opened');
  header.removeChild(menu);
  headerContent.appendChild(menu);
});
menu.childNodes.forEach(function (menuItem) {
  menuItem.addEventListener('click', function (e) {
    menu.childNodes.forEach(function (item) {
      item.classList.remove('selected');
    });
    menuItem.classList.add('selected');
    window.location.replace(menuItem.firstChild.href);
    if (window.innerWidth <= 1170) {
      close.click();
    }
  });
});

/***/ }),

/***/ 306:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./src/components/sections/header/header.js
var header = __webpack_require__(230);
;// CONCATENATED MODULE: ./src/layout/main/main.js

// EXTERNAL MODULE: ./src/components/sections/about/about.js
var about = __webpack_require__(980);
;// CONCATENATED MODULE: ./src/pages/index/index.js




/***/ }),

/***/ 227:
/***/ (() => {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(55);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (Number) {pug_mixins["button"] = pug_interp = function(style, text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"btn\"\u003E";
switch (style){
case 'fill':
pug_html = pug_html + "\u003Cbutton class=\"btn__fill\"\u003E\u003Cp class=\"btn__fill-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
case 'fill-border':
pug_html = pug_html + "\u003Cbutton class=\"btn__fill-border\"\u003E\u003Cp class=\"btn__fill-border-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["section-main"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"main\"\u003E\u003Cdiv class=\"main__bg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__content\"\u003E\u003Cdiv class=\"main__content-line\"\u003E\u003C\u002Fdiv\u003E\u003Cp class=\"main__content-desc\"\u003E" + (pug.escape(null == (pug_interp = 'Crafty Metaverse') ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp class=\"main__content-title\"\u003EA SHARED, IMMERSIVE MULTI-BLOCKCHAIN BASED\u003Cimg class=\"star\" src=\"assets\u002Fimg\u002Fsvg\u002Fstar.svg\"\u003EMETAVERSE ECOSYSTEM\u003C\u002Fp\u003E\u003Cdiv class=\"main__content-btn\"\u003E";
pug_mixins["button"]('fill-border', 'Invest Now');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__dec-blur-1\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__dec-blur-2\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__dec-blur-3\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__dec-blur-4\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__dec-blur-5\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main__dec-blur-6\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["section-about"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"about\" id=\"about\"\u003E\u003Cdiv class=\"about__content\"\u003E\u003Cdiv class=\"about__content-line\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"about__content-desc\"\u003E" + (pug.escape(null == (pug_interp = 'Profile') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"about__content-title\"\u003E" + (pug.escape(null == (pug_interp = 'About Us') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"about__content-text\"\u003E" + (pug.escape(null == (pug_interp = 'You are using the old write up. We are using this now. Crafty Metaverse is a multi-blockchain based virtual reality metaverse platform to develop the most immersive, imaginative, and addictive gaming experiences. We are providing our gaming community with the near-real-world experience while using their digital avatars. Our ecosystem will be a futuristic, decentralized, and persistent 3D virtual metaverse gaming platform especially for crypto enthusiasts, gamers, artists, and metaverse fans.') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"about__content-progress\"\u003E\u003Cdiv class=\"about__content-progress-img\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fprogress.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"about__content-progress-info\"\u003E\u003Cdiv class=\"from\"\u003E" + (pug.escape(null == (pug_interp = '1 chapter') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"to\"\u003E" + (pug.escape(null == (pug_interp = '2') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"about__dec-blur-1\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"about__dec-blur-2\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["section-roadmap"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
const data = [
    {
        num: 'q1',
        title: 'Governance Token Launch on BSC ($CMETA)',
        list: [
            'Launch Date: Jan 8th, 2022 Contract Audit',
            'TechAudit Completed on Jan 21st, 2022 5k Telegram members',
            '32k Telegram Members.  CG and CMC listings',
            'Application Sent CEX Listings',
            'CoinsBit Listing – Feb 8th . Website Revamp',
            'Contracted UI/UX Developers',
        ],
        more: true,
        circles: [1, 2, 3, 4],
        blur: [1, 2, 3, 4, 5, 6]
    },
    {
        num: 'q2',
        title: 'CMETA Ecosystem Begins',
        list: [
            'CMETA Staking Release',
            'SANKOFA Sidechain DEV Starts ($KOFA)',
                [
                    'CEX Listings and Marketing',
                    'Governance Token Launch on SOL ($CMETA)'
                ],
            'Bridge BSC, ETH Smart Contracts to Solana Contract',
                [
                    'Social Media Marketing Push'
                ],
            '10K Telegram Members',
            '10K Twitter Followers',
        ],
        more: true,
        circles: [1, 2, 3, 4],
        blur: [1, 2, 3, 4, 5, 6]
    },
    {
        num: 'q3',
        title: 'Guardians of Lost Worlds Released to Public (PC)',
        list: [
            'Implement In-Game Staking ($KOFA Rewards)',
            'In-Game NFT Released',
                [
                    'SANKOFA Sidechain on Test Net'
                ],
                'Fiat On-Ramp Added',
                [
                    'Gameplay Battle Mode Introduced',
                    'Marketplace Introduced',
                    'CEX Listings and Marketing'
                ],
        ],
        more: false,
        circles: [1, 2, 3, 4],
        blur: [1, 2, 3, 4, 5, 6]
    },
    {
        num: 'q4',
        title: 'SANKOFA Mainnet Launch',
        list: [
            ' Migrate Guardians of Lost Worlds to SANKOFA Sidechain',
            [
                'CEX Listings & Marketing',
                    'Virtual Arts Studio Introduced',
                    'Mobile Beta Gameplay Revealed',
                    'CMETA DEX Introduced: FORGE'
            ],
                'Multi-Network Implementation',
            [
                'VR Game Dev Begins'
            ]
        ],
        more: false,
        circles: [1, 2, 3, 4],
        blur: [1, 2, 3, 4, 5, 6]
    }
]


pug_html = pug_html + "\u003Cdiv class=\"roadmap\" id=\"roadmap\"\u003E\u003Cdiv class=\"roadmap__content\"\u003E\u003Cdiv class=\"roadmap__content-desc\"\u003E" + (pug.escape(null == (pug_interp = 'Our Way') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"roadmap__content-title\"\u003E" + (pug.escape(null == (pug_interp = 'Roadmap') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"roadmap__content-map\"\u003E";
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {
      for (var idx = 0, $$l = $$obj.length; idx < $$l; idx++) {
        var item = $$obj[idx];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(['step step-' + Number(1 + idx)], [true]), false, true)) + "\u003E\u003Cdiv class=\"info\"\u003E\u003Cp class=\"info__num\"\u003E" + (pug.escape(null == (pug_interp = item.num) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp class=\"info__title\"\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cul class=\"info__list\"\u003E";
// iterate item.list
;(function(){
  var $$obj = item.list;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var listItem = $$obj[pug_index1];
if (typeof listItem !== 'string') {
// iterate listItem
;(function(){
  var $$obj = listItem;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var subItem = $$obj[pug_index2];
pug_html = pug_html + "\u003Cli class=\"info__list-item-sub\"\u003E" + (pug.escape(null == (pug_interp = subItem) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var subItem = $$obj[pug_index2];
pug_html = pug_html + "\u003Cli class=\"info__list-item-sub\"\u003E" + (pug.escape(null == (pug_interp = subItem) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

}
else {
pug_html = pug_html + "\u003Cli class=\"info__list-item\"\u003E" + (pug.escape(null == (pug_interp = listItem) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var listItem = $$obj[pug_index1];
if (typeof listItem !== 'string') {
// iterate listItem
;(function(){
  var $$obj = listItem;
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var subItem = $$obj[pug_index3];
pug_html = pug_html + "\u003Cli class=\"info__list-item-sub\"\u003E" + (pug.escape(null == (pug_interp = subItem) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var subItem = $$obj[pug_index3];
pug_html = pug_html + "\u003Cli class=\"info__list-item-sub\"\u003E" + (pug.escape(null == (pug_interp = subItem) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

}
else {
pug_html = pug_html + "\u003Cli class=\"info__list-item\"\u003E" + (pug.escape(null == (pug_interp = listItem) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E";
if (item.more) {
pug_html = pug_html + "\u003Cbutton class=\"info__more\"\u003E" + (pug.escape(null == (pug_interp = 'More') ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"dots\"\u003E\u003Cdiv class=\"dot_1 dot\"\u003E";
// iterate item.circles
;(function(){
  var $$obj = item.circles;
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var circle = $$obj[pug_index4];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(['circle dot__circle-' + circle], [true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var circle = $$obj[pug_index4];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(['circle dot__circle-' + circle], [true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

// iterate item.blur
;(function(){
  var $$obj = item.blur;
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var blur = $$obj[pug_index5];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(['blur dot__blur-' + blur], [true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var blur = $$obj[pug_index5];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(['blur dot__blur-' + blur], [true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"dot_2 dot\"\u003E";
// iterate item.circles
;(function(){
  var $$obj = item.circles;
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var circle = $$obj[pug_index6];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(['circle dot__circle-' + circle], [true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var circle = $$obj[pug_index6];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(['circle dot__circle-' + circle], [true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

// iterate item.blur
;(function(){
  var $$obj = item.blur;
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var blur = $$obj[pug_index7];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(['blur dot__blur-' + blur], [true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index7 in $$obj) {
      $$l++;
      var blur = $$obj[pug_index7];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(['blur dot__blur-' + blur], [true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var idx in $$obj) {
      $$l++;
      var item = $$obj[idx];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(['step step-' + Number(1 + idx)], [true]), false, true)) + "\u003E\u003Cdiv class=\"info\"\u003E\u003Cp class=\"info__num\"\u003E" + (pug.escape(null == (pug_interp = item.num) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp class=\"info__title\"\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cul class=\"info__list\"\u003E";
// iterate item.list
;(function(){
  var $$obj = item.list;
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var listItem = $$obj[pug_index8];
if (typeof listItem !== 'string') {
// iterate listItem
;(function(){
  var $$obj = listItem;
  if ('number' == typeof $$obj.length) {
      for (var pug_index9 = 0, $$l = $$obj.length; pug_index9 < $$l; pug_index9++) {
        var subItem = $$obj[pug_index9];
pug_html = pug_html + "\u003Cli class=\"info__list-item-sub\"\u003E" + (pug.escape(null == (pug_interp = subItem) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index9 in $$obj) {
      $$l++;
      var subItem = $$obj[pug_index9];
pug_html = pug_html + "\u003Cli class=\"info__list-item-sub\"\u003E" + (pug.escape(null == (pug_interp = subItem) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

}
else {
pug_html = pug_html + "\u003Cli class=\"info__list-item\"\u003E" + (pug.escape(null == (pug_interp = listItem) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index8 in $$obj) {
      $$l++;
      var listItem = $$obj[pug_index8];
if (typeof listItem !== 'string') {
// iterate listItem
;(function(){
  var $$obj = listItem;
  if ('number' == typeof $$obj.length) {
      for (var pug_index10 = 0, $$l = $$obj.length; pug_index10 < $$l; pug_index10++) {
        var subItem = $$obj[pug_index10];
pug_html = pug_html + "\u003Cli class=\"info__list-item-sub\"\u003E" + (pug.escape(null == (pug_interp = subItem) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index10 in $$obj) {
      $$l++;
      var subItem = $$obj[pug_index10];
pug_html = pug_html + "\u003Cli class=\"info__list-item-sub\"\u003E" + (pug.escape(null == (pug_interp = subItem) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

}
else {
pug_html = pug_html + "\u003Cli class=\"info__list-item\"\u003E" + (pug.escape(null == (pug_interp = listItem) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E";
if (item.more) {
pug_html = pug_html + "\u003Cbutton class=\"info__more\"\u003E" + (pug.escape(null == (pug_interp = 'More') ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"dots\"\u003E\u003Cdiv class=\"dot_1 dot\"\u003E";
// iterate item.circles
;(function(){
  var $$obj = item.circles;
  if ('number' == typeof $$obj.length) {
      for (var pug_index11 = 0, $$l = $$obj.length; pug_index11 < $$l; pug_index11++) {
        var circle = $$obj[pug_index11];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(['circle dot__circle-' + circle], [true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index11 in $$obj) {
      $$l++;
      var circle = $$obj[pug_index11];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(['circle dot__circle-' + circle], [true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

// iterate item.blur
;(function(){
  var $$obj = item.blur;
  if ('number' == typeof $$obj.length) {
      for (var pug_index12 = 0, $$l = $$obj.length; pug_index12 < $$l; pug_index12++) {
        var blur = $$obj[pug_index12];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(['blur dot__blur-' + blur], [true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index12 in $$obj) {
      $$l++;
      var blur = $$obj[pug_index12];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(['blur dot__blur-' + blur], [true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"dot_2 dot\"\u003E";
// iterate item.circles
;(function(){
  var $$obj = item.circles;
  if ('number' == typeof $$obj.length) {
      for (var pug_index13 = 0, $$l = $$obj.length; pug_index13 < $$l; pug_index13++) {
        var circle = $$obj[pug_index13];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(['circle dot__circle-' + circle], [true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index13 in $$obj) {
      $$l++;
      var circle = $$obj[pug_index13];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(['circle dot__circle-' + circle], [true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

// iterate item.blur
;(function(){
  var $$obj = item.blur;
  if ('number' == typeof $$obj.length) {
      for (var pug_index14 = 0, $$l = $$obj.length; pug_index14 < $$l; pug_index14++) {
        var blur = $$obj[pug_index14];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(['blur dot__blur-' + blur], [true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index14 in $$obj) {
      $$l++;
      var blur = $$obj[pug_index14];
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(['blur dot__blur-' + blur], [true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"roadmap__content-dots-path\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fdots-path.svg\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"roadmap__dec-blur-1\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"roadmap__dec-blur-2\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["section-solutions"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
const data = [
    {
        img: 'assets/img/svg/solutions-card-1.svg',
        title: 'Guardians of Lost Worlds (P2E Game)',
        text: 'Crafty Metaverse will soon launch Guardians of Lost Worlds, the first cross-chain P2E gaming experience. Our game will be available on multiple blockchains and then eventually on our side chain (SANKOFA). This will give users a seamless gameplay experience with little to no gas fees that allow users to focus on the game rather than worrying about losing their returns.'
    },
    {
        img: "assets/img/svg/solutions-card-2.svg",
        title: 'Crafty Metaverse Ecosystem',
        text: 'Crafty Metaverse presents a Virtual Arts Studio where you can enhance your creativity by creating digital arts inspired by your game. A virtual marketplace to allow the users to trade and stake our $CMETA token and their NFTs. Negotiate with the digital avatars of other users to sell your NFTs at the best prices and generate passive income while playing'
    },
    {
        img: "assets/img/svg/solutions-card-3.svg",
        title: 'SANKOFA',
        text: 'SANKOFA($KOFA) is an Ethereum sidechain that will be created with Guardians of Lost Worlds community in mind. LYQUID, the team behind Guardians of Lost Worlds, will build a reliable, fast and cheap network that could cater to the demands of the game.'
    }
]

pug_html = pug_html + "\u003Cdiv class=\"solutions\"\u003E\u003Cdiv class=\"solutions__content\"\u003E\u003Cdiv class=\"solutions__content-bg\"\u003E\u003Cp class=\"solutions__content-desc\"\u003E" + (pug.escape(null == (pug_interp = 'No problem') ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cp class=\"solutions__content-title\"\u003E" + (pug.escape(null == (pug_interp = 'Our brands') ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cdiv class=\"solutions__content-cards\"\u003E";
// iterate data
;(function(){
  var $$obj = data;
  if ('number' == typeof $$obj.length) {
      for (var pug_index15 = 0, $$l = $$obj.length; pug_index15 < $$l; pug_index15++) {
        var item = $$obj[pug_index15];
pug_html = pug_html + "\u003Cdiv class=\"card\"\u003E\u003Cdiv class=\"card__img\"\u003E\u003Cimg" + (pug.attr("src", item.img, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__desc\"\u003E\u003Cdiv class=\"card__desc-line\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__desc-light\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__desc-title\"\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__desc-text\"\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index15 in $$obj) {
      $$l++;
      var item = $$obj[pug_index15];
pug_html = pug_html + "\u003Cdiv class=\"card\"\u003E\u003Cdiv class=\"card__img\"\u003E\u003Cimg" + (pug.attr("src", item.img, true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__desc\"\u003E\u003Cdiv class=\"card__desc-line\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__desc-light\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__desc-title\"\u003E" + (pug.escape(null == (pug_interp = item.title) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__desc-text\"\u003E" + (pug.escape(null == (pug_interp = item.text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"solutions__dec-blur-1\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"solutions__dec-blur-2\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"solutions__dec-blur-3\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"solutions__dec-blur-4\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["section-resources"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"resources\"\u003E\u003Cdiv class=\"resources__content\"\u003E\u003Cdiv class=\"resources__content-desc\"\u003E" + (pug.escape(null == (pug_interp = 'What we do') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"resources__content-title\"\u003E" + (pug.escape(null == (pug_interp = 'Our resources') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"resources__content-main\"\u003E\u003Cdiv class=\"info\"\u003E\u003Cdiv class=\"info__lines\"\u003E\u003C\u002Fdiv\u003E\u003Cimg class=\"info__logo\" src=\"assets\u002Fimg\u002Fsvg\u002Fresources-logo.svg\"\u003E\u003Cdiv class=\"info__title\"\u003E" + (pug.escape(null == (pug_interp = 'About toKen $Cmeta') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__text\"\u003E" + (pug.escape(null == (pug_interp = 'CMETA, a BSC-based cryptocurrency token will be the sole governance token on the platform. This means that every single transaction in the Crafty Metaverse space will be conducted with the $CMETA token') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"info__btn\"\u003E";
pug_mixins["button"]('fill-border', 'Play (Coming Soon)');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"line\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"star\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fstar.svg\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"img\"\u003E\u003Cdiv class=\"blur-2\"\u003E\u003C\u002Fdiv\u003E\u003Cimg class=\"img__main\" src=\"assets\u002Fimg\u002Fsvg\u002Fresources-img.svg\"\u003E\u003Cdiv class=\"circle\"\u003E\u003Cdiv class=\"circle__one\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"circle__two\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"circle__three\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"blur-1\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["button"] = pug_interp = function(style, text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"btn\"\u003E";
switch (style){
case 'fill':
pug_html = pug_html + "\u003Cbutton class=\"btn__fill\"\u003E\u003Cp class=\"btn__fill-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
case 'fill-border':
pug_html = pug_html + "\u003Cbutton class=\"btn__fill-border\"\u003E\u003Cp class=\"btn__fill-border-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["section-game"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"game\"\u003E\u003Cdiv class=\"game__banner-1\"\u003E\u003Cdiv class=\"game__banner-1-lines\"\u003E\u003Cp\u003E" + (pug.escape(null == (pug_interp = 'VR GAME MARKETPLACE') ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"game__banner-2\"\u003E\u003Cdiv class=\"game__banner-2-text\"\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = 'CRAFTY METAVERSE') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = 'CRAFTY METAVERSE') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = 'CRAFTY METAVERSE') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = 'CRAFTY METAVERSE') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"game__bg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"game__content\"\u003E\u003Cdiv class=\"game__content-main\"\u003E\u003Cdiv class=\"game__content-main-line\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"game__content-main-lines\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"game__content-main-info\"\u003E\u003Cdiv class=\"game__content-main-info-title\"\u003E" + (pug.escape(null == (pug_interp = 'Game') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"game__content-main-info-text\"\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = 'The space will also offer avid gamers to be a part of an amazing 3D gaming experience (details to be published soon).') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = 'Crafty Metaverse space will continuously evolve its 3D gaming space to include technologies such as VR headsets, augmented reality glasses, and game consoles.') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"game__content-btn\"\u003E";
pug_mixins["button"]('fill-border', 'Invest Now');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"game__characters\"\u003E\u003Cdiv class=\"game__characters-1\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fcharacter-1.png\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"game__characters-2\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fcharacter-2.png\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["button"] = pug_interp = function(style, text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"btn\"\u003E";
switch (style){
case 'fill':
pug_html = pug_html + "\u003Cbutton class=\"btn__fill\"\u003E\u003Cp class=\"btn__fill-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
case 'fill-border':
pug_html = pug_html + "\u003Cbutton class=\"btn__fill-border\"\u003E\u003Cp class=\"btn__fill-border-title btn__title\"\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E";
  break;
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["section-marketplace"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"marketplace\"\u003E\u003Cdiv class=\"marketplace__explore\"\u003E\u003Cdiv class=\"marketplace__explore-info\"\u003E\u003Cdiv class=\"line\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"lines\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"star\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"marketplace__explore-info-main\"\u003E\u003Cdiv class=\"marketplace__explore-info-main-title\"\u003E" + (pug.escape(null == (pug_interp = 'Explore Now') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"marketplace__explore-info-main-desc\"\u003E" + (pug.escape(null == (pug_interp = 'Each human will control his/her own digital identity in the Crafty Metaverse space.') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"marketplace__explore-info-main-btn\"\u003E";
pug_mixins["button"]('fill-border', 'Invest Now');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"marketplace__explore-info-text\"\u003E" + (pug.escape(null == (pug_interp = 'A virtual marketplace to allow the users to trade and stake our $CMETA token and their NFTs. Negotiate with the digital avatars of other users to sell your NFTs at the best prices and generate passive income while playing.') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"marketplace__explore-img\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fexplore.png\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"marketplace__studio\"\u003E\u003Cdiv class=\"marketplace__studio-img\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fstudio.png\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"marketplace__studio-info\"\u003E\u003Cdiv class=\"line\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"lines\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"star\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"marketplace__studio-info-main\"\u003E\u003Cdiv class=\"marketplace__studio-info-main-title\"\u003E" + (pug.escape(null == (pug_interp = 'Virtual Arts Studio') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"marketplace__studio-info-main-btn\"\u003E";
pug_mixins["button"]('fill-border', 'Create');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"marketplace__studio-info-text\"\u003E" + (pug.escape(null == (pug_interp = 'Virtual Arts Studio where you can enhance your creativity by creating digital arts inspired by your game') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"marketplace__blur-1\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["section-team"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"team\"\u003E\u003Cdiv class=\"team__content\"\u003E\u003Cdiv class=\"team__content-desc\"\u003E" + (pug.escape(null == (pug_interp = 'WHO WE ARE') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"team__content-title\"\u003E" + (pug.escape(null == (pug_interp = 'Our Team') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"team__content-cards\"\u003E\u003Cdiv class=\"card team__content-cards-card\"\u003E\u003Cdiv class=\"img\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fteam-stan.png\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003E" + (pug.escape(null == (pug_interp = 'CTO/Creative Director') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"title\"\u003E" + (pug.escape(null == (pug_interp = 'STAN') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"social\"\u003E\u003Ca class=\"facebook\" href=\"#\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Ffacebook.svg\"\u003E\u003C\u002Fa\u003E\u003Ca class=\"twitter\" href=\"#\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Ftwitter.svg\"\u003E\u003C\u002Fa\u003E\u003Ca class=\"instagram\" href=\"#\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Finstagram.svg\"\u003E\u003C\u002Fa\u003E\u003Ca class=\"linkedin\" href=\"#\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Flinkedin.svg\"\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card team__content-cards-card\"\u003E\u003Cdiv class=\"img\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fteam-kwasi.png\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"title\"\u003E" + (pug.escape(null == (pug_interp = 'KWASI') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003E" + (pug.escape(null == (pug_interp = 'Chief Financial Officer') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card team__content-cards-card\"\u003E\u003Cdiv class=\"img\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fteam-kwame.png\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003E" + (pug.escape(null == (pug_interp = 'COO/Marketing Director') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"title\"\u003E" + (pug.escape(null == (pug_interp = 'KWAME') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card team__content-cards-card\"\u003E\u003Cdiv class=\"img\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fteam-kojo.png\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"title\"\u003E" + (pug.escape(null == (pug_interp = 'KOJO') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"desc\"\u003E" + (pug.escape(null == (pug_interp = 'CEO/Developer') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"team__banner-1\"\u003E\u003Cdiv class=\"team__banner-1-text\"\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = 'CRAFTY METAVERSE') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = 'CRAFTY METAVERSE') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = 'CRAFTY METAVERSE') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"team__bg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"team__blur-1\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"team__blur-2\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"team__blur-3\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["section-questions"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"questions\"\u003E\u003Cdiv class=\"questions__content\"\u003E\u003Cdiv class=\"questions__content-lines\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"questions__content-desc\"\u003E" + (pug.escape(null == (pug_interp = 'Questions') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"questions__content-title\"\u003E" + (pug.escape(null == (pug_interp = 'FAQ') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Col class=\"questions__content-list\"\u003E\u003Cli class=\"questions__content-list-question\"\u003E" + (pug.escape(null == (pug_interp = 'What is CMETA and which tokens we use?') ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003Cdiv class=\"questions__content-list-answer\"\u003E" + (pug.escape(null == (pug_interp = 'Crafty Metaverse is a blockchain-based virtual reality metaverse platform focused on building a decentralized,  persistent online 3D/VR environment that will allow interactions among humans in the form of Avatars.  ') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cli class=\"questions__content-list-question\"\u003E" + (pug.escape(null == (pug_interp = 'What is CMETA and which tokens we use?') ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003Cli class=\"questions__content-list-question\"\u003E" + (pug.escape(null == (pug_interp = 'What is CMETA and which tokens we use?') ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003Cli class=\"questions__content-list-question\"\u003E" + (pug.escape(null == (pug_interp = 'What is CMETA and which tokens we use?') ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003Cli class=\"questions__content-list-question\"\u003E" + (pug.escape(null == (pug_interp = 'What is CMETA and which tokens we use?') ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Fol\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"questions__dec-img-1\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Ffaq-dec-1.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"questions__dec-blur-1\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"questions__dec-blur-2\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["section-header"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"header\"\u003E\u003Cdiv class=\"header__content\"\u003E\u003Cdiv class=\"header__content-logo\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Flogo.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__content-btn-open\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fmenu-ico.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__content-btn-close\" hidden\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsvg\u002Fclose.svg\"\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"header__content-menu\"\u003E\u003Cli class=\"header__content-menu-item\"\u003E\u003Ca href=\"#home\"\u003E" + (pug.escape(null == (pug_interp = 'Home') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__content-menu-item\"\u003E\u003Ca href=\"#about\"\u003E" + (pug.escape(null == (pug_interp = 'About Us') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__content-menu-item\"\u003E\u003Ca href=\"#\"\u003E" + (pug.escape(null == (pug_interp = 'White paper') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__content-menu-item\"\u003E\u003Ca href=\"#\"\u003E" + (pug.escape(null == (pug_interp = 'Tokenomics') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__content-menu-item\"\u003E\u003Ca href=\"#roadmap\"\u003E" + (pug.escape(null == (pug_interp = 'Road Map') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__content-menu-item\"\u003E\u003Ca href=\"#\"\u003E" + (pug.escape(null == (pug_interp = 'How to buy') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__content-menu-item\"\u003E\u003Ca href=\"#\"\u003E" + (pug.escape(null == (pug_interp = 'Buy') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["section-footer"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"footer\"\u003E\u003Cdiv class=\"footer__content\"\u003E\u003Cdiv class=\"footer__social\"\u003E\u003Cdiv class=\"footer__social-desc\"\u003E" + (pug.escape(null == (pug_interp = 'Questions') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__social-title\"\u003E" + (pug.escape(null == (pug_interp = 'Social media') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__social-cards\"\u003E\u003Cdiv class=\"footer__social-cards-img\"\u003E\u003Cimg src=\"assets\u002Fimg\u002Fsocial-cards.png\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__social-cards-links\"\u003E\u003Ca class=\"footer__social-cards-links-item\" href=\"#twitter\"\u003E\u003C\u002Fa\u003E\u003Ca class=\"footer__social-cards-links-item\" href=\"#telegram\"\u003E\u003C\u002Fa\u003E\u003Ca class=\"footer__social-cards-links-item\" href=\"#youtube\"\u003E\u003C\u002Fa\u003E\u003Ca class=\"footer__social-cards-links-item\" href=\"#discord\"\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__social-blur-1\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__social-blur-2\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__social-blur-3\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__social-blur-4\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__main\"\u003E\u003Cdiv class=\"footer__main-based\"\u003E\u003Cdiv class=\"footer__main-based-block\"\u003E\u003Cdiv class=\"footer__main-based-ico\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__main-based-info\"\u003EBased in US\u003Cbr\u003EActive worldwide\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__main-contacts\"\u003E\u003Cdiv class=\"footer__main-contacts-phone\"\u003E" + (pug.escape(null == (pug_interp = '+ 9 999 877 66 55') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__main-contacts-addr\"\u003E" + (pug.escape(null == (pug_interp = 'Los Angeles') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__main-email\"\u003E\u003Ca href=\"#info@craftymetaverse.com\"\u003E" + (pug.escape(null == (pug_interp = 'info@craftymetaverse.com') ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__main-blur-1\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__main-blur-2\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__main-blur-3\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__main-blur-4\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Ctitle\u003E" + (pug.escape(null == (pug_interp = 'Crafry Metaverse') ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E";
pug_mixins["section-header"]();
pug_mixins["section-main"]();
pug_mixins["section-about"]();
pug_mixins["section-roadmap"]();
pug_mixins["section-solutions"]();
pug_mixins["section-resources"]();
pug_mixins["section-game"]();
pug_mixins["section-marketplace"]();
pug_mixins["section-team"]();
pug_mixins["section-questions"]();
pug_mixins["section-footer"]();
pug_html = pug_html + "\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"Number" in locals_for_with?locals_for_with.Number:typeof Number!=="undefined"?Number:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ 55:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(835).readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ 835:
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(227);
/******/ 	__webpack_require__(306);
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(259);
/******/ 	
/******/ })()
;