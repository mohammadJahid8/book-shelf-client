/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import {
  useGetWishlistQuery,
  useUpdateWishlistMutation,
} from "@/redux/features/books/bookApi";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  const navigate = useNavigate();

  const { data, isLoading } = useGetWishlistQuery(undefined);

  const [updateWishlist, { error }] = useUpdateWishlistMutation();

  console.log("error", error);

  const handleReadNow = async (id: string) => {
    const data = {
      isReading: true,
      readingStatus: "reading",
    };

    console.log(data);

    const res = await updateWishlist({ id, data });

    console.log(res);
    //@ts-ignore
    if (res?.data?.success === true) {
      navigate("/reading");
    }
  };

  const readingBooks = data?.data?.filter(
    (book: { isReading: boolean }) => !book.isReading
  );

  console.log(readingBooks);

  return (
    <div className="container mx-auto ">
      <h4 className="text-center font-extrabold tracking-tight text-3xl mb-4">
        Wishlist
      </h4>

      {isLoading ? (
        <p>loading..</p>
      ) : (
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
              {readingBooks?.map((book: any, index: number) => (
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
                  <td className="px-6 py-4">{book.book.title}</td>
                  <td className="px-6 py-4">{book.book.author}</td>
                  <td className="px-6 py-4">{book.book.genre}</td>
                  <td className="px-6 py-4">{book.book.publicationDate}</td>
                  <td className="px-6 py-4">
                    <button
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      onClick={() => handleReadNow(book?._id)}
                    >
                      <p>READ NOW</p>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
