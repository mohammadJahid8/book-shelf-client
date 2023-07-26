/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import {
  useGetWishlistQuery,
  useUpdateWishlistMutation,
} from "@/redux/features/books/bookApi";
import swal from "sweetalert";

export default function Reading() {
  const { data, isLoading, refetch } = useGetWishlistQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const [updateWishlist] = useUpdateWishlistMutation();

  const handleFinish = async (id: string) => {
    const data = {
      readingStatus: "finished",
    };

    const res = await updateWishlist({ id, data });
    refetch();
    //@ts-ignore
    if (res?.data?.success === true) {
      swal("You have finished reading the book!", {
        icon: "success",
      });
    }
  };

  const readingBooks = data?.data?.filter(
    (book: { isReading: boolean }) => book.isReading
  );

  return (
    <div className="container mx-auto ">
      <h4 className="text-center font-extrabold tracking-tight text-3xl mb-4">
        Currently Reading
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
                    {book.readingStatus === "reading" ? (
                      <button
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        onClick={() => handleFinish(book?._id)}
                      >
                        <p>FINISH READING</p>
                      </button>
                    ) : (
                      <button
                        className="font-medium text-green-600 hover:underline dark:text-green-500"
                        disabled
                      >
                        <p>FINISHED</p>
                      </button>
                    )}
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
