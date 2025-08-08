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
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              आम्हाला तुमचे म्हणणे ऐकायला आवडेल. कृपया यापैकी कोणत्याही
              माध्यमाद्वारे आमच्याशी संपर्क साधा.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Address
                </h3>
                <p className="text-gray-600">
                  स्नेहांकुर सामाजिक प्रकल्प <br></br>
                  मापेगाव बु. (पुनर्वसन), परतूर-सेलु रोड,
                  <br />
                  तालुका परतूर, जिल्हा जालना
                  <br />
                  महाराष्ट्र, भारत 431501
                </p>
                <a
                  href="https://maps.app.goo.gl/pZr4cFgn5bEZMyzaA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-600 font-semibold mt-2 inline-block"
                >
                  View on Google Maps
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Contact
                </h3>
                <p className="text-gray-600">
                  प्रदिप कातारे: +91 9689227171
                  <br />
                  नीता कातारे: +91 8767222142
                  <br />
                  Samarpan7171@gmail.com
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Social Media
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

          {/* Contact Form */}
          {/* <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="focus-visible:ring-orange-500 transition-all"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your email"
                          className="focus-visible:ring-orange-500 transition-all"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Phone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="10 digit phone number"
                          className="focus-visible:ring-orange-500 transition-all"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-between">
                        <FormLabel className="font-medium">Message</FormLabel>
                        <span className="text-xs text-gray-500">
                          {field.value?.length || 0}/100 characters
                        </span>
                      </div>
                      <FormControl>
                        <Textarea
                          placeholder="Your message (10-100 characters)"
                          className="min-h-[120px] focus-visible:ring-orange-500 transition-all"
                          maxLength={100}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {submitSuccess && (
                  <Alert className="bg-green-50 text-green-700 border border-green-200 mb-4">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <AlertDescription>
                      Message sent successfully!
                    </AlertDescription>
                  </Alert>
                )}

                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </div> */}
        </div>
      </div>
    </div>
  );
}
