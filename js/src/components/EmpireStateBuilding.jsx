var React = require('react');

var EmpireStateBuilding = React.createClass({
	render: function(){
		return(
			<div id="building-container">
				<CenterTopperLarge />
				<MiddleOuterSection  />
				<MiddleOuterSection  />
				<MainCenterSection />
				<BottomOuterSection name="left" />
				<BottomOuterSection  name="right" />
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
			<div id="bottom-outer" className={this.props.name}>
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

		for (i = 0; i < 35 ; i++){
			this.centerRows1.push(<TwoWindows/>);
		};

		return (
			<div className="main-center">
					<div className="side-column">{this.centerRows1}</div>
					<div className="center-column">
						<div className="ThreeWindowsColumn">
							<div className='left'>{this.centerRows1}</div>
							<div className='center'>{this.centerRows1}</div>
							<div className='right'>{this.centerRows1}</div>
						</div>
					</div>
					<div className="side-column">{this.centerRows1}</div>

			</div>
		)
	}
});

var CenterTopperLarge = React.createClass({
	render: function(){
		return (
			<div className='center-topper-large'>
				<div className='side-column'>{this.centerRows1}</div>
				<div className='side-column'>{this.centerRows1}</div>
			</div>
		)
	}
})






module.exports = EmpireStateBuilding;