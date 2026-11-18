"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("_subject", formData.subject);
    data.append("message", formData.message);

    const response = await fetch(
      "https://formsubmit.co/steve.cardm@gmail.com",
      {
        method: "POST",
        body: data,
      }
    );

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      alert("There was an error sending your message.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "steve.cardm@gmail.com",
      description: "Drop me a line anytime",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+57 (304) 584-8541",
      description: "Let's have a conversation",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Medellín, Colombia",
      description: "Available for remote work",
    },
  ];

  return (
    <section id="contact"     className="relative overflow-hidden py-24">
      {/* Background effects */}
      <div className="absolute inset-0 tech-grid opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2 className="mb-8 text-4xl font-semibold tracking-tight text-[#1d2923] md:text-5xl">
              Let&apos;s Connect
            </h2>
            <div className="glass-dark mx-auto max-w-4xl rounded-2xl p-8">
              <p className="text-lg leading-relaxed text-gray-300">
                Ready to bring your next big idea to life? I'm always excited to
                collaborate on innovative projects and explore new technological
                frontiers together.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-dark rounded-2xl p-7 md:p-8">
                <h3 className="mb-4 text-2xl font-semibold tracking-tight text-[#1d2923]">
                  Get in touch
                </h3>
                <p className="mb-7 leading-relaxed text-gray-300">
                  Whether you have a groundbreaking project idea, want to
                  discuss the latest in tech, or just want to connect with a
                  fellow innovator, I'd love to hear from you.
                </p>

                <div className="space-y-3">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 3 }}
                      className="group"
                    >
                      <div className="flex items-center space-x-4 rounded-xl border border-transparent p-3 transition-colors duration-200 hover:border-[#e6ebe7] hover:bg-[#f8faf8]">
                        <div
                          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#edf3ef] text-[#527965]"
                        >
                          {method.icon}
                        </div>
                        <div>
                          <p className="font-medium text-white">
                            {method.title}
                          </p>
                          <p className="text-gray-300 font-medium">
                            {method.value}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick action buttons */}
                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://wa.me/573045848541?text=Hola%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20hablar%20contigo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="group rounded-lg bg-[#315947] font-medium text-white hover:bg-[#274735]">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Start a conversation
                    </Button>
                  </a>
                  
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-dark rounded-2xl border-gray-200">
                <CardHeader className="pb-5">
                  <CardTitle className="text-xl font-semibold text-white">
                    Send a Message
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Fill out the form below and I'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <Label htmlFor="name"                         className="text-sm font-medium text-gray-300">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="border-gray-200 bg-white text-[#1d2923] placeholder:text-gray-500 focus-visible:border-[#789782] focus-visible:ring-[#789782]/20"
                          required
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <Label htmlFor="email"                         className="text-sm font-medium text-gray-300">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="border-gray-200 bg-white text-[#1d2923] placeholder:text-gray-500 focus-visible:border-[#789782] focus-visible:ring-[#789782]/20"
                          required
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <Label htmlFor="subject" className="text-sm font-medium text-gray-300">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="border-gray-200 bg-white text-[#1d2923] placeholder:text-gray-500 focus-visible:border-[#789782] focus-visible:ring-[#789782]/20"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <Label htmlFor="message" className="text-sm font-medium text-gray-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or just say hello..."
                        rows={6}
                        className="resize-none border-gray-200 bg-white text-[#1d2923] placeholder:text-gray-500 focus-visible:border-[#789782] focus-visible:ring-[#789782]/20"
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        type="submit"
                        className="w-full rounded-lg bg-[#315947] py-3 font-medium text-white transition-colors hover:bg-[#274735]"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Send message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
