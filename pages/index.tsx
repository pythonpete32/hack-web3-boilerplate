import type { NextPage } from "next";
import { HeroCode } from "../components/HeroCode";

const Home: NextPage = () => {
  return (
    <div className="flex w-full justify-center">
      <HeroCode />
    </div>
  );
};

export default Home;
