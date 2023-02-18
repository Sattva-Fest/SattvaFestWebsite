import Image from "next/legacy/image";
import Link from "next/link";

type EventCardProps = {
	title: string;
	href: string;
	link: string;
	image: string;
};

export const EventCard = ({ title, href, link, image }: EventCardProps) => {
	return (
		<div className="space-y-8 md:space-y-[26px]">
			<Link
				href={href}
				className="relative inline-block aspect-video h-[250px] w-[250px] cursor-pointer border-2 bg-black drop-shadow-brutal md:h-[320px] md:w-[320px] xl:drop-shadow-brutal-lg"
			>
				<Image
					src={image}
					layout={"fill"}
					quality={100}
					alt="Dummy Event card image"
				/>
			</Link>
			<div className="flex flex-col">
				<span className="text-sub-heading-mobile font-medium md:text-sub-heading">
					{title} →
				</span>
				<Link href={link} className="text-label-md text-dark-me">{link}</Link>
			</div>
		</div>
	);
};
