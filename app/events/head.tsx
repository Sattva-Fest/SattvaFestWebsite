import { HeadMeta } from "../../components/HeadMeta";
import DefaultTags from "../DefaultTags";

const meta = {
	title: "Sattva`23 Safarnama - Events!",
	description:
		"Mark your calendars and save the dates, Sattva 2023 is on the 21st, 22nd, and 23rd of Feb '23, and this is your beckoning to come be a part of this cultural extravaganza!",
	url: "https://sattva23.space/events",
	image: "https://sattva23.space/images/og-image.png",
};

export default function AboutHead() {
	return (
		<>
			<DefaultTags />
			<HeadMeta metadata={meta} />
		</>
	);
}