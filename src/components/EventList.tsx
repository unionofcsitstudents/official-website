import EventCard from "@/components/EventCard";
import { motion } from "framer-motion";
const events = [
  {
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-21%2021-55-50-k9hPFe8aPcru1AIBBbq24UfHTxSH2Z.png",
    date: "24 Jan 2024",
    time: "2:00 PM",
    title: "Siempre Son Flores",
    subtitle: "Musica Cubana Salsa Jazz adipi scing elit. Nullam",
    location: "155 W 46nd Street, New York",
    status: "upcoming" as const,
  },
  {
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-21%2021-55-50-k9hPFe8aPcru1AIBBbq24UfHTxSH2Z.png",
    date: "24 Jan 2024",
    time: "2:00 PM",
    title: "Siempre Son Flores",
    subtitle: "Musica Cubana Salsa Jazz adipi scing elit. Nullam",
    location: "155 W 46nd Street, New York",
    status: "ongoing" as const,
  },
  {
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-21%2021-55-50-k9hPFe8aPcru1AIBBbq24UfHTxSH2Z.png",
    date: "24 Jan 2024",
    time: "2:00 PM",
    title: "Siempre Son Flores",
    subtitle: "Musica Cubana Salsa Jazz adipi scing elit. Nullam",
    location: "155 W 46nd Street, New York",
    status: "completed" as const,
  },
]

export default function EventList() {
  return (
    <>
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
        <h2 className="text-3xl font-bold mt-8 tracking-tight sm:text-4xl relative inline-block">
          Events
        </h2>
        <div className="mx-auto m-4 h-1 w-24 bg-colors-customBlue "></div>
        <p className="text-muted-foreground text-lg">
          Stay updated with our upcoming events.
        </p>
      </motion.div>
      <div className="mx-auto max-w-4xl space-y-6 p-4 md:p-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </>
  );
}
