import Link from "next/link";

export const Footer = () => {
  return (
    <header className="w-full h-10 bg-black flex items-center justify-center text-white">
      <Link href="https://www.newscatcherapi.com/">
        Powered by{" "}
        <span className="font-bold text-xl hover:text-white/75 transition">
          {" "}
          Newscatcher{" "}
        </span>
      </Link>
    </header>
  );
};
