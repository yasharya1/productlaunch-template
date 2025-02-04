import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your product?",
    answer: "Our product is a solution that helps you achieve X, Y, and Z.",
  },
  {
    question: "How does it work?",
    answer: "It works by implementing A, B, and C technologies to solve your problems.",
  },
  {
    question: "What are the pricing options?",
    answer: "We offer flexible pricing options starting from $9/month. Check our pricing section for more details.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;