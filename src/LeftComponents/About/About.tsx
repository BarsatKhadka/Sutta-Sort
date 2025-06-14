import { useState } from 'react'

export const About = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* About Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#f0c7a1] hover:bg-[#e8b892] text-black px-4 py-2 rounded-lg font-medium transition-colors duration-200 w-full sm:w-auto"
      >
        About SuttaSort
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#f0c7a1] text-black p-4 sm:p-6 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg sm:text-xl font-bold">About</h1>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-black text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            <p className="text-xs sm:text-sm leading-relaxed">
              Sutta Sort is a personal project built to support dhamma practice.
              This is not a scholarly or monastic resource.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed mt-3 sm:mt-4">
              All tagging reflects personal understanding and is open to revision. The full texts are always linked back
              to SuttaCentral, whose work makes this kind of exploration possible.
            </p>
            <div className="mt-4 sm:mt-6">
              <p className="text-xs sm:text-sm">
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
            <div className="mt-3 sm:mt-4">
              <p className="text-xs sm:text-sm">
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
            <div className="mt-3 sm:mt-4">
              <p className="text-xs sm:text-sm text-red-600 font-semibold">
                Note: The use of AI to scrape the tagging or to train models for this purpose is not allowed.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}