import Image from "next/image";
import Header from "@/components/layout/header";
import HeroCarousel from "@/components/ui/hero-carousel";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroCarousel />
    </main>
  );
}
