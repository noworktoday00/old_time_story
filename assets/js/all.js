"use strict";

$(document).ready(function (e) {
  $('img[usemap]').rwdImageMaps();
});
$(".new-taipei").mouseenter(function () {
  $(".icon-newtaipei").css("max-width", "32px");
});
$(".new-taipei").mouseleave(function () {
  $(".icon-newtaipei").css("max-width", "24px");
});
$(".kee-lung").mouseenter(function () {
  $(".icon-keelung").css("max-width", "32px");
});
$(".kee-lung").mouseleave(function () {
  $(".icon-keelung").css("max-width", "24px");
});
$(".taipei").mouseenter(function () {
  $(".icon-taipei").css("max-width", "32px");
});
$(".taipei").mouseleave(function () {
  $(".icon-taipei").css("max-width", "24px");
});
$(".kin-men").mouseenter(function () {
  $(".icon-kinmen").css("max-width", "32px");
});
$(".kin-men").mouseleave(function () {
  $(".icon-kinmen").css("max-width", "24px");
});
$(".ma-tsu").mouseenter(function () {
  $(".icon-matsu").css("max-width", "32px");
});
$(".ma-tsu").mouseleave(function () {
  $(".icon-matsu").css("max-width", "24px");
});
$(".peng-hu").mouseenter(function () {
  $(".icon-penghu").css("max-width", "32px");
});
$(".peng-hu").mouseleave(function () {
  $(".icon-penghu").css("max-width", "24px");
});
$(".tao-yuan").mouseenter(function () {
  $(".icon-taoyuan").css("max-width", "32px");
});
$(".tao-yuan").mouseleave(function () {
  $(".icon-taoyuan").css("max-width", "24px");
});
$(".hsin-chu").mouseenter(function () {
  $(".icon-hsinchu").css("max-width", "32px");
});
$(".hsin-chu").mouseleave(function () {
  $(".icon-hsinchu").css("max-width", "24px");
});
$(".miao-li").mouseenter(function () {
  $(".icon-miaoli").css("max-width", "32px");
});
$(".miao-li").mouseleave(function () {
  $(".icon-miaoli").css("max-width", "24px");
});
$(".tai-chung").mouseenter(function () {
  $(".icon-taichung").css("max-width", "32px");
});
$(".tai-chung").mouseleave(function () {
  $(".icon-taichung").css("max-width", "24px");
});
$(".chang-hua").mouseenter(function () {
  $(".icon-changhua").css("max-width", "32px");
});
$(".chang-hua").mouseleave(function () {
  $(".icon-changhua").css("max-width", "24px");
});
$(".yun-lin").mouseenter(function () {
  $(".icon-yunlin").css("max-width", "32px");
});
$(".yun-lin").mouseleave(function () {
  $(".icon-yunlin").css("max-width", "24px");
});
$(".chia-yi").mouseenter(function () {
  $(".icon-chiayi").css("max-width", "32px");
});
$(".chia-yi").mouseleave(function () {
  $(".icon-chiayi").css("max-width", "24px");
});
$(".tai-nan").mouseenter(function () {
  $(".icon-tainan").css("max-width", "32px");
});
$(".tai-nan").mouseleave(function () {
  $(".icon-tainan").css("max-width", "24px");
});
$(".kao-hsiung").mouseenter(function () {
  $(".icon-kaohsiung").css("max-width", "32px");
});
$(".kao-hsiung").mouseleave(function () {
  $(".icon-kaohsiung").css("max-width", "24px");
});
$(".ping-tung").mouseenter(function () {
  $(".icon-pingtong").css("max-width", "32px");
});
$(".ping-tung").mouseleave(function () {
  $(".icon-pingtong").css("max-width", "24px");
});
$(".tai-tung").mouseenter(function () {
  $(".icon-taitung").css("max-width", "32px");
});
$(".tai-tung").mouseleave(function () {
  $(".icon-taitung").css("max-width", "24px");
});
$(".hua-lian").mouseenter(function () {
  $(".icon-hualien").css("max-width", "32px");
});
$(".hua-lian").mouseleave(function () {
  $(".icon-hualien").css("max-width", "24px");
});
$(".yi-lan").mouseenter(function () {
  $(".icon-yilan").css("max-width", "32px");
});
$(".yi-lan").mouseleave(function () {
  $(".icon-yilan").css("max-width", "24px");
});
$(".nan-tou").mouseenter(function () {
  $(".icon-nantou").css("max-width", "32px");
});
$(".nan-tou").mouseleave(function () {
  $(".icon-nantou").css("max-width", "24px");
});
"use strict";

/*
* rwdImageMaps jQuery plugin v1.6
*
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
*
* Copyright (c) 2016 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
;

(function ($) {
  $.fn.rwdImageMaps = function () {
    var $img = this;

    var rwdImageMap = function rwdImageMap() {
      $img.each(function () {
        if (typeof $(this).attr('usemap') == 'undefined') return;
        var that = this,
            $that = $(that); // Since WebKit doesn't know the height until after the image has loaded, perform everything in an onload copy

        $('<img />').on('load', function () {
          var attrW = 'width',
              attrH = 'height',
              w = $that.attr(attrW),
              h = $that.attr(attrH);

          if (!w || !h) {
            var temp = new Image();
            temp.src = $that.attr('src');
            if (!w) w = temp.width;
            if (!h) h = temp.height;
          }

          var wPercent = $that.width() / 100,
              hPercent = $that.height() / 100,
              map = $that.attr('usemap').replace('#', ''),
              c = 'coords';
          $('map[name="' + map + '"]').find('area').each(function () {
            var $this = $(this);
            if (!$this.data(c)) $this.data(c, $this.attr(c));
            var coords = $this.data(c).split(','),
                coordsPercent = new Array(coords.length);

            for (var i = 0; i < coordsPercent.length; ++i) {
              if (i % 2 === 0) coordsPercent[i] = parseInt(coords[i] / w * 100 * wPercent);else coordsPercent[i] = parseInt(coords[i] / h * 100 * hPercent);
            }

            $this.attr(c, coordsPercent.toString());
          });
        }).attr('src', $that.attr('src'));
      });
    };

    $(window).resize(rwdImageMap).trigger('resize');
    return this;
  };
})(jQuery);
//# sourceMappingURL=all.js.map
