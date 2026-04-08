import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/fade-in"
import { Check, Sparkles, Dumbbell, Heart, Zap, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Oferta",
  description:
    "Trening personalny dla kobiet w Poznaniu. Pakiety dla początkujących i zaawansowanych. Sprawdź cennik i wybierz odpowiedni dla siebie pakiet.",
}

const beginnerPackages = [
  {
    name: 'Pakiet „Dobry start"',
    price: "99",
    features: [
      "1 trening",
      "Poznanie siłowni",
      "Nauka podstawowych ćwiczeń",
      "Poprawna technika",
    ],
    popular: false,
  },
  {
    name: 'Pakiet „Pewność siebie"',
    price: "199",
    features: [
      "3 treningi",
      "Oswojenie siłowni",
      "Ćwiczenia z masą własnego ciała",
      "Nauka maszyn i wolnych ciężarów",
    ],
    popular: true,
  },
]

const personalTraining = [
  { sessions: "1 trening", price: "150" },
  { sessions: "3 treningi", price: "350" },
  { sessions: "6 treningów", price: "600" },
]

const benefits = [
  { icon: Heart, text: "Poprawa postawy" },
  { icon: Zap, text: "Mniej bólu pleców" },
  { icon: Sparkles, text: "Więcej energii" },
  { icon: Dumbbell, text: "Trwała sprawność" },
]

export default function OfertaPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-semibold text-foreground sm:text-5xl">
                <span className="text-balance">Oferta treningowa</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Niezależnie od tego, czy dopiero zaczynasz, czy chcesz rozwinąć
                swoje umiejętności – znajdziesz tu coś dla siebie.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Dla początkujących */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground">
                Dla początkujących
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Trening personalny dla kobiet w Poznaniu, które chcą zacząć
                ćwiczyć na siłowni i potrzebują wsparcia w nauce techniki oraz
                obsługi sprzętu.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {beginnerPackages.map((pkg, index) => (
              <FadeIn key={pkg.name} delay={index * 100}>
                <Card
                  className={`relative h-full transition-shadow hover:shadow-lg ${
                    pkg.popular ? "border-primary shadow-md" : "border-border/50"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                        Najpopularniejszy
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-foreground">
                      {pkg.name}
                    </CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-foreground">
                        {pkg.price}
                      </span>
                      <span className="text-muted-foreground"> zł</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check
                            className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="mt-8 w-full"
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      <Link href="/#kontakt">Umów się</Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trening personalny */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <FadeIn>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Dumbbell
                    className="h-6 w-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground">
                  Trening personalny
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Indywidualny trening personalny w Poznaniu dopasowany do
                  Twojego stylu życia, celów i poziomu zaawansowania.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Pracujemy nad siłą, mobilnością i sylwetką. Bez presji, z dużą
                  dawką empatii i konkretu.
                </p>
              </FadeIn>

              <FadeIn delay={150}>
                <div className="mt-8">
                  <h3 className="font-semibold text-foreground">
                    Co zyskujesz:
                  </h3>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {benefits.map((benefit) => (
                      <div
                        key={benefit.text}
                        className="flex items-center gap-3"
                      >
                        <benefit.icon
                          className="h-5 w-5 text-primary"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-muted-foreground">
                          {benefit.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={200}>
              <Card className="h-fit border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    Cennik
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {personalTraining.map((item, index) => (
                      <div
                        key={item.sessions}
                        className={`flex items-center justify-between rounded-lg p-4 ${
                          index === 2 ? "bg-primary/10" : "bg-muted/50"
                        }`}
                      >
                        <span className="font-medium text-foreground">
                          {item.sessions}
                        </span>
                        <span className="text-lg font-bold text-primary">
                          {item.price} zł
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="mt-6 w-full">
                    <Link href="/#kontakt">
                      Umów się na trening
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl">
              <span className="text-balance">
                Gotowa, żeby zacząć?
              </span>
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Pierwszy krok jest zawsze najtrudniejszy. Jestem tu, żeby Ci pomóc.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-8"
            >
              <Link href="/#kontakt">Umów pierwsze spotkanie</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
