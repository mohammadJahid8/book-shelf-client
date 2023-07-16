import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleDeleteBook = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this book!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your book has been deleted!", {
          icon: "success",
        });
        navigate("/allbooks");
      }
    });
  };

  return (
    <div className="px-8 mt-28">
      <h4 className="text-start font-extrabold tracking-tight text-3xl mb-4 ">
        Book Details
      </h4>

      <div className="flex gap-1 mb-4">
        <Link to={`/edit-book/${id}`}>
          <button className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            EDIT BOOK
          </button>
        </Link>
        <button
          onClick={handleDeleteBook}
          className="text-white  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-sm text-xs px-3 py-1.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          DELETE BOOK
        </button>
      </div>
      <dl className=" text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col pb-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Title
            </dt>
            <dd className="text-lg font-semibold">yourname@flowbite.com</dd>
          </div>
          <div className="flex flex-col ">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Author
            </dt>
            <dd className="text-lg font-semibold">Jahid</dd>
          </div>
          <div className="flex flex-col ">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Genre
            </dt>
            <dd className="text-lg font-semibold">
              +00 123 456 789 / +12 345 678
            </dd>
          </div>
          <div className="flex flex-col ">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
              Publication Date
            </dt>
            <dd className="text-lg font-semibold">
              +00 123 456 789 / +12 345 678
            </dd>
          </div>
        </div>

        <div className="flex flex-col pt-3">
          <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
            Reviews
          </dt>
          <dd className="text-lg font-semibold">
            <div className="flex items-center space-x-4 mb-2">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&usqp=CAU"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Awesome book
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD116U9ZCk8bEaanCeB5rSCC2uqY5Ka_2_EA&usqp=CAU"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Awesome book
                </p>
              </div>
            </div>
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default BookDetails;
