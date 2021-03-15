const sax = require('./sax.js');

exports.parse = function(text, trim) {
	const parser = sax.parser(true, {trim: trim});
	const root = new Node('');
	const stack = [root];

	function head() { return stack[stack.length - 1]; }

	parser.onerror = function(e) {
		console.log('XML error', e);
		process.exit(1);
	};

	parser.ontext = function(text) {
		head().children.push(new TextNode(text));
	};

	parser.oncdata = function(text) {
		head().children.push(new CDataNode(text));
	};

	parser.onopentag = function(node) {
		var child = new Node(node.name);
		child.attributes = node.attributes;
		head().children.push(child);
		stack.push(child);
	};

	parser.onclosetag = function(name) {
		stack.pop();
	};

	parser.oncomment = function(text) {
		head().children.push(new CommentNode(text));
	};

	parser.onend = function() {
	};

	parser.write(text);
	parser.close();
	return root;
};

exports.stringify = function(node) {
	var text = ['<?xml version="1.0" encoding="utf-8" ?>'];
	if (node.tag == '') {
		for (var i = 0; i < node.children.length; i++)
			node.children[i].stringify(text, '');
	} else {
		node.stringify(text, '');
	}
	return text.join('');
};

exports.stringifyWithWhiteSpace = function(node) {
	var text = ['<?xml version="1.0" encoding="utf-8" ?>'];
	text.push('\n');
	if (node.tag == '') {
		for (var i = 0; i < node.children.length; i++)
			node.children[i].stringifyWithWhiteSpace(text, '');
	} else {
		node.stringifyWithWhiteSpace(text, '');
	}
	return text.join('');
};

exports.createNode = function(tag) { return new Node(tag); };
exports.createTextNode = function(text) { return new TextNode(text); };
exports.createCDataNode = function(text) { return new CDataNode(text); };
exports.createCommentNode = function(text) { return new CommentNode(text); };

function Node(tag) {
	this.tag = tag;
	this.attributes = {};
	this.children = [];
}

Node.prototype.firstChildWithTag = function(tag) {
	for (var i = 0; i < this.children.length; i++)
		if (this.children[i].tag == tag) return this.children[i];
	return null;
};

Node.prototype.removeChildrenWithTag = function(tag) {
	var i = 0;
	while (i < this.children.length) {
		if (this.children[i].tag == tag) this.children.splice(i, 1);
		else i += 1;
	}
};

Node.prototype.childrenWithTag = function(tag) {
	var list = [];
	for (var i = 0; i < this.children.length; i++) {
		var child = this.children[i];
		if (child.tag == tag) list.push(child);
	}
	return list;
};

Node.prototype.firstChildWith = function(handler) {
	for (var i = 0; i < this.children.length; i++) {
		var child = this.children[i];
		if (handler(child)) return child;
	}
	return null;
};

Node.prototype.removeChildrenWith = function(handler) {
	var i = 0;
	while (i < this.children.length) {
		if (handler(this.children[i])) this.children.splice(i, 1);
		else i += 1;
	}
};

Node.prototype.childrenWith = function(handler) {
	var list = [];
	for (var i = 0; i < this.children.length; i++) {
		var child = this.children[i];
		if (handler(child)) list.append(child);
	}
	return list;
};

Node.prototype.traverseNodes = function(handler) {
	var parents = [];
	traverse(this);

	function traverse(child) {
		if (child.tag == null) return;
		handler(child, parents);
		parents.push(child);
		for (var i = 0; i < child.children.length; i++)
			traverse(child.children[i]);
		parents.pop();
	}
};

Node.prototype.stringify = function(text, indent) {
	text.push('<' + this.tag);
	appendAttributes(text, this.attributes);

	if (this.children.length == 0) {
		text.push(' />');
		return;
	}

	text.push('>');
	var subIndent = indent + '\t';
	for (var i = 0; i < this.children.length; i++)
		this.children[i].stringify(text, subIndent);
	text.push('</' + this.tag + '>');
};

Node.prototype.stringifyWithWhiteSpace = function(text, indent) {
	text.push(indent + '<' + this.tag);
	appendAttributes(text, this.attributes);

	if (this.children.length == 0) {
		text.push(' />\n');
		return;
	}

	if (this.children.length == 1 && this.children[0].text != null && ! this.children[0].text.match(/\n/)) {
		text.push('>' + replaceXmlEntities(this.children[0].text) + '</' + this.tag + '>\n');
		return;
	}

	text.push('>\n');
	var subIndent = indent + '\t';
	for (var i = 0; i < this.children.length; i++)
		this.children[i].stringifyWithWhiteSpace(text, subIndent);
	text.push(indent + '</' + this.tag + '>\n');
};

Node.prototype.textContent = function() {
	var text = '';
	for (var i = 0; i < this.children.length; i++) {
		var child = this.children[i];
		if (child.text != null) text += child.text;
		else if (child.cdata != null) text += child.cdata;
		else if (child.tag != null) text += child.textContent();
	}
	return text;
};

function appendAttributes(text, attributes) {
	var keys = Object.keys(attributes).sort();
	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		text.push(' ' + key + '="' + replaceXmlEntities(attributes[key]) + '"');
	}
}

function TextNode(text) {
	this.text = text;
}

TextNode.prototype.stringify = function(text, indent) {
	text.push(replaceXmlEntities(this.text));
};

TextNode.prototype.stringifyWithWhiteSpace = function(text, indent) {
	text.push(indent + replaceXmlEntities(this.text) + '\n');
};

function CDataNode(cdata) {
	this.cdata = cdata;
}

CDataNode.prototype.stringify = function(text, indent) {
	text.push('<![CDATA[' + this.cdata + ']]>');
};

CDataNode.prototype.stringifyWithWhiteSpace = function(text, indent) {
	text.push(indent + '<![CDATA[' + this.cdata + ']]>\n');
};

function CommentNode(comment) {
	this.comment = comment;
}

CommentNode.prototype.stringify = function(text, indent) {
	text.push('<!--' + this.comment.replace('-->', '--&gt;') + '-->');
};

CommentNode.prototype.stringifyWithWhiteSpace = function(text, indent) {
	text.push(indent + '<!--' + this.comment.replace('-->', '--&gt;') + '-->\n');
};

function replaceXmlEntities(text) {
	if (text.match(/</)) console.log(text);
	return ('' + text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
