import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Navbar() {
  return (
    <div className="navbar bg-base-100 p-4">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl">🧪 Hack Web3</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <ConnectButton />
      </div>
    </div>
  );
}
