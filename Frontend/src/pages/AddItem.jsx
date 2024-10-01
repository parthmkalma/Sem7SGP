import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { useUser } from "../UserContext";
export default function Component() {
  const { name } = useUser(); // Get the name from context

  return (
    <>
      <Navbar />
      {name ? (
        <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl mt-4 ">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl font-bold">Add Rental Appliance</h1>
              <p className="text-gray-500">
                Enter the details of your rental appliance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <form className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Appliance Name
                    </label>
                    <input
                      id="name"
                      placeholder="e.g. Refrigerator"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="monthly-rent"
                      className="text-sm font-medium text-gray-700"
                    >
                      Monthly Rent
                    </label>
                    <input
                      id="monthly-rent"
                      type="number"
                      placeholder="e.g. $50"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="notes"
                    className="text-sm font-medium text-gray-700"
                  >
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    placeholder="Enter any additional details"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="photos"
                    className="text-sm font-medium text-gray-700"
                  >
                    Upload Photos
                  </label>
                  <input
                    id="photos"
                    type="file"
                    multiple
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Save Appliance
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <div className="mx-auto h-12 w-12 text-primary" />
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              You are not logged in. Please login.
            </h1>
            <div className="mt-6">
              <Link
                to="/Login"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
