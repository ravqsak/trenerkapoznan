import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ania-gym.png"
          alt="Trening personalny dla kobiet"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-16 md:py-24">
          <FadeIn>
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="text-balance">
                Trening personalny dla kobiet w Poznaniu
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={150}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Nauczę Cię, jak czuć się pewnie na siłowni. Spokojnie, bez presji
              i stresu.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 text-base font-medium transition-all hover:scale-105"
              >
                <Link href="#kontakt">Umów pierwsze spotkanie</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
