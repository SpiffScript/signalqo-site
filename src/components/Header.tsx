import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Activity, Menu, X } from "lucide-react";

import { RoutePath } from "../types";
import { NAV_ITEMS } from "../constants";
import { CtaButton } from "./ui/CtaButton";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-sm border-slate-800 shadow-xl"
          : "bg-slate-900 border-transparent"
      }`}
    >
      <div className="h-16 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => navigate(RoutePath.HOME)}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-none">
                <Activity className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                SignalQo
              </span>
            </button>

            <nav className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-blue-400 ${
                      isActive ? "text-blue-400" : "text-slate-300"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <CtaButton
                variant="primary"
                size="sm"
                onClick={() => navigate(RoutePath.CONTACT)}
              >
                Open a Conversation
              </CtaButton>
            </nav>

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="text-slate-200 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 text-base font-medium rounded-none transition-colors ${
                    isActive
                      ? "text-blue-400 bg-slate-800/40"
                      : "text-slate-200 hover:text-white hover:bg-slate-800/30"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-4">
              <CtaButton
                variant="primary"
                className="w-full"
                onClick={() => navigate(RoutePath.CONTACT)}
              >
                Open a Conversation
              </CtaButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
