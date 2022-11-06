import moment from "moment/moment";
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
	return (<>
		<div className="InfoPaneTitle" style={style}>
			<span>{moment().format("LL")}</span>
		</div>
	</>);
}

const HolidayDigest = ({ name, date, digest, link, countries }) => {
	const countriesStr = countries.reduce((prev, cur) => prev + ", " + cur);
	return (<>
		<div className="InfoPaneItem">
			<span className="digestName">{name}</span>
			<span className="digestCountry">Observed in: {countriesStr}</span>
			<span className="digestDate">{datesToDateRangeString(date)}</span>
			<span className="digestDigest"></span>
		</div>
	</>);
}

// Functions:

// Convert integer day to a string repersentation
// Ex. intDayToDay(1) => "1st"
//     intDayToDay(2) => "2nd"
const intDayToDay = (i) => {
	const lastDigit = i.toString().slice(-1);
	const firstDigit = i.toString().charAt(0);
	if (lastDigit == "1" && firstDigit != 1) return i + "st";
	if (lastDigit == "2" && firstDigit != 1) return i + "nd";
	if (lastDigit == "3" && firstDigit != 1) return i + "rd";
	return i + "th";
}

// Convert integer month to a string repersentation
// Ex. intMonthToMonth(1) => "January"
//     intMonthToMonth(3) => "March"
const intMonthToMonth = (i) => {
	return ["January", "February", "March", "April", "May", "June", "July",
		"August", "September", "October", "November", "December"][i];
}

// Convert date string to string of ranges
const datesToDateRangeString = (date) =>
	dateRangesToString(datesToRanges(date));

// Convert string list of dates in format MM-DD,MM-DD to range
// Ex. datesToRanges("12-15,12-16,12-17") => {start: {day: 15, month: 12}, 
//                                            end: {day: 17, month: 12}}
const datesToRanges = (date) => {
	// Parse dates into lists of integer months and days
	const dates = date.replaceAll("-", "")
		.split(",")
		.map(str => moment(str, "YYYYMMDD"));
	// Generate ranges
	const ranges = [];
	let startRange = undefined;
	dates.forEach((e, i) => {
		if (startRange == undefined) {
			startRange = e;
		}
		if (e.subtract(startRange) != moment(1, "days") || i == dates.length - 1) {
			ranges.push({ start: startRange, end: e });
			startRange = e;
		}
	});
	console.log(dates)
	return ranges;
}

// Convert list of ranges to a string representation
const dateRangesToString = (ranges) => {
	return ranges.map(e => {
		let res = intDayToDay(e.start.date()) + " of " + intMonthToMonth(e.start.month());
		if (e.start != e.end)
			res += " to the " + intDayToDay(e.end.date()) + " of " + intMonthToMonth(e.end.month());
		return res;
	}).reduce((curr, prev) => prev + ", " + curr);
}