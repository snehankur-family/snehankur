import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] bg-gradient-to-r from-primary/90 to-primary">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80" 
            alt="Children playing together"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Snehankur Adoption Center
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Giving every child a loving home and a chance for a brighter future
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/adoption">
                <Button size="lg" className="mr-4 bg-primary hover:bg-primary/90">
                  Learn About Adoption
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white">
                  Support Our Cause
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-6">
                At Snehankur Adoption Center, we believe every child deserves a loving family and a stable home. 
                For over 20 years, we've been connecting children with families who can provide the love, care, 
                and opportunities they deserve.
              </p>
              <p className="text-lg mb-6">
                Our dedicated team works tirelessly to ensure both children and adoptive parents receive 
                the support and resources they need throughout the adoption journey and beyond.
              </p>
              <Link to="/about">
                <Button className="bg-primary hover:bg-primary/90">Learn More About Us</Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Happy family"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Adoption Services</h3>
              <p className="mb-4">We facilitate legal and ethical adoptions, ensuring every child finds a loving home.</p>
              <Link to="/adoption" className="text-primary hover:underline">Learn more →</Link>
            </div>
            <div className="bg-card rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Counseling</h3>
              <p className="mb-4">Professional counseling services for children, adoptive parents, and biological parents.</p>
              <Link to="/services" className="text-primary hover:underline">Learn more →</Link>
            </div>
            <div className="bg-card rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Education Support</h3>
              <p className="mb-4">Educational resources and support for adopted children and their families.</p>
              <Link to="/services" className="text-primary hover:underline">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-xl">Successful Adoptions</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">20+</h3>
              <p className="text-xl">Years of Experience</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
              <p className="text-xl">Commitment to Every Child</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-muted py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Make a Difference Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Your support can transform a child's life. Volunteer, donate, or learn about adoption.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/volunteer">
              <Button size="lg" variant="outline" className="bg-background">
                Volunteer With Us
              </Button>
            </Link>
            <Link to="/donate">
              <Button size="lg">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Families Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="bg-card p-6 rounded-lg shadow">
              <p className="italic mb-4">"Snehankur changed our lives forever. The team supported us throughout the adoption process, and today our family is complete."</p>
              <footer className="font-semibold">— The Sharma Family</footer>
            </blockquote>
            <blockquote className="bg-card p-6 rounded-lg shadow">
              <p className="italic mb-4">"We're grateful for the counseling and support Snehankur provided. They truly care about the well-being of children and families."</p>
              <footer className="font-semibold">— The Patel Family</footer>
            </blockquote>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Adoption Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step toward building your family and providing a loving home for a child in need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </Link>
            <Link to="/adoption-process">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start the Process
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}