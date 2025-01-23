"use client"
import EventCard from "@/components/EventCard";
import { motion } from "framer-motion";
const events = [
  {
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-21%2021-55-50-k9hPFe8aPcru1AIBBbq24UfHTxSH2Z.png",
    date: "Comming Soon",
    time: "11:00 AM",
    title: "Workshop on Git and GitHub",
    subtitle: "ICT hall, Central Campus of Technology, Dharan - 14",
    location: "ICT hall, Central Campus of Technology, Dharan - 14",
    mentor: "Rohan Khanal",
    status: "upcoming" as const,
  },
  {
    imageUrl:
      "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/474120081_578140751685522_5439047404618486934_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kNWnlG2UrZkQ7kNvgG9HZ8c&_nc_oc=AdhjtYV5YR54eATD3LT5u5P3s7eN65-TI8cJIwJVcGljSU3qe-yrcz_EjcPQ-O3vBc3CHulbtm-kYOj375Mz2aCt&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AH-J8OQyVhSrAT50wNrU8Xs&oh=00_AYBQ-UkD4YwdfhE9WAOLL0OvoSnMrdVCYeOr3UluIDhQfA&oe=6796768A",
    date: "21 Jan 2025",
    time: "11:00 AM",
    title: "Workshop on Enhancing E - Resources Access and Use ",
    subtitle:
      "Join us to learn about the latest trends in E-Resources and how to access them",
    location: "Library, Central Campus of Technology, Dharan - 14",
    mentor: "Mr. OM Khatiwada",
    status: "completed" as const,
  },
  {
    imageUrl:
      "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/457221297_479132604919671_4796916768118097141_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=o8jlL0-tZvgQ7kNvgGxzLPS&_nc_oc=AdjCzbGPnQixeATvOCdz-17Ex5hOGYggPgCb0A__IWjjdUi4d4bYyJWt8hLarXLpbjyaDACWTJi1XzzZVkouHIy_&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AX1WSE5pi3QN45LS5mVZ7r2&oh=00_AYDiv_EKfsbFnTJCQXgEocOLvv5vQ0LKYZSqUpDdu6H_Rg&oe=6796770B",
    date: "29 Aug 2024",
    time: "2:00 PM",
    title: "Introduction to AWS",
    subtitle: "Exploring the cloud with Amazon Web Services",
    location: "ICT hall, Central Campus of Technology, Dharan - 14",
    mentor: "Aju Tamang",
    status: "completed" as const,
  },
  {
    imageUrl:
      "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/436210990_395667449932854_1690711963577943956_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=syjILiRdvxkQ7kNvgGuLtwM&_nc_oc=Adgim4yKOPYPaYGFX0K-4effYUkCus3r8mCAGPiPdN4tm8NQpSk6OIqoaaC3isAfJ5PmR7rkjs7m9DHDhTrU8SsW&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AtWSmVqtEnuSycBweiIaHPO&oh=00_AYD1n5cZE6px7-HT6GR4jyJd5JLtd5C10m_M7wHRq46fWA&oe=67966471",
    date: "15 April 2024",
    time: "2:00 PM",
    title: "Workshop on Web Development",
    subtitle: "Learn to build a website from scratch",
    location: "ICT hall, Central Campus of Technology, Dharan - 14",
    mentor: "Rohan Khanal",
    status: "completed" as const,
  },
];

export default function EventList() {
  return (
    <>
      <section
        className="px-4 py-16 bg-gradient-to-b bg-[#020817]"
        id="events"
      >
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
          <h2 className="text-3xl font-bold mt-8 tracking-tight sm:text-4xl relative text-white inline-block">
            Events
          </h2>
          <div className="mx-auto m-4 h-1 w-24 bg-colors-customBlue "></div>
          <p className="text-blue-100/80 text-lg">
            Stay updated with our upcoming events.
          </p>
        </motion.div>
        <div className="mx-auto max-w-4xl space-y-6 p-4 md:p-6 ">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </section>
    </>
  );
}
