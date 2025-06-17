"use client";

import { useState, useMemo } from "react";
import { FollowerPointerCard } from "../components/ui/following-pointer";

const allCategories = [
  "All",
  "Finance",
  "AI",
  "Health",
  "Education",
  "Application",
];

const projects = [
  {
    slug: "open-finance-tracker",
    author: "Frillian Su",
    date: "20 May 2025",
    title:
      "Bantu Frillian untuk membangun Aplikasi Belajar Interaktif: “PAUD Pintar”",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat, quisquam, officia ad esse inventore a voluptatibus dignissimos nulla similique optio ut dolor molestias provident impedit odio deserunt commodi incidunt excepturi natus odit aut minus vel. Dolorem error libero recusandae deleniti explicabo eveniet voluptatem, in obcaecati dolores iste. Dignissimos, quia.",
    image: "/projectFrill.png",
    authorAvatar: "/logoBangunDev.png",
    raised: 4200,
    goal: 10000,
    category: "Finance",
    whatsappNumber: "6281234567890",
  },
  {
    slug: "ai-code-review",
    author: "Agung Praditya",
    date: "19 May 2025",
    title: "AI Code Review Tool",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat, quisquam, officia ad esse inventore a voluptatibus dignissimos nulla similique optio ut dolor molestias provident impedit odio deserunt commodi incidunt excepturi natus odit aut minus vel. Dolorem error libero recusandae deleniti explicabo eveniet voluptatem, in obcaecati dolores iste. Dign l;wmdoodownodwmqdqd qw dwqndpqwpwmdqw dwodnwqod",
    image: "/logoBangunDev.png",
    authorAvatar: "/manu.png",
    raised: 9600,
    goal: 15000,
    category: "AI",
    whatsappNumber: "6281211122233",
  },
  {
    slug: "teman-dalam-saku",
    author: "Yazid Maulana Rizky",
    date: "19 May 2025",
    title: "Teman Dalam Saku: Aplikasi Kesehatan Mental untuk Mahasiswa",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat, quisquam, officia ad esse inventore a voluptatibus dignissimos nulla similique optio ut dolor molestias provident impedit odio deserunt commodi incidunt excepturi natus odit aut minus vel. Dolorem error libero recusandae deleniti explicabo eveniet voluptatem, in obcaecati dolores iste. Dignissimos, quia.",
    image: "/teman-dalam-saku.png",
    authorAvatar: "/manu.png",
    raised: 9600,
    goal: 15000,
    category: "Health",
    whatsappNumber: "6281333444555",
  },
  {
    slug: "kode-untuk-semua",
    author: "Balqis Putri Muharda",
    date: "19 May 2025",
    title: "Kode Untuk Semua: Platform Belajar Coding Interaktif",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat, quisquam, officia ad esse inventore a voluptatibus dignissimos nulla similique optio ut dolor molestias provident impedit odio deserunt commodi incidunt excepturi natus odit aut minus vel. Dolorem error libero recusandae deleniti explicabo eveniet voluptatem, in obcaecati dolores iste. Dignissimos, quia.",
    image: "/kode-untuk-semua.png",
    authorAvatar: "/manu.png",
    raised: 9600,
    goal: 15000,
    category: "Education",
    whatsappNumber: "6281777888999",
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchSearch = project.title
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, search]);

  return (
    <div className="min-h-screen bg-black px-6 py-10 text-white">
      <h1 className="mb-6 text-center text-3xl font-bold">
        Explore Developer Projects
      </h1>

      {/* Search and Categories */}
      <div className="mb-4 flex flex-col sm:flex-row items-center gap-4 justify-between">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm rounded-md border border-gray-600 bg-zinc-800 p-2 text-white focus:outline-none"
        />
        <div className="flex flex-wrap gap-2">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-1 text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <FollowerPointerCard
              key={project.slug + project.title}
              title={
                <TitleComponent
                  title={project.author}
                  avatar={project.authorAvatar}
                />
              }
            >
              <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-900 transition duration-200 hover:shadow-xl">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-gray-100">
                  <img
                    src={project.image}
                    alt="thumbnail"
                    className="h-full w-full object-cover transition duration-200 group-hover:scale-95"
                  />
                </div>
                <div className="p-4">
                  <h2 className="mb-2 text-lg font-bold text-white">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-400">{project.description}</p>
                  <div className="my-4">
                    <div className="mb-1 text-xs text-gray-300">
                      Raised: ${project.raised.toLocaleString()} / $
                      {project.goal.toLocaleString()}
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded bg-gray-800">
                      <div
                        className="h-full bg-green-500"
                        style={{
                          width: `${(project.raised / project.goal) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  {/* Bagian Tombol yang Dirapikan */}
                  <div className="mt-4 flex flex-wrap items-center justify-around gap-2">
                    <a
                      href="/invest"
                      className="flex-1 text-center min-w-[80px] rounded-md bg-blue-600 px-3 py-1 text-xs font-medium text-white hover:bg-blue-700 transition"
                    >
                      Invest
                    </a>
                    <a
                      href="/donate"
                      className="flex-1 text-center min-w-[80px] rounded-md bg-purple-600 px-3 py-1 text-xs font-medium text-white hover:bg-purple-700 transition"
                    >
                      Donate
                    </a>
                    {project.whatsappNumber && (
                      <a
                        href={`https://wa.me/${
                          project.whatsappNumber
                        }?text=Halo%2C%20saya%20tertarik%20dengan%20proyek%20Anda%3A%20${encodeURIComponent(
                          project.title
                        )}%20di%20Bangun%20Dev.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center min-w-[80px] rounded-md bg-green-500 px-3 py-1 text-xs font-medium text-white hover:bg-green-600 flex items-center justify-center gap-1 transition"
                      >
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M.057 24L1.87 17.84H.057a.06.06 0 01-.06-.06V.06C0 .027.027 0 .057 0h23.886c.03 0 .057.027.057.06v17.72c0 .033-.027.06-.057.06h-5.011l-1.812 6.16L.057 24zm6.54-9.336c-.198-.093-.848-.415-.978-.465-.13-.05-.224-.075-.328.075-.104.15-.398.465-.487.555-.09.09-.17.1-.314.03-.144-.075-.607-.223-1.152-.712-.423-.385-.708-.85-.793-1.01-.084-.15-.008-.232.07-.306.07-.066.155-.17.232-.255.077-.084.103-.142.155-.232.05-.09.027-.17-.008-.255-.034-.084-.328-.795-.453-1.08-.124-.286-.248-.236-.342-.236-.095 0-.202-.008-.31-.008-.103 0-.273.03-.418.15-.145.12-.555.548-.555 1.345 0 .798.57 1.558.655 1.678.084.12.98.636 2.372 1.215 1.393.578 1.67.48 2.016.435.346-.045.848-.346.96-.682.113-.336.113-.623.078-.682-.034-.06-.13-.09-.224-.136z" />
                        </svg>
                        WhatsApp
                      </a>
                    )}
                    <a
                      href="/backgroundProjects"
                      className="flex-1 text-center min-w-[80px] text-xs text-gray-300 underline hover:text-white transition"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400">
            No projects found.
          </p>
        )}
      </div>
    </div>
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex items-center space-x-2">
    <img
      src={avatar}
      height="20"
      width="20"
      alt="avatar"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
