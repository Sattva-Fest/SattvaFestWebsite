import { HeadMeta } from "../../components/HeadMeta";
import DefaultTags from "../DefaultTags";

const meta = {
	title: "Sattva`23 Safarnama - My work",
	description: "A collection of past project I've worked on an am proud of.",
	url: "http://localhost:3000/work",
	image: "http://localhost:3000/images/og-image.png",
};

const WorkHead = () => {
	return (
		<>
			<DefaultTags />
			<HeadMeta metadata={meta} />
		</>
	);
};

export default WorkHead;
