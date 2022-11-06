import { data } from "../data/Data";

export { InfoPane }

// Components:

const InfoPane = () => {
	return (<>
		<div className="InfoPane">
			{data.holidays.map(holiday => HolidayDigest(holiday))}
		</div>
	</>);
}

const HolidayDigest = ({ name, date, digest, link }) => {
	return (<>
		<h3>{name}</h3>
	</>);
}

// Functions: