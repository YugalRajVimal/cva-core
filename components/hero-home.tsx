import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

import HighLogo from "./ui/high-logo";

export default function HeroHome() {
  return (
    <section>
      <div className="relative w-full h-[30vh]">
        <video
          autoPlay
          loop
          muted
          className="h-full w-full object-cover opacity-40"
        >
          <source src="/vdo.mp4" type="video/mp4" />
        </video>
        <div className="absolute h-full w-full bg-[#070c1c]/50 left-0 top-0 flex justify-center items-center">
          <div className="scale-[5] image-rendering-pixelated">
            <HighLogo />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 mb:pt-20">
        {/* <ModalVideo
          thumb={VideoThumb}
          thumbWidth={1104}
          thumbHeight={576}
          thumbAlt="Modal video thumbnail"
          video="videos//video.mp4"
          videoWidth={1920}
          videoHeight={1080}
        /> */}

        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className=" text-center ">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Unleashing Innovation Through Cutting-Edge Solutions
            </h1>
            <div className="mx-auto max-w-4xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {/* At CVACore Technologies, we transform your ideas into reality
                with our extensive range of professional services. Experience
                the future of technology with our stunning 3D animations and
                dark-themed design. */}
                Cvacore Technologies is a full-service digital solutions
                provider offering <strong>45+ professional services</strong>{" "}
                under one roof. From web hosting, software development, and
                cloud infrastructure to digital marketing, branding, and
                business automation, we empower businesses with innovative,
                reliable, and result-driven solutions. Our expert team blends
                creativity with technology to deliver tailored services that
                help brands grow, scale, and succeed in today’s competitive
                market.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Start Building
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
