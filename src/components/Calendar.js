import React, { Component } from 'react';
import '../App.css'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import { data } from '../data/Data.js'

export { Calendar }


export default class Calendar extends Component {
	render() {
		return (
			<FullCalendar
				defaultView="dayGridMonth"
				plugins={[dayGridPlugin]}
				events={data.holidays.map(e => {
					return {
						title: e.name,
						date: e.date
					}
				})}
			/>
		)
	}
}
