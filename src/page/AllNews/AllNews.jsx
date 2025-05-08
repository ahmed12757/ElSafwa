import React, { useState } from "react";
import Card from "../../components/Card/Card";
export default function AllNews() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

  // Mock data - replace this with your actual news data
  const totalCards = 100; // Example total number of news items
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  // Generate array of cards for current page
  const currentCards = Array.from(
    {
      length: Math.min(
        cardsPerPage,
        totalCards - (currentPage - 1) * cardsPerPage
      ),
    },
    (_, index) => <Card key={index} />
  );

  return (
    <div className="px-1 pb-4 min-h-fit px-3 bg-gradient-to-br from-[#0f172a] to-[#f28a24] bg-fixed bg-cover font-[Cairo]">
      <div className="w-full h-[60px] lg:h-[90px] mb-12 lg:mb-15"></div>
      <div className="container mx-auto py-6 px-3 ">
        <div className="  ">
          <div className="relative text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">جميع الأخبار</h1>
            <div className="flex flex-col items-center gap-1">
              <div className="w-32 h-1 bg-primary-500 rounded-full"></div>
              <div className="w-24 h-1 bg-primary-500 rounded-full"></div>
              <div className="w-16 h-1 bg-primary-500 rounded-full"></div>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-12 gap-4">{currentCards}</div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-primary-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-600 transition-colors"
            >
              السابق
            </button>

            <span className="px-4 py-2 bg-gray-100 rounded-lg">
              الصفحة {currentPage} من {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-primary-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-600 transition-colors"
            >
              التالي
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
