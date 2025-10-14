import CompaniesSection from "./components/CompaniesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IntroductionSection from "./components/IntroductionSection";
import MetricsSection from "./components/MetricsSection";
import ServicesSection from "./components/ServicesSection";
import SolutionsSection from "./components/SolutionsSection";
import TechnologiesSection from "./components/TechnologiesSection";
import TopSection from "./components/TopSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background">
      <Header />
      <TopSection />
      <IntroductionSection />
      <ServicesSection />
      <SolutionsSection />
      <TechnologiesSection />
      <MetricsSection />
      <CompaniesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
