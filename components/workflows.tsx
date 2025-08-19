import Image from "next/image";

import Spotlight from "@/components/spotlight";

export default function Workflows() {
  const WorflowImg01 = "/images/workflow-01.png";
  const WorflowImg02 = "/images/workflow-02.png";
  const WorflowImg03 = "/images/workflow-03.png";

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Empowering Businesses, End-to-End
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Crafting Dreams into Reality.
            </h2>
            <p className="text-lg text-indigo-200/65">
              From web hosting and software development to branding and
              automation, Cvacore Technologies delivers 45+ professional
              services to help your business grow, scale, and succeed.
            </p>
          </div>

          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px ..."
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 ...">
                {/* Image */}
                <img
                  src={WorflowImg01}
                  width={350}
                  height={288}
                  alt="Hosting & Cloud Services"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal ...">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Hosting & Cloud Services
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    Reliable hosting solutions including Shared, VPS, Dedicated
                    Servers, Cloud Storage, Domain Registration, and SSL
                    certificates — all under one roof.
                  </p>
                </div>
              </div>
            </a>

            {/* Card 2 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px ..."
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 ...">
                {/* Image */}
                <img
                  src={WorflowImg02}
                  width={350}
                  height={288}
                  alt="Development Solutions"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal ...">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Development Solutions
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    From websites and mobile apps to ERP, CRM, and automation
                    tools — we build custom, scalable solutions for your
                    business.
                  </p>
                </div>
              </div>
            </a>

            {/* Card 3 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px ..."
              href="#0"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 ...">
                {/* Image */}
                <img
                  src={WorflowImg03}
                  width={350}
                  height={288}
                  alt="Marketing & Branding"
                />
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal ...">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Marketing & Branding
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    SEO, social media, ads, branding, video production, and
                    UI/UX design to captivate your audience and grow your brand.
                  </p>
                </div>
              </div>
            </a>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
