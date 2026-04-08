import Link from "next/link"
import { Phone, Mail } from "lucide-react"

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
              Aktywnie na codzień
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

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground">Informacje</h3>
            <div className="mt-3 flex flex-col gap-2">
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
            © {new Date().getFullYear()} Aktywnie na codzień. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
