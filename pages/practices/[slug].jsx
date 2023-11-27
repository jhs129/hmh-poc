import {
    builder,
    BuilderComponent,
    BuilderContent,
    useIsPreviewing,
  } from "@builder.io/react";
  import React from "react";
  import Head from "next/head";
  import DefaultErrorPage from "next/error";
  
  import "/builder-registry";
  import { useEffect } from "react";
  import Header from "@/components/layout/header";
  import Footer from "@/components/layout/footer";
  
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);
  
  function PracticePage(props) {
    const practice = props.practice;
  
    const isPreviewing = useIsPreviewing();
    if (!practice && !isPreviewing) {
      return (
        <>
          <Head>
            <meta name="robots" content="noindex" />
          </Head>
          <DefaultErrorPage statusCode={404} />
        </>
      );
    }
  
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

      <Header navigation={props?.header || undefined} logo={props?.settings?.logo || undefined}/>

        <main>
          <div className="site-container">
            <BuilderContent
              content={practice}
              options={{ includeRefs: true }}
              model="blog-article"
            >
              {(data, loading, fullContent) => (
                <React.Fragment>
                  <Head>
                    {/* Render meta tags from custom field */}
                    <title>{data?.title}</title>

                  </Head>
 
                  {/* Render the Builder drag/drop'd content */}
                  
                  <div className="flex flex-col md:flex-row">
                  <h1>{data?.title}</h1>
                  <img src={data?.thumbnail} />
                    </div>

             
                  <BuilderComponent
                  name="practice"
                    content={fullContent}
                    options={{ includeRefs: true }}
                  />
             
                </React.Fragment>
              )}
            </BuilderContent>
          </div>
        </main>
        <Footer navigation={props?.footer || undefined} socialLinks={props?.socialLinks || undefined} copyright={props?.settings?.copyright || undefined} />
      </>
    );
  }
  
  export async function getStaticProps({ params }) {
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
  
    const practice =
      (await builder
        .get("practice", {
          // Include references, like our `author` ref
          options: { includeRefs: true },
          query: {
            // Get the specific article by handle
            "data.name": params.name,
          },
          enrich: true,
        })
        .promise()) || null;
  
  
  
    return {
      props: {
        practice: practice,
        slug: params.slug,
        header: headerContent?.data || null,
        footer: footerContent?.data || null,
        socialLinks: socialLinks?.data || null,
        settings: siteProperties?.data || null,
      },
      revalidate: 5,
    };
  }
  
  export async function getStaticPaths() {
    return {
      paths: [],
      fallback: true,
    };
  }
  
  export default PracticePage;
  