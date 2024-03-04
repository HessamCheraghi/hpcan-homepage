import Link from "next/link";
import Image from "next/image";
import IconMail from "@/components/IconMail";
import IconLinkedin from "@/components/IconLinkedin";
import PhDStudentsData from "@/data/people/PhDStudents.json";
import MSStudentsData from "@/data/people/MSStudents.json";
import PhDAlumniData from "@/data/people/PhDAlumni.json";
import MSAlumniData from "@/data/people/MSAlumni.json";

export default function People() {
  return (
    <section id="people">
      <div className="container mx-auto px-6 pt-24 lg:px-24">
        <h2 className="sr-only" id="overview">
          People
        </h2>
        <article className="bg-white">
          <div className="container mx-auto px-6 pb-8 pt-4 lg:px-24 lg:pb-16 lg:pt-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
              <h2 className="mt-1 scroll-m-12 font-bold tracking-tight text-gray-900 sm:text-xl lg:text-2xl">
                PhD students
              </h2>

              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
                >
                  {PhDStudentsData.map((person) => (
                    <li key={person.name}>
                      <div className="flex items-center space-x-4 lg:space-x-6">
                        <Image
                          className="h-16 w-16 rounded-full border object-contain shadow-lg lg:h-20 lg:w-20"
                          src={person.imgSrc || "/avatars/default.jpg"}
                          alt=""
                          width={64}
                          height={64}
                        />
                        <div className="space-y-3 font-medium leading-6">
                          <h3 className="font-bold">
                            {person.name || "unknown name"}
                          </h3>
                          <div className="flex items-center justify-start gap-2">
                            {person.email ? (
                              <Link
                                href={"mailto:" + person.email}
                                className="inline-block text-gray-400 hover:text-gray-600"
                              >
                                <IconMail
                                  width={20}
                                  height={20}
                                  className="h-5 w-5"
                                />
                              </Link>
                            ) : null}
                            {person.linkedin ? (
                              <Link
                                href={person.linkedin}
                                className="inline-block text-gray-400 hover:text-gray-600"
                              >
                                <IconLinkedin
                                  width={20}
                                  height={20}
                                  className="h-5 w-5"
                                />
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
        </article>
        <article className="bg-white">
          <div className="container mx-auto px-6 pb-8 pt-4 lg:px-24 lg:pb-16 lg:pt-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-4">
              <h2 className="mt-1 scroll-m-12 font-bold tracking-tight text-gray-900 sm:text-xl lg:text-2xl">
                MSc students:
              </h2>

              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
                >
                  {MSStudentsData.map((person) => (
                    <li key={person.name}>
                      <div className="flex items-center space-x-4 lg:space-x-6">
                        <Image
                          className="h-16 w-16 rounded-full border object-contain shadow-lg lg:h-20 lg:w-20"
                          src={person.imgSrc || "/avatars/default.jpg"}
                          alt=""
                          width={64}
                          height={64}
                        />
                        <div className="space-y-3 leading-6">
                          <h3 className="font-bold">
                            {person.name || "unknown name"}
                          </h3>
                          <div className="flex items-center justify-start gap-2">
                            {person.email ? (
                              <Link
                                href={"mailto:" + person.email}
                                className="inline-block text-gray-400 hover:text-gray-500"
                              >
                                <IconMail
                                  width={20}
                                  height={20}
                                  className="h-5 w-5"
                                />
                              </Link>
                            ) : null}
                            {person.linkedin ? (
                              <Link
                                href={person.linkedin}
                                className="inline-block text-gray-400 hover:text-gray-500"
                              >
                                <IconLinkedin
                                  width={20}
                                  height={20}
                                  className="h-5 w-5"
                                />
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
        </article>
        <article className="bg-white">
          <div className="container mx-auto px-6 pb-8 pt-4 lg:px-24 lg:pb-16 lg:pt-8">
            <div className="space-y-12">
              <h2 className="mt-1 scroll-m-12 font-bold tracking-tight text-gray-900 sm:text-xl lg:text-2xl">
                PhD Alumni
              </h2>
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-8 sm:space-y-0 lg:gap-x-8"
              >
                {PhDAlumniData.map((person) => (
                  <li key={person.name} className="">
                    <div className="flex items-start space-x-2 lg:space-x-4">
                      <Image
                        className="h-8 w-8 rounded-full border object-contain shadow-lg lg:h-10 lg:w-10"
                        src={person.imgSrc || "/avatars/default.jpg"}
                        alt=""
                        width={32}
                        height={32}
                      />
                      <div className="space-y-1 leading-6">
                        <h3 className="font-bold">
                          {person.name || "unknown name"}
                        </h3>
                        <p className="text-sm">{person.title || ""}</p>
                        <div className="flex items-center justify-start gap-2">
                          {person.email ? (
                            <Link
                              href={"mailto:" + person.email}
                              className="inline-block text-gray-400 hover:text-gray-500"
                            >
                              <IconMail
                                width={20}
                                height={20}
                                className="h-5 w-5"
                              />
                            </Link>
                          ) : null}
                          {person.linkedin ? (
                            <Link
                              href={person.linkedin}
                              className="inline-block text-gray-400 hover:text-gray-500"
                            >
                              <IconLinkedin
                                width={20}
                                height={20}
                                className="h-5 w-5"
                              />
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
        </article>
        <article className="bg-white">
          <div className="container mx-auto px-6 pb-8 pt-4 lg:px-24 lg:pb-16 lg:pt-8">
            <div className="space-y-12">
              <h2 className="mt-1 scroll-m-12 font-bold tracking-tight text-gray-900 sm:text-xl lg:text-2xl">
                MSc Alumni
              </h2>
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-8 sm:space-y-0 lg:gap-x-8"
              >
                {MSAlumniData.map((person) => (
                  <li key={person.name} className="">
                    <div className="flex items-start space-x-2 lg:space-x-4">
                      <Image
                        className="h-8 w-8 rounded-full border object-contain shadow-lg lg:h-10 lg:w-10"
                        src={person.imgSrc || "/avatars/default.jpg"}
                        alt=""
                        width={32}
                        height={32}
                      />
                      <div className="space-y-1 leading-6">
                        <h3 className="font-bold">
                          {person.name || "unknown name"}
                        </h3>
                        <p className="text-sm">{person.title || ""}</p>
                        <div className="flex items-center justify-start gap-2">
                          {person.email ? (
                            <Link
                              href={"mailto:" + person.email}
                              className="inline-block text-gray-400 hover:text-gray-500"
                            >
                              <IconMail
                                width={20}
                                height={20}
                                className="h-5 w-5"
                              />
                            </Link>
                          ) : null}
                          {person.linkedin ? (
                            <Link
                              href={person.linkedin}
                              className="inline-block text-gray-400 hover:text-gray-500"
                            >
                              <IconLinkedin
                                width={20}
                                height={20}
                                className="h-5 w-5"
                              />
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
        </article>
      </div>
    </section>
  );
}
