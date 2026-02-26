"use client"
import { Container, Grid } from "@mui/material";
import BreadCramp from "../components/UI/BreadCramp";
import SearchBar from "../components/UI/SearchBar";
import { Services } from "../data/Services";
import ServiceCard from "../components/UI/ServiceCard";
import { Categories } from "../data/Categories";
import { useState } from "react";

export default function ServicesPage() {
  const [query,setQuery] = useState("")
  const filteredServices = Services.filter((service) =>
  service.title.toLowerCase().includes(query.toLowerCase())
  )
  
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
              <SearchBar value={query} setQuery={setQuery}/>
            </div>

            <hr className="border-gray-100" />

            <div>
              <p className="font-bold text-gray-700 mb-3">التصنيفات</p>
              <ul className="flex flex-col gap-2">
                {Categories.map((cat) => (
                  <li key={cat.id}>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="accent-[#39b2bf] w-4 h-4"
                      />
                      <span className="text-sm text-gray-500 group-hover:text-[#39b2bf] transition-colors duration-300">
                        {cat.name}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <div className="flex-1">
          <Grid container spacing={2}>
            {filteredServices.map((service) => (
              <Grid
                key={service.id}
                size={{
                  xs: 12,
                  sm: 6,
                  lg: 4,
                }}
              >
                <ServiceCard service={service} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </Container>
  );
}
