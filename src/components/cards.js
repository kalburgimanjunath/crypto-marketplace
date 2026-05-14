export default function Cards({ title, subtitle, subcomp }) {
  return (
    <div className="bg-black m-2 rounded rounded-lg shadow-lg text-wrap p-5">
      <h3 className="text-2xl">{title}</h3>
      <div>{subcomp}</div>
      <div className="ellipsis">{subtitle}</div>
    </div>
  );
}
