import { ChevronLeft, Home } from "lucide-react";
import Link from "next/link";

interface BreadCrampLink {
  title: string;
  Link: string;
}

interface BreadCrampProp {
  Links: BreadCrampLink[];
}

export default function BreadCramp({ Links }: BreadCrampProp) {
  return (
    <nav className="flex p-5 text-[#979797]" aria-label="Breadcrumb">
      <ol className="inline-flex items-center gap-1 flex-wrap">
        {Links.map((link, index) => (
          <li key={link.title} className="flex items-center gap-1">
            {index !== 0 && <ChevronLeft size={14} className="text-gray-400" />}
            {index === Links.length - 1 ? (
              <span className="text-sm font-medium text-[#1EAAAD]">
                {link.title}
              </span>
            ) : (
              <Link
                href={link.Link}
                className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-[#1EAAAD] transition-colors duration-300"
              >
                {index === 0 && <Home size={14} />}
                {link.title}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
