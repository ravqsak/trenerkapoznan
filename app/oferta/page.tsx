import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/fade-in"
import { Check, Sparkles, Dumbbell, Heart, Zap, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Oferta",
  description:
    "Trening personalny dla kobiet w Poznaniu. Sprawdź cennik Fabryki Formy - Wilczak i wybierz odpowiedni dla siebie pakiet.",
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
  { sessions: "1 trening", price: "169,99" },
  { sessions: "5 treningów", price: "729", detail: "145,80 zł za jeden" },
  { sessions: "10 treningów", price: "1379", detail: "137,90 zł za jeden" },
  { sessions: "20 treningów", price: "2629", detail: "131,45 zł za jeden" },
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
                  Trening personalny w Fabryce Formy Wilczak
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
                        className="flex items-center justify-between rounded-lg bg-muted/50 p-4"
                      >
                        <span className="flex flex-col gap-1 font-medium text-foreground">
                          <span>{item.sessions}</span>
                          {item.sessions === "5 treningów" && (
                            <span className="w-fit rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
                              Najczęściej wybierane
                            </span>
                          )}
                          {item.sessions === "20 treningów" && (
                            <span className="w-fit rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-foreground">
                              Najkorzystniej
                            </span>
                          )}
                        </span>
                        <span className="text-right">
                          <span className="block text-lg font-bold text-primary">
                            {item.price} zł
                          </span>
                          {item.detail && (
                            <span className="block text-xs text-muted-foreground">
                              {item.detail}
                            </span>
                          )}
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

      {/* Prowadzenie online */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm md:p-12">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    Współpraca online
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                    Prowadzenie trenerskie online
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-foreground">
                    Pełne wsparcie i opieka trenerska. Trenuj gdzie chcesz i kiedy chcesz, z moim wsparciem na każdym kroku.
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Nie mieszkasz w Poznaniu albo wolisz trenować w swoich godzinach? Prowadzenie online to nie gotowy, przypadkowy PDF. To stała, spersonalizowana współpraca 1:1, w której dbam o Twoją technikę, regularność i bezpieczeństwo dokładnie tak, jak na siłowni.
                  </p>
                </div>

                <div className="mt-10">
                  <h3 className="font-semibold text-foreground">Co może obejmować współpraca:</h3>
                  <ul className="mt-5 grid gap-4 md:grid-cols-2">
                    <li className="rounded-xl bg-muted/50 p-5">
                      <p className="font-semibold text-foreground">Indywidualny plan treningowy</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Ułożony ściśle pod Twój cel, poziom doświadczenia, ograniczenia ruchowe oraz sprzęt, do którego masz dostęp.</p>
                    </li>
                    <li className="rounded-xl bg-muted/50 p-5">
                      <p className="font-semibold text-foreground">Analiza techniki wideo</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Nagrywasz ćwiczenia, a ja regularnie sprawdzam Twoją technikę, koryguję błędy i dbam o bezpieczeństwo.</p>
                    </li>
                    <li className="rounded-xl bg-muted/50 p-5">
                      <p className="font-semibold text-foreground">Cotygodniowe raporty i ewaluacja</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Co tydzień sprawdzamy progres, samopoczucie oraz regenerację i na bieżąco modyfikujemy plan.</p>
                    </li>
                    <li className="rounded-xl bg-muted/50 p-5">
                      <p className="font-semibold text-foreground">Stały kontakt na czacie</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Masz pytanie przed treningiem lub gorszy dzień? Jesteśmy w kontakcie z dużą dawką wsparcia i motywacji.</p>
                    </li>
                  </ul>
                </div>

                <Button asChild size="lg" className="mt-8">
                  <Link href="/#kontakt">
                    Zapytaj o współpracę online
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Dla początkujących */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                <Sparkles className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground">
                Dla początkujących
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Pierwsze kroki na siłowni bez stresu. Poznanie sprzętu, nauka techniki i budowanie pewności siebie.
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-primary">
                Umów się i zacznij bez stresu
              </p>
            </div>
          </FadeIn>
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
