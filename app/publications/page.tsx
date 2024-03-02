import { Metadata } from "next";
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
      <section className="bg-white">
        <div className="container mx-auto px-6 py-12 lg:px-24 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="mt-1 scroll-m-12 font-bold tracking-tight text-gray-900 sm:text-xl lg:text-2xl">
                Books and Chapters
              </h2>
            </div>
            <ul role="list" className="space-y-6">
              {booksData.map((book) => (
                <li
                  key={book.firstPart + book.secondPart + book.thirdPart}
                  className="list-inside list-disc text-justify text-sm"
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
      </section>
      <section className="bg-white">
        <div className="container mx-auto px-6 py-12 lg:px-24 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="mt-1 scroll-m-12 font-bold tracking-tight text-gray-900 sm:text-xl lg:text-2xl">
                Editorials in Journals
              </h2>
            </div>
            <ul role="list" className="space-y-6">
              {editsData.map((edit) => (
                <li
                  key={edit.firstPart + edit.secondPart + edit.thirdPart}
                  className="list-inside list-disc text-justify text-sm"
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
      </section>
      <section className="bg-white">
        <div className="container mx-auto px-6 py-12 lg:px-24 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="mt-1 scroll-m-12 font-bold tracking-tight text-gray-900 sm:text-xl lg:text-2xl">
                Journal Papers
              </h2>
            </div>
            <ul role="list" className="space-y-6">
              {journalsData.map((journal) => (
                <li
                  key={
                    journal.firstPart + journal.secondPart + journal.thirdPart
                  }
                  className="list-inside list-disc text-justify text-sm"
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
      </section>
      <section className="bg-white">
        <div className="container mx-auto px-6 py-12 lg:px-24 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="mt-1 scroll-m-12 font-bold tracking-tight text-gray-900 sm:text-xl lg:text-2xl">
                Papers in Persian Journals/Periodicals
              </h2>
            </div>
            <ul role="list" className="space-y-6">
              {persianJournalsData.map((journal) => (
                <li
                  key={
                    journal.firstPart + journal.secondPart + journal.thirdPart
                  }
                  className="list-inside list-disc text-justify text-sm"
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
      </section>
      <section className="bg-white">
        <div className="container mx-auto px-6 py-12 lg:px-24 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="mt-1 scroll-m-12 font-bold tracking-tight text-gray-900 sm:text-xl lg:text-2xl">
                Conference Papers
              </h2>
            </div>
            <ul role="list" className="space-y-6">
              {conferencePapersData.map((paper) => (
                <li
                  key={paper.firstPart + paper.secondPart + paper.thirdPart}
                  className="list-inside list-disc text-justify text-sm"
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
      </section>
    </>
  );
}
