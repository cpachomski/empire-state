var React = require('react');

var EmpireStateBuilding = React.createClass({
	render: function(){
		return(
			<div id="building-container">
				<MiddleOuterSection  />
				<MiddleOuterSection  />
				<MainCenterSection />
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
		for( i = 0; i < 20; i++){
			this.middleRows.push(<MiddleOuterSectionRow />)
		}
		return (
			<div className="middle-outer">
				{this.middleRows}
			</div>
		)
	}
});

var MainCenterSection = React.createClass({
	render: function(){


		this.centerRows1 = [];

		for (i = 0; i < 20 ; i++){
			this.centerRows1.push(<TwoWindows/>);
		};

		return (
			<div className="main-center">
					<div className="side-column">{this.centerRows1}</div>
					<div className="center-column">
						<div className="OneWindowsColumn">
							{this.centerRows1}
						</div>
						<div className="ThreeWindowsColumn">
							<div className='left-column'>{this.centerRows1}</div>
							<div className='center-column'>{this.centerRows1}</div>
							<div className='right-colum'>{this.centerRows1}</div>
						</div>
						<div className="OneWindowsColumn">
							 {this.centerRows1}
						</div>
					</div>
					<div className="side-column">{this.centerRows1}</div>

			</div>
		)
	}
});




module.exports = EmpireStateBuilding;