import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import Logo from '@/assets/logo.svg';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className='sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border shadow-material-sm'>
      <nav className='container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between'>
        <div className='flex items-center'>
          <img
            src={Logo}
            alt='Purpose To Profit'
            onClick={() => scrollToSection('hero')}
            className='cursor-pointer lg:w-7/20 sm:w-1/2 w-11/20 block '
            // className="h-8 sm:h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-6'>
          <button
            onClick={() => scrollToSection('about')}
            className='text-sm cursor-pointer font-medium text-foreground hover:text-primary transition-smooth'
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('curriculum')}
            className='text-sm cursor-pointer font-medium text-foreground hover:text-primary transition-smooth'
          >
            Curriculum
          </button>
          <button
            onClick={() => scrollToSection('coach')}
            className='text-sm cursor-pointer font-medium text-foreground hover:text-primary transition-smooth'
          >
            Coach
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className='text-sm cursor-pointer font-medium text-foreground hover:text-primary transition-smooth'
          >
            Testimonials
          </button>
          <Button
            onClick={() => scrollToSection('investment')}
            className='gradient-primary cursor-pointer text-primary-foreground hover:opacity-90 transition-smooth shadow-material-md'
          >
            Enroll Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden p-2'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label='Toggle menu'
        >
          <Menu className='h-6 w-6 text-foreground' />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-card border-t border-border shadow-material-lg'>
          <div className='container mx-auto px-4 py-4 flex flex-col gap-3'>
            <button
              onClick={() => scrollToSection('about')}
              className='text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth'
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('curriculum')}
              className='text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth'
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection('coach')}
              className='text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth'
            >
              Coach
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className='text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth'
            >
              Testimonials
            </button>
            <Button
              onClick={() => scrollToSection('investment')}
              className='gradient-primary text-primary-foreground hover:opacity-90 transition-smooth shadow-material-md w-full'
            >
              Enroll Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
