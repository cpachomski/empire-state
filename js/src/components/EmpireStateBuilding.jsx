var React = require('react');

var EmpireStateBuilding = React.createClass({
	render: function(){
		return(
			<div id="building-container">
				<MiddleOuterSection  />
				<MiddleOuterSection  />
				<BottomOuterSection className="left" />
				<BottomOuterSection  className="right" />			
			</div>
		)
	}
});


var Window = React.createClass({
	render: function(){
		return(
			<div className='window'></div>
		)
	}
});

var TwoWindows = React.createClass({
	render: function(){
		return(
			<div className='two-windows'>
				<Window />
				<Window />	
			</div>
		)
	}
});

var ThreeWindows = React.createClass({
	render: function(){		
		return (
			<div className='three-windows'>
				<Window />
				<Window />
				<Window />
			</div>
		)
	}
});

var BottomOuterSectionRow = React.createClass({
	render: function(){
		return(
			<div className='bottom-outer-row'>
				<TwoWindows className='left' />
				<ThreeWindows className='center' />
				<TwoWindows className='right' />
			</div>
		)
	},
});

var BottomOuterSection = React.createClass({
	render: function(){
		this.rows = [];
		for (i = 0; i < 15; i++){
			this.rows.push(<BottomOuterSectionRow />)
		}
		return (
			<div id="bottom-outer">
				{this.rows}
			</div>
		)
	}
});

var BottomOuterSectionRow = React.createClass({
	render: function(){
		return(
			<div className='bottom-outer-row'>
				<TwoWindows className='left' />
				<ThreeWindows className='center' />
				<TwoWindows className='right' />
			</div>
		)
	}
});

var MiddleOuterSectionRow = React.createClass({
	render: function(){
		return(
			<div className='middle-outer-row'>
				<Window className='left' />
				<ThreeWindows className='center' />
				<Window className='right' />
			</div>
		)
	}
});

var MiddleOuterSection = React.createClass({
	render: function(){
		this.middleRows = [];
		for( i = 0; i < 10; i++){
			this.middleRows.push(<MiddleOuterSectionRow />)
		}
		return (
			<div className="middle-outer">
				{this.middleRows}
			</div>
		)
	}
});




module.exports = EmpireStateBuilding;