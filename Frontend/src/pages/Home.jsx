import { Link } from "react-router-dom";
// import { ApertureIcon, StarIcon } from "@heroicons/react/solid"; // or "@heroicons/react/outline"
import {} from "@heroicons/react/24/outline"; // or '24/solid'
import Navbar from "../Component/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <img
                src="https://placeholder.pics/svg/50000"
                width="550"
                height="550"
                alt="Appliances"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    Rent the Appliances You Need
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Upgrade your home with our wide selection of high-quality
                    rental appliances. No long-term commitments, just convenient
                    and affordable rentals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
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

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Rent the Appliances You Need
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
                  From refrigerators to air conditioners, we have a wide
                  selection of high-quality rental appliances to meet your
                  needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-4">
                <img
                  src="https://placeholder.pics/svg/50000"
                  width="300"
                  height="200"
                  alt="Refrigerator"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Refrigerators</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep your food fresh with our top-of-the-line rental
                    refrigerators.
                  </p>
                  <Link
                    to="/rent-refrigerator"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Rent Now
                  </Link>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  src="https://placeholder.pics/svg/50000"
                  width="300"
                  height="200"
                  alt="Washing Machine"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Washing Machines</h3>
                  <p className="text-sm text-muted-foreground">
                    Enjoy hassle-free laundry with our top-loading and
                    front-loading rental washing machines.
                  </p>
                  <Link
                    to="/rent-washing-machine"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Rent Now
                  </Link>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  src="https://placeholder.pics/svg/50000"
                  width="300"
                  height="200"
                  alt="Air Conditioner"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Air Conditioners</h3>
                  <p className="text-sm text-muted-foreground">
                    Stay cool and comfortable with our energy-efficient rental
                    air conditioners.
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

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Why Rent With Us?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
                  We offer a wide range of high-quality rental appliances,
                  affordable prices, and excellent customer service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 RentiFy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
