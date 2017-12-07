/**
 *  判断滚轮方向
 */

function mousewheel(obj, downfn, upfn) {
		obj.onmousewheel = fn;
		if (obj.addEventListener) {
			obj.addEventListener('DOMMouseScroll', fn, false);
		}

		function fn(ev) {
			var ev = ev || event;
			var b = true;
			if (ev.wheelDelta) {
				b = ev.wheelDelta > 0;
			} else {
				b = ev.detail < 0;
			}
			if (b) {
				upfn && upfn();
			} else {
				downfn && downfn();
			}
			if (ev.preventDefault) {
				ev.preventDefault();
			}
			return false;
		}
	}