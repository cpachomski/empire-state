var React = require('react');
var $ = require('jquery-browserify');

var EmpireStateBuilding = React.createFactory(require('./components/EmpireStateBuilding.jsx'));

window.onload = function() {
	React.render(EmpireStateBuilding(), document.getElementById('empire-state'));
	
	generateDomTreeJSON($('body'), 20, 0, 0, 0, null);

}

//1. for each object
//     grab it's necessary properties
//	   create properties object
//	   find it's children
//	   create children objects
//     create edges between parent and children objects
//     find their children

var nodeId = 0;



var generateDomTreeJSON = function(el, size, initY, initX, edgeId, inputObj){

	if (inputObj){
		DomTreeJSON = inputObj;
	} else{
		console.log('build inital dom tree')
		var DomTreeJSON = {
			"nodes" : [],
			"edges" : [],
		};
	}

	var $node = el;


	// create node for parent
	var node = {};
	
		
	

	node['id']= 'n' + nodeId;

	console.log(nodeId);
	node['size'] = size;
	node['x'] = initX;
	node['y'] =	initY;
	node['label'] = $node.prop("tagName").toLowerCase();
	node['class'] = $node.prop("className").toLowerCase();
	nodeId +=1;
	console.log(node['label']);
	console.log(node['class']);
	DomTreeJSON.nodes.push(node);

	
	if ($node.children().length > 0 ){
		console.log('got kids');

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
	
			generateDomTreeJSON($(child), size, initY, initX, edgeId, DomTreeJSON );
		})

	} else{
		console.log('done. no more kids');
	}
	console.log(DomTreeJSON);
	
}

