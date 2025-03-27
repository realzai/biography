import { ContactForm } from "~/components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sai Ye Yint Aung",
  description: "Contact with Sai Ye Yint Aung",
};

export default function Page() {
  return (
    <div className={"h-screen w-screen flex items-center justify-center"}>
      <ContactForm />
    </div>
  );
}
