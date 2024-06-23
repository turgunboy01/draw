import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { ToolButton } from "./tool-button";
import {
  Circle,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";

// type CanvasState = any;

interface ToolbarPageProps {
  canvasState: CanvasState;
  setCanvasState(newState: CanvasState): void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const Toolbar = ({
  canvasState,
  setCanvasState,
  undo,
  redo,
  canUndo,
  canRedo,
}: ToolbarPageProps) => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex  flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1  flex-col  items-center shadow-md">
        <ToolButton
          label="Select"
          isActive={
            canvasState.mode === CanvasMode.None ||
            canvasState.mode === CanvasMode.Translating ||
            canvasState.mode === CanvasMode.SelecttionNet ||
            canvasState.mode === CanvasMode.Pressing ||
            canvasState.mode === CanvasMode.Resizing
          }
          icon={MousePointer2}
          onclick={() => setCanvasState({ mode: CanvasMode.None })}
        />{" "}
        <ToolButton
          label="Text"
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Text
          }
          icon={Type}
          onclick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Text,
            })
          }
        />{" "}
        <ToolButton
          label="Sticky note"
          icon={StickyNote}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Note
          }
          onclick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Note,
            })
          }
        />{" "}
        <ToolButton
          label="Rectagle"
          icon={Square}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Rectangle
          }
          onclick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Rectangle,
            })
          }
        />
        <ToolButton
          label="Ellipse"
          icon={Circle}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Ellippse
          }
          onclick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Ellippse,
            })
          }
        />{" "}
        <ToolButton
          label="Pen"
          icon={Pencil}
          isActive={canvasState.mode === CanvasMode.Pencil}
          onclick={() =>
            setCanvasState({
              mode: CanvasMode.Pencil,
            })
          }
        />
      </div>
      <div className="bg-white rounded-md p-1.5  flex flex-col items-center shadow-md">
        <ToolButton
          label="Undo"
          icon={Undo2}
          isDisabled={!canUndo}
          onclick={undo}
        />
        <div className="mt-1">
          <ToolButton
            label="Redo"
            icon={Redo2}
            isDisabled={!canRedo}
            onclick={redo}
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;

export const ToolbarSkeleton = () => {
  return (
    <div className="absolute top-[50%] w-[53px] h-[360px] -translate-y-[50%] left-2 flex  flex-col gap-y-4 shadow-md">
      <Skeleton className="w-full h-full" />
    </div>
  );
};
