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
                    Cennik Fabryki Formy - Wilczak
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
                        <span className="flex flex-col gap-1 font-medium text-foreground">
                          <span>{item.sessions}</span>
                          {item.sessions === "5 treningów" && (
                            <span className="w-fit rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
                              Najczęściej wybierane
                            </span>
                          )}
                          {item.sessions === "20 treningów" && (
                            <span className="w-fit rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-foreground">
                              Najkorzystniejsze
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
