import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-black text-white px-6 md:px-20 py-20">
      {/* Section: Vision & Mission */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">
          🎯 Vision & Mission
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-300">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-white mb-2">
              Our Vision
            </h3>
            <p className="leading-relaxed">
              Menjadi{" "}
              <span className="text-white font-semibold">
                ekosistem digital nomor satu
              </span>{" "}
              untuk para developer yang ingin mengubah side project mereka
              menjadi produk nyata yang berdampak.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-white mb-2">
              Our Mission
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Mendukung developer dengan tools, mentorship, dan akses funding.
              </li>
              <li>Menghubungkan developer dengan investor dan komunitas.</li>
              <li>
                Memberdayakan komunitas tech Indonesia dengan kolaborasi
                terbuka.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Why BangunDev */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-center">
          🚀 Why BangunDev?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: "💡",
              title: "Side Project Friendly",
              desc: "Kami fokus pada developer yang ingin memulai dari nol — dari ide, menjadi MVP, hingga go-to-market.",
            },
            {
              icon: "🤝",
              title: "Community Driven",
              desc: "Gabung dengan komunitas, bangun produk bareng, dan dapatkan feedback real-time dari sesama developer.",
            },
            {
              icon: "🧰",
              title: "Scalable Tools",
              desc: "BangunDev mendukung project kamu dengan integrasi tools modern yang bisa diskalakan.",
            },
            {
              icon: "📈",
              title: "Funding Access",
              desc: "Kamu bisa publish project dan membuka akses funding dari komunitas atau investor yang percaya dengan visimu.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-2xl shadow-sm transition hover:shadow-lg hover:bg-gray-800"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Meet The Team */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-center">
          👥 Meet The Team
        </h2>
        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
          Kami adalah developer yang pernah berada di posisi kamu — penuh ide,
          butuh dorongan, dan ingin berkembang.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Agung Praditya",
              role: "Lead Developer",
              image: "/gungjay.jpg",
            },
            {
              name: "Frillian Su",
              role: "UI/UX Designer",
              image: "/frilian.jpeg",
            },
            {
              name: "Yazid Maulana Rizky",
              role: " Frontend/Backend Developer",
              image: "/yazid.jpeg",
            },
            {
              name: "Balqis Putri Muharda",
              role: "Product Owner & Scrum Master ",
              image: "/balqis.jpeg",
            },
            {
              name: "Alliya Fany Azelia",
              role: "Business Analyst / Product Owner Support",
              image: "/aliya.jpeg",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center text-center shadow hover:shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-700"
              />
              <h4 className="text-lg font-semibold text-white mb-1">
                {member.name}
              </h4>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Ready To Build */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-bold mb-4">Ready to Build with Us?</h2>
        <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
