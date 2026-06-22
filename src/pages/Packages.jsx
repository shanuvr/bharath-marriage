import React from "react";
import { Helmet } from 'react-helmet-async';

function Packages() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: null,
      subtitle: "Get started",
      featured: false,
      features: [
        "Create your profile",
        "Browse member profiles",
        "Basic search filters",
        "Express interest",
        "View limited matches",
      ],
      buttonText: "Create free profile",
    },
    {
      name: "Premium",
      price: "₹2,999",
      period: "/ membership",
      subtitle: "Most chosen by families",
      featured: true,
      features: [
        "Everything in Free",
        "View contact details",
        "Unlimited interests",
        "Advanced search filters",
        "Priority profile visibility",
        "Horoscope matching",
        "Chat with matches",
      ],
      buttonText: "Choose Premium",
    },
    {
      name: "Elite",
      price: "₹5,999",
      period: "/ membership",
      subtitle: "Personalized assistance",
      featured: false,
      features: [
        "Everything in Premium",
        "Dedicated relationship manager",
        "Verified profile badge",
        "Personalized match suggestions",
        "Priority customer support",
        "Family-assisted matchmaking",
      ],
      buttonText: "Choose Elite",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Matrimony Packages & Membership Plans | Bharath Marriage</title>
        <meta
          name="description"
          content="Explore affordable matrimony packages and membership plans to connect with verified bride and groom profiles across Kerala."
        />
      </Helmet>
      {/* Header */}
      <section className="pt-14 pb-10 md:pt-20 md:pb-14 px-margin-mobile md:px-margin-desktop border-b border-slate-100">
        <div className="max-w-container-max mx-auto text-center">
          <p className="text-[10px] md:text-[11px] font-label-caps font-semibold text-deep-maroon tracking-[0.18em] uppercase mb-2.5">
            Membership
          </p>
          <h2 className="font-display-lg text-2xl md:text-[32px] text-charcoal-text leading-tight">
            Choose the plan that fits your search
          </h2>
          <p className="text-soft-gray mt-3 max-w-md mx-auto text-xs md:text-sm leading-relaxed">
            Transparent pricing, no hidden charges. Upgrade anytime as your search becomes more serious.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 md:py-16 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-5 md:gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl flex flex-col h-full transition-all duration-300 ${plan.featured
                    ? "border border-deep-maroon/30 shadow-lg md:-translate-y-2 bg-white"
                    : "border border-slate-200 shadow-sm bg-white hover:border-slate-300 hover:shadow-md"
                  }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-deep-maroon text-white text-[9px] font-label-caps font-semibold px-3.5 py-1 rounded-full uppercase tracking-[0.12em] shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <h3 className="text-sm font-semibold text-charcoal-text uppercase tracking-wide">
                      {plan.name}
                    </h3>
                    <p className="text-soft-gray text-[11px] md:text-xs mt-1">
                      {plan.subtitle}
                    </p>

                    <div className="mt-5 flex items-baseline gap-1.5">
                      <span className="text-3xl md:text-[34px] font-bold text-charcoal-text leading-none">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-soft-gray text-[11px]">
                          {plan.period}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-7 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-[12.5px] md:text-[13px] text-charcoal-text/90 leading-snug"
                      >
                        <span className="material-symbols-outlined text-deep-maroon shrink-0 mt-px" style={{ fontSize: "15px" }}>
                          check
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-2.5 rounded-lg font-semibold text-[12.5px] transition-all cursor-pointer active:scale-[0.98] ${plan.featured
                        ? "bg-deep-maroon hover:bg-primary text-white shadow-sm"
                        : "bg-white border border-slate-200 hover:border-deep-maroon hover:text-deep-maroon text-charcoal-text"
                      }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-soft-gray text-[11px] mt-8">
            All plans include profile verification review. Cancel or change your plan anytime.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 px-margin-mobile md:px-margin-desktop bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display-lg text-xl md:text-2xl text-charcoal-text mb-3">
            Start your journey today
          </h2>
          <p className="text-soft-gray mb-7 text-xs md:text-sm leading-relaxed max-w-md mx-auto">
            Join thousands of families who trust Bharath Marriage to find meaningful, lasting relationships.
          </p>
          <button className="bg-deep-maroon hover:bg-primary text-white px-7 py-2.5 rounded-lg font-semibold text-xs md:text-[13px] transition-all cursor-pointer active:scale-[0.98] shadow-sm">
            Register now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Packages;