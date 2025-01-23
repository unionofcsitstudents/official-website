"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Users, User,  } from "lucide-react";
import { motion } from "framer-motion";
import PopupFormVolunteer from "./PopupFormVolunteer";
import PopupFormMember from "./PopupFormMember";
import PopupFormMentor from "./PopupFormMentor";

export default function GetInvolved() {
  return (
    <section className="px-4 py-24 bg-[#020817]" id="getinvolved">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Get Involved</h2>
          <div className="h-1 w-16 bg-colors-customBlue mx-auto"></div>
          <p className="text-blue-100/80 mt-6 text-lg">
            Join us in making a difference. There are many ways you can
            contribute to our cause.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Volunteer Card */}
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <Card className="bg-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:transform hover:-translate-y-1 hover:bg-white cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex justify-center">
                  <div className="bg-colors-customBlue/90  p-4 rounded-full">
                    <User className="w-6 h-6 text-white " />
                  </div>
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2 text-center">
                  Volunteer
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Share your time and skills to support our various programs and
                  initiatives.
                </p>
                <PopupFormVolunteer />
              </CardContent>
            </Card>
          </motion.div>

          {/* Member Card */}
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            <Card className="bg-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:transform hover:-translate-y-1 hover:bg-white cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex justify-center">
                  <div className="bg-colors-customBlue  p-4 rounded-full">
                    <Users className="w-6 h-6 text-white " />
                  </div>
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2 text-center">
                  Become a Member
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Join our community and lets work together to make a
                  difference.
                </p>
                <PopupFormMember />
              </CardContent>
            </Card>
          </motion.div>

          {/* Donation Card */}
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.9,
              ease: "easeInOut",
            }}
          >
            <Card className="bg-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:transform hover:-translate-y-1 hover:bg-white cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex justify-center">
                  <div className="bg-colors-customBlue  p-4 rounded-full">
                    <Users className="w-6 h-6 text-white " />
                  </div>
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2 text-center">
                  Mentorship Program
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Share your expertise or learn from industry experts through
                  our mentorship initiative.
                </p>
                <PopupFormMentor />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
