import Link from "next/link";
import Image from "next/image";
import heroData from "@/data/home.json";

export default function Hero() {
  return (
    <div className="relative isolate bg-gray-900">
      <Image
        src="/images/header.jpg"
        alt={heroData.title}
        className="aspect-[16/9] w-full object-cover"
        width={1280}
        height={720}
        priority
      />
      <div className="absolute inset-0 h-full w-full bg-slate-900/50" />
      <div className="absolute inset-0 grid h-full w-full place-items-center text-center">
        <div className="p-4">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-6xl">
            {heroData.title}
          </h1>
          <p className="leading-8 text-gray-300 sm:mt-6 sm:text-lg">
            {heroData.subtitle}
          </p>
          <div className="sm:mt-10">
            <Link
              href="#about"
              className="inline-flex gap-3 text-base font-semibold leading-7 text-white"
            >
              Learn more
              <span aria-hidden="true">&darr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
