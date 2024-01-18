import Image from "next/image";
import Link from "next/link";
import aboutData from "@/data/about.json";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import Header from "@/components/Header";

export default function About() {
  return (
    <>
      <Header active="about" />
      <div className="mx-auto container pt-24 px-6 lg:px-8">
        <h2
          className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl scroll-m-12"
          id="overview"
        >
          About
        </h2>
        <p className="pt-5 text-xl text-gray-500 md:text-justify">
          {aboutData.overview}
        </p>
      </div>
      <div className="bg-white pt-16 lg:py-24">
        <div className="bg-slate-600 pb-16 lg:relative lg:z-10 lg:pb-0">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8 mx-auto container px-6 lg:px-8">
            <div className="relative lg:-my-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
              />
              <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
                <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
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
            <div className="mt-12 lg:col-span-3 lg:m-0 lg:pl-8">
              <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-4">
                <p className="mt-6 text-lg text-white md:text-justify">
                  {aboutData.description}
                </p>

                <Link
                  href={aboutData.CVLink}
                  className="mt-6 text-lg text-sky-50 font-bold items-center inline-flex gap-2 hover:text-sky-200"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <span aria-hidden="true">
                    <ArrowTopRightOnSquareIcon width={24} height={24} />
                  </span>
                  Link to his CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
