import * as rawData from "./holidays.json"

export { data }

const data = rawData;

const data_test = {
	holidays:
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
		]
}