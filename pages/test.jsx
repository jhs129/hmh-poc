import Image from "next/image";
import Header from "@/components/layout/header";
import HeroCarousel from "@/components/ui/hero-carousel";
import ProviderSearchForm from "@/components/search/provider-search-form";
import Footer from "@/components/layout/footer";
import CTACard from "@/components/ui/icon-cta";
import PracticeCard from "@/components/ui/practice-card";

export default function Home() {
  return (
    <>
    <Header />
    <main>

      <HeroCarousel />
      <ProviderSearchForm />
      <div className="site-container flex flex-col flex-wrap space-y-4 mt-2 mb-2 md:space-y-0 gap-2 md:gap-6 md:flex-row justify-between">
      <PracticeCard title="practice name long long lorem ipsum mit doler" thumbnail="/images/practices/cancer.png"/>
      <PracticeCard title="practice name" thumbnail="/images/practices/cancer.png"/>
      <PracticeCard title="practice name" thumbnail="/images/practices/cancer.png"/>
      <PracticeCard title="practice name" thumbnail="/images/practices/cancer.png"/>
      <PracticeCard title="practice name" thumbnail="/images/practices/cancer.png"/>
      <PracticeCard title="practice name" thumbnail="/images/practices/cancer.png"/>
      </div>
    </main>
    <Footer />
    </>
  );
}
