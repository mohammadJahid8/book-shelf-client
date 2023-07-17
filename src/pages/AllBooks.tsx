"use client";

import { useGetBooksQuery } from "@/redux/features/books/bookApi";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllBooks() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading } = useGetBooksQuery(currentPage);

  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handlePrevClick = () => {
    window.scrollTo(0, 0);
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextClick = () => {
    window.scrollTo(0, 0);
    if (currentPage < Math.ceil(data.meta.total / data.meta.limit)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="container mx-auto ">
      <h4 className="text-center font-extrabold tracking-tight text-3xl mb-4">
        All Books
      </h4>

      <div className="flex gap-2 mb-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Books..."
            required
          />
        </div>
        <button className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          ADD NEW BOOK
        </button>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                SL. No
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3">
                Genre
              </th>
              <th scope="col" className="px-6 py-3">
                Publication Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((book: any, index: number) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={book._id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4">{book.title}</td>
                <td className="px-6 py-4">{book.author}</td>
                <td className="px-6 py-4">{book.genre}</td>
                <td className="px-6 py-4">{book.publicationDate}</td>
                <td className="px-6 py-4 flex gap-3">
                  <Link
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    to={`/book-details/${book._id}`}
                  >
                    <p>View</p>
                  </Link>
                  {/* <a
                    className="font-medium text-red-600 hover:underline dark:text-cyan-500"
                    href="/tables"
                  >
                    <p>Delete</p>
                  </a> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-2 justify-center mt-6">
        <button
          disabled={currentPage === 1}
          onClick={handlePrevClick}
          className="font-medium text-blue-600 hover:underline dark:text-cyan-500"
        >
          Previous
        </button>
        <button
          className="font-medium text-blue-600 hover:underline dark:text-cyan-500"
          disabled={currentPage >= Math.ceil(data.meta.total / data.meta.limit)}
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}
