import React from 'react'
import '../css/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

/* React ES6 component class */
export class SkiDayCount extends React.Component{
	percentToDecimal(decimal){
		return ( (decimal*100) + '%');
	}
	calcGoalProgress(total, goal){
		return this.percentToDecimal(total/goal);
	}
	render(){
		return(
			<div className="ski-day-count">
				<div className="total-days">
					<span>{this.props.total}</span>
					<span> days</span>
				</div>
				<div className="powder-days">
					<span>{this.props.powder}</span>
					<span> days</span>
				</div>
				<div className="backcountry-days">
					<span>{this.props.backcountry}</span>
					<span> days</span>
				</div>
				<div>
					<span>
						{
							this.calcGoalProgress(
								this.props.total,
								this.props.goal
							)
						}
					</span>
				</div>
			</div>
		)
	}
};

/* default value if the value is not supplide */
SkiDayCount.defaultProps =  {
	total: 50,
	powder: 50,
	backcountry:15,
	goal:100
};

/* type of props which is comming */
SkiDayCount.propTypes = {
	total: React.PropTypes.number.isRequired,
	powder : React.PropTypes.number,
	backcountry: React.PropTypes.number
};

/* end of react component */