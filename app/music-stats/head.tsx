import { HeadMeta } from "../../components/HeadMeta";
import DefaultTags from "../DefaultTags";

const meta = {
	title: "Sattva`23 Safarnama - Music-Stats",
	description: "Get your cool Spotify Music-Stats poster now",
	url: "http://localhost:3000/music-stats",
	image: "http://localhost:3000/images/og-image-ms.png",
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
