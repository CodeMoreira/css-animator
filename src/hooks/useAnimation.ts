import { useContext } from "react";
import { AnimationContext } from "../contexts/animationProvider";

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (!context)
    throw new Error("useAnimation must be used within AnimationProvider.");
  return context;
}
