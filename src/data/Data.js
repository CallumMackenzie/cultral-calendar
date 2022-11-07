import { jd as rawData } from "./holiday_json"
import moment from "moment";

export { data, randomQuote, randomHello }

const testData =
	[
		{
			name: "Christmas",
			date: "2020-12-25",
			countries: ["Canada", "US"],
			digest: "Birth of Jesus Christ ... lorem ipsum ...",
			link: "https://www.christmas.com"
		},
		{
			name: "Valentine's Day",
			date: "2020-02-14",
			countries: ["Canada"],
			digest: "Holiday to celebrate love ... St.Valentine ... etc",
			link: "https://www.valentine.com"
		},
		{
			name: "Eric Day",
			date: "2022-11-06",
			countries: ["Canada"],
			digest: "...",
			link: "..."
		}
	];

let reducedData = new Map();
rawData.forEach(i => {
	reducedData.set(i.name.toLocaleLowerCase().trim(), i);
});

const data = Array.from(reducedData.values())
	.filter(a => {
		let newDate = moment("2022" + a.date.substring(4), "YYYY-MM-DD");
		let now = moment();
		let isToday = now.date() == newDate.date() && now.month() == newDate.month();
		return isToday || newDate.isAfter(moment());
	})
	.sort((a, b) =>
		moment(a.date, "YYYY-MM-DD").subtract(moment(b.date, "YYYY-MM-DD")).valueOf()
	).concat(
		rawData.filter(a => moment(a.date, "YYYY-MM-DD").isBefore(moment()))
			.sort((a, b) =>
				moment(a.date, "YYYY-MM-DD").subtract(moment(b.date, "YYYY-MM-DD")).valueOf()
			));

const randomQuote = () => {
	const positiveQuotes = ["You are doing amazing!",
		"Drink some water!",
		"You look gorgeous today!",
		"Have aN AMAZING day!",
		"Did you get enough sleep?",
		"Did you eat well?",
		"Being kind is cool!",
		"You are perfect!",
		"You are enough!",
		"You are doing so good!",
		"I'm proud of you!",
		"How was your day today?",
		"Remeber to take a day off!"];

	return positiveQuotes[Math.floor(Math.random() * positiveQuotes.length)];
};

const randomHello = () => {
	const hello = ["Hello!",
		"Gola!",
		"Bonjour!",
		"Ciao!",
		"Haai!",
		"Salve!",
		"Konnichiwa!",
		"Salve!",
		"Guten tag!",
		"Guten tag!"]

	return hello[Math.floor(Math.random() * hello.length)];
};