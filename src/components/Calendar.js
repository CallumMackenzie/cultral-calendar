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
				defaultView="dayGridMonth"
				plugins={[dayGridPlugin]}
				events={data.holidays.map(e => {
					const date = moment(e.date.replaceAll("-", ""), "YYYYMMDD");
					const currentYear = moment().year(); // Make this current calendar year
					const newDate = currentYear + "-" + (date.month() + 1) + "-" + date.date();
					
					return {
						title: e.name,
						date: newDate
					}
				})}
			/>
		)
	}
}
