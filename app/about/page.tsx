import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import aboutData from "@/data/about.json";

export const metadata: Metadata = {
  title: "HPCAN LAB | About",
};

export default function About() {
  return (
    <>
      <Header active="about" />
      <main>
        <section className="container mx-auto px-6 pt-24 lg:px-24">
          <h2
            className="mt-1 scroll-m-12 font-bold tracking-tight text-gray-900 sm:text-xl lg:text-2xl"
            id="overview"
          >
            About
          </h2>
          <p className="pt-5 text-gray-500 md:text-justify">
            {aboutData.overview}
          </p>
        </section>
        <section className="bg-white pt-16 lg:py-24">
          <div className="bg-slate-600 pb-16 lg:relative lg:z-10 lg:pb-0">
            <div className="lg:mx-auto lg:grid lg:max-w-screen-2xl lg:grid-cols-3 lg:gap-4 lg:px-24">
              <div className="relative lg:-my-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                />
                <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
                  <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-xl shadow-xl md:aspect-h-1 md:aspect-w-1 lg:aspect-none lg:h-full">
                    <Image
                      className="object-cover lg:h-full lg:w-full"
                      src={aboutData.imageSrc}
                      alt={aboutData.name}
                      width={320}
                      height={320}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-4">
                <div className="mx-auto max-w-md px-6 sm:max-w-screen-2xl lg:max-w-none lg:px-0 lg:py-4">
                  <p className="mt-6 text-sm text-white md:text-justify">
                    {aboutData.description}
                  </p>

                  <Link
                    href={aboutData.CVLink}
                    className="mt-4 inline-flex items-center gap-2 text-sm text-sky-50 hover:text-sky-200"
                    target="_blank"
                    referrerPolicy="no-referrer"
                  >
                    <span aria-hidden="true">
                      <ArrowTopRightOnSquareIcon width={20} height={20} />
                    </span>
                    Link to his CV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
