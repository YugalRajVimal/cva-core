import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>

        <div className="flex flex-col md:flex-row  justify-between gap-6 py-8  md:py-12  xl:gap-20">
          {/* About Cvacore */}
          <div className="space-y-2 flex-2">
            <div className="mb-1">
              <Logo />
            </div>
            <h3 className="text-sm font-medium text-gray-200">
              About Cvacore Technologies
            </h3>
            <p className="text-sm text-indigo-200/65">
              Cvacore Technologies is a full-service digital solutions provider
              offering 45+ professional services under one roof. We empower
              businesses with innovative, reliable, and result-driven solutions.
            </p>
          </div>

          {/* Hosting & Cloud */}
          <div className="space-y-2 flex-1">
            <h3 className="text-sm font-medium text-gray-200">
              Hosting & Cloud
            </h3>
            <ul className="space-y-2 text-sm text-indigo-200/65">
              <li>Shared & Reseller Hosting</li>
              <li>WordPress Hosting</li>
              <li>VPS & Dedicated Servers</li>
              <li>Cloud Storage Solutions</li>
              <li>Domain & SSL Services</li>
            </ul>
          </div>

          {/* Development */}
          <div className="space-y-2 flex-1">
            <h3 className="text-sm font-medium text-gray-200">Development</h3>
            <ul className="space-y-2 text-sm text-indigo-200/65">
              <li>Website & App Development</li>
              <li>Custom Software, ERP & CRM</li>
              <li>Telegram & WhatsApp Automation</li>
              <li>Payment Gateway Integration</li>
              <li>LMS Setup</li>
            </ul>
          </div>

          {/* Marketing & Branding */}
          <div className="space-y-2 flex-1">
            <h3 className="text-sm font-medium text-gray-200">
              Marketing & Branding
            </h3>
            <ul className="space-y-2 text-sm text-indigo-200/65">
              <li>SEO & Google Ads</li>
              <li>Meta Ads & SMM</li>
              <li>Email/SMS Marketing</li>
              <li>Logo & UI/UX Design</li>
              <li>Video Editing & Branding Kits</li>
            </ul>
          </div>
        </div>
        {/* Footer Logo & Social */}
        <div className="text-center  w-full">
          <div className="text-sm">
            <p className="py-2 text-indigo-200/65">
              © {new Date().getFullYear()} Cvacore Technologies
              <span className="text-gray-700"> · </span>
              <a
                className="text-indigo-200/65 transition hover:text-indigo-500"
                href="#0"
              >
                Terms
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
