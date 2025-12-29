import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Vinayak Shrivas. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
