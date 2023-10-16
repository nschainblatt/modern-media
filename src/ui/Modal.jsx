import { useState, useEffect } from "react";
import { useSpringValue, animated } from '@react-spring/web';
import { createPortal } from "react-dom";

const Modal = ({ show, children, onHide, header, maxWidth='20rem', animation=true }) => {
  const [isShown, setIsShown] = useState(show);
  const opacity = useSpringValue(isShown ? 1 : 0);
  const zIndex = useSpringValue(isShown ? 1000 : -1);

  useEffect(() => {
    (async () => {
      if (isShown) {
        zIndex.set(1000);
      await opacity.start(1);
      } else {
        await opacity.start(0);
        zIndex.set(-1);
        onHide();
        }
    })();
  }, [isShown, onHide, opacity, zIndex]);

  useEffect(() => {
    setIsShown(show);
  }, [show]);

  const hideModal = () => {
    setIsShown(false);
  };
  return createPortal(
    <animated.div
      className={'fixed inset-0 backdrop-blur-[1.5px] flex items-center justify-center'}
      style={{
        opacity,
        zIndex
      }}
    >
    {animation
      ? <div
          className="absolute inset-0"
          onClick={hideModal}
      />
      : <></>
    }
      <div
        className="bg-red-950 p-4 rounded-lg text-white min-w-[30rem] min-h-[30rem] w-full flex-grow relative z-20 overflow-y-auto flex flex-col gap-20"
        style={{
          maxWidth,
          maxHeight: '80vh'
        }}
      >
        <div className="flex flex-col items-center justify-between w-full">
          <div className="text-base w-full">{header}</div>
        </div>
        {children}
      </div>
    </animated.div>,
    document.body
  );
};

export default Modal;
