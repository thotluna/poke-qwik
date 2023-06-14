import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import {
  QwikLogo,
  TailwindLogo,
  TypeScriptLogo,
  VercelLogo,
} from "~/shared/components/icons";
import styles from "./carrusel.module.css";

export const Carrusel = component$(() => {
  const carruselItems = useSignal<HTMLElement>();

  useVisibleTask$(({ track, cleanup }) => {
    track(() => carruselItems.value);
    if (carruselItems.value) {
      let step = 0.5;
      const maxScrollLeft =
        carruselItems.value.scrollWidth - carruselItems.value.clientWidth;
      const interval = setInterval(() => {
        if (
          carruselItems.value!.scrollLeft === maxScrollLeft ||
          carruselItems.value!.scrollLeft <= 0
        ) {
          step = step * -1;
        }

        carruselItems.value!.scrollLeft =
          carruselItems.value!.scrollLeft + step;
      }, 20);
      cleanup(() => clearInterval(interval));
    }
  });

  return (
    <article class={[styles.slider, "lg:w-1/3"]}>
      <div ref={carruselItems} class={[styles.track]}>
        <picture class={styles.slide}>
          <VercelLogo width={100} height={26} />
        </picture>

        <picture class={styles.slide}>
          <TypeScriptLogo height={40} width={40} />
        </picture>

        <picture class={styles.slide}>
          <QwikLogo width={100} height={40} />
        </picture>
        <picture class={styles.slide}>
          <TailwindLogo width={170} height={18} />
        </picture>
        <picture class={styles.slide}>
          <VercelLogo width={100} height={26} />
        </picture>
        <picture class={styles.slide}>
          <TypeScriptLogo height={40} width={40} />
        </picture>
        <picture class={styles.slide}>
          <QwikLogo width={100} height={40} />
        </picture>
        <picture class={styles.slide}>
          <TailwindLogo width={170} height={18} />
        </picture>
      </div>
    </article>
  );
});
