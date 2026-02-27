"use client";
import { useState } from "react";
import { Container, Grid } from "@mui/material";
import BreadCramp from "../components/UI/BreadCramp";
import SearchBar from "../components/UI/SearchBar";
import { Search } from "lucide-react";
import RangeSlider from "../components/UI/RangeSlider";
import Link from "next/link";
import { Requests } from "../data/Request";
import RequestCard from "../components/UI/RequestCard";

export default function RequestsPage() {
  const [query, setQuery] = useState("");

  const MIN_PRICE = Math.min(...Requests.map((r) => r.price));
  const MAX_PRICE = Math.max(...Requests.map((r) => r.price));
  const [priceRange, setPriceRange] = useState<number[]>([
    MIN_PRICE,
    MAX_PRICE,
  ]);

  const filteredRequests = Requests.filter((request) => {
    const matchesQuery = request.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesPrice =
      request.price >= priceRange[0] && request.price <= priceRange[1];
    return matchesQuery && matchesPrice;
  });

  return (
    <Container maxWidth="lg">
      <BreadCramp
        Links={[
          { title: "الرئيسية", Link: "/" },
          { title: "الطلبات", Link: "/requests" },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-4 pb-10">
        <aside className="w-full lg:w-65 shrink-0">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col gap-4 sticky top-4">
            <div>
              <p className="font-bold text-gray-700 mb-2">البحث باسم الطلب</p>
              <SearchBar value={query} setQuery={setQuery} />
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
          {filteredRequests.length > 0 ? (
            <Grid container spacing={2}>
              {filteredRequests.map((request) => (
                <Grid key={request.id} size={{ xs: 12 }}>
                  <Link href={`/requests/${request.id}`}>
                    <RequestCard request={request} />
                  </Link>
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
