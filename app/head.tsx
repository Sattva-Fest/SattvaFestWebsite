import { HeadMeta } from "../components/HeadMeta";
import DefaultTags from "./DefaultTags";

const meta = {
	title: "Sattva`23 Safarnama",
	description:
		"Pending",
	url: "http://localhost:3000",
	image: "http://localhost:3000/images/og-image.png",
};

export default function RootHead() {
	return (
		<>
			<DefaultTags />
			<HeadMeta metadata={meta} />
		</>
	);
}
