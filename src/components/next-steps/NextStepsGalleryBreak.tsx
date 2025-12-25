export default function NextStepsGallery() {
  return (
    <section className="bg-black py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden border border-white/10 bg-black/40 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
          <img
            src="/images/next-steps/gallery-door.jpg"
            alt="Framed work displayed in a quiet gallery space"
            className="w-full h-[420px] sm:h-[520px] md:h-[600px] object-cover object-center"
          />

          {/* Soft fade into the hero above */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 via-black/0" />

          {/* Soft fade into the roadmap below */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/0" />
        </div>
      </div>
    </section>
  );
}
