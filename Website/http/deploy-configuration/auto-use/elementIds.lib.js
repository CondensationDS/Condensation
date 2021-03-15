function elementIds() {
	var top = stack[stack.length - 1];

	var idList = [];
	for (var label in ids)
		idList.push(label);
	idList.sort();

	var text = [];
	text.push('<script>\n');
	for (var label of idList)
		if (label.match(/^[a-zA-Z0-9_]+$/))
			text.push(top.indent, 'var ', label, ' = document.getElementById(\'', label, '\');\n');
	text.push(top.indent, '</script>');
	insertRaw(text.join(''));
}
