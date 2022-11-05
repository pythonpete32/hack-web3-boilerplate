import Link from "next/link";

export default function HomeCard({ href, icon, title, children }: any) {
  return (
    <Link href={href} passHref>
      <div className="card bg-neutral shadow-md transition ease-in-out hover:-translate-y-1 cursor-pointer">
        <div className="card-body items-stretch">
          {icon}
          <h2 className="card-title text-center font-medium">{title}</h2>
          {children}
        </div>
      </div>
    </Link>
  );
}
