"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarUserProfile,
} from "./components/ui/resizable-navbar";
import { useState } from "react";
import { Carousel, Card } from "./components/ui/apple-cards-carousel";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Link from "next/link";
import { NavbarAuth } from "./components/NavbarAuth";
import Image from "next/image";

const ImageHeader = ({ src, alt }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <Image
      src={src}
      alt={alt}
      width={500}
      height={300}
      className="object-cover w-full h-full"
      priority
    />
  </div>
);

const items = [
  {
    title: "Jelajahi Peluang Investasi Terbaik",
    description:
      "Temukan beragam proyek pembangunan properti dengan potensi keuntungan tinggi.",
    header: (
      <ImageHeader
        src="/inves.jpg" // Path diperbaiki: mulai dengan '/'
        alt="Peluang Investasi"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Transparansi Penuh Proyek",
    description:
      "Akses detail lengkap, progress, dan laporan keuangan setiap proyek.",
    header: (
      <ImageHeader
        src="/candle.jpg"
        alt="Transparansi Proyek"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Investasi Fleksibel untuk Semua",
    description:
      "Mulai investasi dengan modal yang bervariasi, sesuai kemampuan Anda.",
    header: (
      <ImageHeader
        src="/flex.jpg"
        alt="Investasi Fleksibel"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Dukungan Ahli dan Komunitas",
    description:
      "Terhubung dengan developer, investor, dan dapatkan bimbingan dari para ahli.",
    header: (
      <ImageHeader
        src="/komunitas.webp"
        alt="Dukungan Komunitas"
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Diversifikasi Portofolio Properti",
    description:
      "Sebarkan investasi Anda ke berbagai jenis proyek untuk mengurangi risiko.",
    header: (
      <ImageHeader
        src="/properti.jpg"
        alt="Diversifikasi Portofolio"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Keamanan Data dan Transaksi",
    description:
      "Platform terjamin dengan enkripsi canggih untuk keamanan investasi Anda.",
    header: (
      <ImageHeader
        src="/security.jpg"
        alt="Keamanan Data"
      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Progress Tracking Real-time",
    description:
      "Pantau perkembangan proyek investasi Anda secara langsung dari dashboard.",
    header: (
      <ImageHeader
        src="/tracking.jpg"
        alt="Progress Tracking"
      />
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

export default function NavbarDemo() {
  const navItems = [
    {
      name: "Features",
      link: "#featured-projects",
    },
    {
      name: "About Us",
      link: "about-us",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const data = [
    {
      category: "Artificial Intelligence",
      title: "You can do more with AI.",
      src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <p>Halo</p>,
    },
    {
      category: "Productivity",
      title: "Enhance your productivity.",
      src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <p>Halo</p>,
    },
    {
      category: "Product",
      title: "Launching the new Apple Vision Pro.",
      src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <p>Halo</p>,
    },
    {
      category: "Product",
      title: "Maps for your iPhone 15 Pro Max.",
      src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <p>Halo</p>,
    },
    {
      category: "iOS",
      title: "Photography just got better.",
      src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <p>Halo</p>,
    },
    {
      category: "Hiring",
      title: "Hiring for a Staff Software Engineer",
      src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <p>Halo</p>,
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="min-h-screen">
      <div className="relative w-full">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="relative z-[70] flex items-center gap-4 ml-auto">
              <NavbarUserProfile />
            </div>
          </NavBody>

          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <Link
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </Link>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarAuth />
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>

        <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center px-4 sm:px-6">
          <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80 hidden md:block">
            <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-gray-400 to-transparent" />
          </div>
          <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80 hidden md:block">
            <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-gray-400 to-transparent" />
          </div>

          <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
            <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          </div>

          <div className="py-10 md:py-20 w-full">
            <h1 className="relative z-10 mx-auto max-w-4xl pt-5 text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
              {"Satu Platform, Ribuan Ide Terwujud. Untuk Developer yang Berani Berinovasi."
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                    className="mr-2 inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
            </h1>
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 0.8,
              }}
              className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
            >
              Bangung Dev membantu Anda membangun proyek berikutnya dengan
              mudah, menyediakan platform bagi para pengembang untuk
              berkolaborasi, berinovasi, dan menciptakan solusi yang berdampak.
            </motion.p>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 1,
              }}
              className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/projects"
                className="w-full sm:w-60 text-center transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                Explore Now
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-60 text-center transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900"
              >
                Contact Support
              </Link>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
                delay: 1.2,
              }}
              className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              <p className="text-center text-neutral-500 dark:text-neutral-400" id="featured-projects">
                Memulai investasi proyek pembangunan adalah langkah cerdas untuk
                masa depan finansial Anda.
              </p>
            </motion.div>
            <BentoGrid className="max-w-4xl mx-auto my-20 px-4 sm:px-6" >
              {items.map((item, i) => (
                <BentoGridItem 
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
              ))}
            </BentoGrid>
            <div className="w-full h-full py-20">
              {" "}
              <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Projects On Going
              </h2>
              <Carousel items={cards} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
