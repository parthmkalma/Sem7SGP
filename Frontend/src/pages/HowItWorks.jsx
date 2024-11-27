import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";

export default function Component() {
   const handleScroll = () => {
     const targetSection = document.getElementById("step1");
     targetSection.scrollIntoView({ behavior: "smooth" });
   };
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Rent Appliances with Ease
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Discover our hassle-free rental service for all your
                      appliance needs. From selection to installation, we've got
                      you covered.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Get Started
                    </Link>
                    <Link
                      to ="#"
                      onClick={handleScroll}
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <img
                  src="https://placeholder.pics/svg/50000"
                  width="550"
                  height="310"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32" id="step1">
            <div className="container px-4 md:px-6">
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <img
                  src="https://placeholder.pics/svg/50000"
                  width="550"
                  height="310"
                  alt="Select Appliance"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                      Step 1
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      Select Your Appliance
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Browse our wide selection of top-quality appliances and
                      choose the perfect one for your needs. We offer a variety
                      of sizes, styles, and features to fit your space and
                      lifestyle.
                    </p>
                  </div>
                  <ul className="grid gap-2 py-4">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Refrigerators, washers, dryers, and more
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Energy-efficient and eco-friendly options
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Flexible rental terms to fit your needs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid items-center gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                      Step 2
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      Schedule Delivery and Installation
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Once you've selected your appliance, our team will
                      schedule a convenient time for delivery and professional
                      installation. We'll handle all the logistics so you can
                      sit back and relax.
                    </p>
                  </div>
                  <ul className="grid gap-2 py-4">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Flexible scheduling to fit your needs
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Experienced, certified installers
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Hassle-free delivery and setup
                    </li>
                  </ul>
                </div>
                <img
                  src="https://placeholder.pics/svg/50000"
                  width="550"
                  height="310"
                  alt="Delivery and Installation"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-first"
                />
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <img
                  src="https://placeholder.pics/svg/50000"
                  width="550"
                  height="310"
                  alt="Manage Rental"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                      Step 3
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      Manage Your Rental
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Enjoy the convenience of your rented appliance with our
                      easy-to-use rental management platform. Track your
                      payments, request maintenance, and extend your rental
                      period as needed.
                    </p>
                  </div>
                  <ul className="grid gap-2 py-4">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Online rental management dashboard
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Flexible rental terms and extensions
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Responsive maintenance and support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">
            &copy; 2024 RentIt. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
              prefetch={false}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
              prefetch={false}
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
