import Card from "./components/CardSection/Card";
import { ChapterSection } from "./components/ChapterSection/ChapterSection";
import Footer from "./components/footer/Footer";
import { GiftSection } from "./components/GiftSection/GiftSection";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { Meet } from "./components/Meet/MeetSection";
import Testimonials from "./components/Testimonials/Testimonials";
import { TransformationSection } from "./components/TransformationSection/TransformationSection";
import ComparisonCard from "./components/WhatBookDoes/ComparisonCard";
import WhatBookDoes from "./components/WhatBookDoes/WhatBookDoes";
import WhoIsFor from "./components/WhoIsFor/WhoIsFor";

export default function Home() {
  return <div className="bg-[#F5F1E8]">
    <Header />
    <Hero />
    <WhoIsFor />
    <WhatBookDoes />
    <Meet />
    <GiftSection />
    <ChapterSection />
    <TransformationSection />
    <WhoIsFor />
    <Testimonials />
    <Card />
    <Footer />
  </div>
}
