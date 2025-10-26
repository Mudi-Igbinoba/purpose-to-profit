import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToInvestment = () => {
    const element = document.getElementById('investment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='hero'
      className='relative min-h-[90vh] flex items-center justify-center overflow-hidden'
    >
      {/* Background Image with Overlay */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className='absolute inset-0 gradient-hero' />
      </div>

      {/* Content */}
      <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in'>
            Purpose To Profit Global Coaching Program
          </h1>

          <p
            className='text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 font-light animate-fade-in'
            style={{ animationDelay: '0.2s' }}
          >
            A 4-week immersive coaching for leaders ready for Inner Clarity &
            Global Influence
          </p>

          <div
            className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in'
            style={{ animationDelay: '0.4s' }}
          >
            <Button
              size='lg'
              onClick={scrollToInvestment}
              className='bg-accent text-accent-foreground hover:bg-accent/90 shadow-material-xl text-lg px-8 py-6 transition-smooth'
            >
              Start Your Transformation
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-6 transition-smooth'
            >
              <Play className='mr-2 h-5 w-5' />
              Watch Video
            </Button>
          </div>

          {/* Video Placeholder */}
          <div
            className='max-w-3xl mx-auto bg-card/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-material-xl animate-fade-in'
            style={{ animationDelay: '0.6s' }}
          >
            <div className='aspect-video bg-primary/20 flex items-center justify-center border border-white/20'>
              <div className='text-center text-white/80'>
                <Play className='h-16 w-16 mx-auto mb-4 opacity-60' />
                <p className='text-lg'>Welcome Video</p>
                <p className='text-sm'>
                  Discover how this program will transform your leadership
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10'>
        <div className='w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2'>
          <div className='w-1 h-3 bg-white/50 rounded-full' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
