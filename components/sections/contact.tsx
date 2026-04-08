import { Card, CardContent } from "@/components/ui/card"
import { FadeIn } from "@/components/fade-in"
import { Phone, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section id="kontakt" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Kontakt
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              <span className="text-balance">
                Zacznij spokojnie – pierwszy krok należy do Ciebie
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Wypełnij formularz, a skontaktuję się z Tobą w ciągu 24 godzin.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <Card className="mt-10 overflow-hidden border-border/50 shadow-xl">
            <CardContent className="p-0">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfrCAG5SjsBYxLJSiQVhjqSrwmKGMOkGy_R99cHJ4AdfnRE2Q/viewform?embedded=true"
                width="100%"
                height="700"
                className="border-0"
                title="Formularz kontaktowy"
              >
                Ładowanie formularza...
              </iframe>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
            <a
              href="tel:+48606753390"
              className="group inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <span className="font-medium">606 753 390</span>
            </a>
            <a
              href="mailto:ak.annakosinska@gmail.com"
              className="group inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <span className="font-medium">ak.annakosinska@gmail.com</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
