import { useCallback, useRef, useState } from "react";

interface Transform {
  scale: number;
  x: number;
  y: number;
}

const MIN_SCALE = 1;
const MAX_SCALE = 3;

const DRAG_THRESHOLD = 5;

export function useMapPanZoom() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState<Transform>({ scale: 1, x: 0, y: 0 });
  const dragState = useRef<{
    pointerX: number;
    pointerY: number;
    x: number;
    y: number;
    dragging: boolean;
  } | null>(null);

  const clamp = useCallback((t: Transform): Transform => {
    const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, t.scale));
    const rect = containerRef.current?.getBoundingClientRect();
    const width = rect?.width ?? 0;
    const height = rect?.height ?? 0;
    const maxX = (width * (scale - 1)) / 2;
    const maxY = (height * (scale - 1)) / 2;
    return {
      scale,
      x: Math.min(maxX, Math.max(-maxX, t.x)),
      y: Math.min(maxY, Math.max(-maxY, t.y)),
    };
  }, []);

  const onWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      e.preventDefault();
      const factor = Math.exp(-e.deltaY * 0.0015);
      setTransform((prev) => clamp({ ...prev, scale: prev.scale * factor }));
    },
    [clamp],
  );

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      dragState.current = {
        pointerX: e.clientX,
        pointerY: e.clientY,
        x: transform.x,
        y: transform.y,
        dragging: false,
      };
    },
    [transform.x, transform.y],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!dragState.current) return;
      const dx = e.clientX - dragState.current.pointerX;
      const dy = e.clientY - dragState.current.pointerY;
      if (!dragState.current.dragging) {
        if (Math.abs(dx) < DRAG_THRESHOLD && Math.abs(dy) < DRAG_THRESHOLD) return;
        dragState.current.dragging = true;
        e.currentTarget.setPointerCapture(e.pointerId);
      }
      setTransform((prev) =>
        clamp({
          ...prev,
          x: dragState.current!.x + dx,
          y: dragState.current!.y + dy,
        }),
      );
    },
    [clamp],
  );

  const onPointerUp = useCallback(() => {
    dragState.current = null;
  }, []);

  const resetView = useCallback(() => setTransform({ scale: 1, x: 0, y: 0 }), []);

  const zoomBy = useCallback(
    (factor: number) => setTransform((prev) => clamp({ ...prev, scale: prev.scale * factor })),
    [clamp],
  );

  return {
    containerRef,
    transform,
    handlers: { onWheel, onPointerDown, onPointerMove, onPointerUp },
    resetView,
    zoomBy,
  };
}
