import { Card } from '@/components/ui/card';
import alexandraImage from '@/assets/alexandra-sterling.jpg';
import marcusImage from '@/assets/marcus-chen.jpg';
import sarahImage from '@/assets/sarah-thompson.jpg';

const Coaches = () => {
  const coaches = [
    {
      name: 'Elisha Oreunomhe',
      role: 'Founder & Lead Coach',
      description:
        'Alexandra has dedicated her career to helping visionary leaders discover their purpose and amplify their global influence. With over two decades of experience working with Fortune 500 executives, social entrepreneurs, and change-makers worldwide.',
      image: alexandraImage
    },
    {
      name: 'Marcus Chen',
      role: 'Senior Executive Coach',
      description:
        'Marcus specializes in leadership transformation and organizational culture. His background in both corporate strategy and mindfulness practices brings a unique perspective to executive development and team dynamics.',
      image: marcusImage
    },
    {
      name: 'Sarah Thompson',
      role: 'Leadership Development Coach',
      description:
        'Sarah focuses on emerging leaders and executive presence. With expertise in communication and emotional intelligence, she helps leaders develop authentic leadership styles that inspire and motivate their teams.',
      image: sarahImage
    }
  ];

  return (
    <section id='coach' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
            Meet Your Coaches
          </h2>
          <p className='text-lg text-muted-foreground'>
            Learn from globally recognized experts in purpose-driven leadership.
          </p>
        </div>

        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {coaches.map((coach, index) => (
            <Card
              key={index}
              className='overflow-hidden shadow-material-lg border-border hover:shadow-material-xl transition-shadow pt-0'
            >
              <div className='aspect-square overflow-hidden'>
                <img
                  src={coach.image}
                  alt={`${coach.name} - ${coach.role}`}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold mb-2'>{coach.name}</h3>
                <p className='text-accent font-semibold mb-4'>{coach.role}</p>
                <p className='text-muted-foreground leading-relaxed'>
                  {coach.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className='mt-8 text-center bg-card rounded-xl p-6 shadow-material-lg border border-border'>
          <p className='text-muted-foreground italic'>
            "My mission is simple: to help purpose-driven leaders create
            meaningful impact that extends far beyond their immediate reach.
            When you lead with clarity and authenticity, there are no limits to
            what you can achieve."
          </p>
          <p className='text-sm font-semibold mt-3'>— Elisha Oreunomhe</p>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
