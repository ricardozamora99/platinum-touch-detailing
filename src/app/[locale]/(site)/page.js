import Hero from "@/components/sections/Hero/Hero";
import TrustBar from "@/components/sections/TrustBar/TrustBar";
import Services from "@/components/sections/Services/Services";
import Gallery from "@/components/sections/Gallery/Gallery";
import Process from "@/components/sections/Process/Process";
import ServiceArea from "@/components/sections/ServiceArea/ServiceArea";
import FinalCTA from "@/components/sections/FinalCTA/FinalCTA";

export default function HomePage() {
  return (
    <main>
<Hero />
<TrustBar />
<Services />
<Gallery />
<Process />
<ServiceArea />
<FinalCTA />
    </main>
  );
}