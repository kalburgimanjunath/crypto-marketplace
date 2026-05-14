export default function Menu() {
  const menus = ["platform", "features", "pricing", "resources"];
  return (
    <div className="flex w-full">
      <div className="flex flex-start justify-evenly w-2/3 m-2">
        {menus.map((item) => {
          return (
            <div
              key={item}
              className="capitalize p-2 hover:text-red-200 hover:underline hover:cursor-pointer"
            >
              {item}
            </div>
          );
        })}
      </div>
      <div>
        <div className="flex-end w-full p-2">
          <button>Login</button>
          <button className="p-2 bg-blue-300 rounded border-lg ml-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
