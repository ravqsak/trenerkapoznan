import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"

export function AboutPreviewSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/ania-portrait.png"
                alt="Ania - trenerka personalna"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                O mnie
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                <span className="text-balance">Cześć, jestem Ania</span>
              </h2>
            </FadeIn>

            <FadeIn delay={100}>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Certyfikowana trenerka personalna z pasją do pomagania kobietom
                w odkrywaniu radości z ruchu. Pomagam odnaleźć się na siłowni i
                budować pewność siebie poprzez trening.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Moje podejście opiera się na empatii, cierpliwości i wsparciu.
                Wierzę, że każda kobieta zasługuje na to, by czuć się dobrze we
                własnym ciele.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="mt-8">
                <Button asChild variant="outline" className="group">
                  <Link href="/o-mnie">
                    Poznaj mnie lepiej
                    <span
                      className="ml-2 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
