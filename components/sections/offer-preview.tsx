import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/fade-in"
import { Heart, Dumbbell, Sparkles } from "lucide-react"

const offerings = [
  {
    icon: Sparkles,
    title: "Dla początkujących",
    description:
      "Pierwsze kroki na siłowni bez stresu. Poznanie sprzętu, nauka techniki i budowanie pewności siebie.",
    price: "od 99 zł",
  },
  {
    icon: Dumbbell,
    title: "Trening personalny",
    description:
      "Indywidualne treningi dopasowane do Twoich celów. Pracujemy nad siłą, mobilnością i sylwetką.",
    price: "od 150 zł",
  },
  {
    icon: Heart,
    title: "Wsparcie i motywacja",
    description:
      "Nie zostawię Cię samej. Dostaniesz pełne wsparcie na każdym etapie Twojej drogi.",
    price: "w cenie",
  },
]

export function OfferPreviewSection() {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              Oferta
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              <span className="text-balance">Co mogę dla Ciebie zrobić?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Niezależnie od poziomu zaawansowania, znajdę dla Ciebie
              odpowiednią ścieżkę treningową.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offerings.map((item, index) => (
            <FadeIn key={item.title} delay={index * 100}>
              <Card className="h-full border-border/50 bg-card transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon
                      className="h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                  <p className="mt-4 font-semibold text-primary">{item.price}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/oferta">Zobacz pełną ofertę</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
