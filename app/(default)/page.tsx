export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Temp from "@/components/temp";
import Services from "@/components/services";
import BenefitsSection from "@/components/benefit-section";
import StatsSection from "@/components/stats-section";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />

      {/* <Temp /> */}
      <Services />
      <BenefitsSection />
      <StatsSection />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
