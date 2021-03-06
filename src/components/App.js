import { createClass } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'

export const App = createClass({
	getInitialState(){
		return {
			allSkiDays : [
				{
					resort: "Squaw Valley",
					date: new Date("1/2/2017"),
					powder: true,
					backcountry: false
				},
				{
					resort: "kirkwood",
					date: new Date("3/28/2017"),
					powder: false,
					backcountry: false
				},
				{
					resort: "Mt. Tallac",
					date: new Date("4/2/2017"),
					powder: false,
					backcountry: true
				}
			]
		}
	},
	countDays(filter) {
		const { allSkiDays } = this.state
		return allSkiDays.filter(function(day){
			if(filter){
				return day[filter]
			}else{
				return day
			}
		}).length;
	},
	render(){
		return (
			<div className="app">
				<SkiDayList days={this.state.allSkiDays}/>
				<SkiDayCount	total={this.countDays()}
								powder ={this.countDays(
									"powder"
								)}
								backcountry = {this.countDays(
									"backcountry"
								)} 
								/>
			</div>
		)
	}
})