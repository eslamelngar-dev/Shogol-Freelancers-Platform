import Hero from "./components/sections/home/Hero";
import Container from "@mui/material/Container";
import RequestSection from "./components/sections/home/RequestSection";
import StepSection from "./components/sections/home/StepSection";
import { Services } from "./data/Services";
import ServiceCard from "./components/UI/ServiceCard";
import { Grid } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Container maxWidth="lg">
        <RequestSection />
        <StepSection />

        <div className="p-4 md:p-10 bg-[#f8fafc] rounded-2xl my-10">
          <div className="flex flex-col items-center gap-2 mb-8">
            <p className="text-[#1EAAAD] text-lg sm:text-xl md:text-2xl font-medium">
              بعض الخدمات وظائق شغل
            </p>
            <p className="text-[#37383B] text-2xl sm:text-3xl md:text-4xl font-bold text-center">
              اهم الخدمات الاحترافية لتطوير وتنمية اعمالك
            </p>
          </div>

          <Grid container spacing={3} justifyContent="center">
            {Services.slice(0, 4).map((service) => (
              <Grid
                key={service.id}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                  lg: 3,
                }}
              >
                <Link href={`/services/${service.id}`}>
                  <ServiceCard service={service} />
                </Link>
              </Grid>
            ))}
          </Grid>

          <div className="flex justify-center mt-10">
            <Link href={`/services`}>
              <button className="px-8 py-3 bg-[#1EAAAD] hover:bg-[#178a8d] text-white font-bold rounded-full transition-colors duration-300">
                عرض جميع الخدمات
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
