/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useAddBookMutation } from "@/redux/features/books/bookApi";
import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [addBook] = useAddBookMutation();
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddBook = async (event: FormEvent<HTMLFormElement>) => {
    window.scrollTo(0, 0);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    data.authorEmail = userData?.email;
    const response = await addBook(data);

    //@ts-ignore
    if (response?.data?.success === true) {
      //@ts-ignore
      swal("New book added!", {
        icon: "success",
      });
      navigate("/allbooks");
    }
  };

  return (
    <div className="px-8 mt-28">
      <h4 className="text-start font-extrabold tracking-tight text-3xl mb-4 ">
        Add New Book
      </h4>

      <form onSubmit={handleAddBook}>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="Author"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Author
          </label>
          <input
            name="author"
            type="text"
            id="Author"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="genre"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Genre
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="publication date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Publication date
          </label>
          <input
            type="text"
            id="publication date"
            name="publicationDate"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AddBook;
