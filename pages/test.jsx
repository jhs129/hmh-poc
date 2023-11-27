import Image from "next/image";
import Header from "@/components/layout/header";
import HeroCarousel from "@/components/ui/hero-carousel";
import ProviderSearchForm from "@/components/search/provider-search-form";
import Footer from "@/components/layout/footer";
import CTACard from "@/components/ui/icon-cta";

export default function Home() {
  return (
    <>
    <Header />
    <main>

      <HeroCarousel />
      <ProviderSearchForm />
      <div className="site-container flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:justify-between">
      
      <CTACard title="Find a Doctor" icon="fa-user-md" desc="Search our network of expert care by doctor, condition or specialty." label="Search Doctors" url="#"/>
      <CTACard title="Find a Location"icon="fa-map-marker" desc="Search our network by hospital, urgent care, doctor offices and more." label="Find Locations" url="#"/>
      <CTACard title="Make an Appointment" icon="fa-calendar-check" desc="You can make an appointment online or on the phone." label="Start Here" url="#"/>
      </div>
    </main>
    <Footer />
    </>
  );
}
