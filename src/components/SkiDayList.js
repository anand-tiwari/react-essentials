import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { SkiDayRow } from './SkiDayRow'
import { PropTypes } from 'react'

export const SkiDayList = ({days}) => (
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Resort</th>
				<th>Powder</th>
				<th>Backcountry</th>
			</tr>
		</thead>
		<tbody>
			{days.map((day,i) =>
				<SkiDayRow	key={i} 
							{...day} />
			)}
		</tbody>
	</table>
)

SkiDayList.propTypes = {
	days: PropTypes.arrayOf(PropTypes.object)
}