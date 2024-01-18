import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import booksData from "@/data/publications/books.json";
import editsData from "@/data/publications/edits.json";
import journalsData from "@/data/publications/journals.json";
import persianJournalsData from "@/data/publications/persianJournals.json";
import conferencePapersData from "@/data/publications/conferencePapers.json";

export const metadata: Metadata = {
  title: "HPCAN LAB | Publications",
};

export default function Publications() {
  return (
    <>
      <Header active="publications" />
      <main>
        <section className="bg-white">
          <div className="mx-auto container py-12 px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="space-y-5 sm:space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Books and Chapters
                </h2>
              </div>
              <div className="">
                <ul role="list" className="space-y-6">
                  {booksData.map((book) => (
                    <li
                      key={book.firstPart + book.secondPart + book.thirdPart}
                      className="text-justify list-disc list-inside"
                    >
                      <span>{book.firstPart}</span>
                      {", "}
                      <span className="font-bold">{book.secondPart}</span>
                      {", "}
                      <span>{book.thirdPart}</span>.
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
                  Editorials in Journals
                </h2>
              </div>
              <div className="">
                <ul role="list" className="space-y-6">
                  {editsData.map((edit) => (
                    <li
                      key={edit.firstPart + edit.secondPart + edit.thirdPart}
                      className="text-justify list-disc list-inside"
                    >
                      <span>{edit.firstPart}</span>
                      {", "}
                      <span className="font-bold">{edit.secondPart}</span>
                      {", "}
                      <span>{edit.thirdPart}</span>.
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
                  Journal Papers
                </h2>
              </div>
              <div className="">
                <ul role="list" className="space-y-6">
                  {journalsData.map((journal) => (
                    <li
                      key={
                        journal.firstPart +
                        journal.secondPart +
                        journal.thirdPart
                      }
                      className="text-justify list-disc list-inside"
                    >
                      <span>{journal.firstPart}</span>
                      {", "}
                      <span className="font-bold">{journal.secondPart}</span>
                      {", "}
                      <span>{journal.thirdPart}</span>.
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
                  Papers in Persian Journals/Periodicals
                </h2>
              </div>
              <div className="">
                <ul role="list" className="space-y-6">
                  {persianJournalsData.map((journal) => (
                    <li
                      key={
                        journal.firstPart +
                        journal.secondPart +
                        journal.thirdPart
                      }
                      className="text-justify list-disc list-inside"
                    >
                      <span>{journal.firstPart}</span>
                      {", "}
                      <span className="font-bold">{journal.secondPart}</span>
                      {", "}
                      <span>{journal.thirdPart}</span>.
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
                  Conference Papers
                </h2>
              </div>
              <div className="">
                <ul role="list" className="space-y-6">
                  {conferencePapersData.map((paper) => (
                    <li
                      key={paper.firstPart + paper.secondPart + paper.thirdPart}
                      className="text-justify list-disc list-inside"
                    >
                      <span>{paper.firstPart}</span>
                      {", "}
                      <span className="font-bold">{paper.secondPart}</span>
                      {", "}
                      <span>{paper.thirdPart}</span>.
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
