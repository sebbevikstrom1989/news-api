import { NewsCards } from "@/components/NewsCards";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 py-24">
        <div className="prose lg:prose-xl mb-4">
          <p>
            Välkommen till en enkelspårig sida - den handlar nämligen bara om
            nyheter kopplade till Malmbanan.
          </p>
          <p>
            Alla järnvägar i norra Norrland är enkelspåriga. Den gäller även den
            hårt belastade Malmbanan mellan Luleå och Narvik där gruvbolagen
            transporterar sina produkter till hamnar och stålverk samt Stambanan
            som förbinder norra och södra Sverige med gods- och persontrafik.
            Det handlar om hundratals mil av samhällsviktiga transportleder som
            saknar dubbelspår för mötande trafik.
          </p>
          <p>
            Enkelspåren gör dem till flaskhalsar och extra känsliga för
            störningar. En olycka med trafikstopp på Malmbanan kostar
            gruvbolagen 100 miljoner per dag i förlorade inkomster, vilket i
            förlängningen innebär miljarder i minskade intäkter till den svenska
            statskassan och välfärden. Enkelspårigt agerande från politiken.
          </p>
        </div>
        <NewsCards />
      </div>
    </main>
  );
}
