"use client";

import { Rocket, TrendingUp, Crown, CheckCircle2 } from "lucide-react";

export default function PlansSection() {
  const plans = [
    {
      icon: <Rocket className="w-10 h-10 text-indigo-400" />,
      title: "Starter – Launch & Grow",
      description:
        "Perfect for startups and small businesses looking to build a strong online presence.",
      features: [
        "Shared Web Hosting",
        "Domain Registration & DNS Management",
        "SSL Certificate",
        "1 Website (Design & Development)",
        "Basic CMS Setup (WordPress or Custom)",
        "Payment Gateway Integration (Basic)",
        "Logo Design",
        "Social Media Post Design (5 posts/month)",
        "Basic SEO Optimization",
        "Business Email Hosting",
        "MSME/Udyam Registration Assistance",
      ],
      highlight: "Affordable entry-level pricing for quick launch",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-indigo-400" />,
      title: "Growth – Scale & Automate",
      description:
        "For growing businesses ready for automation, better marketing, and advanced tech solutions.",
      features: [
        "Everything in Starter Plan",
        "VPS Hosting (99.9% uptime)",
        "Cloud Storage Solutions",
        "Web App or Mobile App Development",
        "ERP or CRM Setup",
        "WhatsApp API Integration",
        "LMS Setup (Courses/Training)",
        "Google Ads Management",
        "Facebook & Instagram Ads",
        "Email & SMS Marketing",
        "Conversion Tracking (Google & Meta)",
        "UI/UX Design for Web/App",
        "Video Editing (2 videos/month)",
        "Branding Kit (Colors, Fonts, Templates)",
        "Company Registration",
        "GST Registration & Filing",
      ],
      highlight: "Balanced pricing for brands ready to grow and automate",
    },
    {
      icon: <Crown className="w-10 h-10 text-indigo-400" />,
      title: "Enterprise – Dominate & Lead",
      description:
        "Tailored for enterprises and high-scale businesses needing complete tech, marketing, and legal integration.",
      features: [
        "Everything in Growth Plan",
        "Dedicated Server Hosting",
        "Advanced Cybersecurity & Backup",
        "Server Management & Maintenance",
        "Custom Software Development",
        "Advanced AI Chatbots",
        "Multi-platform App Development",
        "Full Social Media Marketing",
        "YouTube Channel Management",
        "Instagram Growth Strategy",
        "Bulk WhatsApp Messaging",
        "Motion Graphics & Animation",
        "Unlimited Monthly Design & Content",
        "ISO Certification Assistance",
        "Trademark Filing Support",
        "PAN/TAN Registration",
        "Digital Signature Certificate (DSC)",
      ],
      highlight: "Premium solution for market leaders",
    },
  ];

  return (
    <section id="plans" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
      <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
          <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
            Cvacore Technologies
          </span>
        </div>
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
            Our Service Plans
          </h2>
          <p className="mt-3 text-indigo-200/80 max-w-2xl mx-auto">
            Choose the perfect plan for your business growth — from launch to
            market leadership.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-900/60 rounded-2xl border border-gray-800 hover:border-indigo-400 transition-all duration-300 p-8 flex flex-col shadow-lg hover:shadow-indigo-500/20"
            >
              {/* Icon & Title */}
              <div className="flex flex-col items-center mb-6">
                <div className="mb-4">{plan.icon}</div>
                <h3 className="text-xl font-bold text-gray-200 text-center">
                  {plan.title}
                </h3>
                <p className="text-indigo-200/70 text-sm text-center mt-2">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-start gap-2 text-sm text-indigo-100/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-[2px]" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Highlight */}
              <div className="mt-6 text-center text-indigo-400 font-semibold text-sm">
                {plan.highlight}
              </div>

              {/* Button */}
              <div className="mt-6">
                <button className="w-full py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
