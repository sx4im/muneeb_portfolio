import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { footer } from "@/data/global";
import Image from "next/image";

function Footer() {
  const router = useRouter();

  const handleContactClick = (e) => {
    if (router.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };
  return (
    <footer className="w-full px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="max-w-5xl mx-auto flex flex-col space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
        {footer.columns.map((item, index) => {
          return (
              <div key={index} className="text-left">
              <h4 className="uppercase text-fun-gray text-sm font-bold">
                {item.title}
              </h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="items-center flex"
                            rel="noreferrer"
                        >
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <Image src={item.icon} width={20} height={20} />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : item.name === "Contact" ? (
                        <Link href={item.link}>
                          <a onClick={handleContactClick}>{item.name}</a>
                        </Link>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
          <div className="text-center sm:text-left text-fun-gray border-t border-fun-pink-dark sm:border-0 pt-6 sm:pt-0">
          <h4 className="uppercase text-fun-gray text-sm font-bold">
            Support My Work
          </h4>
          <div className="space-y-3 mt-4 w-full flex items-center sm:items-start flex-col">
            {footer.support.buymeacoffee !== "" && (
              <div>
                <a
                  href={`https://buymeacoffee.com/${footer.support.buymeacoffee}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/static/misc/buy-me-a-coffee.svg"
                    className="h-12 mr-2 hover:opacity-80 opacity-100 transition-opacity"
                    alt="Buy me a coffee button"
                  />
                </a>
              </div>
            )}
            <p className="text-fun-gray text-xs pt-1 text-center sm:text-left">
              {footer.support.message}
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className="border-t border-fun-pink-dark pt-6 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-fun-gray space-y-4 sm:space-y-0">
        <div className="text-xs">
            Made by{" "}
            <a
              href="https://saimshafique.com"
              className="text-fun-gray-light font-medium"
            >
              Saim Shafique
            </a>
            . All rights reserved.
          </div>
        <a
          className="inline-flex items-center font-bold text-xs border border-fun-pink px-4 py-2 rounded-xl text-fun-pink hover:bg-fun-pink hover:text-white transition-colors"
          href="https://github.com/sx4im/muneeb_portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/static/icons/github.svg"
            width={16}
            height={16}
            alt="Github Icon"
          />
          <span className="ml-2">View Source Code</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
