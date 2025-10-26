import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Amadin Ojo',
      role: 'Assistant Manager, IT Risk Manager, PwC',
      content:
        "This masterclass was very insightful. The sessions delivered unique keys to stand out as God's ambassadors in our various fields of endeavour. Without a doubt, the event was the beginning of a new dispensation for me. It redefined my approach to business and brought a massive shift to my execution strategy as a believer in the marketplace.",
      rating: 5
    },
    {
      name: 'Solomon Onikoyi',
      role: 'Founder/ CEO Pinnatech',
      content:
        'The masterclass was a truly impactful learning experience for me. Prior to attending, I had participated in several purpose and skill-equipping sessions — but none had been as practical and detailed in showing how to actually convert my skills and talents into income. This session bridged the gap between purpose discovery and financial empowerment.',
      rating: 5
    },
    {
      name: 'Maha King David',
      role: 'Creative Brand Designer',
      content:
        'This was truly a Masterclass for me on the intersection of the concept of our heavenly purpose and also profiting from it as well. An immense takeaway for me was that there is a purpose that is to be unlocked in your field, no matter what the field is - the end is to acquire souls, and everything that we have from our experiences to knowledge and talents are all assets to be traded with for the grand prize of souls.',
      rating: 5
    }
  ];

  return (
    <section id='testimonials' className='py-20 bg-background'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
            What Leaders Are Saying
          </h2>
          <p className='text-lg text-muted-foreground'>
            Join hundreds of leaders who have transformed their impact through
            this program.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className='p-6 shadow-material-lg hover:shadow-material-xl transition-smooth bg-card border-border'
            >
              <div className='flex gap-1 mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className='h-5 w-5 fill-gold text-gold' />
                ))}
              </div>

              <p className='text-muted-foreground mb-6 leading-relaxed italic'>
                "{testimonial.content}"
              </p>

              <div className='border-t border-border mt-auto pt-4'>
                <p className='font-semibold text-foreground'>
                  {testimonial.name}
                </p>
                <p className='text-sm text-muted-foreground'>
                  {testimonial.role}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className='mt-12 max-w-2xl mx-auto text-center gradient-primary text-primary-foreground rounded-xl p-8 shadow-material-xl'>
          <p className='text-2xl font-bold mb-2 '>Join Our Community</p>
          <p className='text-primary-foreground/90'>
            Over 500+ leaders have already transformed their impact. You're
            next.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
