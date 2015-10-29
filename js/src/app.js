var React = require('react');
var $ = require('jquery-browserify');

var EmpireStateBuilding = React.createFactory(require('./components/EmpireStateBuilding.jsx'));

window.onload = function() {
	React.render(EmpireStateBuilding(), document.getElementById('empire-state'));
	generateDomTreeJSON('body', 0, 20, 0, 0);
}

//1. for each object
//     grab it's necessary properties
//	   create properties object
//	   find it's children
//	   create children objects
//     create edges between parent and children objects
//     find their children




var generateDomTreeJSON = function(el, nodeId, firstSize, initY, initX){

	var DomTreeJSON = {
		"nodes" : [],
		"edges" : []
	};

	var $node = $('' + el);
	console.log($node);

	// create node for parent
	var node = {};
	node['id']= 'n' + nodeId;
	node['size'] = firstSize;
	node['x'] = initX;
	node['y'] =	initY;
	node['label'] = $node.prop("tagName").toLowerCase();;


	DomTreeJSON.nodes.push(node);

	console.log(DomTreeJSON);	
	
	if ($node.children().length > 0 ){
		console.log('got kids');
	} else{
		console.log('done. no more kids');
	}
	
}

