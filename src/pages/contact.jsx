import React from "react";

export default function Contact() {
  return (
    <div className="w-full bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-rose-50/30 to-amber-50/20 pt-32 pb-20 border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10 hero-pattern pointer-events-none"></div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="font-label-caps text-xs text-heritage-gold tracking-widest font-semibold">
            CONTACT US
          </span>

          <h1 className="font-display-lg text-4xl md:text-5xl text-charcoal-text mt-4 mb-6 leading-tight uppercase tracking-wide">
            We'd Love To <br />
            <span className="text-deep-maroon">Hear From You</span>
          </h1>

          <p className="max-w-2xl mx-auto font-body-lg text-soft-gray text-sm md:text-base leading-relaxed">
            Have questions about memberships, profile verification, privacy,
            or finding the right match? Our dedicated support team is always
            ready to assist you.
          </p>
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 max-w-4xl mx-auto">

            {/* Call Card */}
            <div className="group flex flex-col items-center text-center">
              <div className="relative w-20 h-20 flex items-center justify-center mb-4">
                <div className="absolute inset-0 rounded-full bg-deep-maroon/5"></div>
                <div className="absolute w-[68px] h-[68px] rounded-full bg-deep-maroon/10 border border-deep-maroon/5"></div>
                <div className="absolute w-12 h-12 rounded-full bg-deep-maroon flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                  <span className="material-symbols-outlined text-[20px] text-white">call</span>
                </div>
              </div>
              <h3 className="font-semibold text-sm text-charcoal-text mb-1">Call Us</h3>
              <p className="text-soft-gray text-xs md:text-sm">+91 98765 43210</p>
              <p className="text-soft-gray/70 text-[10px] md:text-[11px] mt-0.5">Mon &ndash; Sat, 9am &ndash; 7pm</p>
            </div>

            {/* Email Card */}
            <div className="group flex flex-col items-center text-center">
              <div className="relative w-20 h-20 flex items-center justify-center mb-4">
                <div className="absolute inset-0 rounded-full bg-heritage-gold/5"></div>
                <div className="absolute w-[68px] h-[68px] rounded-full bg-heritage-gold/15 border border-heritage-gold/10"></div>
                <div className="absolute w-12 h-12 rounded-full bg-heritage-gold flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                  <span className="material-symbols-outlined text-[20px] text-white">mail</span>
                </div>
              </div>
              <h3 className="font-semibold text-sm text-charcoal-text mb-1">Email Us</h3>
              <p className="text-soft-gray text-xs md:text-sm break-all">support@bharathmarriage.com</p>
              <p className="text-soft-gray/70 text-[10px] md:text-[11px] mt-0.5">We reply within 24 hours</p>
            </div>

            {/* Chat Card */}
            <div className="group flex flex-col items-center text-center">
              <div className="relative w-20 h-20 flex items-center justify-center mb-4">
                <div className="absolute inset-0 rounded-full bg-deep-maroon/5"></div>
                <div className="absolute w-[68px] h-[68px] rounded-full bg-deep-maroon/10 border border-deep-maroon/5"></div>
                <div className="absolute w-12 h-12 rounded-full bg-deep-maroon flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                  <span className="material-symbols-outlined text-[20px] text-white">chat</span>
                </div>
              </div>
              <h3 className="font-semibold text-sm text-charcoal-text mb-1">Live Chat</h3>
              <p className="text-soft-gray text-xs md:text-sm">Chat with our team</p>
              <p className="text-soft-gray/70 text-[10px] md:text-[11px] mt-0.5">Available right now</p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-rose-50/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start">

            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-md p-5 md:p-8 border-t-4 border-t-deep-maroon">

              <span className="font-label-caps text-heritage-gold text-[11px] tracking-widest font-semibold">
                CONTACT FORM
              </span>

              <h2 className="font-display-lg text-2xl md:text-3xl text-charcoal-text mt-2 mb-6 uppercase tracking-wide">
                Let's Start A Conversation
              </h2>

              <form className="space-y-4">

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full h-11 rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-deep-maroon focus:border-deep-maroon"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full h-11 rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-deep-maroon focus:border-deep-maroon"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full h-11 rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-deep-maroon focus:border-deep-maroon"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full h-11 rounded-xl border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-deep-maroon focus:border-deep-maroon"
                  />
                </div>

                <textarea
                  rows="4"
                  placeholder="Tell us how we can help..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-deep-maroon focus:border-deep-maroon"
                />

                <button
                  type="submit"
                  className="w-full md:w-auto bg-deep-maroon hover:bg-primary text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Send Message
                  <span className="material-symbols-outlined text-[16px] leading-none">arrow_forward</span>
                </button>

              </form>

            </div>

            {/* Right Side */}
            <div className="flex flex-col justify-center">

              <span className="font-label-caps text-heritage-gold text-[11px] tracking-widest font-semibold">
                WE'RE HERE FOR YOU
              </span>

              <h2 className="font-display-lg text-2xl md:text-4xl text-charcoal-text mt-3 mb-5 leading-tight uppercase tracking-wide">
                Dedicated Support For Your Journey
              </h2>

              <p className="font-body-lg text-soft-gray leading-relaxed text-sm md:text-base mb-8">
                Whether you need assistance with profile verification,
                membership plans, privacy settings, or finding the right match,
                our team is always ready to guide you.
              </p>

              <div className="space-y-4">

                <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-deep-maroon/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-deep-maroon text-[20px]">
                        verified_user
                      </span>
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-charcoal-text text-sm">
                        Verified &amp; Secure
                      </h4>
                      <p className="text-soft-gray text-xs md:text-sm">
                        Your privacy and profile information are protected.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-heritage-gold/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-heritage-gold text-[20px]">
                        support_agent
                      </span>
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-charcoal-text text-sm">
                        Quick Assistance
                      </h4>
                      <p className="text-soft-gray text-xs md:text-sm">
                        Fast responses from our support team.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-deep-maroon/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-deep-maroon text-[20px]">
                        favorite
                      </span>
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-charcoal-text text-sm">
                        Trusted Matchmaking
                      </h4>
                      <p className="text-soft-gray text-xs md:text-sm">
                        Helping families build meaningful relationships.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-slate-50/40 border-t border-slate-100/60">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center">

          <span className="font-label-caps text-heritage-gold text-xs tracking-widest font-semibold">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="font-display-lg text-3xl md:text-4xl text-charcoal-text mt-3 mb-12 uppercase tracking-wide">
            Common <span className="text-deep-maroon">Questions</span>
          </h2>

          <div className="space-y-4 text-left">

            <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="font-semibold text-charcoal-text text-sm md:text-base mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-deep-maroon text-[18px]">help</span>
                Are profiles verified?
              </h4>
              <p className="text-soft-gray text-sm leading-relaxed pl-7">
                Yes. We perform profile verification checks to maintain a safe
                and trustworthy community.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="font-semibold text-charcoal-text text-sm md:text-base mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-deep-maroon text-[18px]">help</span>
                Can I hide my photos?
              </h4>
              <p className="text-soft-gray text-sm leading-relaxed pl-7">
                Yes. You can control who can view your profile photos through
                privacy settings.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h4 className="font-semibold text-charcoal-text text-sm md:text-base mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-deep-maroon text-[18px]">help</span>
                How can I contact support?
              </h4>
              <p className="text-soft-gray text-sm leading-relaxed pl-7">
                You can reach us through the contact form, phone, or live chat
                provided above.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-r from-deep-maroon to-primary py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 hero-pattern pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center">

          <span className="font-label-caps text-xs text-heritage-gold tracking-widest font-semibold block mb-3">
            JOIN TODAY
          </span>

          <h2 className="font-display-lg text-3xl md:text-4xl text-white mb-5 uppercase tracking-wide">
            Ready To Begin Your Journey?
          </h2>

          <p className="font-body-lg text-white/80 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
            Join thousands of members searching for meaningful relationships
            built on trust, compatibility, and shared values.
          </p>

          <button className="bg-white text-deep-maroon px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 active:scale-95">
            Register Free
          </button>

        </div>
      </section>

    </div>
  );
}