import { Animations } from "../contexts/animationProvider";

export type IDefaultStyle = Array<string>;

type Example_animations = Record<
  "none" | "zoom_and_spin" | "square_to_circle" | "throw_and_fly",
  {
    time: number;
    defaultStyle: IDefaultStyle;
    animation: Animations;
  }
>;

export const example_animations: Example_animations = {
  none: {
    time: 1000,
    defaultStyle: [],
    animation: {},
  },
  zoom_and_spin: {
    time: 3000,
    defaultStyle: ["width: 200px", "height: 200px", "background: white"],
    animation: {
      rotate: [
        {
          percentage: 0,
          value: "0deg",
        },
        {
          percentage: 45,
          value: "-20deg",
        },
        {
          percentage: 55,
          value: "120deg",
        },
        {
          percentage: 65,
          value: "70deg",
        },
        {
          percentage: 75,
          value: "100deg",
        },
        {
          percentage: 85,
          value: "80deg",
        },
        {
          percentage: 95,
          value: "95deg",
        },
        {
          percentage: 100,
          value: "90deg",
        },
      ],
      scale: [
        {
          percentage: 0,
          value: "1",
        },
        {
          percentage: 45,
          value: "2",
        },
        {
          percentage: 55,
          value: "1",
        },
      ],
    },
  },
  square_to_circle: {
    time: 3000,
    defaultStyle: ["width: 200px", "height: 200px", "background: white"],
    animation: {
      rotate: [
        {
          percentage: 0,
          value: "0deg",
        },
        {
          percentage: 40,
          value: "-20deg",
        },
        {
          percentage: 100,
          value: `${3 * 360}deg`,
        },
      ],
      "border-radius": [
        {
          percentage: 40,
          value: "0",
        },
        {
          percentage: 100,
          value: "50%",
        },
      ],
      translate: [
        {
          percentage: 0,
          value: "0 0",
        },
        {
          percentage: 40,
          value: "-200px 10px",
        },
        {
          percentage: 50,
          value: "0 0",
        },
      ],
    },
  },
  throw_and_fly: {
    time: 5000,
    defaultStyle: [
      "width: 200px",
      "height: 200px",
      "background: white",
      "position: relative",
    ],
    animation: {
      top: [
        {
          percentage: 20,
          value: "0",
        },
        {
          percentage: 25,
          value: "10px",
        },
        {
          percentage: 30,
          value: "-5px",
        },
        {
          percentage: 35,
          value: "5px",
        },
        {
          percentage: 40,
          value: "-10px",
        },
        {
          percentage: 45,
          value: "0",
        },
        {
          percentage: 50,
          value: "-5px",
        },
        {
          percentage: 55,
          value: "10px",
        },
        {
          percentage: 60,
          value: "-15px",
        },
        {
          percentage: 65,
          value: "0",
        },
        {
          percentage: 70,
          value: "-10px",
        },
        {
          percentage: 75,
          value: "3px",
        },
        {
          percentage: 80,
          value: "0",
        },
        {
          percentage: 85,
          value: "1px",
        },
        {
          percentage: 90,
          value: "-2px",
        },
        {
          percentage: 95,
          value: "3px",
        },
        {
          percentage: 100,
          value: "-1px",
        },
      ],
      left: [
        {
          percentage: 25,
          value: "10px",
        },
        {
          percentage: 35,
          value: "5px",
        },
        {
          percentage: 45,
          value: "0",
        },
        {
          percentage: 55,
          value: "10px",
        },
        {
          percentage: 65,
          value: "0",
        },
        {
          percentage: 75,
          value: "3px",
        },
        {
          percentage: 85,
          value: "1px",
        },
        {
          percentage: 95,
          value: "3px",
        },
      ],
      right: [
        {
          percentage: 20,
          value: "0",
        },
        {
          percentage: 30,
          value: "-5px",
        },
        {
          percentage: 40,
          value: "-10px",
        },
        {
          percentage: 50,
          value: "-5px",
        },
        {
          percentage: 60,
          value: "-15px",
        },
        {
          percentage: 70,
          value: "-10px",
        },
        {
          percentage: 80,
          value: "0",
        },
        {
          percentage: 90,
          value: "-2px",
        },
        {
          percentage: 100,
          value: "-1px",
        },
      ],
      height: [
        {
          percentage: 0,
          value: "50px",
        },
        {
          percentage: 20,
          value: "50px",
        },
        {
          percentage: 25,
          value: "30px",
        },
        {
          percentage: 100,
          value: "30px",
        },
      ],
      width: [
        {
          percentage: 0,
          value: "50px",
        },
        {
          percentage: 20,
          value: "30px",
        },
        {
          percentage: 25,
          value: "70px",
        },
        {
          percentage: 100,
          value: "70px",
        },
      ],
      "border-radius": [
        {
          percentage: 0,
          value: "50%",
        },
        {
          percentage: 20,
          value: "35% 50% 50% 35%",
        },
        {
          percentage: 25,
          value: "50%",
        },
        {
          percentage: 100,
          value: "50%",
        },
      ],
      translate: [
        {
          percentage: 0,
          value: "0 0",
        },
        {
          percentage: 20,
          value: "-200px 0",
        },
        {
          percentage: 25,
          value: "0 0",
        },
        {
          percentage: 25,
          value: "0 0",
        },
        {
          percentage: 45,
          value: "0 0",
        },
        {
          percentage: 55,
          value: "-70px 100px",
        },
        {
          percentage: 85,
          value: "0 0",
        },
        {
          percentage: 90,
          value: "-100px 0",
        },
        {
          percentage: 100,
          value: "5000px 0",
        },
      ],
      scale: [
        {
          percentage: 45,
          value: "1",
        },
        {
          percentage: 55,
          value: "1.5",
        },
        {
          percentage: 85,
          value: "2",
        },
        {
          percentage: 100,
          value: "2",
        },
      ],
    },
  },
} as const;
