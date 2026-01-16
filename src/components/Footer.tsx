import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Jordy Jonathan Monteiro de Azevêdo. 
          Feito com <Heart size={14} className="text-primary" /> em João Pessoa, PB.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
