"use client";

export default function AboutHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">

      {/* Label */}
      <p className="uppercase tracking-widest text-sm text-gray-500 mb-6">
        About Celebso
      </p>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl text-[#fcb900] font-extrabold leading-tight max-w-5xl">
        We turn talent
        <br />
        into{" "}
        <span className="text-[#312e2e]">
          global influence
        </span>.
      </h1>

      {/* Description */}
      <p className="mt-10 text-xl text-gray-600 max-w-3xl leading-relaxed">
        Celebso is built for artists who don’t just want fame — but recognition,
        respect, and a legacy that travels beyond borders.
      </p>

    </section>
  );
}
