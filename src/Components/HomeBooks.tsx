import { useGetBooksQuery } from "@/redux/features/books/bookApi";

import { Link } from "react-router-dom";

const HomeBooks = () => {
  const { data, isLoading } = useGetBooksQuery(1);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <h4 className="text-center font-extrabold tracking-tight text-3xl mb-4">
        Recent Books
      </h4>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomeBooks;
