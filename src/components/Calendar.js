import React, {Component} from 'react';
import '../App.css'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"


export default class Calendar extends Component {

	render() {
		return (
			<FullCalendar 
			defaultView="dayGridMonth" 
			plugins={[ dayGridPlugin ]}
			events={[
				{title: 'Christmas', date: '2022-12-25'}
			]}
				/>
		)
	}
}
