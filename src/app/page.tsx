import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function page() {
  const timelineEvents = [
    { year: "2010", title: "Organization Founded" },
    { year: "2015", title: "Expanded to National Level" },
    { year: "2020", title: "International Recognition" },
  ];
  return (
    <>
      <main className="min-h-screen">
        <Navbar />
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
        <section className="bg-white px-4 py-24">
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
      </main>
    </>
  );
}
