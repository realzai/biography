import { ContactForm } from "~/components/contact-form";
import { Metadata } from "next";
import profile from "@repo/data/profile";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact me",
  description: "Get in touch with me",
};

export default function ContactPage() {
  return (
    <div className=" min-h-screen bg-[#f7f7f7] font-mono items-center pt-4 md:pt-26 lg:pt-36">
      <div className="relative mx-auto max-w-7xl px-4 py- sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden border border-gray-100 bg-white shadow-[0_4px_60px_-20px_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="bg-black p-10 lg:col-span-2">
                <div className="h-full space-y-10 text-white">
                  <div>
                    <div className="inline-flex h-8 w-8 items-center justify-center border border-gray-800">
                      <span className="text-sm font-normal">C</span>
                    </div>
                    <h3 className="mt-8 text-sm font-normal uppercase tracking-[0.2em]">
                      Contact Information
                    </h3>
                    <div className="mt-4 h-px w-16 bg-gray-800" />
                    <p className="mt-4 text-xs leading-relaxed text-gray-400">
                      Please fill out the form with your inquiry and we'll get
                      back to you promptly.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                        Email
                      </p>
                      <p className="text-xs text-white">{profile.email}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                        Phone
                      </p>
                      <p className="text-xs text-white">
                        {profile.phoneNumber}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                        Location
                      </p>
                      <p className="text-xs text-white">
                        {profile.streetAddress}
                        <br />
                        {profile.city}, {profile.country}
                      </p>
                    </div>
                  </div>

                  <div className="pt-10">
                    <div className="flex space-x-4">
                      <Link href={profile.urls.youtube} className="group">
                        <div className="flex h-8 w-8 items-center justify-center border border-gray-800 transition-colors duration-300 group-hover:border-white">
                          <span className="text-xs text-gray-400 transition-colors duration-300 group-hover:text-white">
                            YT
                          </span>
                        </div>
                      </Link>
                      <Link href={profile.urls.github} className="group">
                        <div className="flex h-8 w-8 items-center justify-center border border-gray-800 transition-colors duration-300 group-hover:border-white">
                          <span className="text-xs text-gray-400 transition-colors duration-300 group-hover:text-white">
                            GH
                          </span>
                        </div>
                      </Link>
                      <Link href={profile.urls.instagram} className="group">
                        <div className="flex h-8 w-8 items-center justify-center border border-gray-800 transition-colors duration-300 group-hover:border-white">
                          <span className="text-xs text-gray-400 transition-colors duration-300 group-hover:text-white">
                            IG
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 lg:col-span-3">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="py-4 text-center text-xs text-gray-500">
            <p>{profile.copyright}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
