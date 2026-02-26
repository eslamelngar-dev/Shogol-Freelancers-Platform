"use client";
import { Categories } from "@/app/data/Categories";

interface CheckboxFilterProps {
  selected: number[];
  setSelectedCategories: (selected: number[]) => void;
}

export default function CheckboxFilter({
  selected,
  setSelectedCategories,
}: CheckboxFilterProps) {
  const handleChange = (id: number) => {
    if (selected.includes(id)) {
      setSelectedCategories(selected.filter((s) => s !== id));
    } else {
      setSelectedCategories([...selected, id]);
    }
  };

  return (
    <ul className="flex flex-col gap-2">
      {Categories.map((cat) => (
        <li key={cat.id}>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={selected.includes(cat.id)}
              onChange={() => handleChange(cat.id)}
              className="accent-[#39b2bf] w-4 h-4"
            />
            <span className="text-sm text-gray-500 group-hover:text-[#39b2bf] transition-colors duration-300">
              {cat.name}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}
