"use client"
import React from "react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Loader2 } from "lucide-react";
import axios from "axios";

export default function ContactForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const target = e.target as typeof e.target & {
        name: { value: string };
        email: { value: string };
        message: { value: string };
      };
      const URL = `https://emailvalidation.abstractapi.com/v1/?api_key=a66f4a6883a24f63a2bf3793336e16ce&email=${encodeURIComponent(
        target.email.value
      )}`;
      const emailVerification = await axios(URL);
      console.log(emailVerification);
      const validEmail = emailVerification.data;
      console.log(validEmail);
      if (validEmail.deliverability === "UNDELIVERABLE") {
        toast({
          variant: "destructive",
          description: "❌ Email does not exist or is not deliverable.",
        });
        setIsLoading(false);
        return;
      }
      const response = await axios("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        data: JSON.stringify({
          access_key: "29239624-90d6-42a7-9f6c-a064e815f15e",
          form_name: "Contact Form",
          subject: "New Contact Form Submission",
          name: target.name.value,
          email: target.email.value,
          message: target.message.value,
        }),
      });

      const result: { success: boolean; message: string } = response.data;
      if (result.success) {
        target.name.value = "";
        target.email.value = "";
        target.message.value = "";

        if (validEmail.deliverability === "DELIVERABLE") {
          toast({
            description: result.message,
          });
        } else {
          toast({
            variant: "destructive",
            description: "❌ Email does not exist or is not deliverable.",
          });
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <section className="py-16 bg-[#020817]" id="contact">
        <div className="container px-4 md:px-6 mx-auto">
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
            <h2 className="text-3xl text-white font-bold tracking-tight sm:text-4xl relative inline-block">
              Contact Us
            </h2>
              <div className="mx-auto m-4 h-1 w-24 bg-colors-customBlue "></div>
            <p className="text-blue-100/80 text-lg">
              Send us a message and we will get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
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
                      required
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
                      required
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
                      required
                      id="message"
                      placeholder="Message"
                      className="min-h-[150px] w-full"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-colors-customBlue hover:bg-colors-customBlue/90 text-white"
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information & Map */}
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="space-y-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-colors-customBlue mt-1" />
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-gray-600">
                        Bijaypur Sadak
                        <br />
                        Dharan - 14, Sunsari
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-5 h-5 text-colors-customBlue mt-1" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600">(+977) 9842704555</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 text-colors-customBlue mt-1" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">
                        unionofcsitstudents@gmail.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
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
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
