import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import witcherLogo from "../../assets/logo.png";

export default function MyNavbar() {
  return (
    <div className="navbar-container">
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <img
            src={witcherLogo}
            alt="The Witcher Logo"
            width={50}
            height={50}
          />
          <p className="font-bold text-inherit ml-2">The Witcher</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              L'univers
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Bestiaire
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              La map
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
