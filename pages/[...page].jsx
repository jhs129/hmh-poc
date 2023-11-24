import React from "react";
import { useRouter } from "next/router";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import "../builder-registry";

import Header from "@/components/layout/header";
import HeroCarousel from "@/components/ui/hero-carousel";
import ProviderSearchForm from "@/components/search/provider-search-form";
import Footer from "@/components/layout/footer";


builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

// Define a function that fetches the Builder
// content for a given page
export const getStaticProps = async ({ params }) => {
  // Fetch the builder content for the given page
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (params?.page?.join("/") || ""),
      },
    })
    .toPromise();

    const headerContent = await builder
    .get("navigation", { query: { name: "header-navigation" }, enrich: true })
    .promise();

    const footerContent = await builder
    .get("navigation", { query: { name: "footer-navigation" }, enrich: true })
    .promise();

    const socialLinks = await builder
    .get("social-links", { query: { name: "hmh-social-links" }, enrich: true })
    .promise();


    const siteProperties = await builder
    .get("site-properties", { query: { name: "site-properties" }, enrich: true })
    .promise();

  // Return the page content as props
  return {
    props: {
      page: page || null,
      header: headerContent?.data || null,
      footer: footerContent?.data || null,
      socialLinks: socialLinks?.data || null,
      settings: siteProperties?.data || null,
    },
    // Revalidate the content every 5 seconds
    revalidate: 5,
  };
};

// Define a function that generates the
// static paths for all pages in Builder
export async function getStaticPaths() {
  // Get a list of all pages in Builder
  const pages = await builder.getAll("page", {
    // We only need the URL field
    fields: "data.url",
    options: { noTargeting: true },
  });

  // Generate the static paths for all pages in Builder
  return {
    paths: pages
      .map((page) => String(page.data?.url))
      .filter((url) => url !== "/"),
    fallback: "blocking",
  };
}

// Define the Page component
export default function Page(props) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  // If the page content is not available
  // and not in preview mode, show a 404 error page
  if (!props.page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  // If the page content is available, render
  // the BuilderComponent with the page content
  return (
    <>
      <Head>
        <title>{props.page?.data?.title}</title>
      </Head>

      <Header navigation={props.header} logo={props.settings.logo}/>
      <main>
      {/* Render the Builder page */}
      <div className="site-container">
      <BuilderComponent model="page" content={props.page || undefined} />
      </div>
      </main>
      <Footer navigation={props.footer} socialLinks={props.socialLinks} copyright={props.settings.copyright} />
    </>
  );
}
