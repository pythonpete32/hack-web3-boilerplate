import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="btn flex justify-start btn-ghost no-animation normal-case text-2xl w-full">
        🧪 Hack Web3
      </div>
    </Link>
  );
}
