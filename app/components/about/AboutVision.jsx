export default function AboutVision() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-black/10">
      <div className="grid md:grid-cols-2 gap-16 text-[#312e2e]">
        
        {/* Our Vision */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Our Vision
          </h2>
          <p className="text-lg leading-relaxed">
            To make Indian talent globally visible and create a new generation
            of artists, creators, and celebrities who are seen, heard, and
            remembered on the world stage.
          </p>
        </div>

        {/* Why We Exist */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Why We Exist
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            In an industry obsessed with short-term hype, Celebso focuses on
            longevity. We believe true stardom is not viral — it’s built,
            positioned, and sustained with intention.
          </p>
        </div>

      </div>
    </section>
  );
}
