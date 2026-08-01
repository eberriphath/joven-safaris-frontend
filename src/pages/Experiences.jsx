import { Link } from "react-router-dom";

function Experiences() {
  return (
    <>
      <section className="relative h-screen overflow-hidden">

        {/* Background Image */}
        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            scale-105
            animate-[heroZoom_18s_ease-in-out_infinite_alternate]
          "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1800&q=80')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div
          className="
            relative
            z-10
            h-full
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-6
          "
        >
          {/* Tag */}
          <span
            className="
              uppercase
              tracking-[0.35em]
              text-sm
              font-semibold
              text-[#D4A940]
              mb-6
            "
          >
            Experiences
          </span>

          {/* Heading */}
          <h1
            className="
              font-serif
              text-white
              text-5xl
              md:text-7xl
              leading-tight
              max-w-5xl
            "
          >
            Every Journey
            <br />
            Tells A Story
          </h1>

          {/* Description */}
          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              md:text-xl
              text-white/85
              leading-relaxed
            "
          >
            Not just safaris.
            <br />
            Moments that stay with you forever.
          </p>

          {/* Scroll Cue */}
          <a
            href="#story"
            className="
              mt-16
              flex
              flex-col
              items-center
              gap-2
              text-white/80
              hover:text-[#D4A940]
              transition-colors
            "
          >
            <span className="text-sm tracking-[0.2em] uppercase">
              Discover the stories
            </span>

            <span className="text-3xl animate-bounce">
              ↓
            </span>
          </a>
        </div>
      </section>
    </>
  );
}

export default Experiences;