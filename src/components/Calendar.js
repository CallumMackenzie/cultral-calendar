import React, { Component } from 'react';
import '../App.css'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import { data } from '../data/Data.js'
import moment from 'moment';

export { Calendar }

export default class Calendar extends Component {
	render() {
		return (
			<FullCalendar
				className="Calendar"
				defaultView="dayGridWeek"
				initialView="dayGridWeek"
				plugins={[dayGridPlugin]}
				events={data.map(e => {
					const currentYear = moment().year(); // Make this current calendar year
					const newDate = currentYear + e.date.substring(e.date.indexOf("-") + 1);
					return {
						title: e.name,
						date: newDate
					}
				})}
			/>
		)
	}
}
