export function generatePageNumbers(totalPages: number, currentPage: number): number[] {
    const pageNumbers = [];
    const pageUnit = Math.floor((currentPage - 1) / 5);
    if(totalPages > pageUnit * 5 + 5) {
        for(let i = pageUnit * 5 + 1; i <= pageUnit * 5 + 5; i++) {
            pageNumbers.push(i);
        }
    } else {
        for(let i = pageUnit * 5 + 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    }

    return pageNumbers;
}

export function getOtherPage(currentPage: number, totalPages: number, direction: "prev" | "next"): number {
    if (direction === "prev" && currentPage > 5) {
      return Math.floor((currentPage - 1) / 5) * 5 - 4;
    } else if (direction === "next" && currentPage < totalPages) {
      return Math.floor((currentPage - 1) / 5) * 5 + 6;
    }
    return currentPage;
  }
