import { component$ } from "@builder.io/qwik";
import { Button } from "~/shared/components/button";

export default component$(() => {
  return (
    <div class="flex flex-col gap-4">
      <Button type="Button">Button</Button>
      <Button type="Button-Outline">Button Outline</Button>
      <Button type="Button" disabled>
        Button disable
      </Button>
      <Button type="Button-Outline" disabled>
        Button Outline disabled
      </Button>
      <Button href="#" type="Link">
        Link
      </Button>
      <Button href="#" type="Link-Outline">
        Link Outline
      </Button>
      <Button href="#" type="Link" disabled>
        Link disabled
      </Button>
      <Button href="#" type="Link-Outline" disabled>
        Link Outline disabled
      </Button>
    </div>
  );
});
