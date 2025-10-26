import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, CheckCircle, Download, Mail } from 'lucide-react';
import { Link } from 'react-router';

const ThankYou = () => {
  return (
    <div className='min-h-screen bg-background flex items-center justify-center p-4'>
      <Card className='max-w-3xl w-full p-8 md:p-12 shadow-material-xl border-2 border-accent/30'>
        <div className='text-center mb-8'>
          <div className='inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6'>
            <CheckCircle className='h-12 w-12 text-accent' />
          </div>

          <h1 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
            Welcome to Purpose To Profit!
          </h1>

          <p className='text-xl text-muted-foreground mb-2'>
            Your enrollment is confirmed. 🎉
          </p>

          <p className='text-muted-foreground'>
            You've just taken the first step toward transforming your leadership
            and amplifying your global influence.
          </p>
        </div>

        <div className='gradient-primary text-primary-foreground rounded-lg p-6 mb-8'>
          <h2 className='text-xl font-bold mb-4'>What Happens Next?</h2>

          <div className='space-y-4'>
            <div className='flex items-start gap-3'>
              <Mail className='h-6 w-6 flex-shrink-0 mt-1' />
              <div>
                <h3 className='font-semibold mb-1'>Check Your Email</h3>
                <p className='text-sm text-primary-foreground/90'>
                  You'll receive a confirmation email within the next 5 minutes
                  with your receipt and welcome package.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-3'>
              <Calendar className='h-6 w-6 flex-shrink-0 mt-1' />
              <div>
                <h3 className='font-semibold mb-1'>
                  Schedule Your Private Session
                </h3>
                <p className='text-sm text-primary-foreground/90'>
                  Within 24 hours, you'll receive a calendar link to book your
                  one-on-one strategy session.
                </p>
              </div>
            </div>

            <div className='flex items-start gap-3'>
              <Download className='h-6 w-6 flex-shrink-0 mt-1' />
              <div>
                <h3 className='font-semibold mb-1'>
                  Access Your Pre-Program Materials
                </h3>
                <p className='text-sm text-primary-foreground/90'>
                  Get started with our welcome guide and preparatory exercises
                  to maximize your transformation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-muted/30 rounded-lg p-6 mb-8'>
          <h3 className='font-bold mb-3'>Program Details</h3>
          <ul className='space-y-2 text-sm text-muted-foreground'>
            <li>
              • <strong>Start Date:</strong> [Cohort start date will be in your
              welcome email]
            </li>
            <li>
              • <strong>Duration:</strong> 4 weeks
            </li>
            <li>
              • <strong>Format:</strong> Live online sessions + independent work
            </li>
            <li>
              • <strong>Time Commitment:</strong> 3-4 hours per week
            </li>
          </ul>
        </div>

        <div className='text-center space-y-4'>
          <p className='text-muted-foreground'>
            Have questions? Our support team is here to help.
          </p>

          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <Button className='gradient-primary text-primary-foreground hover:opacity-90'>
              Contact Support
            </Button>
            <Button variant='outline' asChild>
              <Link to='/'>Return to Homepage</Link>
            </Button>
          </div>
        </div>

        <div className='mt-8 pt-8 border-t border-border text-center'>
          <p className='text-sm text-muted-foreground italic'>
            "The future belongs to those who believe in the beauty of their
            dreams and have the courage to pursue them. Welcome to your
            transformation journey."
          </p>
          <p className='text-sm font-semibold mt-2'>— Alexandra Sterling</p>
        </div>
      </Card>
    </div>
  );
};

export default ThankYou;
