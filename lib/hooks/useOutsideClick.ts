import { RefObject, useEffect } from 'react';

type UseOutsideClickHook = {
  // List of refs that should be counted in as part of the 'inside' click.
  refs: RefObject<HTMLElement>[];
  onFocus?: () => void;
  onBlur?: () => void;
};

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOutsideClick = ({ refs, onFocus, onBlur }: UseOutsideClickHook): void => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        refs.every(
          (ref) =>
            event.target instanceof Node && ref.current && !ref.current.contains(event.target)
        )
      ) {
        onBlur?.();
      } else {
        onFocus?.();
      }
    };

    /**
     * Bind the event listener
     */
    document.addEventListener('mousedown', handleClickOutside);
    return (): void => {
      /**
       * Unbind the event listener on clean up
       */
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onBlur, onFocus, refs]);
};

export default useOutsideClick;
