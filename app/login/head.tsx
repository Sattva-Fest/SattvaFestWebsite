import { HeadMeta } from "../../components/HeadMeta";
import DefaultTags from "../DefaultTags";

const meta = {
	title: "Sattva`23 Safarnama - Login",
	description:
		"Login to your account to see your top artists, tracks and download your Music-Stats poster.",
	url: "http://localhost:3000/login",
	image: "http://localhost:3000/images/og-image.png",
};

export default function LoginHead() {
	return (
		<>
			<DefaultTags />
			<HeadMeta metadata={meta} />
		</>
	);
}
