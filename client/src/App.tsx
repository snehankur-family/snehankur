import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/lib/LanguageContext";
import { LanguageToggle } from "@/components/language-toggle";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Gallery from "@/pages/gallery";
import Donate from "@/pages/donate";
import Contact from "@/pages/contact";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative">
        <Navbar />
        <LanguageToggle />
      </div>
      <main className="flex-grow">
        <Switch>
          <Route path="/snehankur" component={Home} />
          <Route path="/snehankur/about" component={About} />
          <Route path="/snehankur/gallery" component={Gallery} />
          <Route path="/snehankur/donate" component={Donate} />
          <Route path="/snehankur/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Router />
        <Toaster />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
