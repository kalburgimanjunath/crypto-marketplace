export default function Hero({ title, subtitle, action }) {
  return (
    <div className="m-10 text-center">
      <h1 className="text-3xl capitalize pt-5 pb-5">{title}</h1>
      <p>{subtitle}</p>
      {action && (
        <button className="capitalize p-2 bg-blue-300 rounded border-lg ml-2">
          {action}
        </button>
      )}
    </div>
  );
}
