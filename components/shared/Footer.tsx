export default function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-background py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Shivshankar Mali. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Developed & Maintained by <span className="font-semibold text-foreground">Shivshankar Mali</span>
        </p>
      </div>
    </footer>
  );
}
