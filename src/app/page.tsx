"use client";
import Image from "next/image";
import JOS from "jos-animation";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { BadgeCheck, CookingPot, HandCoins, HandPlatter } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const initJOS = () => {
      const options = {
        debugMode: true,
        animation: "flip",
        duration: 0.7,
        rootMargin: "0% 0% 0% 0%",
      };
      JOS.init(options);
    };

    initJOS();
    JOS.refresh();

    return () => {
      // Clean up JOS if necessary
    };
  }, []);
  return (
    <div className="page-wrapper relative z-[1] bg-white">
      {/*...::: Header Start :::... */}
      <Navbar />
      {/*...::: Header End :::... */}
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Hero Section Start :::... */}
        <section className="section-hero">
          <div className="relative z-10">
            {/* Section Space */}
            <div className="pb-20 pt-28 md:pt-36 lg:pb-[100px] lg:pt-[150px] xxl:pb-[120px] xxl:pt-[185px]">
              {/* Section Container */}
              <div className="container-default">
                {/* Hero Area */}
                <div className="grid items-center gap-10 lg:grid-cols-[1fr,minmax(0,_0.6fr)] lg:gap-20 xl:gap-[122px]">
                  {/* Hero Content Block */}
                  <div className="jos mx-auto max-w-[500px] lg:mx-0 lg:max-w-none">
                    <div className="flex flex-col items-center justify-center text-center lg:items-start lg:justify-normal lg:text-left">
                      <h1 className="mb-6 text-4xl font-extrabold leading-[1.11] -tracking-[1px] md:text-5xl lg:text-6xl xl:text-7xl xxl:text-[90px]">
                        Simplify Your Dining Experience
                      </h1>
                      <p className="mb-10 xl:mb-[50px]">
                        Orderfiti is the ultimate solution for streamlining your
                        dining experience at restaurants, bars, and cafes. With
                        our innovative app, ordering food and drinks has never
                        been easier. Say goodbye to long waits and complicated
                        transactions—Orderfiti takes care of everything for you.
                      </p>
                      <div className="mb-8 flex flex-wrap items-center gap-[10px] lg:mb-[50px]">
                        <ul className="flex gap-12 text-ColorBlack">
                          <li className="relative after:absolute after:left-[calc(100%+_24px)] after:top-1/2 after:h-10 after:w-0.5 after:-translate-y-1/2 after:bg-ColorBlack/10 last:after:hidden">
                            <div className="text-[30px] font-bold leading-[1.4] -tracking-[1px]">
                              64,739
                            </div>
                            <div className="flex gap-[5px] text-base">
                              Happy Customers
                            </div>
                          </li>
                          <li className="relative after:absolute after:left-[calc(100%+_24px)] after:top-1/2 after:h-10 after:w-0.5 after:-translate-y-1/2 after:bg-ColorBlack/10 last:after:hidden">
                            <div className="text-[30px] font-bold leading-[1.4] -tracking-[1px]">
                              4.8/5
                            </div>
                            <div className="flex gap-[5px] text-base">
                              <div className="flex gap-1">
                                <Image
                                  src="/assets/img/icons/icon-green-star.svg"
                                  alt="icon-green-star"
                                  width={17}
                                  height={17}
                                />
                                <Image
                                  src="/assets/img/icons/icon-green-star.svg"
                                  alt="icon-green-star"
                                  width={17}
                                  height={17}
                                />
                                <Image
                                  src="/assets/img/icons/icon-green-star.svg"
                                  alt="icon-green-star"
                                  width={17}
                                  height={17}
                                />
                                <Image
                                  src="/assets/img/icons/icon-green-star.svg"
                                  alt="icon-green-star"
                                  width={17}
                                  height={17}
                                />
                                <Image
                                  src="/assets/img/icons/icon-green-star.svg"
                                  alt="icon-green-star"
                                  width={17}
                                  height={17}
                                />
                              </div>
                              Rating
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-wrap justify-center gap-5 sm:justify-normal">
                        <Link
                          href="https://orderfiti.twisac.xyz/#/signup"
                          className="group relative z-10 inline-block"
                        >
                          <div className="btn is-large is-rounded is-lime">
                            Get Started
                          </div>
                          <div className="is-rounded absolute inset-0 -z-10 translate-x-[5px] translate-y-[5px] bg-ColorLimetransition-all duration-300 ease-linear group-hover:translate-x-0 group-hover:translate-y-0" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Hero Content Block */}
                  {/* Hero Image Block */}
                  <div className="jos">
                    <div className="relative z-10 mx-auto h-auto max-w-[280px] sm:max-w-[500px] lg:ml-auto lg:mr-0">
                      {/* Hero Main Image */}
                      <Image
                        src="/assets/img/content/home.png"
                        alt="hero-mobille"
                        width={612}
                        height={1272}
                        className="z-10 mx-auto h-[635px] w-[306px]"
                      />
                      {/* Hero Shape - 1 */}
                      <Image
                        src="/assets/img/elements/hero-3-shapes-1.svg"
                        alt="hero-2-shape-1"
                        width={110}
                        height={191}
                        className="absolute -left-[12%] bottom-[18%] -z-10 xl:-left-[2%] xxl:left-[6%]"
                      />
                      {/* Hero Shape - 2 */}
                      <Image
                        src="/assets/img/elements/hero-3-shapes-2.svg"
                        alt="hero-2-shape-1"
                        width={292}
                        height={299}
                        className="absolute -right-[18%] top-[15%] -z-10"
                      />
                    </div>
                  </div>
                  {/* Hero Image Block */}
                </div>
                {/* Hero Area */}
              </div>
              {/* Section Container */}
            </div>
            {/* Section Space */}
            {/* Section Background Shape */}
            <Image
              src="/assets/img/elements/hero-3-bg-shape.svg"
              alt="hero-3-bg-shape"
              width={1600}
              height={883}
              className="absolute left-0 top-0 -z-10 hidden h-full w-auto xl:block"
            />
          </div>
        </section>
        {/*...::: Hero Section End :::... */}
        {/*...::: Features Section Start :::... */}
        <section className="section-features" id="about">
          {/* Section Space */}
          <div className="section-space-bottom">
            {/* Section Container */}
            <div className="container-default">
              {/* Section Content Wrapper */}
              <div className="jos mb-[60px] xl:mb-20">
                {/* Section Content Block */}
                <div className="mx-auto max-w-[636px]">
                  <h2 className="text-center">
                    Revolutionize Your Experience with Outstanding Features
                  </h2>
                </div>
                {/* Section Content Block */}
              </div>
              {/* Section Content Wrapper */}
              {/* Feature List */}
              <div className="grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xxl:gap-20">
                {/* Feature Item */}
                <div
                  className="jos"
                  data-jos_animation="fade-left"
                  data-jos_delay={0}
                >
                  <div className="flex flex-col gap-6 text-center md:flex-row md:text-left">
                    <div className="flex items-center justify-center w-48 h-16 bg-ColorLime rounded-full">
                      <CookingPot className="text-white" />
                    </div>

                    <div className="">
                      <div className="mb-4 text-2xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack lg:text-2xl">
                        Easy Ordering
                      </div>
                      <p>
                        Browse the menu, select your favorite items, and place
                        your order directly from your smartphone.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Feature Item */}
                {/* Feature Item */}
                <div
                  className="jos"
                  data-jos_animation="fade-left"
                  data-jos_delay="0.3"
                >
                  <div className="flex flex-col gap-6 text-center md:flex-row md:text-left">
                    <div className="flex items-center justify-center w-64 h-16 bg-ColorLime rounded-full">
                      <HandPlatter className="text-white" />
                    </div>
                    <div className="">
                      <div className="mb-4 text-2xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack lg:text-2xl">
                        Efficient Service
                      </div>
                      <p>
                        Your order is instantly sent to the kitchen and bar,
                        ensuring prompt preparation. A waiter will serve your
                        items at your table, eliminating any delays.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Feature Item */}
                {/* Feature Item */}
                <div
                  className="jos"
                  data-jos_animation="fade-left"
                  data-jos_delay="0.6"
                >
                  <div className="flex flex-col gap-6 text-center md:flex-row md:text-left">
                    <div className="flex items-center justify-center w-56 h-16 bg-ColorLime rounded-full">
                      <HandCoins className="text-white" />
                    </div>
                    <div className="">
                      <div className="mb-4 text-2xl font-semibold leading-[1.33] -tracking-[0.5px] text-ColorBlack lg:text-2xl">
                        Seamless Transactions
                      </div>
                      <p>
                        Orderfiti manages all payments, invoices, and
                        transactions, providing a hassle-free experience for
                        both customers and staff.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Feature Item */}
              </div>
              {/* Feature List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Space */}
        </section>
        {/*...::: Features Section End :::... */}
        {/*...::: Content Section Start :::... */}
        <section className="section-content" id="features">
          {/* Section Background */}
          <div className="bg-ColorOffWhite">
            {/* Section Spacer */}
            <div className="section-space">
              {/* Section Container */}
              <div className="container-custom">
                <div className="flex flex-col gap-y-20 lg:gap-y-[100px] xl:gap-y-[120px]">
                  {/* Content Area Single */}
                  <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,_0.7fr),_1fr] lg:gap-20 xl:grid-cols-[0.8fr_minmax(0,_1fr)] xl:gap-[209px]">
                    {/* Content Block Left */}
                    <div
                      className="jos order-1 lg:order-2"
                      data-jos_animation="fade-right"
                    >
                      {/* Section Wrapper */}
                      <div>
                        {/* Section Block */}
                        <div className="mb-5">
                          <h2>Waiter App: Enhancing Service Efficiency</h2>
                        </div>
                        {/* Section Block */}
                      </div>
                      {/* Section Wrapper */}
                      <p>
                        Orderfiti streamlines your dining experience by allowing
                        you to browse the menu and place orders directly from
                        your smartphone. Orders are instantly sent to the
                        kitchen and bar, ensuring prompt preparation. Waiters
                        receive real-time notifications via the Waiter App,
                        enabling quick and efficient service.
                      </p>
                      <p>
                        The app also provides an overview of all active tables,
                        facilitating seamless communication and efficient table
                        management. Payments are processed directly at the
                        table, ensuring accurate billing and a hassle-free
                        experience.
                      </p>
                      <div className="mt-[50px]">
                        <a
                          href="#"
                          className="group relative z-10 inline-block"
                        >
                          <div className="btn is-large is-rounded is-lime">
                            Learn more
                          </div>
                          <div className="is-rounded absolute inset-0 -z-10 translate-x-[5px] translate-y-[5px] bg-ColorLimetransition-all duration-300 ease-linear group-hover:translate-x-0 group-hover:translate-y-0" />
                        </a>
                      </div>
                    </div>
                    {/* Content Block Left */}
                    {/* Content Block Right */}
                    <div
                      className="jos relative z-10 order-2 flex items-center justify-center lg:order-1"
                      data-jos_animation="fade-left"
                    >
                      {/* Content Image */}
                      <Image
                        src="/assets/img/content/waiter.png"
                        alt="content-img-1"
                        width={451}
                        height={456}
                        className="h-auto w-[50%] md:w-auto"
                      />
                      {/* Content Image Shape */}
                      <Image
                        src="/assets/img/elements/home-3-content-img-shape-1.svg"
                        alt="home-3-content-img-shape-1"
                        width={533}
                        height={521}
                        className="absolute -z-10 h-auto max-w-[90%] sm:max-w-[100%] xl:max-w-[533px]"
                      />
                    </div>
                    {/* Content Block Right */}
                  </div>
                  {/* Content Area Single */}
                  {/* Content Area Single */}
                  <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,_0.7fr)] lg:gap-20 xl:grid-cols-[1fr_minmax(0,_0.85fr)] xl:gap-[155px]">
                    {/* Content Block Left */}
                    <div
                      className="jos lg:order-1"
                      data-jos_animation="fade-left"
                    >
                      {/* Section Wrapper */}
                      <div>
                        {/* Section Block */}
                        <div className="mb-5">
                          <h2>
                            Outstanding Features to Enhance Your Experience
                          </h2>
                        </div>
                        {/* Section Block */}
                      </div>
                      {/* Section Wrapper */}
                      <p>
                        Orderfiti handles customer orders, waiter assignments,
                        point of sale (POS), invoices, and transactions. This
                        eliminates the need for a manager and accountants,
                        reducing operational costs and improving efficiency.
                      </p>
                      <ul className="flex flex-col gap-5 font-semibold text-ColorBlack">
                        <li>
                          <span className="mr-3 inline-block text-xl">
                            <BadgeCheck />
                          </span>
                          Comprehensive Management System
                        </li>
                        <li>
                          <span className="mr-3 inline-block text-xl">
                            <BadgeCheck />
                          </span>
                          Instant Order Notifications
                        </li>
                        <li>
                          <span className="mr-3 inline-block text-xl">
                            <BadgeCheck />
                          </span>
                          Table Management
                        </li>
                        <li>
                          <span className="mr-3 inline-block text-xl">
                            <BadgeCheck />
                          </span>
                          Payment Processin
                        </li>
                      </ul>
                    </div>
                    {/* Content Block Left */}
                    {/* Content Block Right */}
                    <div
                      className="jos relative z-10 flex items-center justify-center lg:order-2"
                      data-jos_animation="fade-right"
                    >
                      {/* Content Image */}
                      <Image
                        src="/assets/img/content/checkout.png"
                        alt="content-img-2"
                        width={451}
                        height={456}
                        className="h-auto w-[50%] md:w-auto"
                      />
                      {/* Content Image Shape */}
                      <Image
                        src="/assets/img/elements/home-3-content-img-shape-2.svg"
                        alt="home-3-content-img-shape-2"
                        width={533}
                        height={521}
                        className="absolute -z-10 h-auto max-w-[90%] sm:max-w-[100%] xl:max-w-[533px]"
                      />
                    </div>
                    {/* Content Block Right */}
                  </div>
                  {/* Content Area Single */}
                </div>
              </div>
              {/* Section Container */}
            </div>
            {/* Section Spacer */}
          </div>
          {/* Section Background */}
        </section>
        {/*...::: Content Section End :::... */}
        {/* Horizontal Text Slider */}
        <div className="overflow-hidden bg-ColorBlack py-5 text-3xl font-bold uppercase leading-[1.4] tracking-widest text-white">
          {/* Horizontal Slider Block*/}
          <div className="horizontal-slide-from-right-to-left flex gap-x-[30px]">
            <span className="inline-block min-w-[900px]">
              EFFORTLESS ORDERING & MANAGEMENT
            </span>
            <Image
              src="/assets/img/icons/fire-icon.png"
              alt="arm-icon"
              width={32}
              height={32}
              className="size-10"
            />
            <span className="inline-block min-w-[855px]">
              EFFORTLESS ORDERING & MANAGEMENT
            </span>
            <Image
              src="/assets/img/icons/fire-icon.png"
              alt="arm-icon"
              width={32}
              height={32}
              className="size-10"
            />
            <span className="inline-block min-w-[855px]">
              EFFORTLESS ORDERING & MANAGEMENT
            </span>
            <Image
              src="/assets/img/icons/fire-icon.png"
              alt="arm-icon"
              width={32}
              height={32}
              className="size-10"
            />
            <span className="inline-block min-w-[855px]">
              EFFORTLESS ORDERING & MANAGEMENT
            </span>
            <Image
              src="/assets/img/icons/fire-icon.png"
              alt="arm-icon"
              width={32}
              height={32}
              className="size-10"
            />
          </div>
          {/* Horizontal Slider Block*/}
        </div>
        {/* Horizontal Text Slider */}
        {/*...::: Video Class Section Start :::... */}
        <section className="video-class-section">
          <div className="relative z-10">
            {/* Section Space */}
            <div className="section-space">
              {/* Section Container */}
              <div className="container-default">
                {/* Section Content Wrapper */}
                <div className="jos mb-[60px] xl:mb-20">
                  {/* Section Content Block */}
                  <div className="mx-auto max-w-[636px]">
                    <h2 className="text-center">
                      Discover a World of Management Insights
                    </h2>
                  </div>
                  <div
                    className="mx-auto my-8 max-w-xl lg:mb-[50px] lg:max-w-2xl xl:max-w-3xl xxl:max-w-[896px] jos text-center"
                    data-jos_once={1}
                    data-jos_animation="fade-up"
                    data-jos_timingfunction="ease"
                    data-jos_duration="0.7"
                    data-jos_delay="0.5"
                    data-jos_counter={1}
                  >
                    <p>
                      Orderfiti&apos;s Admin Dashboard is your gateway to
                      streamlined operations and in-depth insights. A
                      comprehensive management system that handles customer
                      orders, waiter assignments restaurant owners and managers,
                      this powerful tool centralizes all essential functions and
                      provides comprehensive control over your business.
                    </p>
                  </div>

                  {/* Section Content Block */}
                </div>
                {/* Section Content Wrapper */}
                {/* Video Class List*/}
                <div className="relative mb-10 lg:mb-20 mx-auto max-w-[1076px] rounded-tl-[10px] rounded-tr-[10px]">
                  <Image
                    src="/assets/img/content/dashboard.jpg"
                    alt="hero-dashboard"
                    width={1076}
                    height={563}
                    data-jos_animation="zoom-in-down"
                  />
                </div>

                {/* Video Class List*/}
                <div className="flex justify-center">
                  <Link
                    href="https://orderfiti.twisac.xyz/#/signup"
                    className="group relative z-10 inline-block"
                  >
                    <div className="btn is-large is-rounded is-lime">
                      Get Started Now
                    </div>
                    <div className="is-rounded absolute inset-0 -z-10 translate-x-[5px] translate-y-[5px] bg-ColorLimetransition-all duration-300 ease-linear group-hover:translate-x-0 group-hover:translate-y-0" />
                  </Link>
                </div>
              </div>
              {/* Section Container */}
            </div>
            {/* Section Space */}
            <Image
              src="/assets/img/elements/hero-3-shapes-1.svg"
              alt="hero-2-shape-1"
              width={110}
              height={191}
              className="absolute -left-16 top-[150px] -z-10 hidden sm:inline-block"
            />
          </div>
        </section>
        {/*...::: Video Section End :::... */}
        {/*...::: FAQ Section Start :::... */}
        <section className="section-faq" id="faq">
          <div className="relative z-10 overflow-hidden">
            {/* Section Space */}
            <div className="section-space">
              {/* Section Container */}
              <div className="container-default">
                {/* Section Content Wrapper */}
                <div className="jos mb-[60px] xl:mb-20">
                  {/* Section Content Block */}
                  <div className="mx-auto max-w-[625px]">
                    <h2 className="text-center">
                      Frequently asked questions about our digital agency
                    </h2>
                  </div>
                  {/* Section Content Block */}
                </div>
                {/* Section Content Wrapper */}
                {/* FAQ Area */}
                <div className="jos">
                  {/* Accordion List */}
                  <ul className="mx-auto max-w-[1076px] rounded-[10px] border border-ColorBlack">
                    {/* Accordion Item */}
                    <li className="accordion-item active overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                      {/* Accordion Header */}
                      <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
                        <button className="flex-1 text-left">
                          What is Orderfiti?
                        </button>
                        <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorLime">
                          <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white" />
                          <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white" />
                        </div>
                      </div>
                      {/* Accordion Header */}
                      {/* Accordion Body */}
                      <div className="accordion-body max-w-[826px] opacity-80">
                        <p className="pt-5">
                          Orderfiti is an innovative app designed to simplify
                          the dining experience by allowing customers to order
                          food and drinks directly from their smartphones. It
                          also includes a comprehensive management system that
                          handles customer orders, waiter assignments, point of
                          sale (POS), invoices, and transactions, eliminating
                          the need for a manager and accountants.
                        </p>
                      </div>
                      {/* Accordion Body */}
                    </li>
                    {/* Accordion Item */}
                    {/* Accordion Item */}
                    <li className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                      {/* Accordion Header */}
                      <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
                        <button className="flex-1 text-left">
                          How does Orderfiti work?
                        </button>
                        <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorLime">
                          <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white" />
                          <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white" />
                        </div>
                      </div>
                      {/* Accordion Header */}
                      {/* Accordion Body */}
                      <div className="accordion-body max-w-[826px] opacity-80">
                        <p className="pt-5">
                          Customers use the Orderfiti app to browse the menu,
                          select items, and place orders directly from their
                          phone. Orders are sent to the kitchen and bar, and a
                          dedicated Waiter App notifies waiters in real time.
                          Waiters manage orders and payments at the table, while
                          the Admin Dashboard provides oversight and control
                          over all aspects of restaurant operations.
                        </p>
                      </div>
                      {/* Accordion Body */}
                    </li>
                    {/* Accordion Item */}
                    {/* Accordion Item */}
                    <li className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                      {/* Accordion Header */}
                      <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
                        <button className="flex-1 text-left">
                          Do I need to download multiple apps to use Orderfiti?
                        </button>
                        <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorLime">
                          <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white" />
                          <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white" />
                        </div>
                      </div>
                      {/* Accordion Header */}
                      {/* Accordion Body */}
                      <div className="accordion-body max-w-[826px] opacity-80">
                        <p className="pt-5">
                          No, you only need to download one app. Customers use
                          the Orderfiti app to place orders, while wait staff
                          use the Waiter App, which is integrated into the same
                          system. The Admin Dashboard is accessible through a
                          web interface for restaurant management.
                        </p>
                      </div>
                      {/* Accordion Body */}
                    </li>
                    {/* Accordion Item */}
                    {/* Accordion Item */}
                    <li className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                      {/* Accordion Header */}
                      <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
                        <button className="flex-1 text-left">
                          Can Orderfiti handle large volumes of orders?
                        </button>
                        <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorLime">
                          <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white" />
                          <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white" />
                        </div>
                      </div>
                      {/* Accordion Header */}
                      {/* Accordion Body */}
                      <div className="accordion-body max-w-[826px] opacity-80">
                        <p className="pt-5">
                          Yes, Orderfiti is designed to efficiently manage high
                          volumes of orders. The app&apos;s real-time updates
                          and comprehensive management system ensure that your
                          restaurant can handle busy periods with ease.
                        </p>
                      </div>
                      {/* Accordion Body */}
                    </li>
                    {/* Accordion Item */}
                    {/* Accordion Item */}
                    <li className="accordion-item overflow-hidden border-b border-ColorBlack p-[30px] last:border-b-0">
                      {/* Accordion Header */}
                      <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-ColorBlack">
                        <button className="flex-1 text-left">
                          How does Orderfiti improve staff efficiency?
                        </button>
                        <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-ColorLime">
                          <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white" />
                          <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white" />
                        </div>
                      </div>
                      {/* Accordion Header */}
                      {/* Accordion Body */}
                      <div className="accordion-body max-w-[826px] opacity-80">
                        <p className="pt-5">
                          Orderfiti enhances staff efficiency by providing
                          real-time order notifications, streamlining
                          communication between the kitchen, bar, and wait
                          staff, and automating payment processing. The Waiter
                          App helps manage table assignments and track order
                          status, reducing manual tasks and speeding up service.
                        </p>
                      </div>
                      {/* Accordion Body */}
                    </li>
                    {/* Accordion Item */}
                  </ul>
                  {/* Accordion List */}
                  <div className="jos mt-[60px] flex justify-center xl:mt-20">
                    <a
                      href="contact.html"
                      className="btn is-lime is-rounded btn-animation is-large group"
                    >
                      <span>Still, have any questions? Contact us</span>
                    </a>
                  </div>
                </div>
                {/* FAQ Area */}
              </div>
              {/* Section Container */}
            </div>
            {/* Section Space */}
            {/* FAQ Shape - 1 */}
            <div className="absolute left-0 top-0 -z-10">
              <Image
                src="/assets/img/elements/faq-1-shape-1.svg"
                alt="service-section-shape"
                width={390}
                height={507}
              />
            </div>
            {/* FAQ Shape - 2 */}
            <div className="absolute bottom-0 right-0 -z-10">
              <Image
                src="/assets/img/elements/faq-1-shape-2.svg"
                alt="service-section-shape"
                width={467}
                height={609}
              />
            </div>
          </div>
        </section>
        {/*...::: FAQ Section End :::... */}
        {/*...::: Newsletter Section Start :::... */}
        <section className="section-newsletter">
          {/* Section Space */}
          <div className="py-20 lg:py-[100px] xl:py-36">
            {/* Section Container */}
            <div className="container-default">
              <div className="grid items-center gap-5 overflow-hidden rounded-3xl bg-ColorLime2 px-8 text-ColorBlack md:grid-cols-2 md:gap-10 md:px-0 lg:grid-cols-[0.8fr_1fr] lg:gap-[66px] lg:rounded-[50px] xl:overflow-visible">
                <div className="relative z-10 order-2 flex items-center justify-center md:order-1">
                  <Image
                    src="/assets/img/content/payorder.png"
                    alt="newsletter"
                    width={306}
                    height={585}
                    className="h-auto w-[50%] md:w-auto xl:-mt-20"
                  />
                  <Image
                    src="/assets/img/elements/home-3-content-img-shape-1.svg"
                    alt="home-3-content-img-shape-1"
                    width={533}
                    height={521}
                    className="absolute -z-10 mb-8 h-auto max-w-[90%] sm:max-w-[100%] xl:max-w-[533px]"
                  />
                </div>
                <div className="order-1 py-10 md:order-2 md:py-[60px] md:pr-12 lg:py-20 lg:pr-[70px] xl:py-[80px] xl:pr-[100px]">
                  {/* Section Content Wrapper */}
                  <div className="mb-5">
                    {/* Section Content Block */}
                    <div>
                      <h2 className="jos">
                        Download Now and Simplify Your Experience Today
                      </h2>
                    </div>
                    {/* Section Content Block */}
                  </div>
                  {/* Section Content Wrapper */}
                  <p className="text-ColorBlack/80">
                    Get started with Orderfiti by downloading our app and
                    discovering the future of effortless ordering and efficient
                    management.
                  </p>
                  <div className="mt-6 flex gap-6 lg:mt-[50px]">
                    <a href="" aria-label="icon-apple-app-store">
                      <Image
                        src="/assets/img/icons/icon-apple-app-store.svg"
                        alt="icon-apple-app-store"
                        width={188}
                        height={60}
                        className="h-full w-auto"
                      />
                    </a>
                    <a href="" aria-label="icon-google-play-store">
                      <Image
                        src="/assets/img/icons/icon-google-play-store.svg"
                        alt="icon-google-play-store"
                        width={188}
                        height={60}
                        className="h-full w-auto"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Space */}
        </section>
        {/*...::: Newsletter Section End :::... */}
        <div className="section-contact-info bg-ColorOffWhite" id="contact">
          {/* Section Space */}
          <div className="section-space">
            {/* Section Container */}
            <div className="container-default">
              <div
                className="mx-auto mb-20 flex max-w-[720px] flex-col justify-center text-center jos"
                data-jos_once={1}
                data-jos_animation="fade-up"
                data-jos_timingfunction="ease"
                data-jos_duration="0.7"
                data-jos_delay="0.5"
                data-jos_counter={1}
              >
                <h2 className="mb-5 font-DmSans -tracking-[1px]">
                  We’re Here to Help!
                </h2>
                <p className="mb-[50px]">
                  Have questions or need support? Our team is dedicated to
                  providing you with the assistance you need. Whether you’re a
                  customer looking for help with the app or a restaurant
                  interested in learning more about Orderfiti’s features, we’re
                  here to assist you.
                </p>
              </div>

              <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-20 xl:grid-cols-[0.9fr_1fr] xl:gap-32 xxl:grid-cols-[0.7fr_1fr] xxl:gap-[210px]">
                {/* Contact Info List */}
                <div className="flex flex-col gap-[60px]">
                  {/* Contact Info Item */}
                  <div
                    className="flex gap-[30px] jos"
                    data-jos_delay={0}
                    data-jos_once={1}
                    data-jos_animation="fade-up"
                    data-jos_timingfunction="ease"
                    data-jos_duration="0.7"
                    data-jos_counter={1}
                  >
                    <Image
                      src="/assets/img/icons/icon-duotone-chat.svg"
                      alt="icon-duotone-chat"
                      width={64}
                      height={60}
                      className="mb-[30px] h-[60px] w-auto"
                    />
                    <div>
                      <div className="mb-4 text-2xl font-semibold -tracking-[0.5] text-ColorBlack">
                        Chat with us
                      </div>
                      <p>
                        We&apos;re waiting to help you every Monday-Friday from
                        9 am to 5 pm EAT easily.
                      </p>
                    </div>
                  </div>
                  {/* Contact Info Item */}
                  {/* Contact Info Item */}
                  <div
                    className="flex gap-[30px] jos"
                    data-jos_delay="0.3"
                    data-jos_once={1}
                    data-jos_animation="fade-up"
                    data-jos_timingfunction="ease"
                    data-jos_duration="0.7"
                    data-jos_counter={1}
                  >
                    <Image
                      src="/assets/img/icons/icon-duotone-phone.svg"
                      alt="icon-duotone-phone"
                      width={64}
                      height={60}
                      className="mb-[30px] h-[60px] w-auto"
                    />
                    <div>
                      <div className="mb-2 text-2xl font-semibold -tracking-[0.5] text-ColorBlack">
                        Give us a call
                      </div>
                      <p>
                        <a
                          href="tel:+01234567890"
                          className="font-semibold hover:text-ColorBlue"
                        >
                          +254 729 511 517 <br /> +254 736 236 494
                        </a>
                        <br />. Every monday-friday from 9 am to 5 pm.
                      </p>
                    </div>
                  </div>
                  {/* Contact Info Item */}
                  {/* Contact Info Item */}
                  <div
                    className="flex gap-[30px] jos"
                    data-jos_delay="0.6"
                    data-jos_once={1}
                    data-jos_animation="fade-up"
                    data-jos_timingfunction="ease"
                    data-jos_duration="0.7"
                    data-jos_counter={1}
                  >
                    <Image
                      src="/assets/img/icons/icon-duotone-message.svg"
                      alt="icon-duotone-message"
                      width={64}
                      height={60}
                      className="mb-[30px] h-[60px] w-auto"
                    />
                    <div>
                      <div className="mb-4 text-2xl font-semibold -tracking-[0.5] text-ColorBlack">
                        Email Us
                      </div>
                      <p>
                        Drop us an email at{" "}
                        <a
                          href="mailto:example@yourmail.com"
                          className="font-semibold underline underline-offset-4 hover:text-ColorBlue"
                        >
                          info@orderfiti.com
                        </a>{" "}
                        and you&apos;ll receive a reply within 24 hours.
                      </p>
                    </div>
                  </div>
                  {/* Contact Info Item */}
                </div>
                {/* Contact Info List */}
                {/* Contact Form Block */}
                <div
                  className="xm:p-10 rounded-[10px] border-2 border-ColorBlack/50 bg-ColorOffWhite p-[30px] jos"
                  data-jos_once={1}
                  data-jos_animation="fade-up"
                  data-jos_timingfunction="ease"
                  data-jos_duration="0.7"
                  data-jos_delay="0.5"
                  data-jos_counter={1}
                >
                  <div className="mb-5 text-xl font-semibold tracking-tight text-ColorBlack lg:text-2xl">
                    Send us a message
                  </div>
                  <form action="https://formspree.io/f/mlqvzkyx" method="post">
                    {/* From Group List */}
                    <div className="flex flex-col gap-6">
                      {/* Form Group Item*/}
                      <div>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your full name"
                          className="w-full border-b-2 border-dashed border-ColorBlack/20 bg-ColorOffWhite px-2 py-[15px] outline-none transition-all duration-300 placeholder:text-ColorBlack/50 focus:border-ColorBlue"
                        />
                      </div>
                      {/* Form Group Item*/}
                      {/* Form Group Item*/}
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="Enter your phone number*"
                          className="w-full border-b-2 border-dashed border-ColorBlack/20 bg-ColorOffWhite px-2 py-[15px] outline-none transition-all duration-300 placeholder:text-ColorBlack/50 focus:border-ColorBlue"
                        />
                      </div>
                      {/* Form Group Item*/}
                      {/* Form Group Item*/}
                      <div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                          className="w-full border-b-2 border-dashed border-ColorBlack/20 bg-ColorOffWhite px-2 py-[15px] outline-none transition-all duration-300 placeholder:text-ColorBlack/50 focus:border-ColorBlue"
                        />
                      </div>
                      {/* Form Group Item*/}
                      {/* Form Group Item*/}
                      <div>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Write us your question here..."
                          className="min-h-[130px] w-full border-b-2 border-dashed border-ColorBlack/20 bg-ColorOffWhite px-2 py-[15px] outline-none transition-all duration-300 placeholder:text-ColorBlack/50 focus:border-ColorBlue"
                          defaultValue={""}
                        />
                      </div>
                      {/* Form Group Item*/}
                    </div>
                    {/* From Group List */}
                    <button
                      type="submit"
                      className="btn is-lime is-rounded is-large mt-8 block w-full"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                {/* Contact Form Block */}
              </div>
              {/* Section Container */}
            </div>
            {/* Section Space */}
          </div>
        </div>
      </main>
      {/*...::: Footer Section Start :::... */}
      <Footer />
      {/*...::: Footer Section End :::... */}
    </div>
  );
}
