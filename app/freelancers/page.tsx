"use client";
import { useState } from "react";
import { Container, Grid } from "@mui/material";
import BreadCramp from "../components/UI/BreadCramp";
import SearchBar from "../components/UI/SearchBar";
import { Freelancers } from "../data/Freelancers";
// import FreelancerCard from "../components/UI/FreelancerCard";
import { Search } from "lucide-react";
import RangeSlider from "../components/UI/RangeSlider";
import Link from "next/link";

export default function FreelancersPage() {
  const [query, setQuery] = useState("");

  const MIN_RATING = Math.min(...Freelancers.map((f) => f.rating));
  const MAX_RATING = Math.max(...Freelancers.map((f) => f.rating));
  const [ratingRange, setRatingRange] = useState<number[]>([MIN_RATING, MAX_RATING]);

  const MIN_ORDERS = Math.min(...Freelancers.map((f) => f.ordersCompleted));
  const MAX_ORDERS = Math.max(...Freelancers.map((f) => f.ordersCompleted));
  const [ordersRange, setOrdersRange] = useState<number[]>([MIN_ORDERS, MAX_ORDERS]);

  const filteredFreelancers = Freelancers.filter((freelancer) => {
    const matchesQuery =
      freelancer.name.toLowerCase().includes(query.toLowerCase()) ||
      freelancer.job.toLowerCase().includes(query.toLowerCase());
    const matchesRating =
      freelancer.rating >= ratingRange[0] && freelancer.rating <= ratingRange[1];
    const matchesOrders =
      freelancer.ordersCompleted >= ordersRange[0] &&
      freelancer.ordersCompleted <= ordersRange[1];
    return matchesQuery && matchesRating && matchesOrders;
  });

  return (
    <Container maxWidth="lg">
      <BreadCramp
        Links={[
          { title: "الرئيسية", Link: "/" },
          { title: "المستقلون", Link: "/freelancers" },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-4 pb-10">
        <aside className="w-full lg:w-65 shrink-0">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col gap-4 sticky top-4">
            <div>
              <p className="font-bold text-gray-700 mb-2">البحث بالاسم أو التخصص</p>
              <SearchBar value={query} setQuery={setQuery} />
            </div>

            <hr className="border-gray-100" />

            <div>
              <p className="font-bold text-gray-700">التقييم</p>
              <RangeSlider
                min={MIN_RATING}
                max={MAX_RATING}
                priceRange={ratingRange}
                setPriceRange={setRatingRange}
              />
            </div>

            <hr className="border-gray-100" />

            <div>
              <p className="font-bold text-gray-700">الطلبات المكتملة</p>
              <RangeSlider
                min={MIN_ORDERS}
                max={MAX_ORDERS}
                priceRange={ordersRange}
                setPriceRange={setOrdersRange}
              />
            </div>
          </div>
        </aside>

        <div className="flex-1">
          {filteredFreelancers.length > 0 ? (
            <Grid container spacing={2}>
              {filteredFreelancers.map((freelancer) => (
                <Grid key={freelancer.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                  <Link href={`/freelancers/${freelancer.id}`}>
                    {/* <FreelancerCard freelancer={freelancer} /> */}
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