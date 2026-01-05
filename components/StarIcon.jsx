export default function StarIcon() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-b from-[#7A5633]/95 via-[#5c3d22]/97 to-[#3d2a17]/98 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4 text-white"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <span className="text-sm font-semibold text-white">Premium Quality</span>
    </div>
  );
}