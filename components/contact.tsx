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
  Calendar,
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
      gradient: "from-cyan-400 to-green-500",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+57 (304) 584-8541",
      description: "Let's have a conversation",
      gradient: "from-teal-400 to-emerald-500",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Medellín, Colombia",
      description: "Available for remote work",
      gradient: "from-green-400 to-cyan-500",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <div className="glass-dark rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed">
                Ready to bring your next big idea to life? I'm always excited to
                collaborate on innovative projects and explore new technological
                frontiers together.
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-dark rounded-3xl p-8">
                <h3 className="text-3xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent">
                    Get In Touch
                  </span>
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Whether you have a groundbreaking project idea, want to
                  discuss the latest in tech, or just want to connect with a
                  fellow innovator, I'd love to hear from you.
                </p>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                      className="group"
                    >
                      <div className="flex items-center space-x-4 p-4 glass rounded-xl hover:border-cyan-400/50 transition-all duration-300">
                        <div
                          className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-r ${method.gradient} text-white`}
                        >
                          {method.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
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
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/573045848541?text=Hola%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20hablar%20contigo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-teal-600 to-emerald-700 hover:from-teal-700 hover:to-emerald-800 text-white font-semibold rounded-xl group">
                      <MessageCircle className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                      Start a Conversation
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
              <Card className="glass-dark border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl text-white">
                    Send a Message
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Fill out the form below and I'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <Label htmlFor="name" className="text-gray-300">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="glass border-gray-600/50 text-white placeholder-gray-500 focus:border-cyan-400/50 transition-colors"
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
                        <Label htmlFor="email" className="text-gray-300">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="glass border-gray-600/50 text-white placeholder-gray-500 focus:border-cyan-400/50 transition-colors"
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
                      <Label htmlFor="subject" className="text-gray-300">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="glass border-gray-600/50 text-white placeholder-gray-500 focus:border-cyan-400/50 transition-colors"
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
                      <Label htmlFor="message" className="text-gray-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or just say hello..."
                        rows={6}
                        className="glass border-gray-600/50 text-white placeholder-gray-500 focus:border-cyan-400/50 transition-colors resize-none"
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
                        className="w-full bg-gradient-to-r from-teal-600 to-emerald-700 hover:from-teal-700 hover:to-emerald-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 group"
                      >
                        <Send className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                        Send Message
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
