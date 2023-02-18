import { HeadMeta } from "../../components/HeadMeta";
import DefaultTags from "../DefaultTags";

const meta = {
	title: "Sattva`23 Safarnama - Music-Stats",
	description: "Get your cool Spotify Music-Stats poster now",
	url: "https://sattva23.space/music-stats",
	image: "https://sattva23.space/images/og-image-ms.png",
};

const MusicStatsHead = () => {
	return (
		<>
			<DefaultTags />
			<HeadMeta metadata={meta} />
		</>
	);
};

export default MusicStatsHead;
