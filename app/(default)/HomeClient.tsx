"use client";

import { useState, useEffect } from "react";


import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Services from "@/components/services";
import BenefitsSection from "@/components/benefit-section";
import StatsSection from "@/components/stats-section";
import LoadingScreen from "@/components/ui/loading-screen";

export default function HomeClient() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Services />
      <BenefitsSection />
      <StatsSection />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
