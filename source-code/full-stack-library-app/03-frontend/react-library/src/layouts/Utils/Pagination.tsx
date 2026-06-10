export const Pagination: React.FC<{
    currentPage: number,
    totalPages: number,
    paginate: any
}> = (props) => {

    const pageNumbers = [];

    // Spring Data REST API example:
    // page: {
    //     size: 20,
    //         totalElements: 22,
    //         totalPages: 2,
    //         number: 0
    // }

    // Build a short list of page numbers to display in the pagination bar.

    // If the user is on page 1, start with page 1.
    // Then add page 2 and page 3 only if those pages actually exist.

    // If the user is past page 1, first add previous nearby pages.
    // For page 3 or higher, add the two pages before the current page.
    // For page 2, add only page 1 before it.
    // Then add the current page itself.
    // Finally, add the next one or two pages if they are within totalPages.

    // Example: currentPage = 5, and totalPages = 10 gives [3, 4, 5, 6, 7].

    if (props.currentPage === 1) {
        pageNumbers.push(props.currentPage);
        if (props.totalPages >= props.currentPage + 1) {
            pageNumbers.push(props.currentPage + 1);
        }
        if (props.totalPages >= props.currentPage + 2) {
            pageNumbers.push(props.currentPage + 2);
        }
    } else if (props.currentPage > 1) {
        if (props.currentPage >= 3) {
            pageNumbers.push(props.currentPage - 2);
            pageNumbers.push(props.currentPage - 1);
        } else {
            pageNumbers.push(props.currentPage - 1);
        }
        pageNumbers.push(props.currentPage);

        if (props.totalPages >= props.currentPage + 1) {
            pageNumbers.push(props.currentPage + 1);
        }
        if (props.totalPages >= props.currentPage + 2) {
            pageNumbers.push(props.currentPage + 2);
        }
    }

    return (
        <nav aria-label="...">
            <ul className='pagination'>
                <li className='page-item' onClick={() => props.paginate(1)}>
                    <button className='page-link'>
                        First Page
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} onClick={() => props.paginate(number)}
                        className={'page-item ' + (props.currentPage === number ? 'active' : '')}>
                        <button className='page-link'>
                            {number}
                        </button>
                    </li>
                ))}
                <li className='page-item' onClick={() => props.paginate(props.totalPages)}>
                    <button className='page-link'>
                        Last Page
                    </button>
                </li>
            </ul>
        </nav>
    );
}