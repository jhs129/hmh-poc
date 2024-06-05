import Image from "next/image";
import Header from "@/components/layout/header";
import HeroCarousel from "@/components/ui/hero-carousel";
import ProviderSearchForm from "@/components/search/provider-search-form";
import Footer from "@/components/layout/footer";
import PracticeCard from "@/components/ui/practice-card";
import CardContainer from "@/components/ui/card-container";
import IconCTA from "@/components/ui/icon-cta2";
import CardCTA from "@/components/ui/card-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <ProviderSearchForm />
        <div className="site-container flex flex-col flex-wrap space-y-4 mt-2 mb-2 md:space-y-0 gap-2 md:gap-6 md:flex-row justify-between">
          <PracticeCard
            title="practice name long long lorem ipsum mit doler"
            thumbnail="/images/practices/cancer.png"
          />
          <PracticeCard
            title="practice name"
            thumbnail="/images/practices/cancer.png"
          />
          <PracticeCard
            title="practice name"
            thumbnail="/images/practices/cancer.png"
          />
          <PracticeCard
            title="practice name"
            thumbnail="/images/practices/cancer.png"
          />
          <PracticeCard
            title="practice name"
            thumbnail="/images/practices/cancer.png"
          />
          <PracticeCard
            title="practice name"
            thumbnail="/images/practices/cancer.png"
          />
          <CardContainer>
            <IconCTA
              title="Find a Cancer Doctor"
              icon="fa-ambulance"
              label="Learn More"
            />
            <IconCTA title="Cancer Care Locations" icon="fa-hospital" />
            <IconCTA title="833-CANCER-MD" icon="fa-phone" />
            <IconCTA title="Cancer Care Services" icon="fa-suitcase-medical" />
          </CardContainer>
          <div className="flex flex-col text-center px-2">
            <h2 className="text-primaryDark">
              Together in the Fight Against Cancer
            </h2>
            <p className="text-secondaryDark">
              With a network of more than 1,200 doctors, nurses, researchers and
              clinicians, our experts work together to create a cancer treatment
              plan that has your unique genetic makeup, individual needs and
              personal goals at the core.
            </p>
          </div>
          <CardContainer>
            <CardCTA
              title="Discover the JTCC Difference"
              imageUrl="/images/practices/jtcc-difference.png"
              description="Recognized by US News and World Report as a premier cancer center in New Jersey, John Theurer Cancer Center provides highly specialized, innovative cancer care close to home"
              linkUrl="https://www.hackensackmeridianhealth.org/en/services/cancer-care/why-choose-hmh-cancer-care"
            />

            <CardCTA
              title="Cancer Support Services"
              imageUrl="/images/practices/our-cancer-research.png"
              description="You will  have access to the many comprehensive services we have available from diagnosis through treatment and after care. Whether ne-on-one, through a class or program, or in a support group setting, we are here for all your needs."
              linkUrl="https://www.hackensackmeridianhealth.org/en/services/cancer-care/why-choose-hmh-cancer-care"
            />
            <CardCTA
              title="Our Cancer Research"
              imageUrl="/images/practices/cancer-support-services.png"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo."
              linkUrl="https://www.hackensackmeridianhealth.org/en/services/cancer-care/why-choose-hmh-cancer-care"
            />
            <CardCTA
              title="Clincal & Research Hightlights"
              imageUrl="/images/practices/research-highlights.png"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo."
              linkUrl="https://www.hackensackmeridianhealth.org/en/services/cancer-care/why-choose-hmh-cancer-care"
            />
          </CardContainer>
        </div>
      </main>
      <Footer />
    </>
  );
}
