"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { useEffect, useState } from "react";
import Image from "next/image";

const floatingImages = [
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/470198284_553630804136517_8161776634719102663_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lNI1hPhNQuAQ7kNvgGfDG2D&_nc_oc=AdgX0nY8ttgduLphwDAwRBdfeFaKcVeem3trcgl24Q2IMCNkm4LYqfnGLQdyU7-GZM6b9fLE4kvap5xnbM2OtCbn&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AIdKndZhe2tAtM7NY3Vog4w&oh=00_AYCMCH28HJY4hmPrt0wSHV1BGYgTekVesekByuD69KG3BQ&oe=6796FB2A",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/474574343_579461181553479_8087329621896741901_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=iucmuI-v1PkQ7kNvgEk-X1Q&_nc_oc=AdjTv3waSw2S-SDnw7_AymAPdtyTFchHSgVuX3XDPpGLNmQRUPJgBahBVe09OY4NF8PRVnmswohoiYLG3X1DqZSu&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A6X0rJr3yPNM3GnmuhEdc_m&oh=00_AYDV3qjaqToDTNM2NCdCFrMlmgKXwIjop2Rhv54V-UklLA&oe=6796EFA4",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/473857629_1845406992894608_2309742168161292792_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pF2yqV7PlfgQ7kNvgFttZzQ&_nc_oc=AdgzzULt7VTdxQdcg_CpbwqMqe2J5Wcdid4qGdezD9Lz4hi5CaaOuxSqSWqWltbUR5-OYe2hlmVe5-bbXX75ufN2&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=ACBc3uiBmoV8uu2Kon8INKi&oh=00_AYDPj9Co5BfgiKzyh9_ho21djGk9Seum9kv2lOvuKfI6gQ&oe=6797BC77",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/459111784_485967870902811_7587470118287044649_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tU9n7tzEqd0Q7kNvgEhHyQs&_nc_oc=AditGpGDKC1u27_zdPDNMhUsRlrkqKmNjhcX7d5v56q69jb9cDP6JjNWayk3fn3SItvt1tFK6kYeI6WTUGlcWpbf&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AVLfyWgpqXaAm-p9GzqJqWS&oh=00_AYAjXRBcf0oaD2x_B-chs-hrwY_FpSHeLlR1XblVRlDWsQ&oe=67971026",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/458967868_485967827569482_5269073594274510574_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1JWdMzgE_XIQ7kNvgEf-BM2&_nc_oc=AdgsWqLYWBGvAl4y9uZZSwGfHw4vdnvy-YBQWnMkSfJ_4yyCYsOGOAhApAYE1Vz7icWa7CeDi5OjuaCWovrGl5fM&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AeVFmdemVTIJc2wFIr4fzOC&oh=00_AYD6-ukaSBbZg_MwYap4L5nV0cQEHdrkwjkLZShkQXxC5w&oe=6797251E",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/439442179_409857755180490_4167444960082298685_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YV5uuZhGjkIQ7kNvgHN6Vy1&_nc_oc=AdiAR_1828cq_wclkQWg0RySjMoQbdq2bBa65DfH02_oK0nX0PqvSM9AWsNHRkAbsFm20nAjLulkaMYmBZ0qbXcw&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A4UIkvMasMWkTGE07uJ54Xo&oh=00_AYDg4tF3oNbvfpw6jjjH-2JnI3Gyo9H9xvOZZJdOwWa9kw&oe=67971488",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/438035324_398240519675547_7488971483946083606_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=--cxl3oczRkQ7kNvgGuydnk&_nc_oc=AdggOe3bZnOQiZ2kGN9e9JycfOVnDZulEBCDbhkGo8QukT7GVMc1D8qS-7_LCLFXomtuF2cMCop1hu67cVxFYDwS&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AkopaERGfyQdmKL5gjCFEL6&oh=00_AYDSIrFpdwZI8A5I6zPhC8zBOUdzHUcHinZGqsjqxDubCg&oe=6796FAFB",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/437719571_398167693016163_6090413816206930921_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ioowBe19vJkQ7kNvgHY0Xjt&_nc_oc=AdgBiv8Dg6AZw4uTN72OI8J4zd8woEPDOXXi74s7RQv3uA0R0W6JTGEZ7kUiaiquMIelDcBT7lwKai-bO-OI7GzS&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A4UvtNBQAwoXY1WsSllYSE8&oh=00_AYBpkZ_MeAXjsiwC6-nOFWrGry0j38N00J5Y-pVRgIOBFw&oe=6796F62C",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/436380629_398165403016392_3128893779811205041_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=z_ht_kXmZL8Q7kNvgE0VEtm&_nc_oc=AdiaieToisO71UexoIBXjJP3fmAQmOEailJUeYWLh9xhsnhkBSXckMOvmA8XoAB_evs7jwXwpGWo_n88VbXNZe5J&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AQWxPR9TogjHFG3h6SrA4g4&oh=00_AYCSSCb9iQhzLEJqNZu9KeGLYFNoOWNC2UH-12ByXdKXfg&oe=6796F367",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/428701989_364150496417883_2871841121390316090_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zbNINl2K6TwQ7kNvgEdwGuv&_nc_oc=AdjGAZ5EaaFDHUr4QZCXjwHrGokVksrXLU4sogF3Lx5MRFxlWA3CuLBkk2TAYDNUSrGMb696JHJi4K4IRCTckAdf&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A7bthwoCvNyns67sPoZxXQH&oh=00_AYAPUx6paPHMBc2GhKSYbohmqBtt-d46dwN8z3UEMXaHLg&oe=6796FD5F",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/436480801_398166209682978_6600618338595341757_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=utZ0FNFskHQQ7kNvgE8_A0H&_nc_oc=AdhZIGEiRYvrNJXBWC5vtUJ4pG8HBF3T9ZLTLqpGbNbQxVHxbqLe1oHTsTuNHFqWEXbuVvk2nU7l4iP68Mn3d7i4&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A4DK8SlWzWDOjWAS2ilYqm-&oh=00_AYBWvjjmxcwSF2-3-2KiZ1jsn3iHFZ1_C1uTerEMyxQAlA&oe=6796FF1C",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/436305788_394043753428557_5698186534761753563_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wvwhxr1gzKoQ7kNvgEm7fke&_nc_oc=AdhBb93C79B3nvbsTLD5P4e688074khn6TqLi0ZI0sCSud0WDlFMNYs4B3wAg5xDLbNgBMQdWW_KdwM-oHyjgl-2&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AObX6zgQK8CY6JdQCvymfGP&oh=00_AYDceg5pQFN6cEnFOM2m5Y6io4d9fbvH32zWm8hRIk3WKQ&oe=679704FA",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/433005288_376975841802015_7672900624259102774_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TMJnWgoxIXsQ7kNvgH42Ijz&_nc_oc=AdhsRHyl2dCBd8erCvKQKVlXuE0KMlnieyfWzvM0TF7Vxhnog2wGiR6biO71e08ZkE4o-C4_rUI1dNoK2h92VvgO&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=Aya69QFy5oMku2c1hEhEY79&oh=00_AYA37StGhTf6V12owl_4Bq-Kp1n1v8avTdNu8TgweV-xNw&oe=6797254C",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/429584632_375026551996944_987402350408527286_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8XVnuMOtDJwQ7kNvgFC1ODe&_nc_oc=Adgni0C3bU_JV3UXVbracN9Vsbs-YIzSoio943bB2QJJf61bNGpuY4swzaqKiy3J0bysU5XXGQs4iiPVYGn0L8Ha&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AsfjGpz7EslsfPkCeJF87Dl&oh=00_AYAZUhAuAzF8ZQk448240MuQeKIyKBHDcZgfFCHkW4aEBA&oe=67971DBC",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/424961121_364153223084277_208231516302489956_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Zdg4pp6n36cQ7kNvgFqUuig&_nc_oc=AdgrJAW9hfP8ZgdkcC9R3IKhaD94etA0Jb0EVKv690BDV8qSnUgxgp86gZVpLpD_sAhbfBz2cR3DvU2z8PqUv3LG&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AvLSAlN4hjLYP9T5GeM2_bl&oh=00_AYCXQZp21IBG76naCRc8NuYgDH7ss5pxjMEpCzePsaSvvA&oe=6796F9C7",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/424949339_364153173084282_8381870308918175258_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ZPt3biPyC9EQ7kNvgHkch4I&_nc_oc=Adj9GzcYH-nIX2TQl0iOv0-tnaXjTXiw5_cdW6ToGgcGgyW2aFGqX0hZiJ6ELdUKkKocTznRGAeJI0Hs9P1dEp3Y&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=ArRd3T36g2nWO8MLXisxkun&oh=00_AYDkRH_sb1gbfkx-lYLyMGEolWg4K8bCn_dj7OpUNshhKg&oe=6796F94F",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/428708413_364149049751361_3065360483147215494_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=N91Zo7it80YQ7kNvgHWyVTt&_nc_oc=AdidRGzZnSVmQQIQoFXp8nWwSVHjH3M5FaQCNxYTxLMVrsn6U9c6nuPFiOMp2v15TcLKfMhw5k_0lgj_KBWfQYna&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A-YYEweEWiP2fPIoSZvuFDK&oh=00_AYDnX3RhtQlug1onDhdWChsm4ku9LC5JG78sDfSN-PQf5Q&oe=67972571",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/428672513_364150406417892_298587735151926415_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ZC7cA-9FLjMQ7kNvgGm1n4O&_nc_oc=Adi32uc1Cq53Q-LNGnHxpHmT8FagLgmFKdnHiAmHPNmAl20iXpWOW8LjWMwerWQCfuKk4E6JJVHLTNd2oXfAVILs&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AngzaQxbg1XGmcIBT8sqkDf&oh=00_AYCeezx8jPwN4_uV_DZRecPcQ_uy6rsSP8m_yD4UDVrUlg&oe=679715F8",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/473857629_1845406992894608_2309742168161292792_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pF2yqV7PlfgQ7kNvgFttZzQ&_nc_oc=AdgzzULt7VTdxQdcg_CpbwqMqe2J5Wcdid4qGdezD9Lz4hi5CaaOuxSqSWqWltbUR5-OYe2hlmVe5-bbXX75ufN2&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=ACBc3uiBmoV8uu2Kon8INKi&oh=00_AYDPj9Co5BfgiKzyh9_ho21djGk9Seum9kv2lOvuKfI6gQ&oe=6797BC77",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/428681643_364150176417915_941248829138112472_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FdLB2UuxaOgQ7kNvgEcd0Kq&_nc_oc=AdigLWgKSkeNu9AENfIuqVTteEdywEMNoShVYAjVPtjNVCgYM39E2OUUmVAH9K0urumnnLVkA28Qk-96EE8KzoKo&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AlOKGjbuDszD_lCXGtG8rki&oh=00_AYAClNWXvXum0QbmGvKWcwawq2su4CtvdnB_oPTZkaW3Aw&oe=6796FC8E",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/428667738_364150159751250_3177710882270134745_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=scj_K-NipgAQ7kNvgHaftqt&_nc_oc=Adhw7m9T0Pr2Kpvi-e4keH3zctxDazVwUxaBJRw9qGAT-ruYIEpyL3QyUhbW0U3sSLmxkyF20Cxt2AloSJHsqD-3&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AbfxvaN0gNftugFgpWVvypL&oh=00_AYC8yaYr2JNYLBAZKGGuXr4Sl0QgKeOfmXOE1Gn3_6INiw&oe=6797245C",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/428708714_364149963084603_3499606314714259647_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PLaUk2N5npAQ7kNvgGnFGFj&_nc_oc=Adj1yJiJqhL-ObsHCy37SV9UhL3koCbk2zSEp0UDk2cnbUaSsi5KnImqzuAJ-cDxDXbtDdHeJyg278v0Vl736_97&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A3tjCM7o8ugrXFnameENFCw&oh=00_AYCmzMWMazOfhM3st-MyIDW7wqc0eecqALCG9F377qvwZQ&oe=6797026E",
];

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <Navbar />
      <div className="min-h-screen relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[#0a192f]">
          {/* Gradient Animations */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                background: [
                  "radial-gradient(circle at 0% 0%, rgba(59,130,246,0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 100% 100%, rgba(59,130,246,0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 0% 0%, rgba(59,130,246,0.1) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
              className="absolute inset-0"
            />
            <motion.div
              animate={{
                background: [
                  "radial-gradient(circle at 100% 0%, rgba(29,78,216,0.15) 0%, transparent 60%)",
                  "radial-gradient(circle at 0% 100%, rgba(29,78,216,0.15) 0%, transparent 60%)",
                  "radial-gradient(circle at 100% 0%, rgba(29,78,216,0.15) 0%, transparent 60%)",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1,
              }}
              className="absolute inset-0"
            />
          </div>
        </div>
        {/* Floating Images */}
        {mounted && (
          <div className="fixed inset-0 pointer-events-none">
            <AnimatePresence>
              {floatingImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    scale: 0,
                    rotate: Math.random() * 360,
                  }}
                  animate={{
                    opacity: [0, 0.2, 0],
                    x: [null, Math.random() * window.innerWidth],
                    y: [null, Math.random() * window.innerHeight],
                    scale: [0, 0.5, 0],
                    rotate: [null, Math.random() * 360],
                  }}
                  transition={{
                    duration: 15 + Math.random() * 10,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 2,
                  }}
                  className="absolute w-40 h-40 rounded-lg overflow-hidden"
                  style={{
                    filter: "blur(1px) brightness(0.7)",
                  }}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
        <main className="relative min-h-screen flex items-center">
          {/* Animated Gradient Lines */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute h-[1px] w-full top-1/4 left-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            <div className="absolute h-[1px] w-full top-2/4 left-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
            <div className="absolute h-[1px] w-full top-3/4 left-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />
          </div>

          <div className="container mx-auto px-4 py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="text-white">Capturing Moments </span>
                <span className="relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 blur-2xl opacity-30" />
                  <span className="relative bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                    That Matter
                  </span>
                </span>
              </h1>

              <p className="text-blue-200/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                Explore our collection of meaningful moments, events, and
                community impact through our carefully curated gallery.
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-8"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white border-0 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  Discover More
                  <ChevronDown className="ml-2 h-4 w-4 animate-bounce" />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </main>
      </div>

      <ParallaxScroll images={images} />
      <Footer />
    </>
  );
}

const images = [
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/470198284_553630804136517_8161776634719102663_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lNI1hPhNQuAQ7kNvgGfDG2D&_nc_oc=AdgX0nY8ttgduLphwDAwRBdfeFaKcVeem3trcgl24Q2IMCNkm4LYqfnGLQdyU7-GZM6b9fLE4kvap5xnbM2OtCbn&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AIdKndZhe2tAtM7NY3Vog4w&oh=00_AYCMCH28HJY4hmPrt0wSHV1BGYgTekVesekByuD69KG3BQ&oe=6796FB2A",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/474574343_579461181553479_8087329621896741901_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=iucmuI-v1PkQ7kNvgEk-X1Q&_nc_oc=AdjTv3waSw2S-SDnw7_AymAPdtyTFchHSgVuX3XDPpGLNmQRUPJgBahBVe09OY4NF8PRVnmswohoiYLG3X1DqZSu&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A6X0rJr3yPNM3GnmuhEdc_m&oh=00_AYDV3qjaqToDTNM2NCdCFrMlmgKXwIjop2Rhv54V-UklLA&oe=6796EFA4",
  
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/474180317_579461108220153_7378364643685537575_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=en0n_CCzVpMQ7kNvgFF9Ekf&_nc_oc=Adh5gz4ahkUwcN7KQK-oYAd9aOmRTemqR_cYb6aFm4t6aHIBsj5VhPs0_UN-grFcZh5OPGmxmz7ZN4FU_g7ydhVy&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AYqsxLDt3U2BSX3WDqCvniM&oh=00_AYBYzWJL0odxnaAqH253c0U3-Pn-Qn7xigdsEViysLouVg&oe=679719D6",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/459111784_485967870902811_7587470118287044649_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tU9n7tzEqd0Q7kNvgEhHyQs&_nc_oc=AditGpGDKC1u27_zdPDNMhUsRlrkqKmNjhcX7d5v56q69jb9cDP6JjNWayk3fn3SItvt1tFK6kYeI6WTUGlcWpbf&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AVLfyWgpqXaAm-p9GzqJqWS&oh=00_AYAjXRBcf0oaD2x_B-chs-hrwY_FpSHeLlR1XblVRlDWsQ&oe=67971026",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/458967868_485967827569482_5269073594274510574_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1JWdMzgE_XIQ7kNvgEf-BM2&_nc_oc=AdgsWqLYWBGvAl4y9uZZSwGfHw4vdnvy-YBQWnMkSfJ_4yyCYsOGOAhApAYE1Vz7icWa7CeDi5OjuaCWovrGl5fM&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AeVFmdemVTIJc2wFIr4fzOC&oh=00_AYD6-ukaSBbZg_MwYap4L5nV0cQEHdrkwjkLZShkQXxC5w&oe=6797251E",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/439442179_409857755180490_4167444960082298685_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YV5uuZhGjkIQ7kNvgHN6Vy1&_nc_oc=AdiAR_1828cq_wclkQWg0RySjMoQbdq2bBa65DfH02_oK0nX0PqvSM9AWsNHRkAbsFm20nAjLulkaMYmBZ0qbXcw&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A4UIkvMasMWkTGE07uJ54Xo&oh=00_AYDg4tF3oNbvfpw6jjjH-2JnI3Gyo9H9xvOZZJdOwWa9kw&oe=67971488",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/438035324_398240519675547_7488971483946083606_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=--cxl3oczRkQ7kNvgGuydnk&_nc_oc=AdggOe3bZnOQiZ2kGN9e9JycfOVnDZulEBCDbhkGo8QukT7GVMc1D8qS-7_LCLFXomtuF2cMCop1hu67cVxFYDwS&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AkopaERGfyQdmKL5gjCFEL6&oh=00_AYDSIrFpdwZI8A5I6zPhC8zBOUdzHUcHinZGqsjqxDubCg&oe=6796FAFB",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/437719571_398167693016163_6090413816206930921_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ioowBe19vJkQ7kNvgHY0Xjt&_nc_oc=AdgBiv8Dg6AZw4uTN72OI8J4zd8woEPDOXXi74s7RQv3uA0R0W6JTGEZ7kUiaiquMIelDcBT7lwKai-bO-OI7GzS&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A4UvtNBQAwoXY1WsSllYSE8&oh=00_AYBpkZ_MeAXjsiwC6-nOFWrGry0j38N00J5Y-pVRgIOBFw&oe=6796F62C",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/436380629_398165403016392_3128893779811205041_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=z_ht_kXmZL8Q7kNvgE0VEtm&_nc_oc=AdiaieToisO71UexoIBXjJP3fmAQmOEailJUeYWLh9xhsnhkBSXckMOvmA8XoAB_evs7jwXwpGWo_n88VbXNZe5J&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AQWxPR9TogjHFG3h6SrA4g4&oh=00_AYCSSCb9iQhzLEJqNZu9KeGLYFNoOWNC2UH-12ByXdKXfg&oe=6796F367",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/428701989_364150496417883_2871841121390316090_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zbNINl2K6TwQ7kNvgEdwGuv&_nc_oc=AdjGAZ5EaaFDHUr4QZCXjwHrGokVksrXLU4sogF3Lx5MRFxlWA3CuLBkk2TAYDNUSrGMb696JHJi4K4IRCTckAdf&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A7bthwoCvNyns67sPoZxXQH&oh=00_AYAPUx6paPHMBc2GhKSYbohmqBtt-d46dwN8z3UEMXaHLg&oe=6796FD5F",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/436480801_398166209682978_6600618338595341757_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=utZ0FNFskHQQ7kNvgE8_A0H&_nc_oc=AdhZIGEiRYvrNJXBWC5vtUJ4pG8HBF3T9ZLTLqpGbNbQxVHxbqLe1oHTsTuNHFqWEXbuVvk2nU7l4iP68Mn3d7i4&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A4DK8SlWzWDOjWAS2ilYqm-&oh=00_AYBWvjjmxcwSF2-3-2KiZ1jsn3iHFZ1_C1uTerEMyxQAlA&oe=6796FF1C",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/436308905_398166189682980_2910346479357887728_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XKCASjaEyxUQ7kNvgFtBshJ&_nc_oc=AdgjngjLioe1O4PRByo88MG6d0-0p06qczVpeOQI4NtdgmyON-hNFTK77H1cj4qJge1v3ObDd_N9iO33h0FRT8xN&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AZFNX7GIhXvYZlf8hD90K4Z&oh=00_AYCySRr-k9CiWbmaKxD4FJlftizkNU_KFlUvhzhauDPA-A&oe=6797121E",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/437497079_397600683072864_3411689926114725444_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cSxJQTT42GEQ7kNvgH1GRv2&_nc_oc=Adjoodc2LkZCgvGEPhIBfEMuNt7z8zqmjAZN-7YuxqMT9TRvNn9tOSs2YRHucrk8j9F84WV-4M25DdsisJxpe7On&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AWxEX9vfW9NNpsQmBYLo97I&oh=00_AYBX3OAxn-6pch2EpLLZ7NNUW9weOUV-eujBS8SjDMAYFA&oe=67970AAE",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/437950074_396994863133446_6289761715277837579_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=41ARzRmg6vEQ7kNvgFmwJ6E&_nc_oc=Adiph9YIw4L1omJRXhchIPfAuz35nE63MNaoUcn0QnPatp4_tqTExoyKPGG-A7bkSK3YrBP7GoBcyrs_Kwtelano&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AoaAcPk0S0cXNjvwC0eWT68&oh=00_AYCPNbV97NgGw0eiGugZXIHkUPZbxuyQKCtUxNP6hYpScQ&oe=679728E9",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/438216400_396994719800127_2651226013695707592_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Z7enwHty1W0Q7kNvgFlO_Py&_nc_oc=AdjVPHPRvkOkcnaDQWZiR6fr0-1jdMg1JhDCpr6Vc2JMEACigzYsPcJw6pTi01NV6QoASNL5x1ThX95LqQuFygYA&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AfezrmlzZHlv4Ag7AwCdB4O&oh=00_AYDcRp2uwCv80uQLi6eNax25vsoImnuXiJbVeu_iKw6Vbg&oe=679719C9",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/438221737_396446853188247_6139877097711302492_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XmkxYEqPVt0Q7kNvgFs4Bq4&_nc_oc=AdiVeuOJ-yZFqih9kML4egvy2qghA9Oa4SvcQAZxsDXU6IZ_TobRRYrCsgdqw1mUnBZFUcNY3i3hSucWONph4DxG&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AGc85fCHNNMw_MdWzGF2MGH&oh=00_AYC1-qS0hF5jIB5_hQHSk0TkSmYiguOnGK07LqIJEFG39g&oe=6797149A",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/437773197_396446739854925_3459387059680380281_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NN4gR35k_JkQ7kNvgEClg9p&_nc_oc=Adjkua4LbXSydm5mdwGJm0-cAXvuGTa8MjT4MRxJw5NadPFMi8RSBmI6UileB7WiVKEpsmxckl1X9UEEUbxNJMhC&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A3I-dMDnjBsdnagLr7D9J5u&oh=00_AYDzOKc0fL36boUu9iEtk7Oro1JH2x0TfxXLvDYdZrKqkA&oe=679704AA",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/436236281_396443736521892_4179024518239247171_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=t1_kJIo_P7QQ7kNvgG_ahI5&_nc_oc=AdhhYPpM0mMRzAfQ5vZLuJFDB1xYI-fNzFjlzitpFLRiAh8dZnung9dnQ3_L-7Xm_jSS_-G7G6ZfOzNboZY3Z5yT&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AyopczEThFON1GYzuTTcgm7&oh=00_AYBWIS4bj3DLBN6YOkLVeUQGqj3CxJXuZBj61WbdjlpgHA&oe=6796F540",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/436305788_394043753428557_5698186534761753563_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wvwhxr1gzKoQ7kNvgEm7fke&_nc_oc=AdhBb93C79B3nvbsTLD5P4e688074khn6TqLi0ZI0sCSud0WDlFMNYs4B3wAg5xDLbNgBMQdWW_KdwM-oHyjgl-2&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AObX6zgQK8CY6JdQCvymfGP&oh=00_AYDceg5pQFN6cEnFOM2m5Y6io4d9fbvH32zWm8hRIk3WKQ&oe=679704FA",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/433005288_376975841802015_7672900624259102774_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TMJnWgoxIXsQ7kNvgH42Ijz&_nc_oc=AdhsRHyl2dCBd8erCvKQKVlXuE0KMlnieyfWzvM0TF7Vxhnog2wGiR6biO71e08ZkE4o-C4_rUI1dNoK2h92VvgO&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=Aya69QFy5oMku2c1hEhEY79&oh=00_AYA37StGhTf6V12owl_4Bq-Kp1n1v8avTdNu8TgweV-xNw&oe=6797254C",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/429584632_375026551996944_987402350408527286_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8XVnuMOtDJwQ7kNvgFC1ODe&_nc_oc=Adgni0C3bU_JV3UXVbracN9Vsbs-YIzSoio943bB2QJJf61bNGpuY4swzaqKiy3J0bysU5XXGQs4iiPVYGn0L8Ha&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AsfjGpz7EslsfPkCeJF87Dl&oh=00_AYAZUhAuAzF8ZQk448240MuQeKIyKBHDcZgfFCHkW4aEBA&oe=67971DBC",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/424961121_364153223084277_208231516302489956_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Zdg4pp6n36cQ7kNvgFqUuig&_nc_oc=AdgrJAW9hfP8ZgdkcC9R3IKhaD94etA0Jb0EVKv690BDV8qSnUgxgp86gZVpLpD_sAhbfBz2cR3DvU2z8PqUv3LG&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AvLSAlN4hjLYP9T5GeM2_bl&oh=00_AYCXQZp21IBG76naCRc8NuYgDH7ss5pxjMEpCzePsaSvvA&oe=6796F9C7",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/424949339_364153173084282_8381870308918175258_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ZPt3biPyC9EQ7kNvgHkch4I&_nc_oc=Adj9GzcYH-nIX2TQl0iOv0-tnaXjTXiw5_cdW6ToGgcGgyW2aFGqX0hZiJ6ELdUKkKocTznRGAeJI0Hs9P1dEp3Y&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=ArRd3T36g2nWO8MLXisxkun&oh=00_AYDkRH_sb1gbfkx-lYLyMGEolWg4K8bCn_dj7OpUNshhKg&oe=6796F94F",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/428708413_364149049751361_3065360483147215494_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=N91Zo7it80YQ7kNvgHWyVTt&_nc_oc=AdidRGzZnSVmQQIQoFXp8nWwSVHjH3M5FaQCNxYTxLMVrsn6U9c6nuPFiOMp2v15TcLKfMhw5k_0lgj_KBWfQYna&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A-YYEweEWiP2fPIoSZvuFDK&oh=00_AYDnX3RhtQlug1onDhdWChsm4ku9LC5JG78sDfSN-PQf5Q&oe=67972571",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/428672513_364150406417892_298587735151926415_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ZC7cA-9FLjMQ7kNvgGm1n4O&_nc_oc=Adi32uc1Cq53Q-LNGnHxpHmT8FagLgmFKdnHiAmHPNmAl20iXpWOW8LjWMwerWQCfuKk4E6JJVHLTNd2oXfAVILs&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AngzaQxbg1XGmcIBT8sqkDf&oh=00_AYCeezx8jPwN4_uV_DZRecPcQ_uy6rsSP8m_yD4UDVrUlg&oe=679715F8",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/428705237_364150349751231_9149641162549967138_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=srpwlLsCBlIQ7kNvgElZBG2&_nc_oc=AdiDY5qX8lPsV7LySVkcQwePc6xQwuQk3GgiKnE1fv2DfrPg1CW5a0Tp3zk3okUhPdZpShT6jZfEWZtyHQV7eEMR&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AmUfZkpFOBUc2AweHSQJkhM&oh=00_AYBHIfyHKTWJUuMeH69PS--XUBX_RrvW0mRofzSNJhpqjA&oe=67972C63",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/428681643_364150176417915_941248829138112472_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FdLB2UuxaOgQ7kNvgEcd0Kq&_nc_oc=AdigLWgKSkeNu9AENfIuqVTteEdywEMNoShVYAjVPtjNVCgYM39E2OUUmVAH9K0urumnnLVkA28Qk-96EE8KzoKo&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AlOKGjbuDszD_lCXGtG8rki&oh=00_AYAClNWXvXum0QbmGvKWcwawq2su4CtvdnB_oPTZkaW3Aw&oe=6796FC8E",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/428667738_364150159751250_3177710882270134745_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=scj_K-NipgAQ7kNvgHaftqt&_nc_oc=Adhw7m9T0Pr2Kpvi-e4keH3zctxDazVwUxaBJRw9qGAT-ruYIEpyL3QyUhbW0U3sSLmxkyF20Cxt2AloSJHsqD-3&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AbfxvaN0gNftugFgpWVvypL&oh=00_AYC8yaYr2JNYLBAZKGGuXr4Sl0QgKeOfmXOE1Gn3_6INiw&oe=6797245C",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/428708714_364149963084603_3499606314714259647_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PLaUk2N5npAQ7kNvgGnFGFj&_nc_oc=Adj1yJiJqhL-ObsHCy37SV9UhL3koCbk2zSEp0UDk2cnbUaSsi5KnImqzuAJ-cDxDXbtDdHeJyg278v0Vl736_97&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A3tjCM7o8ugrXFnameENFCw&oh=00_AYCmzMWMazOfhM3st-MyIDW7wqc0eecqALCG9F377qvwZQ&oe=6797026E",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/428674918_364149743084625_7113156866366113281_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=b28t0vm-CPMQ7kNvgFh3Atq&_nc_oc=AdhnF7LUNXmLEdNevgn5WhncbmKX1H57gksq7mfliHIQFNrYCjqlCfBSYwrSVMvIc-qANI4uJH5JIcbqqX6ZFL3G&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=Aa3bVm3409_1WFwbFcUFPn8&oh=00_AYAGwZvoND4X-1E8sSha7Hpc29uJCauAXGpywK4JcyhDsg&oe=679726CF",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/428673466_364149723084627_520420398490144996_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UTcXtOgkl_UQ7kNvgG8v32m&_nc_oc=AdgWiZPeyiTkFAhkUeqhwJqJKSCRF4JfBw8pauhQdKtwL5Be3e_FQpnMecRoRbsUL1xstk9eyLzMr8eti5HosGpt&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AFB0cI9u7csdWYD-LFb1bMo&oh=00_AYDvmS6JcTxNIsCfEfRQksdKC7YoIs926lnNWHj6dwnHqw&oe=6796FE13",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/428668512_364149033084696_19372813146060470_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=C3urDWOZGjsQ7kNvgE1SSlv&_nc_oc=Adh_JaWyrzLIzxWSUwzl-h42I0mKPYhccT-sKm2L8A2CY1S0A3rjJLK9HEEIRsxuDwjWZRI6z1M6NFF4MV3hd8DH&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A8zd7-On32-sSHNEBWKyRFX&oh=00_AYDAXHzTGSrSdKwjBrTyXK6YEp1stloe_16rnrN3Su3qaw&oe=67971103",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/428684610_364148976418035_7397509338736353943_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=EwY9LNtDFAIQ7kNvgGaNKsL&_nc_oc=AdhYuKazunXlDEVloUN1HMq7UsvTZGIJCNhYd4YmCv1BqL1x0o9VWpT74ISALUuupHBVrPJQR8p4M5uCGGpSU93u&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A6Ms2Z9R78TFxSkZziiZfUb&oh=00_AYATU0dAxrgKt2MfLpXIyfJg28mUGbR3aQ5hZz2zCBNZQA&oe=67971EF7",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/428671327_364148936418039_1145427669530531578_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yxhVraPLIk0Q7kNvgGYcbkN&_nc_oc=AdhCrMCF9MGo05EsvBQiV32tqT8qdY8CuaE18u-jk468yOc00SzNHzEuoX4GSS_Be8VLNQghBiqkpdPNY52HoMQs&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AHOuKUqHBXTn2uNvF8tf_Yw&oh=00_AYB7CFqvPqOyeDuPSD8zaz1cpYUjFTf5DODLNspzt623-Q&oe=67972380",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/426346304_361140510052215_6896835332825251635_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kYu4czaZHfEQ7kNvgFs3DLQ&_nc_oc=AdjxwcP3JI4qkhRwUlt4-Rs7g9hJLc2wT4hhg6ryBuD4gPeIq364Djy5NncSMg3KOVisGaUiE5m71ReYUOBsfKtp&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AUYaY4yVrc5fPT2rUT2-VBT&oh=00_AYC2cS_E5MeXz_ohHOst4mv6OWGLQJGF1tjXkSfQFVn8Pg&oe=679704DD",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/380930311_282580401241560_7233256095499979248_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PsHLijIgVNEQ7kNvgFEJ-mM&_nc_oc=Adhr_OUBR4nlizM_q34_Y5xNV-1EdZhptVy_M0kS8ZIf8HbcVxQOt6p43lM7cHayaNgWr8MmMEo9ghjn9soVdLeb&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AoEQmD-wrYtAMqUSC9Eyby1&oh=00_AYBPtMTPsdgG9P-4scxu-vGLe5MOwE42XtS7Uxbcz8AECw&oe=6797268F",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/347581494_609499911127923_4235547518158224901_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rsppu5ZDHy0Q7kNvgE0X4lf&_nc_oc=AdhwbSyP532dTWta3RvIM6qug_TX17qj9DjujPxqecwJUA8kKguzPw67VholNHS5QJB7Fn8UrK3cvU9WZNrS_oH4&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AkH7meY2PkzK9qAhFOx-Pew&oh=00_AYBWZIlr3KmxEx94iFcEHbrc72rwt772YrKp3CuU_tWbQA&oe=67971640",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/346088653_1414118122687157_5186740200843716254_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_OF_jtvpo2wQ7kNvgHtS9YJ&_nc_oc=AdiDsYUtQBOWlzPH7iP_MSS7X5f6Zi_Hiw4JH78v5-hV5FgUAXSaixk-qBF65V9pLsBvvYsrhebRX__r1XslZFVL&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AxnovEG8Bs34kBH1OGOzLGV&oh=00_AYBaEEaQ8FJ4sAhopACv9agKV9-zQcVjZ1GH8ql7ovSgug&oe=67971C65",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/436451379_398165943016338_8120040263706384427_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gSnjiYcR6vQQ7kNvgEtS_8f&_nc_oc=AdhK4QbiDtMRg4QYJdgZy_vJ48O9qMw_YAs54DeOH9S5MLGpJS0ZxRCnI5EkVlBtayMaDn1UMMCQaL4AXoA40tcy&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=ABHByT53_Isq3XNsT2rRxtV&oh=00_AYBRC-EakTeuIJYzoHQ7kGzfGDnAdrmB1sUkxMhNazX-6Q&oe=67970E0C",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/436450707_398165899683009_2702139614923219713_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wDirF-RrS5QQ7kNvgHtUeis&_nc_oc=Adho6D-W6YSwHN71S1fHdexML3z1SU-iJK0Z0uCHmDeOXJTudbaFwJbcJLY1FjnxapznAGCObpyM5lOJNG9A3mgI&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AQ98X8GTVonfrYJq6BTI01v&oh=00_AYCq-AfuNWLzLkqxDn-pZz68KCzHno-o6jjk02v5UWu_iA&oe=679718F7",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/437381408_398165829683016_312044896818480753_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=w2K2ioOcvU4Q7kNvgEBAwm6&_nc_oc=AdhhiyzlKXd-u14J8r9e6P4Z7qEtCbVAYpFWVx2m3B8g8kQNbel_dluNCDPkheoOY9gsxEJTNPfg_phTvXJfrOej&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AbYnhdo10_t8_XIIyeEtavS&oh=00_AYApoEL1j70y_kbQaUCjJ2x4ITMkCdzs45Uq03WdifdFjg&oe=6797178F",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/436253383_398165713016361_7890270975500470142_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=P-qfNfrwgdIQ7kNvgHJr74e&_nc_oc=Adg2rdiZHJULzky0lf_eVpdKCYYObO96etU4d9f4JaIuA4IAUpyTvDuZ-UAg-nRWTf70YIvl-E0VPp-7qGZiAHmw&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AhcZFZ3wZMr9qm6cx0DpSi2&oh=00_AYA3MzKoPks0FMglxIpDfcvsEXXlUCHSdTE6CEKgk04M1w&oe=679702FF",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/436301160_398165699683029_233859873764763318_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Thlz-Yfz5vkQ7kNvgHwehCb&_nc_oc=AdhYxlf-muRpTqbrOmWIeLC0SDjsRRR20hGdkXXmnJR1_aDQuLbSRvNISDSJvshn0bo8cK0cXBW0QBoapLgShYlZ&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=An7p05y_hPLays57D-Krn6r&oh=00_AYCC2jHeszn50_2RJYSySINeQzcZuQFsXecgiuiGBDqxNQ&oe=67971901",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/437537023_398165966349669_6140363204205324630_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vPqcM0v69voQ7kNvgFexxkE&_nc_oc=Adg0XP0b3U65mckxdv35sNFprMvmBrje_hEyYJM6TUAbtu_XV7lUO4OvKMLGfDHYR5wxUFF5pSILvLla-gFQlIG6&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=A0hsujjxbl_gk6K6D1fxIFa&oh=00_AYDlv_u4bao1_SYxbwQWQ8uIogwQp36wqQHTWZyyOK6dSg&oe=67972CF9",
  "https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/437370163_398165993016333_4257085795793255365_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_u4ctYOUMrcQ7kNvgGrawBl&_nc_oc=Adi34t2N09kuAaCcYP7J-qaTZDDWbx8qK5ZqNx1XjdKcbb2jBiFAv-RBryxoyqU5Hux27c4WqAuHdGnvZhwvKNmN&_nc_zt=23&_nc_ht=scontent.fbir1-1.fna&_nc_gid=AK1kz5sQOVczFoJ4dt43KeE&oh=00_AYBB2fG_dglPvYrMFRJbY79w6b0TsWKSP6-p_6tfjY2oUQ&oe=67972F88",
];
