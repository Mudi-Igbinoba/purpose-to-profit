import About from '@/components/About';
// import Coach from '@/components/Coach';
import Coaches from '@/components/Coaches';
import Curriculum from '@/components/Curriculum';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Investment from '@/components/Investment';
import Testimonials from '@/components/Testimonials';
import WhoItsFor from '@/components/WhoItsFor';

const Index = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <main>
        <Hero />
        <About />
        <WhoItsFor />
        <Curriculum />
        <Testimonials />
        {/* <Coach /> */}
        <Coaches />
        <Investment />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
