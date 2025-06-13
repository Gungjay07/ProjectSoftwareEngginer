"use client";

import { useState, useMemo } from "react";
import { FollowerPointerCard } from "../components/ui/following-pointer";

const allCategories = ["All", "Finance", "AI", "Health", "Education"];

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
  },
  {
    slug: "ai-code-review",
    author: "Yazid Maulana Rizky",
    date: "19 May 2025",
    title: "Teman Dalam Saku: Aplikasi Kesehatan Mental untuk Mahasiswa",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat, quisquam, officia ad esse inventore a voluptatibus dignissimos nulla similique optio ut dolor molestias provident impedit odio deserunt commodi incidunt excepturi natus odit aut minus vel. Dolorem error libero recusandae deleniti explicabo eveniet voluptatem, in obcaecati dolores iste. Dignissimos, quia.",
    image: "/teman-dalam-saku.png",
    authorAvatar: "/manu.png",
    raised: 9600,
    goal: 15000,
    category: "AI",
  },
  {
    slug: "ai-code-review",
    author: "Balqis Putri Muharda",
    date: "19 May 2025",
    title: "Teman Dalam Saku: Aplikasi Kesehatan Mental untuk Mahasiswa",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam repellat, quisquam, officia ad esse inventore a voluptatibus dignissimos nulla similique optio ut dolor molestias provident impedit odio deserunt commodi incidunt excepturi natus odit aut minus vel. Dolorem error libero recusandae deleniti explicabo eveniet voluptatem, in obcaecati dolores iste. Dignissimos, quia.",
    image: "/kode-untuk-semua.png",
    authorAvatar: "/manu.png",
    raised: 9600,
    goal: 15000,
    category: "Application ",
  },
  // Tambahin project lain di sini...
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

      {/* Search */}
      <div className="mb-4 flex flex-col sm:flex-row items-center gap-4 justify-between">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm rounded-md border border-gray-600 bg-zinc-800 p-2 text-white focus:outline-none"
        />
        {/* Categories */}
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
                  <div className="mt-2 flex items-center flex-wrap gap-x-2">
                    <a href="/invest" className="rounded-md bg-blue-600 px-3 py-1 text-xs font-medium text-white hover:bg-blue-700">
                      Invest
                    </a>
                    <a href="/donate" className="rounded-md bg-purple-600 px-3 py-1 text-xs font-medium text-white hover:bg-purple-700">
                      Donate
                    </a>
                    <a
                      href="/backgroundProjects"
                      className="text-xs text-gray-300 underline hover:text-white"
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
