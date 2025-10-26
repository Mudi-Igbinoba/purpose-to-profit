import { Card } from '@/components/ui/card';
import { Award, BookOpen, Users } from 'lucide-react';
import coachImage from '@/assets/coach-profile.jpg';

const Coach = () => {
  const credentials = [
    {
      icon: Award,
      title: '20+ Years Experience',
      description: 'Leading executive coaching and organizational development'
    },
    {
      icon: Users,
      title: '500+ Leaders Coached',
      description: 'Across 6 continents and 30+ industries'
    },
    {
      icon: BookOpen,
      title: 'Published Author',
      description: 'Best-selling books on purpose-driven leadership'
    }
  ];

  return (
    <section id='coach' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
            Meet Your Coach
          </h2>
          <p className='text-lg text-muted-foreground'>
            Learn from a globally recognized expert in purpose-driven
            leadership.
          </p>
        </div>

        <div className='max-w-5xl mx-auto'>
          <Card className='overflow-hidden shadow-material-xl border-border'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
              {/* Image */}
              <div className='relative h-64 lg:h-auto'>
                <img
                  src={coachImage}
                  alt='Executive Coach'
                  className='absolute inset-0 w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent lg:bg-gradient-to-r' />
              </div>

              {/* Content */}
              <div className='p-8 lg:p-12 bg-card'>
                <h3 className='text-3xl font-bold mb-2'>Alexandra Sterling</h3>
                <p className='text-accent font-semibold mb-6'>
                  Founder & Lead Coach
                </p>

                <p className='text-muted-foreground leading-relaxed mb-6'>
                  Alexandra has dedicated her career to helping visionary
                  leaders discover their purpose and amplify their global
                  influence. With over two decades of experience working with
                  Fortune 500 executives, social entrepreneurs, and
                  change-makers worldwide, she brings a unique blend of
                  strategic insight and transformational coaching.
                </p>

                <p className='text-muted-foreground leading-relaxed mb-8'>
                  Her proprietary frameworks have been featured in Harvard
                  Business Review, Forbes, and Inc. Magazine. Alexandra holds
                  certifications from ICF, completed her MBA at Stanford, and
                  has trained with leading experts in organizational psychology
                  and leadership development.
                </p>

                <div className='space-y-4'>
                  {credentials.map((cred, index) => (
                    <div key={index} className='flex items-start gap-4'>
                      <div className='bg-accent/10 p-3 rounded-lg flex-shrink-0'>
                        <cred.icon className='h-6 w-6 text-accent' />
                      </div>
                      <div>
                        <h4 className='font-semibold mb-1'>{cred.title}</h4>
                        <p className='text-sm text-muted-foreground'>
                          {cred.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <div className='mt-8 text-center bg-card rounded-xl p-6 shadow-material-lg border border-border'>
            <p className='text-muted-foreground italic'>
              "My mission is simple: to help purpose-driven leaders create
              meaningful impact that extends far beyond their immediate reach.
              When you lead with clarity and authenticity, there are no limits
              to what you can achieve."
            </p>
            <p className='text-sm font-semibold mt-3'>— Alexandra Sterling</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coach;
