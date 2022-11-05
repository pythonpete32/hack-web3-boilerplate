import React from "react";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function ExternalNavButton({
  url,
  icon,
  name,
}: {
  url: string;
  icon: React.ReactElement;
  name: string;
}) {
  return (
    <Link href={url} className="btn justify-start align-middle flex p-2 px-4">
      <div className="px-3">{icon}</div>
      <div className="font-bold">{name}</div>
      <ExternalLinkIcon className="absolute w-5 h-5 opacity-50 right-7" />
    </Link>
  );
}
