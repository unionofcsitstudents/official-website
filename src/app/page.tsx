"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import suyash from "../../public/founding-members/suyash.webp";
import rohan from "../../public/founding-members/rohan.webp";
import srijal from "../../public/founding-members/srijal.webp";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import GetInvolved from "@/components/GetInvolved";
import EventList from "@/components/EventList";
import { Button } from "@/components/ui/button";
import { useEffect, useState, JSX } from "react";

export default function Page() {
  const [floatingElements, setFloatingElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Ensure this runs only in the client
    if (typeof window !== "undefined") {
      const elements = [...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [700, 50, 100],
            opacity: [0.2, 0.6, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ));
      setFloatingElements(elements);
    }
  }, []);

  const timelineEvents = [
    { year: "1", title: "Discover our mission, vision, and the projects." },
    {
      year: "2",
      title: "Bring your unique ideas and skills to innovate solutions",
    },
    { year: "3", title: "Collaborate with like-minded individuals." },
  ];

  const teamMembers = [
    {
      name: "Suyash Dhakal",
      role: "President",
      description:
        "Leading our organization with a vision for positive change and community impact.",
      imageUrl: suyash,
    },
    {
      name: "Rohan Khanal",
      role: "Secretary",
      description:
        "Overseeing project implementation and community outreach initiatives.",
      imageUrl: rohan,
    },
    {
      name: "Srijal Bhattarai",
      role: "Advisor",
      description:
        "Overseeing project implementation and community outreach initiatives.",
      imageUrl: srijal,
    },
  ];

  return (
    <>
      <Navbar />
      {/* Hero */}
      <section className="min-h-screen relative overflow-hidden bg-[#020817]">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_-20%,#1a365d,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_-20%_80%,#1e3a8a,transparent_50%)]" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 0.4, 0.5] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3b82f6,transparent_70%)] opacity-30"
          />
          <div className="absolute inset-0 backdrop-blur-[100px]" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingElements}
        </div>
        {/* Hero Section */}
        <main className="relative min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8 relative"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
                <span className="text-white">Making a </span>
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 blur-2xl opacity-30 animate-pulse" />
                  <span className="relative">Difference</span>
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                  Together
                </span>
              </h1>
            </motion.div>

            <p className="text-blue-100/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              We are dedicated to creating positive change in our community
              through sustainable initiatives and collaborative efforts.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/#getinvolved"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600  border-0 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 inline-flex min-w-[200px] items-center justify-center rounded-lg bg-colors-customBlue px-8 py-3 font-medium text-white hover:bg-colors-customBlue/90"
                >
                  Get Involved
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/#about"
                  className="inline-flex min-w-[200px] items-center justify-center rounded-lg border border-white px-8 py-3 font-medium text-white hover:bg-white/10"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-[-120px] left-1/2 transform -translate-x-1/2"
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-400 hover:text-blue-300"
              >
                Discover More
                <ChevronDown className="ml-2 h-4 w-4 animate-bounce" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020817] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </main>
      </section>

      {/* About */}
      {/* Mission & Vision Section */}

      <section className="bg-[#020817]  px-4 py-24" id="about">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Our Mission & Vision
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-colors-customBlue "></div>
          <p className="mx-auto mt-8 max-w-[800px] text-lg text-blue-100/80">
            We envision a world where communities thrive through sustainable
            development and collective action, working together to create
            lasting positive change.
          </p>
        </motion.div>
      </section>

      {/* History Section */}
      <section className="bg-[#020817] px-4 py-24">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Our History
              </h2>
              <div className="space-y-4">
                <p className="text-blue-100/80">
                  Founded in 2080, our organization has grown from a small group
                  of dedicated volunteers to a thriving community of
                  change-makers. Over the years, we&apos;ve successfully
                  implemented numerous projects that have positively impacted
                  thousands of lives.
                </p>
                <p className="text-blue-100/80">
                  Today, we continue to expand our reach and deepen our impact
                  through innovative programs and partnerships.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="rounded-lg bg-gradient-to-br from-[#020817] via-[#1e3a8a] to-[#22d3ee] p-8">
              <div className="space-y-8">
                {timelineEvents.map((event) => (
                  <div key={event.year} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-colors-customBlue  text-white">
                      {event.year}
                    </div>
                    <span className="text-lg text-white font-medium">
                      {event.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Team */}
      <section className=" bg-[#020817] px-4 py-16">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center mx-auto max-w-7xl"
        >
          <h2 className="text-3xl text-white font-bold tracking-tight sm:text-4xl relative inline-block">
            Meet Our Team
          </h2>
          <div className="mx-auto m-4 h-1 w-24 bg-colors-customBlue "></div>
          <p className="text-blue-100/80 mb-8 text-lg">
            Our team is composed of passionate individuals dedicated to creating
            positive change in our community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#020817] via-[#1e3a8a] to-[#22d3ee]
 rounded-lg p-8 flex flex-col items-center text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-all duration-300 ease-in-out hover:shadow-lg hover:transform hover:-translate-y-1 hover:bg-white cursor-pointer"
              >
                <div className="w-24 h-24 mb-6 rounded-full bg-gray-200 overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-110">
                  <Image
                    src={member.imageUrl}
                    alt={`${member.name}'s profile`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold  text-white mb-2 transition-colors duration-300 ease-in-out group-hover:text-blue-100 ">
                  {member.name}
                </h3>
                <p className=" text-white font-medium mb-4 transition-colors duration-300 ease-in-out group-hover:text-blue-100/80">
                  {member.role}
                </p>
                <p className="text-blue-100/80 leading-relaxed transition-colors duration-300 ease-in-out group-hover:text-blue-100">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Events */}
      <EventList />

      {/* Get Involved */}
      <GetInvolved />

      {/* Contact */}
      <ContactForm />

      {/* FAQ */}
      <section className="bg-[#020817] px-4 py-12 md:py-24 lg:py-32" id="faq">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white relative inline-block">
              Frequently Asked Questions
            </h2>
            <div className="mx-auto m-4 h-1 w-24 bg-colors-customBlue"></div>
            <p className="text-blue-100/80 text-lg">
              Find answers to common questions about our organization and
              programs
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="border-none rounded-lg bg-gray-50 px-4"
            >
              <AccordionTrigger className="font-semibold hover:no-underline py-4 text-left">
                How can I get involved with your organization?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                There are many ways to get involved with our organization. You
                can become a member, volunteer for our programs, participate in
                events, or contribute to our initiatives. Contact us to learn
                more about current opportunities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border-none rounded-lg bg-gray-50 px-4"
            >
              <AccordionTrigger className="font-semibold hover:no-underline py-4 text-left">
                What types of projects do you support?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                We support a wide range of projects focused on education for
                students and social welfare. Our projects are carefully selected
                to create meaningful impact and sustainable change.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border-none rounded-lg bg-gray-50 px-4"
            >
              <AccordionTrigger className="font-semibold hover:no-underline py-4 text-left">
                How are donations used?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                Your donations directly support our programs and initiatives. We
                maintain full transparency in our financial operations, with the
                majority of funds going directly to project implementation and
                community support.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border-none rounded-lg bg-gray-50 px-4"
            >
              <AccordionTrigger className="font-semibold hover:no-underline py-4 text-left">
                Where is your organization based?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                Our organization is based in Central Campus of Technology,
                Dharan -14, Nepal. We operate at the local levels, with a focus
                on creating impact in our college and beyond.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <Footer />
    </>
  );
}
