import { Calendar, Compass, Rocket, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Curriculum = () => {
  const weeks = [
    {
      week: 1,
      icon: Compass,
      title: 'Discovering Your Purpose',
      description:
        "Uncover your core values, mission, and the deeper 'why' behind your leadership journey.",
      topics: [
        'Core values assessment and alignment',
        'Purpose discovery exercises',
        'Identifying your unique leadership signature',
        'Creating your personal mission statement'
      ]
    },
    {
      week: 2,
      icon: TrendingUp,
      title: 'Strategic Clarity & Vision',
      description:
        'Develop a crystal-clear vision for your leadership impact and create a strategic roadmap.',
      topics: [
        'Vision casting and goal setting',
        'Strategic planning frameworks',
        'Overcoming limiting beliefs',
        'Building confidence in your leadership'
      ]
    },
    {
      week: 3,
      icon: Rocket,
      title: 'Amplifying Your Influence',
      description:
        'Learn proven strategies to expand your reach and create meaningful connections globally.',
      topics: [
        'Personal branding and positioning',
        'Communication mastery',
        'Building strategic partnerships',
        'Leveraging digital platforms for impact'
      ]
    },
    {
      week: 4,
      icon: Calendar,
      title: 'Sustainable Success & Integration',
      description:
        'Create systems for long-term success and integrate your learnings into daily leadership.',
      topics: [
        'Implementation planning',
        'Building sustainable practices',
        'Accountability frameworks',
        'Creating your 90-day action plan'
      ]
    }
  ];

  return (
    <section id='curriculum' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
            4-Week Curriculum
          </h2>
          <p className='text-lg text-muted-foreground'>
            A structured journey designed to transform your leadership from the
            inside out.
          </p>
        </div>

        <div className='max-w-5xl mx-auto space-y-8'>
          {weeks.map((week, index) => (
            <Card
              key={index}
              className='sm:p-8 p-6 shadow-material-lg hover:shadow-material-xl transition-smooth bg-card border-l-4 border-l-accent'
            >
              <div className='flex items-start gap-6'>
                <div className='bg-gradient-to-br sm:block hidden from-primary to-secondary p-4 rounded-lg flex-shrink-0'>
                  <week.icon className='h-8 w-8 text-primary-foreground' />
                </div>

                <div className='flex-grow'>
                  <div className='flex items-center gap-3 mb-3'>
                    <span className='text-sm text-center font-bold text-accent sm:w-auto w-max px-3 py-1 bg-accent/10 rounded-full'>
                      Week {week.week}
                    </span>
                    <h3 className='sm:text-2xl text-xl font-bold'>
                      {week.title}
                    </h3>
                  </div>

                  <p className='text-muted-foreground mb-4 text-lg'>
                    {week.description}
                  </p>

                  <div className='bg-muted/50 rounded-lg p-4'>
                    <h4 className='font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground'>
                      Key Topics:
                    </h4>
                    <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                      {week.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className='flex items-center gap-2'
                        >
                          <span className='text-accent mt-1'>•</span>
                          <span className='text-sm'>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className='mt-12 max-w-3xl mx-auto text-center bg-card rounded-xl p-8 shadow-material-lg border border-border'>
          <h3 className='text-xl font-bold mb-3'>Plus: Ongoing Support</h3>
          <p className='text-muted-foreground'>
            Access to our exclusive alumni community, monthly Q&A sessions, and
            continued resources to support your journey beyond the 4 weeks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
