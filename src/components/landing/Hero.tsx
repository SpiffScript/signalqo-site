// src/components/landing/Hero.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "/images/landing/signalqo-hero-wheel.jpg";
import { CtaButton } from "../ui/CtaButton";
import { RoutePath } from "../../types";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 h-[80vh] min-h-[820px] max-h-[1080px]">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundPosition: "center center",
        }}
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/65 to-slate-950/25" />

      {/* Using the standard 7xl rail for consistency */}
      <div className="relative mx-auto flex h-full max-w-7xl px-6 md:px-8">
        <div className="flex flex-col justify-center max-w-3xl text-left">
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.2]">
            Leading a business isn’t complicated – it’s heavy.
          </h1>

          <p className="mt-5 text-base text-slate-200/90 md:text-lg">
            We’ll help you carry the weight.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <CtaButton
              type="button"
              variant="navy"
              onClick={() => navigate(RoutePath.CONTACT)} // Consistency fix
            >
              Start a Decision Review
            </CtaButton>

            <CtaButton
              type="button"
              variant="primary"
              onClick={() => navigate(RoutePath.SERVICES)} // Consistency fix
            >
              See How SignalQo Works
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
