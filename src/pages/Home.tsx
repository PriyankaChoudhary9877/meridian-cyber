import Hero from '../components/sections/Hero';
import TrustedBy from '../components/sections/TrustedBy';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Process from '../components/sections/Process';
import Industries from '../components/sections/Industries';
import Statistics from '../components/sections/Statistics';
import CaseStudies from '../components/sections/CaseStudies';
import Testimonials from '../components/sections/Testimonials';
import BlogPreview from '../components/sections/BlogPreview';
import FAQ from '../components/sections/FAQ';
import CTABanner from '../components/sections/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Industries />
      <Statistics />
      <CaseStudies />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <CTABanner />
    </>
  );
}
