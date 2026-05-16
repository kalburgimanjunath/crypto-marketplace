import Search from "./search";

export default function Sidebar() {
  const menus = [
    "dashboard",
    "KOIs",
    "campaigns",
    "community",
    "airdrops",
    "settings",
    "support",
  ];
  return (
    <div className="bg-['#202020'] shadow-lg h-screen border-right-1 ">
      <div className="flex">
        <div className="text-center text-3xl p-3 w-3/2">Logo</div>
        <div className="justify-flex-end m-2">T</div>
      </div>
      <Search />
      {menus.map((item) => {
        return (
          <div className="p-3 m-1 capitalize hover:bg-black hover:cursor-pointer">
            {item}
          </div>
        );
      })}
    </div>
  );
}
