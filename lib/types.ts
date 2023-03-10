export type Track = {
	title: string;
	artist: string;
	url: string;
	image: {
		url: string;
		width: number;
		height: number;
		color: string;
	};
};

export type Artist = {
	name: string;
	url: string;
	image: {
		url: string;
		width: number;
		height: number;
		color: string;
	};
};

export type NowPlayingSong = {
	album: string;
	albumImageUrl: string;
	artist: string;
	artistId: string;
	isPlaying: boolean;
	songUrl: string;
	title: string;
};

export type TopTracks = {
	tracks: Track[];
};

export type TopArtists = {
	artists: Artist[];
};

export interface Event {
	id: string;
	title: string;
	day: number;
	href: string;
	link: string;
	image: string;
	description: string;
	categories: string;
	color: string;
}