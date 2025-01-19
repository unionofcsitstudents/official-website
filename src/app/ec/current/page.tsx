"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

export default function page() {
  const teamMembers = [
    {
      name: "Suyash Dhakal",
      role: "President",
      imageUrl: "/placeholder.svg?height=96&width=96",
    },
    {
      name: "Rohan Khanal",
      role: "Secretary",
      imageUrl: "/placeholder.svg?height=96&width=96",
    },
    {
      name: "Jenisha Karmacharya",
      role: "Treasurer",
      imageUrl: "/placeholder.svg?height=96&width=96",
    },
    {
      name: "Jenisha Karmacharya",
      role: "Treasurer",
      imageUrl: "/placeholder.svg?height=96&width=96",
    },
    {
      name: "Jenisha Karmacharya",
      role: "Treasurer",
      imageUrl: "/placeholder.svg?height=96&width=96",
    },
    {
      name: "Jenisha Karmacharya",
      role: "Treasurer",
      imageUrl: "/placeholder.svg?height=96&width=96",
    },
    {
      name: "Jenisha Karmacharya",
      role: "Treasurer",
      imageUrl: "/placeholder.svg?height=96&width=96",
    },
    {
      name: "Jenisha Karmacharya",
      role: "Treasurer",
      imageUrl: "/placeholder.svg?height=96&width=96",
    },
    {
      name: "Jenisha Karmacharya",
      role: "Treasurer",
      imageUrl: "/placeholder.svg?height=96&width=96",
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-black">
        <Navbar />
        <section className="py-16">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="container px-4 md:px-6 mx-auto"
          >
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
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
