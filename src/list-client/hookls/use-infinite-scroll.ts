import { $, type QRL, useOnDocument } from "@builder.io/qwik";

interface useInfiniteScrollProps {
  isLoading: boolean;
  callback: QRL<() => void>;
}

export const useInfiniteScroll = ({
  isLoading,
  callback,
}: useInfiniteScrollProps) => {
  useOnDocument(
    "scroll",
    $(() => {
      const maxScroll = document.body.scrollHeight;
      const currentScroll = window.scrollY + window.innerHeight;

      if (currentScroll + 200 >= maxScroll && !isLoading) {
        console.log("entrando");

        callback();
      }
    })
  );
};
