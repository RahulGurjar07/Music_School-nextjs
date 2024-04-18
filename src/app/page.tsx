import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InfiniteMovingCard from "@/components/InfiniteMovingCard";
import Instructors from "@/components/Instructors";
import StickyScrollbar  from "@/components/StickyScrollbar";
import UpcomingWebinar from "@/components/UpcomingWebinar";

export default function Home() {
  return (    
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <StickyScrollbar />
      <InfiniteMovingCard />
      <UpcomingWebinar />
      <Instructors />
      <Footer />
      
    </main>
  );
}
