import { LayerType } from "@/types/canvas";
import { useStorage } from "@liveblocks/react";
import React, { memo } from "react";
import { Rectangle } from "./rectangle";

interface LayerViewProps {
  id: string | number;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

export const LayerView = memo(
  ({ id, selectionColor, onLayerPointerDown }: LayerViewProps) => {
    const layer = useStorage((root) => root.layers.get(id));
    if (!layer) {
      return null;
    }
    switch (layer.type) {
      case LayerType.Rectangle:
        return (
          <div>
            <Rectangle
              layer={layer}
              id={id}
              onPointerDown={onLayerPointerDown}
              selectionColor={selectionColor}
            />
          </div>
        );
      default:
        return null;
    }
  }
);

LayerView.displayName = "LayerView";
