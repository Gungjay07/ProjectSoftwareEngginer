"use client";
import Head from "next/head"; 
import { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function TermsAndConditions() {
  const [agreed, setAgreed] = useState(false);
  const router = useRouter(); 

  const handleAgree = () => {
    setAgreed(true);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Syarat dan Ketentuan - Bangun Dev</title>
        <meta
          name="description"
          content="Syarat dan Ketentuan Investor Bangun Dev"
        />
        {/* Pastikan path favicon Anda benar */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          Syarat dan Ketentuan Investor Bangun Dev
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Selamat datang di Bangun Dev! Dengan mengakses atau menggunakan
          platform investasi kami, Anda setuju untuk terikat oleh Syarat dan
          Ketentuan ("Ketentuan") ini. Bacalah dengan seksama sebelum
          berinvestasi.
        </p>

        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">1. Umum</h2>
            <p className="leading-relaxed">
              Bangun Dev adalah platform yang menghubungkan investor dengan
              berbagai proyek pembangunan yang potensial. Kami memfasilitasi
              proses investasi, namun keputusan investasi akhir sepenuhnya
              berada di tangan investor.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              2. Kelayakan Investor
            </h2>
            <p className="leading-relaxed">
              Untuk dapat berinvestasi melalui Bangun Dev, Anda harus:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                Berusia minimal 18 tahun dan memiliki kapasitas hukum untuk
                membuat kontrak.
              </li>
              <li>
                Memahami dan menerima risiko yang melekat dalam investasi proyek
                pembangunan.
              </li>
              <li>
                Mematuhi semua hukum dan peraturan yang berlaku terkait
                investasi di yurisdiksi Anda.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              3. Pendaftaran Akun
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              {" "}
              {/* Perhatikan classname ini, di screenshot sepertinya ada ">" ekstra di sini */}
              <li>
                Anda bertanggung jawab untuk menjaga kerahasiaan informasi akun
                dan kata sandi Anda.
              </li>
              <li>
                Segala aktivitas yang terjadi di bawah akun Anda adalah tanggung
                jawab Anda.
              </li>
              <li>
                Anda harus memberikan informasi yang akurat, lengkap, dan
                terbaru saat pendaftaran dan secara berkala memperbaruinya jika
                ada perubahan.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              4. Proses Investasi
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <span className="font-semibold">Informasi Proyek:</span> Bangun
                Dev akan menyajikan informasi proyek yang tersedia untuk
                investasi. Informasi ini disediakan oleh pemilik proyek dan/atau
                pihak ketiga, dan Bangun Dev berupaya memastikan keakuratannya,
                namun tidak memberikan jaminan mutlak. Investor disarankan untuk
                melakukan uji tuntas (due diligence) independen.
              </li>
              <li>
                <span className="font-semibold">Keputusan Investasi:</span>{" "}
                Keputusan untuk berinvestasi dalam proyek tertentu sepenuhnya
                berada pada diskresi dan risiko investor. Anda memahami bahwa
                investasi proyek pembangunan memiliki risiko tinggi dan tidak
                ada jaminan pengembalian modal atau keuntungan.
              </li>
              <li>
                <span className="font-semibold">Perjanjian Investasi:</span>{" "}
                Setiap investasi akan tunduk pada perjanjian investasi terpisah
                antara investor dan pemilik proyek (atau entitas proyek yang
                relevan). Anda harus membaca dan memahami perjanjian investasi
                tersebut sebelum berkomitmen.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              5. Risiko Investasi
            </h2>
            <p className="leading-relaxed mb-2">
              Anda mengakui dan memahami bahwa investasi di Bangun Dev
              melibatkan risiko yang signifikan, termasuk namun tidak terbatas
              pada:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <span className="font-semibold">Risiko Kehilangan Modal:</span>{" "}
                Ada kemungkinan Anda kehilangan seluruh atau sebagian dari modal
                yang Anda investasikan.
              </li>
              <li>
                <span className="font-semibold">Risiko Proyek:</span> Proyek
                mungkin tertunda, melebihi anggaran, atau gagal diselesaikan.
              </li>
              <li>
                <span className="font-semibold">Risiko Pasar:</span> Kondisi
                pasar properti atau ekonomi dapat mempengaruhi nilai investasi
                Anda.
              </li>
              <li>
                <span className="font-semibold">Risiko Likuiditas:</span>{" "}
                Investasi dalam proyek pembangunan mungkin tidak likuid, artinya
                sulit untuk menjual atau mencairkan investasi Anda dengan cepat.
              </li>
              <li>
                <span className="font-semibold">
                  Risiko Hukum dan Peraturan:
                </span>{" "}
                Perubahan hukum atau peraturan dapat memengaruhi proyek dan
                investasi Anda.
              </li>
            </ul>
            <p className="leading-relaxed mt-4">
              Anda tidak boleh menginvestasikan dana yang Anda tidak mampu
              kehilangannya.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              6. Biaya dan Pajak
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                Bangun Dev mungkin mengenakan biaya untuk layanannya. Informasi
                tentang biaya yang berlaku akan diuraikan dengan jelas sebelum
                Anda melakukan investasi.
              </li>
              <li>
                Anda bertanggung jawab penuh atas semua kewajiban pajak yang
                timbul dari investasi dan keuntungan Anda.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              7. Kewajiban Investor
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                Melakukan uji tuntas (due diligence) independen terhadap setiap
                proyek sebelum berinvestasi.
              </li>
              <li>
                Memahami sepenuhnya risiko yang terkait dengan investasi yang
                Anda pilih.
              </li>
              <li>Mematuhi semua hukum dan peraturan yang berlaku.</li>
              <li>
                Tidak menggunakan platform Bangun Dev untuk tujuan ilegal atau
                penipuan.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              8. Batasan Tanggung Jawab
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                Bangun Dev bertindak sebagai fasilitator dan tidak bertanggung
                jawab atas keberhasilan atau kegagalan proyek yang didanai
                melalui platform kami.
              </li>
              <li>
                Kami tidak memberikan nasihat investasi, hukum, atau pajak. Anda
                harus mencari nasihat profesional independen sebelum membuat
                keputusan investasi.
              </li>
              <li>
                Sejauh diizinkan oleh hukum, Bangun Dev tidak bertanggung jawab
                atas kerugian langsung, tidak langsung, insidental, khusus,
                konsekuensial, atau kerugian punitive yang timbul dari
                penggunaan atau ketidakmampuan Anda untuk menggunakan platform
                kami atau dari investasi yang Anda lakukan.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              9. Penolakan Jaminan
            </h2>
            <p className="leading-relaxed">
              Bangun Dev menyediakan platform ini "sebagaimana adanya" dan
              "sebagaimana tersedia" tanpa jaminan dalam bentuk apa pun, baik
              tersurat maupun tersirat, termasuk namun tidak terbatas pada
              jaminan tersirat tentang kelayakan jual, kesesuaian untuk tujuan
              tertentu, atau non-pelanggaran.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              10. Pengakhiran
            </h2>
            <p className="leading-relaxed">
              Kami berhak untuk menangguhkan atau mengakhiri akun Anda dan akses
              Anda ke platform Bangun Dev jika Anda melanggar Ketentuan ini atau
              melakukan aktivitas yang kami anggap merugikan platform atau
              pengguna lain.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              11. Perubahan Ketentuan
            </h2>
            <p className="leading-relaxed">
              Bangun Dev dapat mengubah Ketentuan ini dari waktu ke waktu.
              Setiap perubahan akan dipublikasikan di platform kami. Penggunaan
              Anda yang berkelanjutan atas platform setelah perubahan tersebut
              merupakan penerimaan Anda terhadap Ketentuan yang direvisi.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              12. Hukum yang Mengatur dan Yurisdiksi
            </h2>
            <p className="leading-relaxed">
              Ketentuan ini akan diatur oleh dan ditafsirkan sesuai dengan hukum
              Republik Indonesia. Setiap sengketa yang timbul dari atau
              sehubungan dengan Ketentuan ini akan diselesaikan secara eksklusif
              di pengadilan yang berwenang di Jakarta, Indonesia.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              13. Kontak
            </h2>
            <p className="leading-relaxed">
              Jika Anda memiliki pertanyaan tentang Ketentuan ini, silakan
              hubungi kami di{" "}
              <span className="font-semibold text-blue-600">
                info@bangundev.com
              </span>
              .
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleAgree}
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Saya Setuju dan Lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
}
