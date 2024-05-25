import Image from "next/image";
import Head from "next/head";
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
      <Head>
        <title>
          {props?.page?.data?.title || `Hackensack Meridian Health | Home`}
        </title>
        <meta
          name="description"
          content={
            props?.page?.data?.description ||
            `Hackensack Meridian Health - New Jersey's largest and most comprehensive health network, with more than 450 locations and 36,000 team members.`
          }
        />
        <meta
          name="keywords"
          content={
            props?.page?.data?.keywords ||
            `Healthcare New Jersy, Health Network, Health Network New Jersey, Health Network New Jersy, Health Network`
          }
        />
        {/* <meta property="og:image" content="http://www.jhsdigitalconsulting.com/images/logo-blue.png" /> */}
        <meta
          property="og:image"
          content={props?.page?.data?.shareImage || null}
        />

        <meta property="og:title" content={props?.page?.data?.title || null} />
        <meta
          property="og:description"
          content={
            props?.page?.data?.description ||
            `Hackensack Meridian Health - New Jersey's largest and most comprehensive health network, with more than 450 locations and 36,000 team members.`
          }
        />
      </Head>
      <Header
        navigation={props.header || undefined}
        logo={props?.settings?.logo || undefined}
      />
      <main>      
        {/* Render the Builder page */}
        <div className="site-container">
        
        <BuilderComponent model="page" content={props?.page || undefined} />
        </div>
      </main>
      <Footer
        navigation={props?.footer || undefined}
        socialLinks={props?.socialLinks || undefined}
        copyright={props?.settings?.copyright || undefined}
      />
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

  const socialLinks = await builder
    .get("social-links", { query: { name: "hmh-social-links" }, enrich: true })
    .promise();

  const siteProperties = await builder
    .get("site-properties", {
      query: { name: "site-properties" },
      enrich: true,
    })
    .promise();

  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (params?.page?.join("/") || ""),
      },
      enrich: true,
    })
    .toPromise();


  // Return the page content as props
  return {
    props: {
      header: headerContent?.data || null,
      footer: footerContent?.data || null,
      socialLinks: socialLinks?.data || null,
      settings: siteProperties?.data || null,
      page: page || null,
    },
    // Revalidate the content every 5 seconds
    revalidate: 5,
  };
};
