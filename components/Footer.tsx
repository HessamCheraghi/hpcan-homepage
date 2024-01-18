import footerData from "@/data/footer.json";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer
      className="bg-white border-t border-gray-900/10"
      aria-labelledby="footer-heading "
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto container px-6 pb-8 pt-12 sm:pt-16 lg:px-8 lg:pt-24 space-y-4 ">
        <p className="flex gap-2">
          <MapPinIcon width={24} height={24} />
          {footerData.location}
        </p>
        <p className="flex gap-2">
          <EnvelopeIcon width={24} height={24} />
          {footerData.email}
        </p>
        <p className="flex gap-2">
          <PhoneIcon width={24} height={24} />
          {footerData.phone}
        </p>
        <p className="text-sm font-bold leading-5 text-gray-500 md:mt-0 mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          &copy; 2024 HPCAN Lab
        </p>
      </div>
    </footer>
  );
}
