import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import LandingHeader from "@/components/LandingHeader";
import heroData from "@/data/home/hero.json";

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <Image
        src="/images/header.jpg"
        alt={heroData.title}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        width={1600}
        height={687}
        priority
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-900/70" />
      <div className="px-6 lg:px-8 container mx-auto min-h-lvh">
        <LandingHeader />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {heroData.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {heroData.subtitle}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="text-base font-semibold leading-7 text-white flex flex-col items-center"
              >
                Learn more
                <span aria-hidden="true">
                  <ChevronDownIcon width={24} height={24} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
