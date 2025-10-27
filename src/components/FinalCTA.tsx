import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  const scrollToInvestment = () => {
    const element = document.getElementById('investment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='py-20 gradient-primary text-primary-foreground'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight'>
            Your Leadership Transformation Starts Now
          </h2>

          <p className='text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto'>
            The world needs leaders who lead with purpose, clarity, and
            authentic influence. Leaders who aren't afraid to step into their
            full potential and create meaningful change.
          </p>

          <p className='text-2xl font-semibold mb-8'>
            Will you be one of them?
          </p>

          <Button
            size='lg'
            onClick={scrollToInvestment}
            className='bg-accent text-accent-foreground hover:bg-accent/90 shadow-material-xl text-lg px-10 py-6 transition-smooth'
          >
            Yes, I'm Ready to Transform
            <ArrowRight className='ml-2 h-5 w-5' />
          </Button>

          <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div>
              <p className='text-4xl font-bold mb-2'>500+</p>
              <p className='text-primary-foreground/80'>Leaders Transformed</p>
            </div>
            <div>
              <p className='text-4xl font-bold mb-2'>3</p>
              <p className='text-primary-foreground/80'>Continents Reached</p>
            </div>
            <div>
              <p className='text-4xl font-bold mb-2'>98%</p>
              <p className='text-primary-foreground/80'>Satisfaction Rate</p>
            </div>
          </div>

          <p className='mt-12 text-sm text-primary-foreground/70'>
            Next cohort starts in 14 days • Limited to 15 participants •
            Founding member pricing expires soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
