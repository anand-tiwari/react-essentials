import React from 'react'
import '../css/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

/* Class component using createClass method*/
/*export const SkiDayCount = React.createClass({
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
})*/


/* React ES6 component class */
/*export class SkiDayCount extends React.Component{
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
}*/
/* end of react component */

/* statless component class */
/*const percentToDecimal= (decimal) =>{
	return ( (decimal*100) + '%');
}
const calcGoalProgress= (total, goal) =>{
	return percentToDecimal(total/goal);
}

export const SkiDayCount = (props) => (
	<div className="ski-day-count">
		<div className="total-days">
			<span>{props.total}</span>
			<span> days</span>
		</div>
		<div className="powder-days">
			<span>{props.powder}</span>
			<span> days</span>
		</div>
		<div className="backcountry-days">
			<span>{props.backcountry}</span>
			<span> days</span>
		</div>
		<div>
			<span>
				{
					calcGoalProgress(
						props.total,
						props.goal
					)
				}
			</span>
		</div>
	</div>
)*/
/* end of stateless component */


/* statless with required props  not all props component class */

const percentToDecimal= (decimal) =>{
	return ( (decimal*100) + '%');
}
const calcGoalProgress= (total, goal) =>{
	return percentToDecimal(total/goal);
}

export const SkiDayCount = ({total, powder, backcountry, goal}) => (
	<div className="ski-day-count">
		<div className="total-days">
			<span>{total}</span>
			<Calendar />
			<span> days</span>
		</div>
		<div className="powder-days">
			<span>{powder}</span>
			<SnowFlake />
			<span> days</span>
		</div>
		<div className="backcountry-days">
			<span>{backcountry}</span>
			<Terrain />
			<span> days</span>
		</div>
		<div className="total-percent">
			<span>
				{
					calcGoalProgress(
						total,
						goal
					)
				}
			</span>
		</div>
	</div>
)


SkiDayCount.defaultProps =  {
	total: 50,
	powder: 50,
	backcountry:15,
	goal:100
}

/* end of stateless component */


