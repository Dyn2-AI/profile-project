import Link from "next/link";
import { Button } from "./ui/button";

// component
import Nav from "./Nav";
<<<<<<< HEAD
import MobileNav from "./MobileNav";
=======
>>>>>>> fafa8ce96770960803c0904a5bd12f217a72be9a

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Asep<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* dekstop nav hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
<<<<<<< HEAD
        <div className="xl:hidden">
          <MobileNav />
        </div>
=======
        <div className="xl:hidden">mobile nav</div>
>>>>>>> fafa8ce96770960803c0904a5bd12f217a72be9a
      </div>
    </header>
  );
};

export default Header;
