import { HeadMeta } from "../../components/HeadMeta";
import DefaultTags from "../DefaultTags";

const meta = {
	title: "Sattva`23 Safarnama - About me",
	description:
		"I design and develop engaging websites and delightful digital experiences.",
	url: "http://localhost:3000/about",
	image: "http://localhost:3000/images/og-image.png",
};

export default function AboutHead() {
	return (
		<>
			<DefaultTags />
			<HeadMeta metadata={meta} />
		</>
	);
}
