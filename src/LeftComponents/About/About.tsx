export const About = () => {
  return (
    <div className="bg-[#f0c7a1] text-black p-6 rounded-lg">
      <h1 className="text-xl font-bold mb-4">About</h1>
      <p className="text-sm leading-relaxed">
        Sutta Sort is a personal project built to support dhamma practice.
        This is not a scholarly or monastic resource.
      </p>
      <p className="text-sm leading-relaxed mt-4">
        All tagging reflects personal understanding and is open to revision. The full texts are always linked back
        to SuttaCentral, whose work makes this kind of exploration possible.
      </p>
      <div className="mt-6">
        <p className="text-sm">
          Explore more:
          <a
            href="https://github.com/BarsatKhadka/Sutta-Sort"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline ml-2"
          >
            GitHub
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://suttacentral.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            SuttaCentral
          </a>
        </p>
      </div>
      <div className="mt-4">
        <p className="text-sm">
          Website Maintainer:
          <a
            href="https://www.instagram.com/khadka.barsat/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline ml-2"
          >
            Barsat Khadka
          </a>
        </p>
      </div>
      <div className="mt-4">
        <p className="text-sm text-red-600 font-semibold">
          Note: The use of AI to scrape the tagging or to train models for this purpose is not allowed.
        </p>
      </div>
    </div>
  )
}