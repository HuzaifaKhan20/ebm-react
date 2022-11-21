/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'ebm-hamburger-icon': '&#xe911;',
		'ebm-search-icon-mobile': '&#xe912;',
		'ebm-foot-logo': '&#xe90b;',
		'ebm-arrow-left': '&#xe90a;',
		'ebm-arrow-down-dropdown': '&#xe900;',
		'ebm-logo-icon': '&#xe901;',
		'ebm-logo-line': '&#xe907;',
		'ebm-logo-text': '&#xe908;',
		'ebm-search-icon': '&#xe909;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/ebm-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
