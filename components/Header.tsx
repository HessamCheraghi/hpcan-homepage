"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/20/solid";
import heroData from "@/data/home.json";
import clsx from "clsx";

const navigation = [
  { name: "About", href: "about" },
  { name: "People", href: "people" },
  { name: "Projects", href: "projects" },
  { name: "Publications", href: "publications" },
] as const;

export default function Header({
  active,
}: {
  active: (typeof navigation)[number]["href"];
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  return (
    <div className="px-6 lg:px-8 container mx-auto">
      <nav
        className="flex items-center justify-between pt-6 pb-4"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{heroData.title}</span>
            <Image
              className="h-12 w-12"
              src="/images/logo.png"
              alt="sharif university logo"
              priority
              width={48}
              height={48}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "text-sm font-semibold leading-6 text-black",
                active === item.href ? "text-sky-600" : ""
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href={heroData.template}
            className="text-sm font-semibold leading-6 text-black inline-flex gap-1"
            download
          >
            <ArrowDownTrayIcon className="h-6 w-6" width={24} height={24} />
            Download template
          </Link>
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{heroData.title}</span>
              <Image
                className="h-12 w-12"
                src="/images/logo.png"
                alt=""
                width={48}
                height={48}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-black hover:bg-gray-400/10"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href={heroData.template}
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-black hover:bg-gray-400/10"
                  download
                >
                  Download template
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
