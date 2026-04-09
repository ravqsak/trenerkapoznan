import type { Metadata } from "next"
import { FadeIn } from "@/components/fade-in"

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Polityka prywatności strony Aktywnie na co dzień. Informacje o przetwarzaniu danych osobowych zgodnie z RODO.",
}

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="pt-20 md:pt-24">
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-serif text-4xl font-semibold text-foreground">
              Polityka prywatności
            </h1>
            <p className="mt-4 text-muted-foreground">
              Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="prose prose-gray mt-10 max-w-none">
              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  1. Administrator danych
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Administratorem Twoich danych osobowych jest Anna Kosińska,
                  prowadząca działalność pod nazwą &quot;Aktywnie na codzień&quot; z
                  siedzibą w Poznaniu. W sprawach związanych z ochroną danych
                  osobowych możesz kontaktować się pod adresem email:
                  ak.annakosinska@gmail.com.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  2. Cele przetwarzania danych
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Twoje dane osobowe przetwarzane są w następujących celach:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Kontakt</strong> –
                    odpowiadanie na Twoje zapytania przesłane przez formularz
                    kontaktowy lub email
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Współpraca treningowa
                    </strong>{" "}
                    – realizacja usług treningowych, w tym planowanie i
                    prowadzenie treningów personalnych
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Obowiązki prawne
                    </strong>{" "}
                    – wypełnianie obowiązków wynikających z przepisów prawa,
                    w tym przepisów podatkowych i rachunkowych
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  3. Twoje prawa (RODO)
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Zgodnie z Rozporządzeniem Ogólnym o Ochronie Danych Osobowych
                  (RODO), przysługują Ci następujące prawa:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Prawo dostępu</strong> –
                    możesz uzyskać informacje o przetwarzanych danych oraz
                    otrzymać ich kopię
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Prawo do sprostowania
                    </strong>{" "}
                    – możesz żądać poprawienia nieprawidłowych lub uzupełnienia
                    niekompletnych danych
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Prawo do usunięcia
                    </strong>{" "}
                    – możesz żądać usunięcia swoich danych osobowych
                    (&quot;prawo do bycia zapomnianym&quot;)
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Prawo do sprzeciwu
                    </strong>{" "}
                    – możesz sprzeciwić się przetwarzaniu danych w określonych
                    przypadkach
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Prawo do przenoszenia
                    </strong>{" "}
                    – możesz otrzymać swoje dane w ustrukturyzowanym formacie
                  </li>
                </ul>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Aby skorzystać z powyższych praw, skontaktuj się ze mną pod
                  adresem: ak.annakosinska@gmail.com. Masz również prawo wnieść
                  skargę do Prezesa Urzędu Ochrony Danych Osobowych.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  4. Pliki cookies
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Strona internetowa wykorzystuje pliki cookies w następujących
                  celach:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">
                      Cookies techniczne
                    </strong>{" "}
                    – niezbędne do prawidłowego funkcjonowania strony
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Google Analytics
                    </strong>{" "}
                    – analiza ruchu na stronie w celu jej ulepszania
                  </li>
                </ul>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Możesz zarządzać plikami cookies poprzez ustawienia swojej
                  przeglądarki internetowej. Wyłączenie cookies może wpłynąć na
                  funkcjonalność strony.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  5. Okres przechowywania danych
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Dane osobowe przechowywane są przez okres niezbędny do
                  realizacji celów, dla których zostały zebrane, lub przez okres
                  wymagany przepisami prawa. Dane związane ze współpracą
                  treningową przechowywane są przez okres trwania współpracy
                  oraz przez okres wymagany przepisami podatkowymi.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  6. Bezpieczeństwo danych
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Stosujemy odpowiednie środki techniczne i organizacyjne w celu
                  ochrony Twoich danych osobowych przed nieautoryzowanym
                  dostępem, utratą lub zniszczeniem.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  7. Kontakt
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  W razie pytań dotyczących niniejszej polityki prywatności lub
                  przetwarzania Twoich danych osobowych, skontaktuj się ze mną:
                </p>
                <ul className="mt-4 list-none space-y-2 text-muted-foreground">
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:ak.annakosinska@gmail.com"
                      className="text-primary hover:underline"
                    >
                      ak.annakosinska@gmail.com
                    </a>
                  </li>
                  <li>
                    Telefon:{" "}
                    <a
                      href="tel:+48606753390"
                      className="text-primary hover:underline"
                    >
                      606 753 390
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
