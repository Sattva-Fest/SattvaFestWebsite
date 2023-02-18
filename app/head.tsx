import { HeadMeta } from "../components/HeadMeta";
import DefaultTags from "./DefaultTags";

const meta = {
	title: "Sattva`23 Safarnama",
	description:
		"Pending",
	url: "https://sattva23.space",
	image: "https://sattva23.space/images/og-image.png",
};

export default function RootHead() {
	return (
		<>
			<DefaultTags />
			<HeadMeta metadata={meta} />
		</>
	);
}
