import { Link } from "react-router-dom";

const BerandaView = ({ movies, popular, topRate, upComing }) => {
  return (
    <div className="bg-cyan-900 dark:bg-black">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
      <h1 className="text-left text-3xl font-bold pl-5 pb-2 text-cyan-400 dark:text-cyan-700">
        Now Playing
      </h1>
      <div className="flex w-full overflow-x-auto gap-2 scrollbar-hide pb-5">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative w-44 aspect-[4/5] shadow-xl flex-shrink-0 group" // Tambahkan class group di sini
          >
            <img
              className="w-full h-full object-cover rounded-2xl border-4 border-cyan-400 dark:border-cyan-800 border-opacity-0
               transition-all duration-300 group-hover:border-opacity-100 dark:border-opacity-0" // Hover dengan efek transisi
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            />

            {/* Teks di dalam gambar */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 rounded-2xl opacity-0 duration-300 group-hover:opacity-100">
              <h2 className="text-lg font-bold line-clamp-1">{movie.title}</h2>
              <p className="text-sm line-clamp-1">{movie.overview}</p>{" "}
              {/* Menggunakan line-clamp-2 dan overflow-hidden */}
              <div className="flex justify-end">
                <Link to={`/detail/${movie.id}`} className="btn btn-primary">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-left text-3xl font-bold pl-5 pb-2 text-cyan-400 dark:text-cyan-700">
        Popular
      </h1>
      <div className="flex w-full overflow-x-auto gap-2 scrollbar-hide pb-5">
        {popular.map((populer) => (
          <div
            key={populer.id}
            className="relative w-44 aspect-[4/5] shadow-xl flex-shrink-0 group" // Tambahkan class group di sini
          >
            <img
              className="w-full h-full object-cover rounded-2xl border-4 border-cyan-400 dark:border-cyan-800 border-opacity-0
               transition-all duration-300 group-hover:border-opacity-100 dark:border-opacity-0" // Hover dengan efek transisi
              src={`https://image.tmdb.org/t/p/original${populer.poster_path}`}
              alt={populer.title}
            />

            {/* Teks di dalam gambar */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 rounded-2xl opacity-0 duration-300 group-hover:opacity-100">
              <h2 className="text-lg font-bold line-clamp-1">
                {populer.title}
              </h2>
              <p className="text-sm line-clamp-1">{populer.overview}</p>{" "}
              {/* Menggunakan line-clamp-2 dan overflow-hidden */}
              <div className="flex justify-end">
                <Link to={`/detail/${populer.id}`} className="btn btn-primary">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-left text-3xl font-bold pl-5 pb-2 text-cyan-400 dark:text-cyan-700">
        Top Rated
      </h1>
      <div className="flex w-full overflow-x-auto gap-2 scrollbar-hide pb-5">
        {topRate.map((top) => (
          <div
            key={top.id}
            className="relative w-44 aspect-[4/5] shadow-xl flex-shrink-0 group" // Tambahkan class group di sini
          >
            <img
              className="w-full h-full object-cover rounded-2xl border-4 border-cyan-400 dark:border-cyan-800 border-opacity-0
               transition-all duration-300 group-hover:border-opacity-100 dark:border-opacity-0" // Hover dengan efek transisi
              src={`https://image.tmdb.org/t/p/original${top.poster_path}`}
              alt={top.title}
            />

            {/* Teks di dalam gambar */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 rounded-2xl opacity-0 duration-300 group-hover:opacity-100">
              <h2 className="text-lg font-bold line-clamp-1">{top.title}</h2>
              <p className="text-sm line-clamp-1">{top.overview}</p>{" "}
              {/* Menggunakan line-clamp-2 dan overflow-hidden */}
              <div className="flex justify-end">
                <Link to={`/detail/${top.id}`} className="btn btn-primary">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-left text-3xl font-bold pl-5 pb-2 text-cyan-400 dark:text-cyan-700">
        UpComing
      </h1>
      <div className="flex w-full overflow-x-auto gap-2 scrollbar-hide pb-5">
        {upComing.map((upcoming) => (
          <div
            key={upcoming.id}
            className="relative w-44 aspect-[4/5] shadow-xl flex-shrink-0 group" // Tambahkan class group di sini
          >
            <img
              className="w-full h-full object-cover rounded-2xl border-4 border-cyan-400 dark:border-cyan-800 border-opacity-0
               transition-all duration-300 group-hover:border-opacity-100 dark:border-opacity-0" // Hover dengan efek transisi
              src={`https://image.tmdb.org/t/p/original${upcoming.poster_path}`}
              alt={upcoming.title}
            />

            {/* Teks di dalam gambar */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 rounded-2xl opacity-0 duration-300 group-hover:opacity-100">
              <h2 className="text-lg font-bold line-clamp-1">
                {upcoming.title}
              </h2>
              <p className="text-sm line-clamp-1">{upcoming.overview}</p>{" "}
              {/* Menggunakan line-clamp-2 dan overflow-hidden */}
              <div className="flex justify-end">
                <Link to={`/detail/${upcoming.id}`} className="btn btn-primary">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BerandaView;
