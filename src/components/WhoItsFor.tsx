import { CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const WhoItsFor = () => {
  const idealParticipants = [
    'Executive leaders and C-suite professionals seeking to amplify their influence',
    'Entrepreneurs building purpose-driven businesses with global reach',
    'Social impact leaders ready to scale their mission',
    'Coaches and consultants wanting to elevate their practice',
    'Anyone feeling called to lead with greater clarity and authentic purpose'
  ];

  const notForYouIf = [
    "You're looking for quick fixes or surface-level strategies",
    "You're not ready to do deep inner work alongside strategic planning",
    'You prefer to work in isolation rather than collaborative learning',
    "You're seeking purely tactical business advice without personal transformation"
  ];

  return (
    <section id='who-its-for' className='py-20 bg-background'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl leading-tight font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
            Is This Program For You?
          </h2>
          <p className='text-lg text-muted-foreground'>
            This program is designed for visionary leaders ready to make a
            meaningful impact on a global scale.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {/* Ideal For */}
          <Card className='p-8 shadow-material-lg border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-transparent'>
            <h3 className='text-2xl font-bold mb-6 flex items-center gap-2'>
              <CheckCircle className='h-6 w-6 text-accent' />
              This Program is for you if you are...
            </h3>
            <ul className='space-y-4'>
              {idealParticipants.map((participant, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <span className='text-accent text-xl mt-1'>✓</span>
                  <span className='text-foreground leading-relaxed'>
                    {participant}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Not Ideal For */}
          <Card className='p-8 shadow-material-lg border border-border bg-card'>
            <h3 className='text-2xl font-bold mb-6 flex items-center gap-2'>
              <span className='text-2xl'>⚠️</span>
              This Might Not Be For You If...
            </h3>
            <ul className='space-y-4'>
              {notForYouIf.map((item, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <span className='text-muted-foreground text-xl mt-1'>•</span>
                  <span className='text-muted-foreground leading-relaxed'>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className='mt-12 max-w-3xl mx-auto text-center gradient-primary text-primary-foreground rounded-xl p-8 shadow-material-xl'>
          <p className='text-lg font-medium'>
            If you're nodding your head to the "For You" section, you're exactly
            where you need to be. This program will meet you where you are and
            elevate you to where you're meant to go.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
