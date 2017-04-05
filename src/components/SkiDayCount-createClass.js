import React from 'react'
import '../css/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

/* Class component using createClass method*/
export const SkiDayCount = React.createClass({
	propTypes: {
		total: React.PropTypes.number,
		powder : React.PropTypes.number,
		backcountry: React.PropTypes.number
	},
	getDefaultProps() {
		return {
			total: 50,
			powder: 50,
			backcountry:15,
			goal:100
		}
	},
	percentToDecimal(decimal){
		return ( (decimal*100) + '%');
	},
	calcGoalProgress(total, goal){
		return this.percentToDecimal(total/goal);
	},
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
})