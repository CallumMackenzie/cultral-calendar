import { data } from "../data/Data";
export { InfoPane }

// Components:

const InfoPane = () => {
	return (<>
		<div className="InfoPane">
			<Title />
			{data.holidays.map(holiday => HolidayDigest(holiday))}
		</div>
	</>);
}

const Title = ({ style }) => {
	const today = new Date(),
		d = today.getDate(),
		m = today.getMonth(),
		y = today.getFullYear();
	return (<>
		<div className="Title" style={style}>
			<span>{intDayToDay(d)} of {intMonthToMonth(m)}, {y}</span>
		</div>
	</>);
}

const HolidayDigest = ({ name, date, digest, link }) => {
	return (<>
		<span>{name}</span>
		<span></span>
	</>);
}

// Functions:

// Convert integer day to a string repersentation
// Ex. intDayToDay(1) => "1st"
//     intDayToDay(2) => "2nd"
const intDayToDay = (i) => {
	switch (i) {
		case 1: return "1st";
		case 2: return "2nd";
		case 3: return "3rd";
		default: return i + "th";
	}
}

// Convert integer month to a string repersentation
// Ex. intMonthToMonth(1) => "January"
//     intMonthToMonth(3) => "March"
const intMonthToMonth = (i) => {
	return ["January", "February", "March", "April", "May", "June", "July",
		"August", "September", "October", "November", "December"][i];
}