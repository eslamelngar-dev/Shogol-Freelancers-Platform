import { Categories } from "@/app/data/Categories";

export default function CheckboxFilter() {
  return (
    <>
      <ul className="flex flex-col gap-2">
        {Categories.map((cat) => (
          <li key={cat.id}>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="accent-[#39b2bf] w-4 h-4" />
              <span className="text-sm text-gray-500 group-hover:text-[#39b2bf] transition-colors duration-300">
                {cat.name}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
