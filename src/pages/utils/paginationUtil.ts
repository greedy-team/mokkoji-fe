export function generatePageNumbers(totalPages: number, currentPage: number): number[] {
    const pageNumbers = [];

    if (totalPages < 6) {
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    } else if (currentPage < 4) {
        for (let i = 1; i <= 5; i++) {
            pageNumbers.push(i);
        }
    } else if (currentPage > totalPages - 3) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
            pageNumbers.push(i);
        }
    }

    return pageNumbers;
}
