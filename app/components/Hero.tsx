import Image from "next/image";
import HeroJunk from "../../public/hero-junk.jpg";
import Benefits from "./Benefits";
import LearnMoreLink from "./LearnMoreLink";

export default function Hero() {
  return (
    <section className="bg-white" id="hero">
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl pt-10 md:pt-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-20 lg:pb-0">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:mt-10 sm:text-4xl">
                  Breathe Easy: Your Path to a Clutter-Free Environment Starts
                  Here
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-900">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="items-left mt-10 flex flex-row items-baseline gap-x-6 gap-y-6 sm:flex-row">
                  <a
                    href="#"
                    className="sm:text-md rounded-md bg-teal-500 px-3.5 py-2.5 text-sm font-semibold uppercase text-white shadow-sm transition duration-300 ease-in-out hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 lg:text-lg"
                  >
                    Get a free estimate
                  </a>
                  <LearnMoreLink />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 sm:mt-20 md:mx-auto md:max-w-xl lg:mx-0 lg:mt-0 lg:w-screen">
            {/* <!-- <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36" aria-hidden="true"></div> --> */}
            <Image
              className="md:rounded-lg"
              src={HeroJunk}
              alt="Full service junk removal in Denver, Aurora and Centennial"
              placeholder="blur"
              priority
            />
          </div>
        </div>
        <Benefits />
      </div>
    </section>
  );
}
