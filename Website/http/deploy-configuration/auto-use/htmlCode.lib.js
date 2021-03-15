var tagUrls = {
	h1: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements',
	h2: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements',
	h3: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements',
	h4: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements',
	h5: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements',
	img: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img',
	b: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/B',
	html: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Html',
	body: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Body',
	head: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Head',
	p: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/P',
	a: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/A',
	div: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Div',
	title: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Title',
	meta: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Meta',
	style: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Style',
	};

function htmlCode(file, options) {
	var result = readFile(file);
	if (! result) return;

	var html = result.content;
	var quoted = html.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\t/g, '    ');
	var colored = quoted.replace(/&lt;.*?&gt;/g, tag);
	insertHtml(colored, result.state);

	function tag(match) {
		if (match.match(/!DOCTYPE/)) return '<span class="docType">' + match + '</span>';

		match = match.replace(/ ([A-Za-z0-9]+)="([^"]*)"/g, attribute);
		match = match.replace(/&lt;([A-Za-z0-9]+)/, tagName);
		return '<span class="tag">' + match + '</span>';

		function tagName(match, name) {
			var url = tagUrls[name];
			if (! url) return match;
			return '&lt;<a class="tagName" href="' + url + '" target="_blank">' + name + '</a>';
		}

		function attribute(match, name, value) {
			console.log(match);
			return ' <span class="attributeName">' + name + '=</span>' + '<span class="attributeValue">"' + value + '"</span>';
		}
	}
}
