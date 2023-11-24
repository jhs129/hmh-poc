import Image from "next/image";
import Header from "@/components/layout/header";
import HeroCarousel from "@/components/ui/hero-carousel";
import ProviderSearchForm from "@/components/search/provider-search-form";
import Footer from "@/components/layout/footer";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import "../builder-registry";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default function Home(props) {
  return (
    <>
      <Header navigation={props.header} logo={props.settings.logo}/>
      <main>
        <HeroCarousel />
        <ProviderSearchForm />
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  // Fetch the builder content for the given page


  const headerContent = await builder
    .get("navigation", { query: { name: "header-navigation" }, enrich: true })
    .promise();

    const footerContent = await builder
    .get("navigation", { query: { name: "footer-navigation" }, enrich: true })
    .promise();

    const siteProperties = await builder
    .get("site-properties", { query: { name: "site-properties" }, enrich: true })
    .promise();
    console.log("siteProperties", siteProperties.data);

  // Return the page content as props
  return {
    props: {
      header: headerContent || null,
      footer: footerContent || null,
      settings: siteProperties.data || null,
    },
    // Revalidate the content every 5 seconds
    revalidate: 5,
  };
};
