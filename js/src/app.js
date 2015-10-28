var React = require('react');

var EmpireStateBuilding = React.createFactory(require('./components/EmpireStateBuilding.jsx'));

window.onload = function() {
	React.render(EmpireStateBuilding(), document.getElementById('empire-state'));
}

