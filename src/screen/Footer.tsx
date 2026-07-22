export const Footer = () => (
  <section className="relative z-10 border-t border-white/10 bg-black/90 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center justify-center gap-2 text-center">
      <p className="text-sm text-white/80 font-body">
        &copy; {new Date().getFullYear()} Guillermo Silva. Todos los derechos reservados.
      </p>
    </div>
  </section>
);