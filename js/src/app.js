var React = require('react');
var $ = require('jquery-browserify');

var EmpireStateBuilding = React.createFactory(require('./components/EmpireStateBuilding.jsx'));

window.onload = function() {
	React.render(EmpireStateBuilding(), document.getElementById('empire-state'));
	
	generateDomTreeJSON($('#building-container'), 20, 0, 0, null);
	console.log(DomTreeJSON);


	var domGraph = new sigma({
		graph: DomTreeJSON,
		container: 'container',
		settings: {
			defaultNodeColor: '#2E4372'
		}
	});

}

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
	node['label'] = $node.prop("className").toLowerCase();
	nodeId +=1;

	DomTreeJSON.nodes.push(node);

	
	if ($node.children().length > 0 ){


		size -= 2;
		initY += 100;
		initX = -20;

		$node.children().each(function(i, child){
			// BUILD EDGE BETWEEN CHILD AND PARENT NODE
			initX += 10;
			var edge = {};
			edge['id'] = "e" + edgeId;
			edge['source'] = node['id'];
			edge['target'] = "n" + nodeId;
			edgeId += 1; 
			DomTreeJSON.edges.push(edge);	
		});

		$node.children().each(function(i, child){	
			initX += 25;
			generateDomTreeJSON($(child), size, initY, initX );
		})

	} else{

	}
	
}

