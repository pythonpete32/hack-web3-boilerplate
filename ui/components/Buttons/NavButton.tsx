import React from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function NavButton({
  route,
  icon,
  name,
}: {
  route: string;
  icon: React.ReactElement;
  name: string;
}) {
  return (
    <Link href={route} className="btn justify-start align-middle flex p-2 px-4">
      <div className="px-3">{icon}</div>
      <div className="font-bold">{name}</div>
      <ChevronRightIcon className="absolute w-5 h-5 opacity-50 right-7" />
    </Link>
  );
}
