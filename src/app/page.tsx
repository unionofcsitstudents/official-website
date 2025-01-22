"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import suyash from "../../public/founding-members/suyash.webp";
import rohan from "../../public/founding-members/rohan.webp";
import jenisha from "../../public/founding-members/jenisha.webp";
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

export default function Page() {
  const timelineEvents = [
    { year: "2010", title: "Organization Founded" },
    { year: "2015", title: "Expanded to National Level" },
    { year: "2020", title: "International Recognition" },
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
      name: "Jenisha Karmacharya",
      role: "Treasurer",
      description:
        "Building and nurturing relationships with our community partners.",
      imageUrl: jenisha,
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-black px-4 pt-16 text-center text-white">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="mx-auto max-w-4xl space-y-6"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Making a Difference <br />
            <span className="text-colors-customBlue block lg:inline">
              Together
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-gray-300 sm:text-xl">
            We are dedicated to creating positive change in our community
            through sustainable initiatives and collaborative efforts.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#getinvolved"
              className="inline-flex min-w-[200px] items-center justify-center rounded-lg bg-colors-customBlue px-8 py-3 font-medium text-white hover:bg-colors-customBlue/90"
            >
              Get Involved
            </Link>
            <Link
              href="/#about"
              className="inline-flex min-w-[200px] items-center justify-center rounded-lg border border-white px-8 py-3 font-medium text-white hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
          <div className="mt-12 flex flex-col items-center space-y-2">
            <span className="text-sm">Discover More</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* About */}
      {/* Mission & Vision Section */}
      <section className="bg-white px-4 py-24" id="about">
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Mission & Vision
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-colors-customBlue "></div>
          <p className="mx-auto mt-8 max-w-[800px] text-lg text-gray-600">
            We envision a world where communities thrive through sustainable
            development and collective action, working together to create
            lasting positive change.
          </p>
        </motion.div>
      </section>

      {/* History Section */}
      <section className="bg-white px-4 py-24">
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
              <h2 className="text-3xl font-bold tracking-tight">Our History</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Founded in 2010, our organization has grown from a small group
                  of dedicated volunteers to a thriving community of
                  change-makers. Over the years, we&apos;ve successfully
                  implemented numerous projects that have positively impacted
                  thousands of lives.
                </p>
                <p className="text-gray-600">
                  Today, we continue to expand our reach and deepen our impact
                  through innovative programs and partnerships.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="rounded-lg bg-[#f7f7f7] p-8">
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div key={event.year} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-colors-customBlue  text-white">
                      {event.year}
                    </div>
                    <span className="text-lg font-medium">{event.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Team */}
      <section className=" bg-white">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl relative inline-block">
            Meet Our Team
          </h2>
          <div className="mx-auto m-4 h-1 w-24 bg-colors-customBlue "></div>
          <p className="text-muted-foreground mb-8 text-lg">
            Our team is composed of passionate individuals dedicated to creating
            positive change in our community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-[#f7f7f7] rounded-lg p-8 flex flex-col items-center text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-all duration-300 ease-in-out hover:shadow-lg hover:transform hover:-translate-y-1 hover:bg-white cursor-pointer"
              >
                <div className="w-24 h-24 mb-6 rounded-full bg-gray-200 overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-110">
                  <Image
                    src={member.imageUrl || "/placeholder.svg"}
                    alt={`${member.name}'s profile`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 ease-in-out group-hover:text-colors-customBlue ">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium mb-4 transition-colors duration-300 ease-in-out group-hover:text-gray-800">
                  {member.role}
                </p>
                <p className="text-gray-500 leading-relaxed transition-colors duration-300 ease-in-out group-hover:text-gray-600">
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
      <section className="px-4 py-12 md:py-24 lg:py-32" id="faq">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl relative inline-block">
              Frequently Asked Questions
            </h2>
            <div className="mx-auto m-4 h-1 w-24 bg-colors-customBlue"></div>
            <p className="text-muted-foreground text-lg">
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
                We support a wide range of projects focused on community
                development, education, environmental conservation, and social
                welfare. Our projects are carefully selected to create
                meaningful impact and sustainable change.
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
                Can I volunteer remotely?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                Yes, we offer various remote volunteering opportunities! From
                digital skills support to project coordination, you can
                contribute to our mission from anywhere in the world. Check our
                volunteer page for current remote positions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <Footer />
    </>
  );
}
