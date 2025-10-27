import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-primary text-primary-foreground py-12 border-t border-t-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>Purpose To Profit Global</h3>
            <p className='text-primary-foreground/80 text-sm'>
              Empowering leaders worldwide with inner clarity and global
              influence.
            </p>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>Contact</h4>
            <div className='space-y-2 text-sm text-primary-foreground/80'>
              <div className='flex items-center gap-2'>
                <Mail className='h-4 w-4' />
                <span>
                  <a href='mailto:hello.purposetoprofit@gmail.com'>
                    hello.purposetoprofit@gmail.com
                  </a>
                </span>
              </div>
              {/* <div className='flex items-center gap-2'>
                <Phone className='h-4 w-4' />
                <span>+1 (555) 123-4567</span>
              </div> */}
              <div className='flex items-center gap-2'>
                <MapPin className='h-4 w-4' />
                <span>Global Program (Online)</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>Quick Links</h4>
            <div className='space-y-2 text-sm text-primary-foreground/80'>
              <a
                href='#about'
                className='block hover:text-accent transition-smooth'
              >
                About the Program
              </a>
              <a
                href='#curriculum'
                className='block hover:text-accent transition-smooth'
              >
                Curriculum
              </a>
              <a
                href='#testimonials'
                className='block hover:text-accent transition-smooth'
              >
                Testimonials
              </a>
              <a
                href='#investment'
                className='block hover:text-accent transition-smooth'
              >
                Investment
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60'>
          <p>
            &copy; {new Date().getFullYear()} Purpose To Profit Global Coaching
            Program. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
