import Cards from "../components/cards";
import Sidebar from "../components/sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <section>
        <header className="flex shadow-lg m-2 p-2 w-full mb-5">
          <div className="justify-flex-start">Dashboard:CryptoPro X</div>
          <div className="justify-flex-end">Manjunath</div>
        </header>
        <section className="m-5">
          <header>
            <div>Welcome back,Manjunath Kalburgi</div>
            <div>components</div>
          </header>
          <div className="grid md:grid-cols-3 xs:grid-cols-1">
            <Cards title="Total users" subtitle={"8.5K"} />
            <Cards title="Sentiments" subtitle={"68% bullish"} />
            <Cards title="Top KOI" subtitle={"title"} />
          </div>
        </section>
      </section>
    </div>
  );
}
