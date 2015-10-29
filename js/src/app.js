var React = require('react');
var $ = require('jquery-browserify');

var EmpireStateBuilding = React.createFactory(require('./components/EmpireStateBuilding.jsx'));

window.onload = function() {
	React.render(EmpireStateBuilding(), document.getElementById('empire-state'));
	
	generateDomTreeJSON($('body'), 20, 0, 0, null);
	console.log(DomTreeJSON);

}

//1. for each object
//     grab it's necessary properties
//	   create properties object
//	   find it's children
//	   create children objects
//     create edges between parent and children objects
//     find their children

var nodeId = 0;
var edgeId = 0;
var DomTreeJSON = {
	"nodes" : [],
	"edges" : [],
};

var generateDomTreeJSON = function(el, size, initY, initX){

	

	

	var $node = el;

	// create node for parent
	var node = {};
	
	node['id']= 'n' + nodeId;

	node['size'] = size;
	node['x'] = initX;
	node['y'] =	initY;
	node['label'] = $node.prop("tagName").toLowerCase();
	node['class'] = $node.prop("className").toLowerCase();
	nodeId +=1;

	DomTreeJSON.nodes.push(node);

	
	if ($node.children().length > 0 ){


		size -= 2;
		initY += 1;
		initX = 0;

		$node.children().each(function(index, child){
			// BUILD EDGE BETWEEN CHILD AND PARENT NODE
			
			
			initX += 1;	
			var edge = {};
			edge['id'] = "e" + edgeId;
			edge['source'] = node['id'];
			edge['target'] = "n" + nodeId;
			edgeId += 1; 
			DomTreeJSON.edges.push(edge);
	
			generateDomTreeJSON($(child), size, initY, initX );
		})

	} else{

	}
	
}

