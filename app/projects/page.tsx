import Header from "@/components/Header";
import researchAreaData from "@/data/projects/researchArea.json";
import openSourceData from "@/data/projects/openSource.json";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
export default function Projects() {
  return (
    <>
      <Header active="projects" />
      <div className="bg-white">
        <div className="mx-auto container py-12 px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Research Area
              </h2>
            </div>
            <div className="">
              <ol
                role="list"
                className="space-y-12 sm:grid lg:grid-cols-4 md:grid-cols-2 2xl:grid-cols-5 sm:gap-12 sm:space-y-0"
              >
                {researchAreaData.map((data, index) => (
                  <li key={data.title} className="">
                    <div className="space-y-4 font-normal">
                      <h3 className="font-bold leading-6 text-lg">
                        {index + 1}. {data.title || "unknown title"}
                      </h3>
                      {!!data.currentStudents &&
                      !!data.currentStudents.length ? (
                        <div className="space-y-1">
                          <h4 className="font-bold text-sm">
                            Current Students:
                          </h4>
                          <ul>
                            {data.currentStudents.map((st) => (
                              <li
                                key={st}
                                className="list-inside list-disc text-sm"
                              >
                                {st}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                      {!!data.alumni && !!data.alumni.length ? (
                        <div className="space-y-1">
                          <h4 className="font-bold text-sm">Alumni:</h4>
                          <ul>
                            {data.alumni.map((st) => (
                              <li
                                key={st}
                                className="list-inside list-disc text-sm"
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
      </div>
      <div className="bg-white">
        <div className="mx-auto container py-12 px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Open-Source Projects, Tools and Software
              </h2>
            </div>
            <div className="">
              <ol
                role="list"
                className="space-y-12 sm:grid md:grid-cols-2  sm:gap-12 sm:space-y-0"
              >
                {openSourceData.map((data, index) => (
                  <li key={data.title} className="">
                    <div className="space-y-4 font-normal">
                      <h3 className="font-bold leading-6 text-lg">
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
                            className="text-black hover:text-sky-600 inline-flex gap-1"
                            target="_blank"
                            referrerPolicy="no-referrer"
                          >
                            <span aria-hidden="true">
                              <ArrowTopRightOnSquareIcon
                                width={24}
                                height={24}
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
      </div>
    </>
  );
}
