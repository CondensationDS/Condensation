const xml = require('./xml.js');

function svgFile(file, options) {
	var result = readFile(file);
	if (! result) return;

	// Parse
	var root = xml.parse(result.content);
	var svg = root.firstChildWithTag('svg');

	// Clean
	delete svg.attributes['sodipodi:docname'];
	delete svg.attributes['inkscape:version'];
	delete svg.attributes['xmlns:inkscape'];
	delete svg.attributes['xmlns:rdf'];
	delete svg.attributes['xmlns:dc'];
	delete svg.attributes['xmlns:cc'];
	delete svg.attributes['xmlns:svg'];
	delete svg.attributes['xmlns:sodipodi'];

	//svg.removeChildrenWithTag('defs');
	svg.removeChildrenWithTag('metadata');
	svg.removeChildrenWithTag('sodipodi:namedview');
	svg.removeChildrenWith(node => node.attributes && node.attributes.id && node.attributes.id.match(/[A-Za-z0-9]+(Ruler|Color)/));
	svg.traverseNodes(checkNode);

	// Apply options
	if (options) {
		applyAttribute('id');
		applyAttribute('style');
		applyAttribute('width');
		applyAttribute('height');
		applyAttribute('viewBox');
		applyAttribute('className', 'class');
		if (options.process) options.process(svg);
	}

	function applyAttribute(name, attributeName) {
		if (! attributeName) attributeName = name;
		var value = options[name];
		if (value === undefined) return;
		if (value == null) delete svg.attributes[attributeName];
		else svg.attributes[attributeName] = value;
	}

	// Insert it
	var output = [];
	svg.stringify(output, '\t');
	insertHtml(output.join(''), result.state);

	function checkNode(node, parents) {
		//delete node.attributes['xml:space'];

		// Remove default IDs
		if (node.attributes.id != null && node.attributes.id.match(/^(layer|text|tspan|rect|path|g|circle|defs|svg|a|polygon|image)\d{1,4}$/))
			delete node.attributes['id'];

		// Remove inkscape-specific attributes
		for (var key in node.attributes) {
			var key9 = key.substr(0, 9);
			if (key9 == 'sodipodi:' || key9 == 'inkscape:') delete node.attributes[key];
		}

		// Fix hrefs
		if (node.attributes['xlink:href']) {
			var link = node.attributes['xlink:href'];
			if (link[0] != '#' && link.indexOf(':') < 0) {
				var folder = path.dirname(file);
				node.attributes['xlink:href'] = path.join(folder, link);
			}
		}

		// Clean the style
		if (node.attributes.style != null) {
			var style = {};
			var styles = node.attributes.style.split(/;/);
			for (var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var match = item.match(/^(.*?)\s*:\s*(.*?)\s*$/);
				if (! match) continue;
				style[match[1]] = match[2];
			}

			cleanStyle(style);

			var text = '';
			var keys = Object.keys(style).sort();
			for (var i = 0; i < keys.length; i++) {
				var key = keys[i];
				var value = style[key];
				if (i > 0) text += '; ';
				text += key + ':' + value;
			}

			node.attributes.style = text;
		}
	}

	function cleanStyle(style) {
		delete style['-inkscape-font-specification'];
		delete style['clip-rule'];
		delete style['color'];
		delete style['color-interpolation'];
		delete style['color-interpolation-filters'];
		delete style['color-rendering'];
		delete style['enable-background'];
		delete style['fill-rule'];
		delete style['image-rendering'];
		delete style['isolation'];
		delete style['marker'];
		delete style['mix-blend-mode'];
		delete style['overflow'];
		delete style['shape-rendering'];
		delete style['solid-color'];
		delete style['solid-opacity'];
		delete style['text-rendering'];
		delete style['vector-effect'];
		delete style['visibility'];

		if (style['stroke'] == 'none' || style['stroke-dasharray'] == 'none') {
			delete style['stroke-dasharray'];
			delete style['stroke-dashoffset'];
		}

		if (style['stroke'] == 'none') {
			delete style['stroke'];
			delete style['stroke-linecap'];
			delete style['stroke-linejoin'];
			delete style['stroke-miterlimit'];
			delete style['stroke-width'];
		}

		removeDefault('stroke-linecap', 'butt');
		removeDefault('stroke-linejoin', 'miter');
		removeDefault('stroke-miterlimit', '4');
		removeDefault('stroke-opacity', '1');
		removeDefault('fill-opacity', '1');
		removeDefault('opacity', '1');
		removeDefault('display', 'inline');

		cleanFont();

		function removeDefault(name, value) {
			if (style[name] == value) delete style[name];
		}

		function cleanFont() {
			var fontFamily = style['font-family'];
			if (! fontFamily) return;
			if (fontFamily == 'Lato') {
				delete style['font-family'];
				return;
			}

			if (fontFamily == '\'Source Code Pro\'') return;
			if (fontFamily == '\'Noto Sans Meroitic\'') return;
			logOrange(file + ' uses font ' + fontFamily);
		}
	}
}
