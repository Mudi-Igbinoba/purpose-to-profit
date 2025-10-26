import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const faqs = [
    {
      question: 'How much time do I need to commit to this program?',
      answer:
        'Plan for 3-4 hours per week: 90 minutes for live group sessions, 60-90 minutes for independent work and exercises, plus your private coaching session. The program is designed for busy leaders with flexibility in mind.'
    },
    {
      question: "What if I can't attend a live session?",
      answer:
        "All live sessions are recorded and available within 24 hours. You'll have lifetime access to all recordings and materials. However, we highly encourage live attendance for maximum benefit and community connection."
    },
    {
      question: 'Is this program suitable for my industry?',
      answer:
        'Absolutely! Our frameworks are industry-agnostic and have been successfully applied across tech, healthcare, finance, nonprofits, consulting, and more. The principles of purpose-driven leadership transcend any specific sector.'
    },
    {
      question: 'How is this different from other leadership programs?',
      answer:
        "This program uniquely combines deep inner work (purpose, values, clarity) with strategic execution (influence, reach, impact). Most programs focus on one or the other. We integrate both for sustainable transformation that's authentic to who you are."
    },
    {
      question: 'What happens after the 4 weeks?',
      answer:
        "You'll receive lifetime access to all materials, join our exclusive alumni community, and get 6 months of monthly Q&A sessions. Many graduates continue with our advanced programs or join our annual leadership retreat."
    },
    {
      question: 'Do you offer scholarships or payment plans?',
      answer:
        'Yes! We offer flexible payment plans (3 or 6 months) and have a limited number of partial scholarships for nonprofit leaders and social entrepreneurs. Contact us to discuss options.'
    },
    {
      question: 'How big is the cohort?',
      answer:
        'We intentionally keep cohorts small—maximum 15-20 participants—to ensure personalized attention, deep connection, and meaningful interactions. This creates an intimate, transformative experience.'
    },
    {
      question: "What if I'm not sure I'm ready for 'global influence'?",
      answer:
        "That's exactly why you should join! This program meets you where you are. 'Global' doesn't necessarily mean worldwide—it means expanding your current impact in meaningful ways. If you're ready to grow, you're ready for this."
    }
  ];

  return (
    <section id='faq' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
            Frequently Asked Questions
          </h2>
          <p className='text-lg text-muted-foreground'>
            Got questions? We've got answers.
          </p>
        </div>

        <div className='max-w-3xl mx-auto'>
          <Accordion type='single' collapsible className='space-y-4'>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='bg-card border border-border rounded-lg px-6 shadow-material-md'
              >
                <AccordionTrigger className='text-left font-semibold hover:text-primary transition-smooth py-4'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='text-muted-foreground leading-relaxed pb-4'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className='mt-12 text-center bg-card rounded-xl p-8 shadow-material-lg border border-border'>
            <h3 className='text-xl font-bold mb-3'>Still have questions?</h3>
            <p className='text-muted-foreground mb-6'>
              We're here to help! Schedule a free 15-minute clarity call to
              discuss if this program is right for you.
            </p>
            <Button className='gradient-primary text-primary-foreground hover:opacity-90 shadow-material-md'>
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
