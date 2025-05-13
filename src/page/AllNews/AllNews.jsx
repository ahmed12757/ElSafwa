import React, { useState } from "react";
import Card from "../../components/Card/Card";

export default function AllNews() {
  // State to track current page number
  const [currentPage, setCurrentPage] = useState(1);
  // Number of news cards to display per page
  const cardsPerPage = 12;

  // Mock data - replace this with your actual news data
  const totalCards = 100; // Example total number of news items
  // Calculate total number of pages needed
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  // Generate array of cards for current page
  // This creates an array of Card components based on the current page
  const currentCards = Array.from(
    {
      length: Math.min(
        cardsPerPage,
        totalCards - (currentPage - 1) * cardsPerPage
      ),
    },
    (_, index) => <Card key={index} />
  );

  // Custom smooth scroll function
  // This creates a smooth scrolling animation to the top of the page
  const smoothScrollToTop = () => {
    const currentPosition = window.pageYOffset; // Get current scroll position
    const targetPosition = 0; // Target position (top of page)
    const distance = targetPosition - currentPosition; // Calculate distance to scroll
    const duration = 1500; // Animation duration in milliseconds (1.5 seconds)
    let start = null;

    // Animation function that runs on each frame
    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function for smoother animation
      // This creates a natural-feeling acceleration and deceleration
      const easeInOutCubic = (progress) => {
        return progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      };

      // Update scroll position based on progress
      window.scrollTo(0, currentPosition + distance * easeInOutCubic(progress));

      // Continue animation if not complete
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    // Start the animation
    requestAnimationFrame(animation);
  };

  // Handler for page changes
  // Updates the current page and scrolls to top
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    smoothScrollToTop();
  };

  return (
    // Main container with gradient background
    <div className="pb-4 min-h-fit px-4 bg-gradient-to-br from-[#0f172a] to-[#f28a24] bg-fixed bg-cover font-[Cairo]">
      {/* Spacer for fixed header */}
      <div className="w-full h-[60px] lg:h-[90px] mb-12 lg:mb-15"></div>

      {/* Main content container */}
      <div className="container mx-auto py-6">
        <div>
          {/* Page title section */}
          <div className="relative text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">جميع الأخبار</h1>
            {/* Decorative lines under the title */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-32 h-1 bg-primary-500 rounded-full"></div>
              <div className="w-24 h-1 bg-primary-500 rounded-full"></div>
              <div className="w-16 h-1 bg-primary-500 rounded-full"></div>
            </div>
          </div>

          {/* Grid of news cards */}
          <div className="grid grid-cols-12 gap-4">{currentCards}</div>

          {/* Pagination controls */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {/* Previous page button */}
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-primary-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-600 transition-colors"
            >
              السابق
            </button>

            {/* Current page indicator */}
            <span className="px-4 py-2 bg-gray-100 rounded-lg">
              الصفحة {currentPage} من {totalPages}
            </span>

            {/* Next page button */}
            <button
              onClick={() =>
                handlePageChange(Math.min(currentPage + 1, totalPages))
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
