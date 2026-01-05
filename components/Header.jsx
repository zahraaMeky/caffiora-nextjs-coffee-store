import React from "react";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import clsx from "clsx";
import { navigation, images } from "@/constants";

// === Simple Icon Components ===
const Bars3Icon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const XMarkIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SearchIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

const ShoppingCartIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
  </svg>
);

const UserIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

// === Header Component ===
const Header = () => {
  return (
    <Disclosure
      as="nav"
      className="shadow-md sticky top-0 z-50 bg-[rgba(249,245,241,0.9)] py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="max-container padding-container">
        <div className="flex items-center justify-between h-20">
          
          {/* === Mobile Menu Button === */}
          <div className="flex items-center md:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-1.5 text-[#735339] hover:text-secondary focus:outline-none">
              <Bars3Icon aria-hidden="true" className="block size-5 sm:size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-5 sm:size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* === Logo === */}
          <div className="flex items-center justify-center -mt-4">
            <Image
              alt="Caffiora Coffee Logo"
              src={images.CaffioraLogo}
              width={320}
              height={100}
              className="h-[60px] xs:h-[68px] sm:h-[75px] md:h-[85px] lg:h-[110px] xl:h-[130px] w-auto object-contain max-w-full"
              priority
            />
          </div>

          {/* === Center Navigation === */}
          <div className="hidden md:flex md:flex-1 md:justify-center md:items-center">
            <div className="flex items-center space-x-4 lg:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={clsx(
                    "text-[#735339] hover:text-secondary relative hover:after:absolute hover:after:bottom-0 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:w-10 hover:after:h-0.5 hover:after:bg-secondary",
                    "px-2 text-xs sm:text-sm lg:text-[0.95rem] font-medium tracking-wide lg:tracking-wider uppercase transition-all duration-300"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* === Right Side Icons === */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {[SearchIcon, ShoppingCartIcon, UserIcon].map((Icon, i) => (
              <button
                key={i}
                type="button"
                className="relative rounded-full p-1.5 sm:p-2 text-primary hover:text-secondary focus:outline-none cursor-pointer transition"
              >
                <Icon aria-hidden="true" className="size-5 sm:size-6" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* === Mobile Menu Panel === */}
      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-4 py-3 bg-white/5">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className="block w-full text-left rounded-md px-3 py-1.5 text-base font-semibold uppercase text-[#735339] hover:bg-secondary/10 hover:text-secondary transition-colors"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Header;
