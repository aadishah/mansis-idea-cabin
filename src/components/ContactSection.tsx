import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Let's Talk</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
            Got a brief, a crazy idea, or a dog photo to share?
          </p>
          <p className="text-2xl font-heading font-semibold text-accent">Let's make something great together.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-xl h-12 bg-card border-border"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-xl h-12 bg-card border-border"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="rounded-xl bg-card border-border"
                />
              </div>
              <Button type="submit" className="btn-accent w-full">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">Get In Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:manc.nayyar@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="bg-accent/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm">manc.nayyar@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">LinkedIn</p>
                    <p className="text-sm">Connect with me</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <span className="text-2xl">⌨️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Fax</p>
                    <p className="text-sm">Just Kidding!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-mountain rounded-2xl p-8 text-primary-foreground">
              <p className="text-lg leading-relaxed italic">
                "If you've got a brief, I've got ten different ways to break it open. Let's create something that moves
                people."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
