import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { z } from 'zod';

// Input validation schema
const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Name contains invalid characters" }),
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string()
    .trim()
    .max(20, { message: "Phone number must be less than 20 characters" })
    .regex(/^[+\d\s()-]*$/, { message: "Phone number contains invalid characters" })
    .optional()
    .or(z.literal('')),
  subject: z.string()
    .trim()
    .min(3, { message: "Subject must be at least 3 characters" })
    .max(200, { message: "Subject must be less than 200 characters" }),
  message: z.string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message must be less than 2000 characters" })
});

// Sanitize HTML to prevent XSS
const sanitizeHtml = (str: string): string => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('pWDXK2_XOb3orLcQw');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async () => {
    // Sanitize all user inputs before sending
    const sanitizedData = {
      name: sanitizeHtml(formData.name.trim()),
      email: sanitizeHtml(formData.email.trim()),
      phone: sanitizeHtml(formData.phone.trim()),
      subject: sanitizeHtml(formData.subject.trim()),
      message: sanitizeHtml(formData.message.trim())
    };

    const bodyMessage = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9f9f9;">
      <div style="background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <div style="background-color: #007bff; color: #ffffff; border-radius: 10px 10px 0 0; padding: 20px;">
          <h2 style="margin: 0;">Contact Form Submission</h2>
        </div>
        <div style="padding: 20px;">
          <p style="margin-bottom: 10px;"><strong>Full Name:</strong> ${sanitizedData.name}</p>
          <p style="margin-bottom: 10px;"><strong>Email:</strong> ${sanitizedData.email}</p>
          <p style="margin-bottom: 10px;"><strong>Phone Number:</strong> ${sanitizedData.phone}</p>
          <p style="margin-bottom: 10px;"><strong>Subject:</strong> ${sanitizedData.subject}</p>
          <p style="margin-bottom: 10px;"><strong>Message:</strong> ${sanitizedData.message}</p>
        </div>
        <div style="background-color: #007bff; color: #ffffff; border-radius: 0 0 10px 10px; padding: 10px;">
        <span style="margin: 0;">&copy;Obed Makori</span>
      </div>
      </div>
    </div>
  `;

    const params = {
      email: sanitizedData.email,
      subject: sanitizedData.subject,
      phone: sanitizedData.phone,
      bodyMessage: bodyMessage,
      from_name: sanitizedData.name,
      message: sanitizedData.message
    };

    try {
      const result = await emailjs.send("service_0n3ny6o", "template_86mv30o", params);
      
      if (result.text === "OK") {
        await Swal.fire({
          title: "Success!",
          text: "Thank you for your message! Message sent successfully!",
          icon: "success"
        });
        
        // Send auto-reply
        await emailjs.send("service_0n3ny6o", "template_g7tvztb", params);
        
        // Reset form
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        await Swal.fire({
          icon: "error",
          title: "Validation Error",
          text: error.errors[0].message
        });
        return;
      }
    }
    
    setIsSubmitting(true);
    await sendEmail();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'makoriobed991@gmail.com',
      link: 'mailto:makoriobed991@gmail.com'
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp',
      value: '+254 951 22778',
      link: 'https://wa.me/254951227778'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Nairobi, Kenya',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss your project and explore how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on data projects, 
                or simply chat about the latest trends in data analytics and machine learning.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-background border-border hover:border-primary/50 transition-colors duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <i className={`${info.icon} text-primary`} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.title}</p>
                        {info.link !== '#' ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/obed-makori/', label: 'LinkedIn' },
                  { icon: 'fab fa-github', href: 'https://github.com/Obed-Makori', label: 'GitHub' },
                  { icon: 'fab fa-instagram', href: 'https://www.instagram.com/makori_obed254/', label: 'Instagram' },
                ].map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <i className={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      maxLength={100}
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      maxLength={255}
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+254 XXX XXX XXX"
                      maxLength={20}
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject *</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project discussion"
                      required
                      maxLength={200}
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how I can help..."
                    rows={5}
                    required
                    maxLength={2000}
                    className="bg-input border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="fas fa-paper-plane ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;