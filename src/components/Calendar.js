import React, { Component } from 'react';
import '../App.css'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import { data } from '../data/Data.js'
import moment from 'moment';

export { Calendar }

export default class Calendar extends Component {
	render() {
		console.log(data)
		return (
			<FullCalendar
				className="Calendar"
				defaultView="dayGridWeek"
				initialView="dayGridWeek"
				plugins={[dayGridPlugin]}
				events={data.map(e => {
					const date = moment(e.date, "YYYY-MM-DD");
					const currentYear = moment().year(); // Make this current calendar year
					const newDate = currentYear + "-" + (date.month() + 1) + "-" + date.date();
					return {
						title: e.name,
						date: newDate
					};
				})}
			/>
		)
	}
}
