import { Card } from '@/components/ui/card';
import etseImage from '@/assets/etse.svg';
import mordecaiImage from '@/assets/mordecai.svg';
import elishaImage from '@/assets/elisha.svg';
import azubuikeImage from '@/assets/azubuike.svg';

const Coaches = () => {
  const coaches = [
    {
      name: 'Elisha Joseph',
      role: 'Founder, Purpose to Profit Coaching',
      description:
        '⁠Elisha has dedicated over a decade to equipping individuals and leaders to live with clarity, purpose, and impact. A purpose coach, and One Young World Ambassador, he has empowered thousands through The Becoming and The Kingdom Luminaries Network. As the Founder and Lead Coach of the Purpose to Profit Global Coaching Program, he helps professionals transform purpose into profit and lasting influence.',
      image: elishaImage
    },
    {
      name: '⁠Dr. Azubuike Ezenwoke',
      role: 'Leadership Coach',
      description:
        'Dr. Azubuike has dedicated over two decades to empowering professionals to lead with purpose and impact. As Director of the African Leadership Development Academy and Founder of Lifematics, he has transformed hundreds of individuals through his innovative, faith-based leadership frameworks.',
      image: azubuikeImage
    },
    {
      name: 'Coach Mordecai Orimiladeye',
      role: 'Life Coach',
      description:
        'Coach Mordecai is a certified life coach, author, and digital entrepreneur passionate about helping individuals and organizations align with purpose, unlock potential, and achieve sustainable success. As the visionary behind Teens on Purpose Int’l, he has impacted over 70,000 teens and young adults across 100+ countries through transformative initiatives and platforms including Mordivate, MordyQuotes, and TOP Conferences.',
      image: mordecaiImage
    },
    {
      name: '⁠⁠Pharmacist Etseoghena Unuyie-Arowolo',
      role: 'Serial Entrepreneur',
      description:
        'Pharmacist Etseoghena is a trailblazer in gut health, hormonal wellness, and holistic healing. As Founder and CEO of Gudees Global Limited, Africa’s first gut health-focused company and menopause clinic, she has helped over 1,000 individuals heal naturally and achieve optimal wellness. A pharmacist, author, and mindset strategist, she empowers professionals to turn their purpose and expertise into profitable, purpose-driven ventures.',
      image: etseImage
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

        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
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
          <p className='text-sm font-semibold mt-3'>— Elisha Joseph</p>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
