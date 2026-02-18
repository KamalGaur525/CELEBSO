"use client";

export default function EnquiryForm() {
  return (
    <section className="relative min-h-screen bg-neutral-950 px-6 py-40 overflow-hidden">
      
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">
            Booking Request
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] text-white">
            Artist
            <br />
            <span className="text-white/60">Slot Booking</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Tell us about your event. We curate premium artist experiences
            tailored to your occasion.
          </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 border-t border-white/10 pt-12">
          
          {[
            { label: "Full Name", placeholder: "Your full name", type: "text" },
            { label: "Email Address", placeholder: "you@email.com", type: "email" },
            { label: "Mobile / WhatsApp", placeholder: "+91 XXXXX XXXXX", type: "text" },
            { label: "City", placeholder: "Event city", type: "text" },
            { label: "Event Date", type: "date" },
            { label: "Preferred Time Slot", placeholder: "Evening / Night", type: "text" },
            { label: "Estimated Budget", placeholder: "₹ 50,000 – ₹ 1,00,000", type: "text" },
          ].map((field, index) => (
            <div key={index} className="flex flex-col gap-2 px-6">
              <label className="text-xs uppercase tracking-widest text-white/40">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="
                  bg-transparent
                  border-b border-white/20
                  py-2
                  text-white
                  placeholder:text-white/30
                  focus:outline-none
                  focus:border-white
                  transition
                "
              />
            </div>
          ))}

          {/* Submit */}
          <div className="w-fit md:col-span-2 mt-10 bg-[#fcb9005d] px-10">
            <button
              type="submit"
              className="relative inline-flex items-center gap-4 py-2 text-white text-sm tracking-wide select-none"
            >
              <span className="relative z-10">Submit Enquiry</span>
              <span className="h-px w-14 bg-white transition-all duration-300" />
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
