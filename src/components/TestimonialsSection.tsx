import { Quote } from "lucide-react";

type Testimonial = {
  id: number;
  quote: string;
  author: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Mansi has an incredible ability to turn complex briefs into simple, powerful ideas. Her energy is infectious and her dedication unmatched.",
    author: "Creative Director Name",
    role: "Senior Creative Director, Agency Name",
  },
  {
    id: 2,
    quote: "Working with Mansi means working with someone who genuinely cares about the craft. She brings both strategic thinking and creative fearlessness.",
    author: "Strategy Lead Name",
    role: "Head of Strategy, Agency Name",
  },
  {
    id: 3,
    quote: "Mansi doesn't just write copy—she writes experiences. Her work resonates because it comes from a place of genuine curiosity and cultural awareness.",
    author: "Colleague Name",
    role: "Senior Copywriter, Agency Name",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Kind Words
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-primary-foreground/20 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-10 w-10 text-accent mb-4" />
              <p className="text-primary-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-heading font-bold text-primary-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-primary-foreground/70">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
