import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .nonempty("Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  phoneNo: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .nonempty("Phone number is required"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(100, "Message cannot exceed 100 characters")
    .nonempty("Message is required"),
});

export default function Contact() {
  const { t } = useLanguage();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNo: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Connect to Spring Boot server running on localhost:8080
      const response = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add CORS headers if needed
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        form.reset();
        // Reset success message after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      } else {
        // Handle error response
        const errorData = await response.json();
        console.error("Server error:", errorData);
        // You might want to show an error message to the user here
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // You might want to show an error message to the user here
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {t("getInTouch")}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {t("contactDescription")}
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("address0")}
                </h3>
                <p className="text-gray-600">
                  {t("address1")} <br></br>
                  {t("address2")}
                  <br />
                  {t("address3")}
                  <br />
                  {t("address4")}
                  <br />
                  {t("address5")}
                </p>
                <a
                  href="https://maps.app.goo.gl/pZr4cFgn5bEZMyzaA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-600 font-semibold mt-2 inline-block flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  {t("viewOnMaps")}
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("contactInfo")}
                </h3>
                <p className="text-gray-600">
                  {t("address6")}
                  <br />
                  {t("address7")}
                  <br />
                  Samarpan7171@gmail.com
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("socialMedia")}
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/snehankura.samajika.prakalpa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/snehankur.anath_aashram_partur/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://wa.me/919689227171"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary"
                  >
                    <FaWhatsapp size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
