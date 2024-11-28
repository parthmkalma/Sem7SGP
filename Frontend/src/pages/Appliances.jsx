import { ChevronDownIcon } from "@heroicons/react/24/outline";
import * as Collapsible from "@radix-ui/react-collapsible";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";

export default function Appliances() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <section className="w-full py-12 md:py-24 lg:py-32 text-center">
          <div className="container px-4 md:px-6 space-y-4">
            <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
              Rent Appliances with Ease
            </h1>
            <p className="max-w-lg mx-auto text-muted-foreground md:text-xl">
              Upgrade your home with our top-quality rental appliances. Browse
              our selection and get the perfect fit for your needs.
            </p>
            <Link
              to="/ListedItem"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Browse Appliances
            </Link>
          </div>
        </section>

        <section id="appliances" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {applianceData.map((appliance) => (
              <div
                key={appliance.id}
                className="bg-white p-4 rounded-xl shadow-md"
              >
                <img
                  src={appliance.image || "https://placeholder.pics/svg/50000"} // Use placeholder if image is missing
                  alt={appliance.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{appliance.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-muted-foreground">{appliance.price}</p>
                    <Link
                      to={`/rent/${appliance.id}`}
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Rent Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold">
                  Frequently Asked Questions
                </h2>
                <div className="mt-4 space-y-4">
                  {faqData.map((faq, index) => (
                    <Collapsible.Root key={index}>
                      <Collapsible.Trigger className="flex items-center justify-between w-full text-left">
                        <h3 className="text-lg font-semibold">
                          {faq.question}
                        </h3>
                        <ChevronDownIcon className="w-5 h-5 transition-transform" />
                      </Collapsible.Trigger>
                      <Collapsible.Content>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </Collapsible.Content>
                    </Collapsible.Root>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Rental Appliances
                </div>
                <h2 className="text-3xl font-bold mt-2">
                  Upgrade Your Home with Ease
                </h2>
                <p className="text-muted-foreground mt-4 max-w-md">
                  Renting appliances has never been simpler. Browse our
                  selection, choose what you need, and we'll handle the rest.
                  Enjoy the convenience of top-quality appliances without the
                  hassle of ownership.
                </p>
                <Link
                  to="/ListedItem"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-6"
                >
                  Browse Appliances
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const applianceData = [
  {
    id: 1,
    name: "Refrigerator",
    price: "$25/month",
    image: "https://placeholder.pics/svg/50000",
  },
  {
    id: 2,
    name: "Washing Machine",
    price: "$20/month",
    image: "https://placeholder.pics/svg/50000",
  },
  {
    id: 3,
    name: "Dishwasher",
    price: "$18/month",
    image: "https://placeholder.pics/svg/50000",
  },
  {
    id: 4,
    name: "Dryer",
    price: "$22/month",
    image: "https://placeholder.pics/svg/50000",
  },
];

const faqData = [
  {
    question: "How does the rental process work?",
    answer:
      "The rental process is simple. Browse our selection, choose the appliance you need, and we'll deliver it to your doorstep. When you're done, we'll pick it up and you can return it hassle-free.",
  },
  {
    question: "What is the rental period?",
    answer:
      "Our rental period is flexible, ranging from 1 month to 1 year. You can choose the duration that best suits your needs.",
  },
  {
    question: "Do you offer any discounts or promotions?",
    answer:
      "Yes, we offer various discounts and promotions throughout the year. Be sure to check our website or contact us for the latest deals.",
  },
];

// function ChevronDownIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m6 9 6 6 6-6" />
//     </svg>
//   );
// }
