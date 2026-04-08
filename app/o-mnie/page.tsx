import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { Heart, Award, Users, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "O mnie",
  description:
    "Poznaj Anię - certyfikowaną trenerkę personalną z Poznania. Pomagam kobietom odnaleźć radość z ruchu i zbudować pewność siebie na siłowni.",
}

const values = [
  {
    icon: Heart,
    title: "Empatia",
    description:
      "Rozumiem, że każda z nas jest inna. Słucham i dostosowuję trening do Twoich potrzeb.",
  },
  {
    icon: Sparkles,
    title: "Spokój",
    description:
      "Bez presji i stresu. U mnie trenujesz w swoim tempie, bez porównywania się do innych.",
  },
  {
    icon: Users,
    title: "Wsparcie",
    description:
      "Nie zostawię Cię samej. Jestem z Tobą na każdym kroku Twojej drogi do lepszego zdrowia.",
  },
  {
    icon: Award,
    title: "Profesjonalizm",
    description:
      "Certyfikowana wiedza połączona z praktycznym doświadczeniem i ciągłym rozwojem.",
  },
]

export default function OMniePage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-2xl lg:mx-0">
                <Image
                  src="/images/ania-gym.png"
                  alt="Ania - trenerka personalna"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>

            <div>
              <FadeIn>
                <span className="text-sm font-medium uppercase tracking-wider text-primary">
                  O mnie
                </span>
                <h1 className="mt-3 font-serif text-4xl font-semibold text-foreground sm:text-5xl">
                  <span className="text-balance">Cześć, jestem Ania</span>
                </h1>
              </FadeIn>

              <FadeIn delay={100}>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Certyfikowana trenerka personalna z Poznania. Specjalizuję się
                  w pracy z kobietami, które chcą zacząć swoją przygodę z
                  siłownią lub wrócić do aktywności po przerwie.
                </p>
              </FadeIn>

              <FadeIn delay={200}>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Pomagam kobietom odnaleźć się na siłowni i budować pewność
                  siebie poprzez ruch. Wierzę, że trening powinien być źródłem
                  radości, nie stresu. Dlatego stawiam na spokojne podejście,
                  pełne wsparcia i zrozumienia.
                </p>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Każda kobieta zasługuje na to, by czuć się dobrze we własnym
                  ciele. Moim celem jest pokazać Ci, że siłownia może być
                  przyjaznym miejscem, gdzie rozwijasz się w swoim tempie.
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href="/#kontakt">Porozmawiajmy</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-serif text-3xl font-semibold text-foreground">
                <span className="text-balance">Moje podejście do treningu</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Każdy trening opieram na czterech filarach, które tworzą
                bezpieczną i wspierającą przestrzeń do rozwoju.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 100}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <value.icon
                      className="h-7 w-7 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <FadeIn>
                <h2 className="font-serif text-3xl font-semibold text-foreground">
                  <span className="text-balance">Dlaczego to robię?</span>
                </h2>
              </FadeIn>

              <FadeIn delay={100}>
                <div className="mt-8 space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Pamiętam, jak sama czułam się niepewnie wchodząc pierwszy raz na
                    siłownię. Wszystko wydawało się skomplikowane, a spojrzenia
                    innych – oceniające. Dziś wiem, że większość tych obaw była w
                    mojej głowie.
                  </p>
                  <p className="leading-relaxed">
                    Chcę, żebyś mogła pominąć ten etap niepewności. Żebyś od
                    pierwszego dnia czuła się pewnie i wiedziała, co robisz. Dlatego
                    uczę nie tylko techniki ćwiczeń, ale przede wszystkim budowania
                    pewności siebie.
                  </p>
                  <p className="leading-relaxed">
                    Siłownia to nie miejsce rywalizacji. To przestrzeń, w której
                    inwestujesz w siebie – w swoje zdrowie, siłę i samopoczucie. I
                    chcę Ci w tym towarzyszyć.
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn className="order-1 lg:order-2">
              <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-2xl lg:mx-0">
                <Image
                  src="/images/ania-squat.png"
                  alt="Ania wykonująca przysiad ze sztangą"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
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
                Chcesz zacząć swoją przygodę z treningiem?
              </span>
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Napisz do mnie, a wspólnie ustalimy, jak mogę Ci pomóc.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8">
              <Link href="/#kontakt">Umów się na rozmowę</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
