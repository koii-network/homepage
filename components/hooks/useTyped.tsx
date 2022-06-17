import { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";

export const useTyped = (
  dict: string[],
  onTypingComplete: () => void,
  activateTyping: boolean
) => {
  const wrapperElementRef = useRef(null);
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    const options: TypedOptions = {
      strings: dict,
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 500,
      showCursor: true,
      loop: true,
      onComplete: onTypingComplete,
      onStringTyped: (index, typed) => {
        if (index === dict.length - 1) {
          typed.stop();
        }
      },
    };

    if (wrapperElementRef.current != null) {
      typedRef.current = new Typed(wrapperElementRef.current, options);
      return () => {
        if (typedRef?.current) {
          typedRef.current.destroy();
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (activateTyping) {
      typedRef.current?.start();
    } else {
      typedRef.current?.stop();
      setTimeout(() => {
        typedRef.current?.reset();
      }, 100);
    }
  }, [activateTyping]);

  return { wrapperElementRef };
};
