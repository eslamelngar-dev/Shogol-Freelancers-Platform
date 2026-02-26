"use client";
import { useState } from "react";
import { Container, Grid, Rating } from "@mui/material";
import BreadCramp from "../components/UI/BreadCramp";
import SearchBar from "../components/UI/SearchBar";
import CheckboxFilter from "../components/UI/CheckboxFilter";
import { Services } from "../data/Services";
import ServiceCard from "../components/UI/ServiceCard";
import { Search } from "lucide-react";
import RangeSlider from "../components/UI/RangeSlider";

export default function ServicesPage() {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [value, setValue] = useState<number | null>(null);

  const MIN_PRICE = Math.min(...Services.map((s) => s.packages[0].price));
  const MAX_PRICE = Math.max(...Services.map((s) => s.packages[0].price));
  const [priceRange, setPriceRange] = useState<number[]>([
    MIN_PRICE,
    MAX_PRICE,
  ]);

  const filteredServices = Services.filter((service) => {
    const matchesQuery = service.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(service.categorysId);
    const matchesRating = service.avgRating === value || value === null;
    const matchesPrice = 
    service.packages[0].price >= priceRange[0] && service.packages[0].price <= priceRange[1]
    return matchesQuery && matchesCategory && matchesRating && matchesPrice
  });

  return (
    <Container maxWidth="lg">
      <BreadCramp
        Links={[
          { title: "الرئيسية", Link: "/" },
          { title: "الخدمات", Link: "/services" },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-4 pb-10">
        <aside className="w-full lg:w-65 shrink-0">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col gap-4 sticky top-4">
            <div>
              <p className="font-bold text-gray-700 mb-2">البحث باسم الخدمة</p>
              <SearchBar value={query} setQuery={setQuery} />
            </div>

            <hr className="border-gray-100" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="font-bold text-gray-700">التصنيفات</p>
                {selectedCategories.length > 0 && (
                  <button
                    onClick={() => setSelectedCategories([])}
                    className="text-xs text-[#39b2bf] hover:underline"
                  >
                    مسح الكل
                  </button>
                )}
              </div>
              <CheckboxFilter
                selected={selectedCategories}
                setSelectedCategories={setSelectedCategories}
              />
            </div>

            <hr className="border-gray-100" />

            <div dir="ltr" className="w-full flex flex-col items-end">
              <p className="font-bold text-gray-700">التقييم</p>

              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>

            <hr className="border-gray-100" />

            <div>
              <p className="font-bold text-gray-700">السعر</p>
              <div className="w-full">
                <RangeSlider
                  min={MIN_PRICE}
                  max={MAX_PRICE}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                />
              </div>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          {filteredServices?.length > 0 ? (
            <Grid container spacing={2}>
              {filteredServices.map((service) => (
                <Grid key={service.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                  <ServiceCard service={service} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400 gap-3">
              <Search size={48} className="text-gray-300" />
              <p className="text-lg font-medium">لا توجد نتائج</p>
              <p className="text-sm">جرب تغيير الفلتر أو كلمة البحث</p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
