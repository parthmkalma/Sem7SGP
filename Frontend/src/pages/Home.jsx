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
                    Upgrade your home with our wide selection of high-quality
                    rental appliances. No long-term commitments, just convenient
                    and affordable rentals.
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
                  From refrigerators to air conditioners, we have a wide
                  selection of high-quality rental appliances to meet your
                  needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 sm:grid-cols-1 lg:grid-cols-3 lg:gap-12">
              <Link to="/appliance">
                <div className="shadow-lg grid gap-8 p-2 hover:shadow-3xl hover:text-white rounded-xl hover:bg-neutral-500  transition-transform duration-300 hover:scale-110">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXaW-V-wcIis68y-ucIeQQFBlX_PB7TuYCA&s"
                    width="300"
                    height="200"
                    alt="Refrigerator"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  />
                  <div className="grid gap-4">
                    <h3 className="text-lg font-bold">Refrigerators</h3>
                    <p className="text-sm">
                      Keep your food fresh with our top-of-the-line rental
                      refrigerators.
                    </p>
                    <Link
                      to="/ListedItem"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Rent Now
                    </Link>
                  </div>
                </div>
              </Link>

              <div className="shadow-lg grid gap-8 p-2 hover:shadow-3xl hover:text-white rounded-xl hover:bg-neutral-500  transition-transform duration-300 hover:scale-110">
                <img
                  src="https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="300"
                  height="200"
                  alt="Washing Machine"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="grid gap-4">
                  <h3 className="text-lg font-bold">Washing Machines</h3>
                  <p className="text-sm">
                    Enjoy hassle-free laundry with our top-loading and
                    front-loading rental washing machines.
                  </p>
                  <Link
                    to="/ListedItem"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Rent Now
                  </Link>
                </div>
              </div>

              <div className="shadow-lg grid gap-8 p-2 hover:shadow-3xl hover:text-white rounded-xl hover:bg-neutral-500  transition-transform duration-500 hover:scale-110">
                <img
                  src="https://img.freepik.com/premium-photo/air-conditioner-hd-8k-wallpaper-stock-photographic-image_915071-27095.jpg"
                  width="300"
                  height="200"
                  alt="Air Conditioner"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="grid gap-4">
                  <h3 className="text-lg font-bold">Air Conditioners</h3>
                  <p className="text-sm">
                    Stay cool and comfortable with our energy-efficient rental
                    air conditioners.
                  </p>
                  <Link
                    to="/ListedItem"
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
                  We offer a wide range of high-quality rental appliances,
                  affordable prices, and excellent customer service.
                </p>
              </div>

              {/* Testimonials Section */}
              <div className="">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl text-center">
                  What Our Customers Say
                </h3>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 sm:grid-cols-1 lg:grid-cols-3 lg:gap-12">
                  {/* John D.'s testimonial */}
                  <div className="relative p-6 bg-white rounded-lg shadow-lg group overflow-hidden transition-transform duration-500 hover:scale-110 flex flex-col justify-center items-center min-h-[150px] min-w-[300px]">
                    {/* Name */}
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 transform group-hover:translate-y-[-80%]">
                      <div className="font-bold">John Denver</div>
                    </div>
                    {/* Review */}
                    <p className="italic text-muted-foreground opacity-0 transition-all duration-500 transform group-hover:opacity-100 group-hover:translate-y-0 text-center">
                      "Renting a refrigerator was quick and hassle-free. The
                      appliance arrived on time and worked perfectly!"
                    </p>
                  </div>

                  {/* Sarah M.'s testimonial */}
                  <div className="relative p-6 bg-white rounded-lg shadow-lg group overflow-hidden transition-transform duration-500 hover:scale-110 flex flex-col justify-center items-center min-h-[150px] min-w-[300px]">
                    {/* Name */}
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 transform group-hover:translate-y-[-80%]">
                      <div className="font-bold">Sarah Mace</div>
                    </div>
                    {/* Review */}
                    <p className="italic text-muted-foreground opacity-0 transition-all duration-500 transform group-hover:opacity-100 group-hover:translate-y-0 text-center">
                      "Amazing service! I rented an air conditioner for the
                      summer, and it was a lifesaver. Highly recommend!"
                    </p>
                  </div>

                  {/* Alex T.'s testimonial */}
                  <div className="relative p-6 bg-white rounded-lg shadow-lg group overflow-hidden transition-transform duration-500 hover:scale-110 flex flex-col justify-center items-center min-h-[150px] min-w-[300px]">
                    {/* Name */}
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 transform group-hover:translate-y-[-80%]">
                      <div className="font-bold">Alex Trubedor</div>
                    </div>
                    {/* Review */}
                    <p className="italic text-muted-foreground opacity-0 transition-all duration-500 transform group-hover:opacity-100 group-hover:translate-y-0 text-center">
                      "Affordable and convenient. Renting a washing machine
                      saved me from buying one during my short-term stay."
                    </p>
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
