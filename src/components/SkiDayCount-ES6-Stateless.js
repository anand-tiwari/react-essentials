/* statless with required props  not all props component class */
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import '../css/ui.scss'

const percentToDecimal= (decimal) =>{
	return ( (decimal*100) + '%');
}
const calcGoalProgress= (total, goal) =>{
	return percentToDecimal(total/goal);
}

export const SkiDayCount = ({total=70, powder=10, backcountry=20, goal=100}) => (
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