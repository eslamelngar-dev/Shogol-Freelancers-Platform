import { Container, Grid } from "@mui/material";
import BreadCramp from "../components/UI/BreadCramp";
import SearchBar from "../components/UI/SearchBar";
import { Services } from "../data/Services";
import ServiceCard from "../components/UI/ServiceCard";

export default function ServicesPage() {
  return (
    <>
      <Container maxWidth="lg" className="bg-[#f8fafc]">
        <BreadCramp />
        <div className="flex gap-3">
          <div className="bg-white p-2">
            <p className="p-2 font-bold">البحث باسم المشتغل</p>
            <div className="w-full flex justify-center">
              <SearchBar />
            </div>
            <div>
              <p className="p-2 font-bold">الاشغال والمجالات</p>
            </div>
          </div>
          <div className="bg-[white] p-2">
            <Grid container spacing={2}>
            {Services.map((service) => (
              <Grid size={4} key={service.id}>
              <ServiceCard service={service} />
              </Grid>
            ))}
          </Grid>
          </div>
        </div>
      </Container>
    </>
  );
}
