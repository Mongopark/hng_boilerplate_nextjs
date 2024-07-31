import Image from "next/image";
import Link from "next/link";

import ContactForm from "~/components/common/contact-us-form";
import { bizTime, contactInfo } from "./constants";

const Contact = () => {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-[1200px] pb-20 text-neutral-dark-1 transition-all lg:container lg:pb-44 lg:pt-9">
        <div className="flex items-center justify-center">
          <div className="rounded bg-subtle p-3 text-center">Contact Us</div>
        </div>

        <div className="grid justify-center pt-8 *:text-center lg:gap-3 lg:pb-11">
          <h1 className="text-3xl font-bold lg:text-6xl">
            Get in <span className="text-primary">touch with</span> us today
          </h1>
          <p className="ml-9 text-center text-base text-neutral-dark-1 max-sm:hidden lg:max-w-2xl lg:text-lg">
            Have questions, feedback, or need assistance? Our team is here to
            help and support you every step of the way.Get in touch with us
            today.
          </p>
          <p className="text-lg font-medium sm:hidden">
            Achieve your dreams with us today
          </p>
        </div>
        <div className="items-start justify-between gap-4 lg:flex">
          <ContactForm />
          <div className="mx-auto grid gap-3 max-lg:container *:rounded-md *:border *:p-6 max-lg:mt-5 lg:w-1/2 lg:pr-8 lg:pt-8">
            <div className="grid lg:gap-7">
              <h2 className="text-lg font-bold lg:text-3xl">United Kingdom</h2>
              <h3 className="text-sm font-bold max-lg:pb-6 max-lg:pt-2 lg:text-base">
                Business hours : {bizTime[0]} - {bizTime[1]}
              </h3>
              <div className="grid gap-5 lg:gap-3">
                {contactInfo.map((info) => (
                  <div key={info.alt} className="flex items-center gap-4">
                    <div className="rounded-sm bg-neutral-dark-1 p-2.5">
                      <info.Icon color="white" size={24} />
                    </div>
                    <p className="text-lg leading-5">{info.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="gap-2 max-lg:grid">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-primary underline underline-offset-2">
                  FAQs
                </h2>

                <Link href="/faqs">
                  <div>
                    <Image
                      src="/images/mdi_arrow-right-bold.svg"
                      width={20}
                      height={20}
                      alt="arrow"
                    />
                  </div>
                </Link>
              </div>
              <p className="texl-lg">
                See and get answers to the most frequent asked questions
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
