import React from "react";
import { ExternalNavButton, NavButton } from "../Buttons";
import { ConnectButton } from "../Buttons";

type LinkProps = {
  route: string;
  icon: React.ReactElement;
  name: string;
  isActive?: boolean;
};

export default function Sidebar({
  logo,
  navLinks,
  onRoute,
}: {
  logo: React.ReactElement;
  navLinks: LinkProps[];
  onRoute: (href: string) => void;
}) {
  return (
    <aside
      className="flex flex-col bg-base-200 justify-between min-h-screen overflow-y-auto w-80 lg:pb-0 drop-shadow-md"
      aria-label="Sidebar"
    >
      <div>
        <div className="py-4 mt-6 lg:block">
          <div className="px-8 pt-2 cursor-pointer">
            <div onClick={() => onRoute("/")}>{logo}</div>
          </div>
        </div>
        <ul className="p-4 overflow-y-auto grow space-y-4">
          {navLinks.map((link, idx) =>
            link.route.charAt(0) === "/" ? (
              <NavButton
                key={idx}
                route={link.route}
                name={link.name}
                icon={link.icon}
              />
            ) : (
              <ExternalNavButton
                key={idx}
                url={link.route}
                name={link.name}
                icon={link.icon}
              />
            )
          )}
        </ul>
      </div>

      <div className="w-full p-4">
        <ConnectButton />
      </div>
    </aside>
  );
}
