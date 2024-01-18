import Link from "next/link";
import Image from "next/image";
import LandingHeader from "@/components/LandingHeader";
import heroData from "@/data/home.json";

export default function Hero() {
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
            <div className="mt-10">
              <Link
                href="about"
                className="text-base font-semibold leading-7 text-white inline-flex gap-3"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
