// スクロールのドラッグ有効化
jQuery.prototype.mousedragscrollable = function () {
	let target;
	$(this).each(function (i, e) {
		$(e).mousedown(function (event) {
			event.preventDefault();
			target = $(e);
			$(e).data({
				down: true,
				move: false,
				x: event.clientX,
				y: event.clientY,
				scrollleft: $(e).scrollLeft(),
				scrolltop: $(e).scrollTop(),
			});
			return false;
		});
		$(e).click(function (event) {
			if ($(e).data("move")) {
				return false;
			}
		});
	});
	$(document)
		.mousemove(function (event) {
			if ($(target).data("down")) {
				event.preventDefault();
				let move_x = $(target).data("x") - event.clientX;
				let move_y = $(target).data("y") - event.clientY;
				if (move_x !== 0 || move_y !== 0) {
					$(target).data("move", true);
				} else {
					return;
				}
				$(target).scrollLeft($(target).data("scrollleft") + move_x);
				$(target).scrollTop($(target).data("scrolltop") + move_y);
				return false;
			}
		})
		.mouseup(function (event) {
			$(target).data("down", false);
			return false;
		});
};
$(".flick-panel").mousedragscrollable();

//flick-anchor ジャンプ先の位置調整
function ScrollWindow(elem) {
	const element = document.getElementById(elem);
	const rect = element.getBoundingClientRect();
	const elemTop = rect.top + window.pageYOffset;
	document.documentElement.scrollTop = elemTop - 150;
}


// flick-anchor pc ボタン　
$(function() {
  const rightButton = $('#scrlBtnAfter');
  const leftButton = $('#scrlBtnBefore');
      //右へ
      rightButton.click(function () {
      $('#flick-anchor').animate({
          scrollLeft: $('#flick-anchor').scrollLeft() + 900
      }, 300, 'swing');
      return false;
      });
      //左へ
      leftButton.click(function () {
      $('#flick-anchor').animate({
          scrollLeft: $('#flick-anchor').scrollLeft() - 900
      }, 300, 'swing');
      return false;
      });
});