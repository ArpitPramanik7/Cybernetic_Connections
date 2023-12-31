import * as React from "react";
import { useLayer, useHover, Arrow } from "react-laag";

export function Tooltip({ children, content }) {
  const [isOver, hoverProps] = useHover({
    delayEnter: 100,
    delayLeave: 300,
  });

  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen: isOver,
    triggerOffset: 8,
    auto: true,
    possiblePlacements: ["top-center", "bottom-center"],
  });

  return (
    <>
      <span {...triggerProps} {...hoverProps}>
        {children}
      </span>
      {isOver &&
        renderLayer(
          <div className="tooltip z-50" {...layerProps} {...hoverProps}>
            {content}
            <Arrow {...arrowProps} />
          </div>
        )}
    </>
  );
}
