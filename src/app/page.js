/**
 * v0 by Vercel.
 * @see https://v0.dev/t/L81hHxobD5F
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center w-full">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <CrossIcon className="h-6 w-6" />
          <span className="sr-only">Medmatch</span>
          <span className="ml-4 text-lg">Medmatch</span>
        </Link>
        <div className="ml-auto flex items-center gap-4 sm:gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  Practitioners
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  Testimonials
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  Security
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <nav className="hidden lg:flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Practitioners
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Testimonials
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Security
            </Link>
          </nav>
        </div>
      </header>

      {/* ============================ main section ====================== */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Seamless Healthcare at Your Fingertips
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our app connects you with a wide range of medical practitioners, making it easy to manage your
                    healthcare needs from anywhere.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#0A65FC] px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Download App
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <Image
                src={"https://images.pexels.com/photos/5215023/pexels-photo-5215023.jpeg?auto=compress&cs=tinysrgb&w=800"}
                width="550"
                height="750"
                alt="Photo by Antoni Shkraba"
                // placeholder="blur"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* ===================== key features =========================== */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Manage Your Healthcare with Ease</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our app provides a seamless experience for booking appointments, accessing medical records, and
                  communicating with healthcare providers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src={"https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=800"}
                width="550"
                height="310"
                alt="Image"
                // placeholder="blur"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Book Appointments</h3>
                      <p className="text-muted-foreground">
                        Easily schedule appointments with healthcare providers at your convenience.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Access Medical Records</h3>
                      <p className="text-muted-foreground">
                        View and manage your medical history, test results, and prescriptions in one secure location.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Communicate with Providers</h3>
                      <p className="text-muted-foreground">
                        Engage in secure messaging with your healthcare team to discuss concerns and get personalized
                        guidance.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =============== pracrtioner section ============ */}
        <section id="practitioners" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Healthcare Providers</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Connect with a Wide Range of Practitioners
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our app provides access to a diverse network of healthcare professionals, including physicians,
                  therapists, nutritionists, and more.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">

              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="rounded-full bg bg-secondary p-4">
                  <HospitalIcon className="h-8 w-8 text-accent-foreground" />
                </div>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Physicians</h3>
                  <p className="text-muted-foreground">
                    Access a wide range of medical specialists for comprehensive care.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="rounded-full bg-secondary p-4">
                  <ShrinkIcon className="h-8 w-8 text-secondary-foreground" />
                </div>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Therapists</h3>
                  <p className="text-muted-foreground">
                    Connect with licensed mental health professionals for personalized support.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="rounded-full bg-accent p-4">
                  <NutIcon className="h-8 w-8 text-accent-foreground" />
                </div>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Nutritionists</h3>
                  <p className="text-muted-foreground">
                    Work with qualified nutritionists to improve your overall health and well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================== Testimonial section ==================  */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from real people who have transformed their healthcare experience with our app.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col items-start space-y-4">
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  &ldquo;The HealthTech app has been a game-changer for me. It&apos;s so convenient to book appointments,
                  access my medical records, and communicate with my healthcare team all in one place.&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold">Emily Johnson</div>
                  <div className="text-sm text-muted-foreground">Patient, Acme Medical Center</div>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  &ldquo;I was hesitant to try a new healthcare app, but the HealthTech app has exceeded my
                  expectations. The user-friendly interface and seamless coordination of care have made a significant
                  difference in my overall well-being.&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold">Michael Chen</div>
                  <div className="text-sm text-muted-foreground">Patient, Acme Wellness Clinic</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= privacy policy ===================== */}
        <section id="security" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Security &amp; Privacy</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Protecting Your Health Data</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We take the security and privacy of your health information seriously. Our app is designed with
                    industry-leading encryption and access controls to safeguard your data.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#0A65FC] px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== frequently asked questions =========================== */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQs</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions? We have got you covered. Check out our frequently asked questions to find the answers you need.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">How do I book an appointment?</h3>
                      <p className="text-muted-foreground">
                        You can book an appointment easily through our app by navigating to the &quot;Book Appointment&quot; section and selecting your preferred time and healthcare provider.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">How can I access my medical records?</h3>
                      <p className="text-muted-foreground">
                        Accessing your medical records is simple. Log into the app, go to the &quot;Medical Records&quot; section, and you will find all your history, test results, and prescriptions securely stored.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Is my data secure?</h3>
                      <p className="text-muted-foreground">
                        Yes, your data is securely encrypted and stored. We use industry-standard security measures to ensure your personal information is protected.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Can I communicate with my healthcare provider through the app?</h3>
                      <p className="text-muted-foreground">
                        Absolutely. Our app allows secure messaging with your healthcare providers so you can discuss any concerns and receive personalized guidance.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">How do I reset my password?</h3>
                      <p className="text-muted-foreground">
                        To reset your password, go to the login page and click on &quot;Forgot Password&quot;. Follow the instructions to reset your password via email.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">What if I need technical support?</h3>
                      <p className="text-muted-foreground">
                        If you need technical support, you can reach out to our support team through the &quot;Support&quot; section in the app. We are here to help you 24/7.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== newsletter =========================== */}
        <section id="newsletter" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Newsletter</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Endless Possibilities</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join 10,000+ practitioners who elevate their entire support experience with one straightforward platform. Get started today.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl py-12">
              <form className="flex flex-col items-center space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 p-3 text-lg focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#0A65FC] p-3 text-lg font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>


      </main>
    {/* ===================== footer =========================== */}
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">Medmatch.io</h3>
            <p className="mt-4 max-w-xs">
              Medmatch.io is a platform that connects you with a wide range of medical practitioners, making it easy to manage your healthcare needs from anywhere.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#faq" className="hover:underline">FAQs</a></li>
              <li><a href="#newsletter" className="hover:underline">Newsletter</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="mailto:support@medmatch.io" className="hover:underline">support@medmatch.io</a></li>
              <li><a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></li>
              <li className="flex space-x-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M24 4.56v14.88C24 21.37 21.37 24 18.44 24H5.56C2.63 24 0 21.37 0 18.44V5.56C0 2.63 2.63 0 5.56 0h12.88C21.37 0 24 2.63 24 5.56zM9.29 18.44h2.94V12H9.29v6.44zm1.47-7.41c.95 0 1.72-.77 1.72-1.72s-.77-1.72-1.72-1.72-1.72.77-1.72 1.72.77 1.72 1.72 1.72zM20 18.44h-2.94V15c0-1.81-2.17-1.68-2.17 0v3.44H12v-6.44h2.89v.93c1.33-2.47 7.11-2.68 7.11 2.35v3.16z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M23.95 4.57c-.88.39-1.83.65-2.82.77a4.92 4.92 0 002.17-2.72c-.95.56-2.01.97-3.14 1.19a4.92 4.92 0 00-8.38 4.48A13.95 13.95 0 011.67 3.15a4.92 4.92 0 001.52 6.56c-.8-.02-1.55-.25-2.2-.61v.06c0 2.39 1.7 4.39 3.95 4.85-.41.11-.84.17-1.28.17-.31 0-.61-.03-.91-.09.61 1.9 2.38 3.29 4.47 3.33a9.86 9.86 0 01-7.29 2.05 13.9 13.9 0 007.55 2.21c9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.02-.63A9.95 9.95 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M23.994 24V23.998H24V23.994H23.994zM22.23 22.23h-3.692V17.308c0-1.174-.023-2.687-1.636-2.687-1.636 0-1.886 1.278-1.886 2.598V22.23H11.33v-8.923h3.548v1.219h.048c.494-.937 1.703-1.936 3.506-1.936 3.751 0 4.443 2.469 4.443 5.681V22.23zM5.337 10.83c-1.184 0-2.142-.959-2.142-2.143 0-1.185.959-2.143 2.142-2.143s2.142.959 2.142 2.143c0 1.184-.959 2.143-2.142 2.143zM7.182 22.23H3.492v-8.923h3.69v8.923zM22.23 0H1.77C.792 0 0 .792 0 1.77v20.459C0 23.208.792 24 1.77 24h20.459C23.208 24 24 23.208 24 22.23V1.77C24 .792 23.208 0 22.23 0z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-center text-sm md:text-left">© {new Date().getFullYear()} Medmatch.io. All rights reserved.</p>
          <div className="flex space-x-4 flex-col md:flex-row lg:flex-row">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-4 rounded-lg bg-slate-200 text-primary p-4 cursor-pointer">
              <Image src={"https://www.logo.wine/a/logo/Google_Play/Google_Play-Icon-Logo.wine.svg"} width={50} height={30} alt="Download on Play Store" className="h-12" />
              <span>Download on Google Store</span>
            </a>
            <a href="https://www.apple.com/app-store" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-4 rounded-lg bg-slate-200 text-primary p-4 cursor-pointer">
              <Image src={'/appstore.svg.png'} width={50} height={30} alt="Download on Apple Store" className="h-12" />
              <span>Download on Apple Store</span>
            </a>
          </div>
        </div>
      </div>
    </footer>


    </div>
  )
}

function CrossIcon(props) {
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
      <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z" />
    </svg>
  )
}


function HospitalIcon(props) {
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
      <path d="M12 6v4" />
      <path d="M14 14h-4" />
      <path d="M14 18h-4" />
      <path d="M14 8h-4" />
      <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
    </svg>
  )
}


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function NutIcon(props) {
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
      <path d="M12 4V2" />
      <path d="M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4" />
      <path d="M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z" />
    </svg>
  )
}


function ShrinkIcon(props) {
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
      <path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8" />
      <path d="M9 19.8V15m0 0H4.2M9 15l-6 6" />
      <path d="M15 4.2V9m0 0h4.8M15 9l6-6" />
      <path d="M9 4.2V9m0 0H4.2M9 9 3 3" />
    </svg>
  )
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}