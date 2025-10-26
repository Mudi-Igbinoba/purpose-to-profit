import { Target, TrendingUp, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Inner Clarity',
      description:
        'Gain profound self-awareness and align your leadership with your core purpose and values.'
    },
    {
      icon: TrendingUp,
      title: 'Global Influence',
      description:
        'Amplify your impact and expand your reach to create meaningful change on a global scale.'
    },
    {
      icon: Users,
      title: 'Authentic Leadership',
      description:
        "Develop a leadership style that's uniquely yours, rooted in authenticity and integrity."
    }
  ];

  return (
    <section id='about' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
            About the Program
          </h2>
          <p className='text-lg text-muted-foreground leading-relaxed'>
            The Purpose To Profit Global Coaching Program is a transformative
            4-week journey designed for visionary leaders who are ready to step
            into their full potential. Through deep introspection, strategic
            planning, and actionable frameworks, you'll discover how to lead
            with clarity, purpose, and global impact.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className='p-6 shadow-material-lg hover:shadow-material-xl transition-smooth bg-card border-border hover:border-accent/50'
            >
              <div className='bg-gradient-to-br from-primary/10 to-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4'>
                <benefit.icon className='h-8 w-8 text-primary' />
              </div>
              <h3 className='text-xl font-semibold mb-3'>{benefit.title}</h3>
              <p className='text-muted-foreground leading-relaxed'>
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        <div className='mt-16 max-w-4xl mx-auto bg-card rounded-xl p-8 shadow-material-lg border border-border'>
          <h3 className='text-2xl font-bold mb-4 text-center'>
            What You'll Experience
          </h3>
          <ul className='space-y-3 text-muted-foreground'>
            <li className='flex items-start gap-3'>
              <span className='text-accent text-xl'>✓</span>
              <span>
                Weekly live group coaching sessions with intimate cohort sizes
                for personalized attention
              </span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-accent text-xl'>✓</span>
              <span>
                One-on-one strategy sessions to address your unique leadership
                challenges
              </span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-accent text-xl'>✓</span>
              <span>
                Proprietary frameworks and tools to implement immediately in
                your organization
              </span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-accent text-xl'>✓</span>
              <span>
                Access to an exclusive community of global leaders committed to
                purposeful impact
              </span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-accent text-xl'>✓</span>
              <span>
                Lifetime access to program materials and ongoing support
                resources
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
