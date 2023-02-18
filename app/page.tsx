import { gql } from "graphql-request";
import { AboutSection } from "../components/sections/About";
import { CTA } from "../components/sections/CTA";
import { Section } from "../components/Section";
import { Container } from "../components/Container";
import { Smiley } from "../components/Smiley";
import Image from "next/image"
// import { hygraph } from "../lib/hygraph";
import { EventCard } from "../components/EventCard/EventCard";
import { type Event } from "./events/page";
import {events} from "../lib/events";

async function getEvents() {
	return events;
}

const Home = async () => {
	return (
		<>
			<section className="flex lg:flex-row lg:gap-15 flex-col gap-2">
				<main className="relative mx-auto max-w-8xl py-16 px-8 md:py-14 md:px-16">
					<h1 className="text-h1-mobile md:text-d1-mobile xl:text-d1">
						Sattva&apos;23 <br className="hidden md:inline" />
						<span className="text-yellow">/</span> Safarnama
					</h1>
					<p className="text-sub-heading-mobile md:text-sub-heading xl:max-w-[56ch]">
						The wait for MPSTME&apos;s famed cultural fest is finally over!</p>
					<br></br>
					<p className="text-sub-heading-mobile md:text-sub-heading xl:max-w-[56ch]">
						Mark your calendars and save the dates, Sattva 2023 is on the 21st, 22nd, and 23rd of Feb &apos;23, and this is your beckoning to come be a part of this cultural extravaganza!
					</p>
				</main>
				<Image src="/images/Sattva-Logo-Web.png" alt="Sattva-Logo" height={1920} width={1920} className="h-[50ch] w-[50ch] p-0 m-0 ml-2" />
			</section>
			<AboutSection />
			<Section className="bg-green">
				<Container className="md:space-y-32">
					<div className="relative space-y-8 md:space-y-0">
						<h2 className="text-h2-mobile md:mb-8 md:text-d2-mobile xl:text-d2">
							Our Events!
						</h2>
						<p className="text-body xl:max-w-[680px]">
							From thrilling workshops, to extremely entertaining pageants, performances, and competitions, for all of your hidden hobbies and talents, and across various stimulating domains…
						</p>
						<br></br>
						<p className="text-body xl:max-w-[680px]">
							There&apos;s something at Sattva for everybody, plus an immensely scintillating Pro-Night adorned by famed artists and celebs!
						</p>
						<Smiley className="absolute -top-16 right-0 h-[64px] w-[65px] text-light-cyan md:h-[128px] md:w-[130px] xl:-top-0 xl:right-16 xl:h-[192.2px] xl:w-[196.23px]" />
					</div>
					<div className="relative">
						<ul className="scrollbar-hidden snap -mx-8 flex snap-x flex-nowrap overflow-x-scroll md:-mx-16 xl:mx-0 xl:space-x-16">
							{events.map(({ id, ...props }) => (
								<li
									key={id}
									className="flex-initial snap-start pl-8 last:pr-8 md:pl-16 md:last:pr-16 xl:p-0"
								>
									<EventCard {...props} />
								</li>
							))}
						</ul>
						<span className="absolute top-0 right-0 bottom-0 hidden w-32 bg-gradient-to-r from-green/0 to-green xl:block"></span>
					</div>
				</Container>
			</Section>
			<CTA />
		</>
	);
};

export default Home;
