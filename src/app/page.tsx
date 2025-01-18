"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function page() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };
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
        "Leading our organization with over 15 years of experience in non-profit management.",
      imageUrl: "/placeholder.svg?height=96&width=96",
    },
    {
      name: "Rohan Khanal",
      role: "Secretary",
      description:
        "Overseeing project implementation and community outreach initiatives.",
      imageUrl: "/placeholder.svg?height=96&width=96",
    },
    {
      name: "Jenisha Karmacharya",
      role: "Treasurer",
      description:
        "Building and nurturing relationships with our community partners.",
      imageUrl: "/placeholder.svg?height=96&width=96",
    },
  ];
  return (
    <>
      <main className="min-h-screen">
        <Navbar />

        {/* About */}
        <section className="flex min-h-screen flex-col items-center justify-center bg-black px-4 pt-16 text-center text-white">
          <div className="mx-auto max-w-4xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Making a Difference Together
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-gray-300 sm:text-xl">
              We are dedicated to creating positive change in our community
              through sustainable initiatives and collaborative efforts.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/get-involved"
                className="inline-flex min-w-[200px] items-center justify-center rounded-lg bg-emerald-600 px-8 py-3 font-medium text-white hover:bg-emerald-700"
              >
                Get Involved
              </Link>
              <Link
                href="/learn-more"
                className="inline-flex min-w-[200px] items-center justify-center rounded-lg border border-white px-8 py-3 font-medium text-white hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
            <div className="mt-12 flex flex-col items-center space-y-2">
              <span className="text-sm">Discover More</span>
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="bg-white px-4 py-24" id="about">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Mission & Vision
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-emerald-600"></div>
            <p className="mx-auto mt-8 max-w-[800px] text-lg text-gray-600">
              We envision a world where communities thrive through sustainable
              development and collective action, working together to create
              lasting positive change.
            </p>
          </div>
        </section>

        {/* History Section */}
        <section className="bg-white px-4 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">
                  Our History
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Founded in 2010, our organization has grown from a small
                    group of dedicated volunteers to a thriving community of
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
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
                        {event.year}
                      </div>
                      <span className="text-lg font-medium">{event.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">Our Team</h2>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 ease-in-out group-hover:text-emerald-600">
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
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-[#f9f9f9]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
              <div className="h-1 w-24 bg-emerald-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Full Name"
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Message"
                        className="min-h-[150px] w-full"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information & Map */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-5 h-5 text-emerald-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Address</h4>
                        <p className="text-gray-600">
                          123 Community Street
                          <br />
                          City, State 12345
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="w-5 h-5 text-emerald-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Phone</h4>
                        <p className="text-gray-600">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="w-5 h-5 text-emerald-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-gray-600">info@organization.org</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Map */}
                <Card>
                  <CardContent className="p-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1408.766726289526!2d87.28720737034004!3d26.82198753389794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef4176fbd0189b%3A0xcd454e4bda1ff6d5!2z4KSV4KWH4KSo4KWN4KSm4KWN4KSw4KS_4KSvIOCkquCljeCksOCkteCkv-Ckp-CkvyDgpJXgpY3gpK_gpL7gpK7gpY3gpKrgpLg!5e0!3m2!1sen!2snp!4v1737213363027!5m2!1sen!2snp"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
