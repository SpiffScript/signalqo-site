import { NavLink } from "react-router-dom";
import { Activity, Linkedin, Facebook, X } from "lucide-react";
import { RoutePath } from "../types";

export default function Footer() {
  const phoneDisplay = "(720) 515-4810";
  const phoneHref = "tel:+17205154810";
  const email = "support@signalqo.com";

  const social = {
    linkedin: "#",
    facebook: "#",
    x: "#",
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 bg-slate-800 flex items-center justify-center rounded-none">
                <Activity className="text-blue-500 w-4 h-4" />
              </div>
              <span className="text-2xl font-bold text-slate-200">SignalQo</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300 max-w-md">
              Clarity That Makes Progress Possible.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-4">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-200">
              <NavLink to={RoutePath.HOME} className="hover:text-white transition-colors">Home</NavLink>
              <NavLink to={RoutePath.SERVICES} className="hover:text-white transition-colors">Services</NavLink>
              <NavLink to={RoutePath.LEADERSHIPQO} className="hover:text-white transition-colors">LeadershipQo</NavLink>
              <NavLink to={RoutePath.SOLUTIONS} className="hover:text-white transition-colors">Solutions</NavLink>
              <NavLink to={RoutePath.NEXT_STEPS} className="hover:text-white transition-colors">Next Steps</NavLink>
              <NavLink to={RoutePath.ABOUT} className="hover:text-white transition-colors">About</NavLink>
              <NavLink to={RoutePath.CONTACT} className="hover:text-white transition-colors">Contact</NavLink>
            </nav>

            <div className="flex items-center gap-4 text-slate-200">
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={social.x} target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-900 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a href={phoneHref} className="text-slate-300 hover:text-white transition-colors">{phoneDisplay}</a>
            <span className="hidden sm:inline text-slate-700">•</span>
            <a href={`mailto:${email}`} className="text-slate-300 hover:text-white transition-colors">{email}</a>
          </div>
            <div className="mt-2 text-sm text-slate-400">
              Based in Denver, Colorado. Supporting organizations beyond geography.
              </div>

          <div className="mt-2 flex flex-wrap justify-center items-center text-sm text-slate-400">
            <NavLink to={RoutePath.PRIVACY} className="hover:text-white transition-colors">Privacy</NavLink>
            <span className="mx-3 text-slate-600">•</span>
            <NavLink to={RoutePath.TERMS} className="hover:text-white transition-colors">Terms of Service</NavLink>
            <span className="mx-3 text-slate-600">•</span>
            <NavLink to={RoutePath.ACCEPTABLE_USE} className="hover:text-white transition-colors">Acceptable Use</NavLink>
          </div>

          <div className="mt-2 text-xs text-slate-400">
            © {new Date().getFullYear()} QoLogic LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
