import footerData from "@/data/footer.json";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t border-gray-900/10 bg-white text-xs font-bold text-slate-500"
      aria-labelledby="footer-heading "
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto grid grid-cols-2 px-6 py-8 lg:px-24">
        <div className="col-span-1 flex flex-col items-start gap-4">
          <div className="flex gap-2">
            <MapPinIcon
              width={20}
              height={20}
              className="h-5 w-5 flex-shrink-0"
            />
            <p>{footerData.location}</p>
          </div>
          <Link href={`mailto:${footerData.email}`} className="flex gap-2">
            <EnvelopeIcon
              width={20}
              height={20}
              className="h-5 w-5 flex-shrink-0"
            />
            <p>{footerData.email}</p>
          </Link>
          <Link href={`tel:${footerData.phone}`} className="flex gap-2">
            <PhoneIcon
              width={20}
              height={20}
              className="h-5 w-5 flex-shrink-0"
            />
            <p>{footerData.phone}</p>
          </Link>
        </div>
        <p className="text-gray-5 00 place-self-end text-sm  leading-5">
          &copy; 2024 HPCAN Lab
        </p>
      </div>
    </footer>
  );
}
