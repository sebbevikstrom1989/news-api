import { NewsCards } from "@/components/NewsCards";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 py-24">
        <NewsCards />
      </div>
    </main>
  );
}
