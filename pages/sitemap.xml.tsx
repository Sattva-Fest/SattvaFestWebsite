import { GetServerSideProps } from "next";

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>http://localhost:3000</loc>
     </url>
     <url>
       <loc>http://localhost:3000/about</loc>
     </url>
     <url>
       <loc>http://localhost:3000/contact</loc>
     </url>
     <url>
       <loc>http://localhost:3000/events</loc>
     </url>
   </urlset>
 `;
}

const SiteMap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");

  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
