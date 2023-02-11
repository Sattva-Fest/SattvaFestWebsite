import { GraphQLClient } from "graphql-request";

export const hygraph = new GraphQLClient(
	"https://api-ap-south-1.hygraph.com/v2/cldyrkjl81qko01umeb7y0y5w/master",
	{
		headers: {
			Authorization: `Bearer ${process.env.HYGRAPH_ACCESS_TOKEN}`,
		},
	}
);

export const colorMap: { [key: string]: string } = {
	yellow: "bg-yellow",
	orange: "bg-orange",
	green: "bg-green",
	lavender: "bg-lavender text-white",
	lilla: "bg-lilla",
	purple_ish: "bg-purple",
	sad_orange: "bg-salmon",
	light_cyan: "bg-light-cyan",
	light_green: "bg-light-green",
};