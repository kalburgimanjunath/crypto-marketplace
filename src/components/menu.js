import { Link } from "react-router";

export default function Menu() {
  const menus = [
    { id: 1, title: "platform", href: "/" },
    { id: 2, title: "features", href: "/" },
    { id: 3, title: "pricing", href: "/" },
    { id: 4, title: "resources", href: "/" },
  ];
  return (
    <div className="flex w-full">
      <div className="flex flex-start justify-evenly w-2/3 m-2">
        {menus.map((item) => {
          return (
            <div
              key={item.id}
              className="capitalize p-2 hover:text-red-200 hover:underline hover:cursor-pointer"
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <div>
        <div className="flex-end w-full p-2 m-2">
          <a>Login</a>
          <Link
            to="/dashboard"
            className="p-2 bg-blue-300 rounded border-lg ml-2"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
