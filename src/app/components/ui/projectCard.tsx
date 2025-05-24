type ProjectCardProps = {
  title: string;
  shortDesc: string;
  target: number;
  raised: number;
  imageUrl: string;
};

export default function ProjectCard({
  title,
  shortDesc,
  target,
  raised,
  imageUrl,
}: ProjectCardProps) {
  const progress = Math.min((raised / target) * 100, 100);

  return (
    <div className="bg-[#1a1a1a] text-white rounded-2xl shadow-md overflow-hidden border border-gray-700 flex flex-col">
      <img src={imageUrl} alt={title} className="h-40 w-full object-cover" />

      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-xl font-semibold mb-1">{title}</h2>
          <p className="text-gray-300 text-sm mb-3">{shortDesc}</p>

          <div className="mb-3">
            <div className="text-xs text-gray-400 mb-1">
              Raised: ${raised.toLocaleString()} / ${target.toLocaleString()}
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded-lg">
              Invest
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-1 rounded-lg">
              Donate
            </button>
          </div>
          <a
            href="#"
            className="text-xs text-gray-400 hover:text-white underline"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
