"use client";

import Link from "next/link";
import { useState } from "react";

type SubRoute = {
  name: string;
  href: string;
};

type Route = {
  name: string;
  href: string;
  subRoutes: SubRoute[];
};

const routes: Route[] = [
  {
    name: "Home",
    href: "/",
    subRoutes: [{ name: "Home Page", href: "/home-top" }],
  },
  {
    name: "About Us",
    href: "/",
    subRoutes: [
      { name: "Legacy", href: "/legacy-top" },
      { name: "Kidzee Advantage", href: "/kidzee-advantage-top" },
      { name: "Vision and Mission", href: "/vision-and-mission-top" },
      { name: "Award and Recognition", href: "/award-and-recognition-top" },
    ],
  },
  {
    name: "Programmes",
    href: "/",
    subRoutes: [{ name: "Programme 1", href: "/programmes" }],
  },
  {
    name: "Péntemind",
    href: "/",
    subRoutes: [{ name: "Overview", href: "/patamine-top" }],
  },
  {
    name: "Admissions",
    href: "/",
    subRoutes: [{ name: "Apply Now", href: "/admission" }],
  },
  {
    name: "Franchise Opportunity",
    href: "#FranchiseOpportunity",
    subRoutes: [{ name: "Become a Partner", href: "#partner" }],
  },
];

export default function Navigation() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav className="hidden md:block">
      <ul className="flex justify-start space-x-8 items-center m-0 p-0">
        {routes.map((route, index) => (
          <li key={`${route.name}-${route.href}`} className="relative">
            {/* Wrap both link and dropdown in one group to retain hover state */}
            <div
              className="group"
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <Link
                href={route.href}
                className="font-unbounded font-semibold text-xl text-black py-1.5 px-4 hover:text-rato transition-colors duration-300 whitespace-nowrap"
              >
                {route.name}
              </Link>

              {openIndex === index && (
                <ul className="absolute left-1/2 -translate-x-1/2 mt-0.5 bg-white shadow-xl rounded-lg py-2 w-52 z-50 border border-gray-200 animate-fadeIn">
                  {route.subRoutes.map((sub) => (
                    <li key={`${sub.name}-${sub.href}`}>
                      <Link
                        href={sub.href}
                        className="block px-5 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-all duration-300"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
