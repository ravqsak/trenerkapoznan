import Link from "next/link"
import { Phone, Mail, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-xl font-semibold text-primary"
            >
              Aktywnie na co dzień
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Trening personalny dla kobiet w Poznaniu. Spokojnie, bez presji i
              stresu.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground">Kontakt</h3>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="tel:+48606753390"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>606 753 390</span>
              </a>
              <a
                href="mailto:ak.annakosinska@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>ak.annakosinska@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="font-semibold text-foreground">Obserwuj mnie</h3>
            <div className="mt-3 flex gap-4">
              <a
                href="https://www.instagram.com/m/aktywnienacodzien_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/a.ania.kosinska.a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-4">
              <Link
                href="/polityka-prywatnosci"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Polityka prywatności
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aktywnie na co dzień. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
