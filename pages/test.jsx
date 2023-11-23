import Image from "next/image";
import Header from "@/components/layout/header";
import HeroCarousel from "@/components/ui/hero-carousel";
import ProviderSearchForm from "@/components/search/provider-search-form";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <HeroCarousel />
      <ProviderSearchForm />
    </main>
    <Footer />
    </>
  );
}
