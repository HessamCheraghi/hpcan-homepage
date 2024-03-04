import { Metadata } from "next";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import researchAreaData from "@/data/projects/researchArea.json";
import openSourceData from "@/data/projects/openSource.json";

export const metadata: Metadata = {
  title: "HPCAN LAB | Projects",
};

export default function Projects() {
  return (
    <section id="projects">
      <article className="bg-white">
        <div className="container mx-auto px-6 py-12 lg:px-24 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="mt-1 scroll-m-12 font-bold tracking-tight text-gray-900 sm:text-xl lg:text-2xl">
                Research Area
              </h2>
            </div>
            <div className="">
              <ol
                role="list"
                className="space-y-12 sm:grid sm:gap-12 sm:space-y-0 md:grid-cols-2 2xl:grid-cols-3"
              >
                {researchAreaData.map((data, index) => (
                  <li key={data.title} className="">
                    <div className="space-y-4 font-normal">
                      <h3 className="text-base font-bold leading-6">
                        {index + 1}. {data.title || "unknown title"}
                      </h3>
                      {!!data.currentStudents &&
                      !!data.currentStudents.length ? (
                        <div className="space-y-1">
                          <h4 className="mb-1 text-base">Current Students:</h4>
                          <ul>
                            {data.currentStudents.map((st) => (
                              <li
                                key={st}
                                className="list-inside list-disc text-sm text-slate-700"
                              >
                                {st}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      {!!data.alumni && !!data.alumni.length ? (
                        <div className="space-y-1">
                          <h4 className="mb-1 text-base">Alumni:</h4>
                          <ul>
                            {data.alumni.map((st) => (
                              <li
                                key={st}
                                className="list-inside list-disc text-sm text-slate-700"
                              >
                                {st}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </article>
      <article className="bg-white">
        <div className="container mx-auto px-6 py-12 lg:px-24 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="mt-1 scroll-m-12 font-bold tracking-tight text-gray-900 sm:text-xl lg:text-2xl">
                Open-Source Projects, Tools and Software
              </h2>
            </div>
            <div className="">
              <ol
                role="list"
                className="space-y-12 sm:grid sm:gap-12  sm:space-y-0 md:grid-cols-2"
              >
                {openSourceData.map((data, index) => (
                  <li key={data.title} className="">
                    <div className="space-y-4 font-normal">
                      <h3 className="text-base font-bold leading-6">
                        {index + 1}. {data.title || "unknown title"}
                      </h3>
                      <p className="text-sm text-slate-700">
                        {data.description}
                      </p>
                      <div className="flex items-center justify-start gap-6">
                        {data.links.map((l) => (
                          <Link
                            key={l.label}
                            href={l.link}
                            className="inline-flex gap-1 text-black hover:text-sky-600"
                            target="_blank"
                            referrerPolicy="no-referrer"
                          >
                            <span aria-hidden="true">
                              <ArrowTopRightOnSquareIcon
                                className="h-5 w-5 flex-grow-0"
                                width={20}
                                height={20}
                              />
                            </span>
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
