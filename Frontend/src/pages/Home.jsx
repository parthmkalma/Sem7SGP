import { Link } from "react-router-dom";
import Carousel from "../Component/Carousel";
import Navbar from "../Component/Navbar";
import { useUser } from "../UserContext";

export default function Home() {
  const { name } = useUser(); // Get the name from context

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px] sm:grid-cols-1">
              <Carousel />
              <div className="flex flex-col justify-center space-y-4 text-center sm:text-left">
                <div className="space-y-3">
                  {name ? (
                    <div className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl">
                      Hello {name}!
                    </div>
                  ) : (
                    <div className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl">
                      Hello User,
                    </div>
                  )}
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    Rent the Appliances You Need
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto sm:mx-0">
                    Upgrade your home with our wide selection of high-quality rental appliances. No long-term commitments, just convenient and affordable rentals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center sm:justify-start">
                  <Link
                    to="/rentals"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Browse Rentals
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Rent the Appliances You Need
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl mx-auto">
                  From refrigerators to air conditioners, we have a wide selection of high-quality rental appliances to meet your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 sm:grid-cols-1 lg:grid-cols-3 lg:gap-12">
              <div className="shadow-lg grid gap-8 p-2 hover:shadow-3xl hover:bg-gray-700 hover:text-white rounded-xl">
                <img
                  src="https://placeholder.pics/svg/50000"
                  width="300"
                  height="200"
                  alt="Refrigerator"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="grid gap-4">
                  <h3 className="text-lg font-bold">Refrigerators</h3>
                  <p className="text-sm">
                    Keep your food fresh with our top-of-the-line rental refrigerators.
                  </p>
                  <Link
                    to="/rent-refrigerator"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Rent Now
                  </Link>
                </div>
              </div>

              <div className="shadow-lg grid gap-8 p-2 hover:shadow-3xl hover:bg-gray-700 hover:text-white rounded-xl">
                <img
                  src="https://placeholder.pics/svg/50000"
                  width="300"
                  height="200"
                  alt="Washing Machine"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="grid gap-4">
                  <h3 className="text-lg font-bold">Washing Machines</h3>
                  <p className="text-sm">
                    Enjoy hassle-free laundry with our top-loading and front-loading rental washing machines.
                  </p>
                  <Link
                    to="/rent-washing-machine"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Rent Now
                  </Link>
                </div>
              </div>

              <div className="shadow-lg grid gap-8 p-2 hover:shadow-3xl hover:bg-gray-700 hover:text-white rounded-xl">
                <img
                  src="https://placeholder.pics/svg/50000"
                  width="300"
                  height="200"
                  alt="Air Conditioner"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="grid gap-4">
                  <h3 className="text-lg font-bold">Air Conditioners</h3>
                  <p className="text-sm">
                    Stay cool and comfortable with our energy-efficient rental air conditioners.
                  </p>
                  <Link
                    to="/rent-air-conditioner"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Rent Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Combined Why Rent With Us & Testimonials Section */}
        <section className="w-full  md:py-24 lg:py-1">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-20 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl ">
                  Why Rent With Us?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl mx-auto">
                  We offer a wide range of high-quality rental appliances, affordable prices, and excellent customer service.
                </p>
              </div>

              {/* Testimonials Section */}
              <div className="">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                  What Our Customers Say
                </h3>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 sm:grid-cols-1 lg:grid-cols-3 lg:gap-12">
                  <div className="p-6 bg-white rounded-lg shadow-lg">
                    <p className="italic text-muted-foreground mb-4">
                      "Renting a refrigerator was quick and hassle-free. The appliance arrived on time and worked perfectly!"
                    </p>
                    <div className="font-bold">- John D.</div>
                  </div>

                  <div className="p-6 bg-white rounded-lg shadow-lg">
                    <p className="italic text-muted-foreground mb-4">
                      "Amazing service! I rented an air conditioner for the summer, and it was a lifesaver. Highly recommend!"
                    </p>
                    <div className="font-bold">- Sarah M.</div>
                  </div>

                  <div className="p-6 bg-white rounded-lg shadow-lg">
                    <p className="italic text-muted-foreground mb-4">
                      "Affordable and convenient. Renting a washing machine saved me from buying one during my short-term stay."
                    </p>
                    <div className="font-bold">- Alex T.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 RentIt. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
