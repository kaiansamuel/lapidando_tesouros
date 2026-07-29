"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/content/site";
import { Brand } from "@/components/ui/brand";

export function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const firstLink = navRef.current?.querySelector<HTMLElement>("a[href]");

    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    document.body.classList.add("menu-open");
    firstLink?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !navRef.current || !buttonRef.current) {
        return;
      }

      const focusable = [
        buttonRef.current,
        ...navRef.current.querySelectorAll<HTMLElement>("a[href]"),
      ];
      const first = focusable[0];
      const last = focusable.at(-1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("menu-open");
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [open]);

  function closeMenu() {
    buttonRef.current?.focus();
    setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-header__brand" href="#inicio" aria-label="Lapidando Tesouros — início">
          <Brand />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contato">
          Fale conosco
        </a>

        <button
          ref={buttonRef}
          className="menu-toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav
        ref={navRef}
        id="mobile-menu"
        className={`mobile-nav ${open ? "mobile-nav--open" : ""}`}
        aria-label="Navegação móvel"
        aria-hidden={!open}
      >
        <div className="container mobile-nav__inner">
          <p className="eyebrow">Navegue</p>
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
          <a className="button button--primary" href="#contato" onClick={closeMenu}>
            Fale com a equipe
          </a>
        </div>
      </nav>
    </header>
  );
}
