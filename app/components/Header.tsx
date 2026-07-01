import Link from "next/link";
import { HeaderClock } from "./HeaderClock";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header id="header">
      <Link id="header-logo" className="h-link" href="/">
        Monk Haus
      </Link>

      <HeaderClock />

      <a id="header-contact" className="h-link" href="mailto:hello@monk.haus">
        Contact
      </a>

      <p id="header-about">
        Monk Haus is a boutique creative studio building custom websites and
        brand identities for clients across industries. No static mockups, no
        endless revisions. Design happens live in the browser, so the site is
        the artifact.
      </p>

      <ThemeToggle />
    </header>
  );
}
