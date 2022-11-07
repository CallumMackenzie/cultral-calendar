import { jd as rawData } from "./holiday_json"
import moment from "moment";

export { data, RandomQuote, RandomHello }

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

const data = rawData.filter(a => moment("2022" + a.date.substring(4), "YYYY-MM-DD").isAfter(moment()))
	.sort((a, b) =>
		moment(a.date, "YYYY-MM-DD").subtract(moment(b.date, "YYYY-MM-DD")).valueOf()
	).concat(rawData.filter(a => moment(a.date, "YYYY-MM-DD").isBefore(moment())));

const RandomQuote = () => {
	const PositiveQuotes = ["You are doing amazing!",
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

	return PositiveQuotes[Math.floor(Math.random() * PositiveQuotes.length)];
};

const RandomHello = () => {
	const Hello = ["Hello",
		"hola",
		"Bonjour",
		"Ciao",
		"Haai!",
		"salve",
		"konnichiwa",
		"salve",
		"guten tag",
		"guten tag"]

	return Hello[Math.floor(Math.random() * Hello.length)];
};