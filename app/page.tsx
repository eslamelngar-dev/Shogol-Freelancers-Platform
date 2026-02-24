import Hero from "./components/sections/home/Hero";
import Container from "@mui/material/Container";
import RequestSection from "./components/sections/home/RequestSection";
import StepSection from "./components/sections/home/StepSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Container maxWidth="lg">
        <RequestSection/>
        <StepSection/>
      </Container>
    </>
  );
}
