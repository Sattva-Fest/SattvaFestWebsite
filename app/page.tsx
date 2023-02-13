// import { gql } from "graphql-request";

import { WigglyStars } from "./WigglyStars";
import { AboutSection } from "../components/sections/About";
import { CTA } from "../components/sections/CTA";
import { Section } from "../components/Section";
import { Container } from "../components/Container";
import { Smiley } from "../components/Smiley";

// const QUERY = gql`
// 	{
// 		Events {
// 			id
// 			title
// 			href
// 			link
// 			image
// 		}
// 	}
// `;

// async function getProjects() {
// 	const { projects } = await hygraph.request(QUERY);

// 	return projects;
// }

const Home = async () => {
	// const projects: Omit<Project, "description">[] = await getProjects();

	return (
		<>
			<section>
				<main className="relative mx-auto max-w-8xl py-16 px-8 md:py-32 md:px-16">
					<h1 className="mb-16 text-h1-mobile md:text-d1-mobile xl:text-d1">
						Sattva&apos;23 <br className="hidden md:inline" />
						<span className="text-yellow">/</span> Safarnama
					</h1>
					<p className="text-sub-heading-mobile md:text-sub-heading xl:max-w-[36ch]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non neque aliquet, rutrum magna ut, gravida risus. Vivamus sed ipsum.
					</p>
					<WigglyStars />
				</main>
			</section>
			<AboutSection />
			<Section className="bg-green">
				<Container className="md:space-y-32">
					<div className="relative space-y-8 md:space-y-0">
						<h2 className="text-h2-mobile md:mb-8 md:text-d2-mobile xl:text-d2">
							Our Events!
						</h2>
						<p className="text-body xl:max-w-[680px]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non neque aliquet, rutrum magna ut, gravida risus. Vivamus sed ipsum.
						</p>
						<Smiley className="absolute -top-16 right-0 h-[64px] w-[65px] text-light-cyan md:h-[128px] md:w-[130px] xl:-top-0 xl:right-16 xl:h-[192.2px] xl:w-[196.23px]" />
					</div>
					<div className="relative">
						<ul className="scrollbar-hidden snap -mx-8 flex snap-x flex-nowrap overflow-x-scroll md:-mx-16 xl:mx-0 xl:space-x-16">
							{/* {projects.map(({ id, ...props }) => (
								<li
									key={id}
									className="flex-initial snap-start pl-8 last:pr-8 md:pl-16 md:last:pr-16 xl:p-0"
								>
									<ProjectCard {...props} />
								</li>
							))} */}
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
