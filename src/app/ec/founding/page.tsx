"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { motion } from "framer-motion";
import suyash from "../../../../public/founding-members/suyash.webp";
import bali from "../../../../public/founding-members/bali.webp";
import rohan from "../../../../public/founding-members/rohan.webp";
import jenisha from "../../../../public/founding-members/jenisha.webp";
import salan from "../../../../public/founding-members/salan.webp";
import gauravt from "../../../../public/founding-members/gauravt.webp";
import gaurav from "../../../../public/founding-members/gaurav.webp";
import sonuma from "../../../../public/founding-members/sonuma.webp";
import sajan from "../../../../public/founding-members/sajan.webp";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: StaticImageData | string;
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
}

export default function page() {
  const teamMembers: TeamMember[] = [
    {
      name: "Suyash Dhakal",
      role: "PRESIDENT",
      imageUrl: suyash,
      socials: {
        facebook: "https://www.facebook.com/suyash.dhakal.3",
        instagram: "https://www.instagram.com/_suyash.d/",
        linkedin: "https://www.linkedin.com/in/suyash-dhakal/",
        github: "https://github.com/Suyash-Dhakal",
      },
    },
    {
      name: "Baliram Shah",
      role: "VICE PRESIDENT",
      imageUrl: bali,
      socials: {
        facebook: "https://www.facebook.com/baliram.sah.14",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Rohan Khanal",
      role: "SECRETARY",
      imageUrl: rohan,
      socials: {
        facebook: "https://www.facebook.com/profile.php?id=100076451437022",
        instagram: "https://instagram.com/rohan.khanal119",
        linkedin: "https://www.linkedin.com/in/rohan-khanal-ba6823274/",
        github: "https://github.com/rohankhanal14",
      },
    },
    {
      name: "Gaurav Trital",
      role: "VICE SECRETARY",
      imageUrl: gauravt,
      socials: {
        facebook: "https://www.facebook.com/gaurav.dharan",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Jenisha Karmacharya",
      role: "TREASURER",
      imageUrl: jenisha,
      socials: {
        facebook: "https://www.facebook.com/jenisha.karmacharya.98",
        instagram: "https://www.instagram.com/jnysa7?igsh=MjY2azVnbXkyb2xr",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Gaurav Khanal",
      role: "MEMBER",
      imageUrl: gaurav,
      socials: {
        facebook: "https://www.facebook.com/gaurab.khanal98",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Sajan Limbu",
      role: "MEMBER",
      imageUrl: sajan,
      socials: {
        facebook: "https://www.facebook.com/profile.php?id=61560635061507",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Sonuma Limbu",
      role: "MEMBER",
      imageUrl: sonuma,
      socials: {
        facebook: "https://www.facebook.com/sonuma.limbu.16",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Salan Katuwal",
      role: "MEMBER",
      imageUrl: salan,
      socials: {
        facebook: "https://www.facebook.com/salan.katwal.9",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
  ];

  const topRowMembers = teamMembers.slice(0, 5);
  const bottomRowMembers = teamMembers.slice(5);

  return (
    <>
      <Navbar />
      <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        {/* Main content container */}

        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="container mx-auto px-4 py-24 md:py-28"
        >
          {/* Text content wrapper */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Meet Our{" "}
              <span className="text-colors-customBlue">Founding Committee</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Visionary leaders driving innovation and excellence in our
              organization
            </p>
          </div>
        </motion.div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32">
          <svg
            className="absolute bottom-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1440 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 24C240 74 480 74 720 49C960 24 1200 24 1440 49V74H0V24Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="space-y-12">
            {/* Top row */}
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12"
            >
              {topRowMembers.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </motion.div>

            {/* Bottom row */}
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto"
            >
              {bottomRowMembers.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 rounded-full overflow-hidden bg-gray-100">
        <Image
          src={member.imageUrl || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        {member.name}
      </h3>
      <p className="text-sm text-gray-500 mb-3">{member.role}</p>
      <div className="flex gap-3 text-gray-400">
        {Object.entries(member.socials).map(([platform, url]) => (
          <Link
            key={platform}
            href={url}
            className="hover:text-black transition-colors text-colors-customBlue"
            target="_blank"
            rel="noopener noreferrer"
          >
            {platform === "facebook" && <Facebook className="w-5 h-5" />}
            {platform === "instagram" && <Instagram className="w-5 h-5" />}
            {platform === "linkedin" && <Linkedin className="w-5 h-5" />}
            {platform === "github" && <Github className="w-5 h-5" />}
            <span className="sr-only">{platform}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
