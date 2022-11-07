import { jd as rawData } from "./holiday_json"
import moment from "moment";

export { data }

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

const data = rawData.sort((a, b) => {
	moment(a.date, "YYYY-MM-DD").subtract(moment(b.date, "YYYY-MM-DD"))
});