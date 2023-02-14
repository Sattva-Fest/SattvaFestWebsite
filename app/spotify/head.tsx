import { HeadMeta } from "../../components/HeadMeta";
import DefaultTags from "../DefaultTags";

const meta = {
	title: "Sattva`23 Safarnama - Spotify",
	description:
		"I design and develop engaging websites and delightful digital experiences.",
	url: "https://www.milovangudelj.com/about",
	image: "https://www.milovangudelj.com/images/og-image.png",
};

export default function AboutHead() {
	return (
		<>
			<DefaultTags />
			<HeadMeta metadata={meta} />
		</>
	);
}
