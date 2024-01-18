import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IconMail from "@/components/IconMail";
import IconLinkedin from "@/components/IconLinkedin";
import PhDStudentsData from "@/data/people/PhDStudents.json";
import MSStudentsData from "@/data/people/MSStudents.json";
import PhDAlumniData from "@/data/people/PhDAlumni.json";
import MSAlumniData from "@/data/people/MSAlumni.json";

export const metadata: Metadata = {
  title: "HPCAN LAB | People",
};

export default function People() {
  return (
    <>
      <Header active="people" />
      <main>
        <section className="bg-white">
          <div className="mx-auto container py-12 px-6 lg:px-8 lg:py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
              <div className="space-y-5 sm:space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  PhD students
                </h2>
              </div>
              <div className="lg:col-span-2">
                <ul
                  role="list"
                  className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
                >
                  {PhDStudentsData.map((person) => (
                    <li key={person.name}>
                      <div className="flex items-center space-x-4 lg:space-x-6">
                        <Image
                          className="h-16 w-16 rounded-full lg:h-20 lg:w-20 object-contain shadow-lg border"
                          src={person.imgSrc || "/avatars/default.jpg"}
                          alt=""
                          width={64}
                          height={64}
                        />
                        <div className="space-y-3 text-lg font-medium leading-6">
                          <h3>{person.name || "unknown name"}</h3>
                          <div className="flex gap-2 items-center justify-start">
                            {person.email ? (
                              <Link
                                href={"mailto:" + person.email}
                                className="inline-block text-gray-400 hover:text-gray-500"
                              >
                                <IconMail />
                              </Link>
                            ) : null}
                            {person.linkedin ? (
                              <Link
                                href={person.linkedin}
                                className="inline-block text-gray-400 hover:text-gray-500"
                              >
                                <IconLinkedin />
                              </Link>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="mx-auto container py-12 px-6 lg:px-8 lg:py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
              <div className="space-y-5 sm:space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  MSc students
                </h2>
              </div>
              <div className="lg:col-span-2">
                <ul
                  role="list"
                  className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
                >
                  {MSStudentsData.map((person) => (
                    <li key={person.name}>
                      <div className="flex items-center space-x-4 lg:space-x-6">
                        <Image
                          className="h-16 w-16 rounded-full lg:h-20 lg:w-20 object-contain shadow-lg border"
                          src={person.imgSrc || "/avatars/default.jpg"}
                          alt=""
                          width={64}
                          height={64}
                        />
                        <div className="space-y-3 text-lg font-medium leading-6">
                          <h3>{person.name || "unknown name"}</h3>
                          <div className="flex gap-2 items-center justify-start">
                            {person.email ? (
                              <Link
                                href={"mailto:" + person.email}
                                className="inline-block text-gray-400 hover:text-gray-500"
                              >
                                <IconMail />
                              </Link>
                            ) : null}
                            {person.linkedin ? (
                              <Link
                                href={person.linkedin}
                                className="inline-block text-gray-400 hover:text-gray-500"
                              >
                                <IconLinkedin />
                              </Link>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="mx-auto container py-12 px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="space-y-5 sm:space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  PhD Alumni
                </h2>
              </div>
              <div className="">
                <ul
                  role="list"
                  className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-8 sm:space-y-0 lg:gap-x-8"
                >
                  {PhDAlumniData.map((person) => (
                    <li key={person.name} className="">
                      <div className="flex items-center space-x-4 lg:space-x-6">
                        <div className="space-y-1 font-medium leading-6">
                          <h3 className="font-bold">
                            {person.name || "unknown name"}
                          </h3>
                          <p className="text-sm">{person.title || ""}</p>
                          <div className="flex gap-2 items-center justify-start">
                            {person.email ? (
                              <Link
                                href={"mailto:" + person.email}
                                className="inline-block text-gray-400 hover:text-gray-500"
                              >
                                <IconMail />
                              </Link>
                            ) : null}
                            {person.linkedin ? (
                              <Link
                                href={person.linkedin}
                                className="inline-block text-gray-400 hover:text-gray-500"
                              >
                                <IconLinkedin />
                              </Link>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="mx-auto container py-12 px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="space-y-5 sm:space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  MSc Alumni
                </h2>
              </div>
              <div className="">
                <ul
                  role="list"
                  className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-8 sm:space-y-0 lg:gap-x-8"
                >
                  {MSAlumniData.map((person) => (
                    <li key={person.name} className="">
                      <div className="flex items-center space-x-4 lg:space-x-6">
                        <div className="space-y-1 font-medium leading-6">
                          <h3 className="font-bold">
                            {person.name || "unknown name"}
                          </h3>
                          <p className="text-sm">{person.title || ""}</p>
                          <div className="flex gap-2 items-center justify-start">
                            {person.email ? (
                              <Link
                                href={"mailto:" + person.email}
                                className="inline-block text-gray-400 hover:text-gray-500"
                              >
                                <IconMail />
                              </Link>
                            ) : null}
                            {person.linkedin ? (
                              <Link
                                href={person.linkedin}
                                className="inline-block text-gray-400 hover:text-gray-500"
                              >
                                <IconLinkedin />
                              </Link>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>{" "}
      </main>
      <Footer />
    </>
  );
}
