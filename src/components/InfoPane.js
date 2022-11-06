import { data } from "../data/Data";

export { InfoPane }

// Components:

const InfoPane = () => {
	return (<>
		<div className="InfoPane">
			<Title style/>
			{data.holidays.map(holiday => HolidayDigest(holiday))}
		</div>
	</>);
}

const Title = () => {
	const today = new Date(),
		d = today.getDate(),
		m = today.getMonth() + 1,
		y = today.getFullYear();
	return (<>
		<h2>{intDayToDay(d)}</h2>
	</>);
}

const HolidayDigest = ({ name, date, digest, link }) => {
	return (<>
		<h3>{name}</h3>
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