import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import clsx from 'clsx';
import { differenceInDays } from 'date-fns';
import { Check, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router';

const Investment = () => {
  // const navigate = useNavigate();

  // const handleEnroll = () => {
  //   navigate('/thank-you');
  // };

  const [daysRemaining, setDaysRemaining] = useState<number>(0);

  useEffect(() => {
    const deadline = new Date('2025-11-15T23:59:59');
    const now = new Date();
    const days = differenceInDays(deadline, now);
    setDaysRemaining(days > 0 ? days : 0);
  }, []);

  const included = [
    '4 weeks of intensive group coaching sessions',
    'Lifetime access to all program materials',
    'Proprietary frameworks and tools',
    'Access to exclusive alumni community',
    'Monthly Q&A sessions for 6 months post-program',
    'Personalized action plan and roadmap',
    'Certificate of completion'
  ];

  return (
    <section id='investment' className='py-20 bg-background'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
            Your Investment
          </h2>
          <p className='text-lg text-muted-foreground'>
            Transform your leadership and amplify your global impact in just 4
            weeks.
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <Card className='overflow-hidden shadow-material-xl border-2 border-accent/30 pt-0'>
            <div className='gradient-primary text-primary-foreground p-8 text-center'>
              <h3 className='text-2xl font-bold mb-2'>
                Purpose To Profit Program
              </h3>
              <p className='text-primary-foreground/90'>
                4-Week Immersive Leadership Transformation
              </p>
            </div>

            <div className='sm:px-8 px-6 pb-4 pt-4 bg-card'>
              <div className='text-center mb-8'>
                <div className='flex items-center justify-center gap-4 mb-4'>
                  <span
                    className={clsx('', {
                      'line-through sm:text-3xl text-2xl text-muted-foreground':
                        daysRemaining > 0,
                      'sm:text-5xl text-4xl font-bold text-accent':
                        daysRemaining < 1
                    })}
                  >
                    ₦50,000
                  </span>
                  <span
                    className={clsx(
                      'sm:text-5xl text-4xl font-bold text-accent',
                      {
                        hidden: daysRemaining < 1
                      }
                    )}
                  >
                    ₦35,000
                  </span>
                </div>
                <p
                  className={clsx('text-sm text-muted-foreground mb-2', {
                    hidden: daysRemaining < 1
                  })}
                >
                  Limited-time founding member rate
                </p>
                <div className='flex flex-col items-center gap-2 mb-2'>
                  <div
                    className={clsx(
                      'items-center gap-2 bg-gold/10 text-gold-foreground px-4 py-2 rounded-full text-sm font-semibold',
                      {
                        hidden: daysRemaining < 1,
                        'inline-flex': daysRemaining > 0
                      }
                    )}
                  >
                    <Clock className='h-4 w-4' />
                    {daysRemaining > 0
                      ? `Offer expires in ${daysRemaining} ${
                          daysRemaining === 1 ? 'day' : 'days'
                        }`
                      : 'Offer expired'}
                  </div>
                  <p className='text-sm font-semibold text-foreground'>
                    Program starts: November 28th, 2025
                  </p>
                </div>
              </div>

              <div className='mb-8'>
                <h4 className='font-bold text-xl mb-4'>What's Included:</h4>
                <ul className='space-y-3'>
                  {included.map((item, index) => (
                    <li key={index} className='flex items-start gap-3'>
                      <Check className='h-6 w-6 text-accent flex-shrink-0 mt-0.5' />
                      <span className='text-muted-foreground'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <div className='bg-muted/50 rounded-lg p-6 mb-8'>
                <h4 className='font-semibold mb-3 flex items-center gap-2'>
                  <CreditCard className='h-5 w-5 text-accent' />
                  Flexible Payment Options
                </h4>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  <li>• One-time payment: ₦35,000 (save ₦500)</li>
                  <li>• 3 monthly payments: ₦1,832/month</li>
                  <li>• 6 monthly payments: ₦916/month</li>
                </ul>
              </div> */}
              <a
                href='https://tally.so/r/mVR85M'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  size='lg'
                  className='w-full sm:whitespace-nowrap whitespace-normal sm:h-10 h-14  bg-accent text-accent-foreground hover:bg-accent/90 shadow-material-lg sm:text-lg text-base py-6 transition-smooth'
                >
                  Enroll Now & Transform Your Leadership
                </Button>
              </a>

              <p className='text-center text-sm text-muted-foreground mt-4'>
                ✓ Secure payment processing ✓ 30-day money-back guarantee
              </p>
            </div>
          </Card>

          <div className='mt-8 text-center gradient-primary text-primary-foreground rounded-xl p-8 shadow-material-xl'>
            <h4 className='text-2xl font-bold mb-3'>
              100% Satisfaction Guarantee
            </h4>
            <p className='text-primary-foreground/90'>
              If after the first week you don't feel this program is right for
              you, we'll refund your investment in full—no questions asked.
              We're confident in the transformation this program delivers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
