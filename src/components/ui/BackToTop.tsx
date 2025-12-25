import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { scrollToTop } from "./scroll";

type Props = {
  showAfter?: number;
  className?: string;
};

export default function BackToTop({ showAfter = 0, className = "" }: Props) {
  const [visible, setVisible] = useState(false);
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY >= showAfter);

      // approximate position of the button in page coordinates (bottom-right corner)
      const buttonY = scrollY + window.innerHeight - 40;
      const buttonX = window.scrollX + window.innerWidth - 40;

      const darkSections = document.querySelectorAll<HTMLElement>(
        '[data-theme="dark-section"]'
      );

      let isOnDark = false;

      darkSections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        const left = rect.left + window.scrollX;
        const right = left + rect.width;

        if (
          buttonX >= left &&
          buttonX <= right &&
          buttonY >= top &&
          buttonY <= bottom
        ) {
          isOnDark = true;
        }
      });

      setOnDark(isOnDark);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  if (!visible) return null;

  const colorClasses = onDark
    ? "text-slate-50 drop-shadow"
    : "text-slate-900";

  return (
    <div
      className={[
        "fixed z-50 bottom-6 right-6",
        "transition-opacity duration-200",
        className,
      ].join(" ")}
    >
      <button
        onClick={() => scrollToTop()}
        aria-label="Back to top"
        className={[
          "inline-flex items-center justify-center",
          "text-xl",
          "transition-transform duration-200",
          "hover:-translate-y-1",
          colorClasses,
        ].join(" ")}
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </div>
  );
}
