import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

export default function UpcomingWebinar() {
 const projects = [
    {
      title: "Webinar 1",
      description: "Join us for an exclusive webinar on music production",
      link: "https://www.google.com",
    },
    {
      title: "Webinar 2",
      description:
        "Learn the art of mixing and mastering in our upcoming webinar",
      link: "/webinar/2",
    },
    {
      title: "Webinar 3",
      description:
        "Discover the secrets of music theory in our upcoming webinar",
      link: "/webinar/3",
    },
  ];
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            featured webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View all courses
          </Link>
        </div>
      </div>
    </div>
  );
}
