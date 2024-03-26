import { NewsCards } from "@/components/NewsCards";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 py-24">
        <div className="mb-5">
          <h1 className="text-3xl mb-2">Enkelspårigt</h1>
          <p className="max-w-prose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eius
            odio voluptate natus, doloremque quisquam deserunt et, fugit omnis,
            autem beatae ipsa! Quis beatae, exercitationem eius optio alias ex
            fuga.
          </p>
        </div>
        <NewsCards />
      </div>
    </main>
  );
}
