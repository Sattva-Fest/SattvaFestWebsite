import DefaultTags from "../DefaultTags";
import { HeadMeta } from "../../components/HeadMeta";

const meta = {
	title: "Sattva`23 Safarnama - Contact me",
	description:
		"Let's work together! Feel free to reach out to me for any questions you might have.",
	url: "https://sattva23.space/contact",
	image: "https://sattva23.space/images/og-image.png",
};

const ContactHead = () => {
	return (
		<>
			<DefaultTags />
			<HeadMeta metadata={meta} />
		</>
	);
};

export default ContactHead;
