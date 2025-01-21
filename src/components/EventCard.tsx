import { Card } from "@/components/ui/card"
import Image from "next/image"
import { CalendarDays, MapPin } from "lucide-react"

interface EventCardProps {
  imageUrl: string
  date: string
  time: string
  title: string
  subtitle: string
  location: string
  status: "upcoming" | "ongoing" | "completed"
}

export default function EventCard({ imageUrl, date, time, title, subtitle, location, status }: EventCardProps) {
  const statusColors = {
    upcoming: "bg-blue-500",
    ongoing: "bg-green-500",
    completed: "bg-gray-500",
  }

  return (
    <Card className="flex flex-col sm:flex-row gap-4 p-4 shadow-lg hover:shadow-xl transition-all duration-300 border-none bg-white/50 backdrop-blur hover:bg-white/80 relative overflow-hidden">
      <div className="relative h-[200px] sm:h-[140px] w-full sm:w-[200px] flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>{date}</span>
            <span className="text-primary/30">•</span>
            <span>{time}</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight hover:text-primary transition-colors">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold text-white ${statusColors[status]}`}
      >
        {status}
      </div>
    </Card>
  )
}

