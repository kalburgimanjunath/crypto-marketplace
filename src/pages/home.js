import Hero from "../components/hero";
import Cards from "../components/cards";
export default function Home() {
  return (
    <section className="page p-5">
      <Hero
        title="Accelerate your crypto growth.The ultimate marketing hub."
        subtitle="Data driven analytics,KCL management and campaign automation for web3 ."
        action="Launch your compaign"
      />
      <section className="m-5 grid grid-cols-3 capitalize">
        <Cards
          title="on-chain analytics"
          subtitle="live group analytics second graphs concorrency"
          subcamp=""
        />
        <Cards
          title="influence network"
          subtitle="are tense metrics,connections and campaign network"
          subcamp=""
        />
        <Cards
          title="community sentiments"
          subtitle="community analytics sadar and community radar connections"
          subcamp=""
        />
      </section>
      <section>
        <Hero
          title="Track engage scale in real-time"
          subtitle="data driven analytics,KOL management and campaign automation for web3."
          action="launch now"
        />
      </section>
      <section>
        <Hero title="Trusted by leading  web3 projects." />
      </section>
    </section>
  );
}
