import { Animations } from "../contexts/animationProvider";

export type IDefaultStyle = Array<string>;

type Example_animations = Record<
  "custom" | "zoom_and_spin" | "square_to_circle" | "throw_and_fly",
  {
    time: number;
    defaultStyle: IDefaultStyle;
    encodedAnimation?: string;
    animation: Animations;
  }
>;

export const example_animations: Example_animations = {
  custom: {
    time: 1000,
    defaultStyle: [],
    animation: {},
  },
  zoom_and_spin: {
    time: 3000,
    defaultStyle: ["width: 200px", "height: 200px", "background: white"],
    encodedAnimation:
      "eyJyb3RhdGUiOlt7InBlcmNlbnRhZ2UiOjAsInZhbHVlIjoiMGRlZyJ9LHsicGVyY2VudGFnZSI6NDUsInZhbHVlIjoiLTIwZGVnIn0seyJwZXJjZW50YWdlIjo1NSwidmFsdWUiOiIxMjBkZWcifSx7InBlcmNlbnRhZ2UiOjY1LCJ2YWx1ZSI6IjcwZGVnIn0seyJwZXJjZW50YWdlIjo3NSwidmFsdWUiOiIxMDBkZWcifSx7InBlcmNlbnRhZ2UiOjg1LCJ2YWx1ZSI6IjgwZGVnIn0seyJwZXJjZW50YWdlIjo5NSwidmFsdWUiOiI5NWRlZyJ9LHsicGVyY2VudGFnZSI6MTAwLCJ2YWx1ZSI6IjkwZGVnIn1dLCJzY2FsZSI6W3sicGVyY2VudGFnZSI6MCwidmFsdWUiOiIxIn0seyJwZXJjZW50YWdlIjo0NSwidmFsdWUiOiIyIn0seyJwZXJjZW50YWdlIjo1NSwidmFsdWUiOiIxIn1dfQ==",
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
    encodedAnimation:
      "eyJyb3RhdGUiOlt7InBlcmNlbnRhZ2UiOjAsInZhbHVlIjoiMGRlZyJ9LHsicGVyY2VudGFnZSI6NDAsInZhbHVlIjoiLTIwZGVnIn0seyJwZXJjZW50YWdlIjoxMDAsInZhbHVlIjoiMTA4MGRlZyJ9XSwiYm9yZGVyLXJhZGl1cyI6W3sicGVyY2VudGFnZSI6NDAsInZhbHVlIjoiMCJ9LHsicGVyY2VudGFnZSI6MTAwLCJ2YWx1ZSI6IjUwJSJ9XSwidHJhbnNsYXRlIjpbeyJwZXJjZW50YWdlIjowLCJ2YWx1ZSI6IjAgMCJ9LHsicGVyY2VudGFnZSI6NDAsInZhbHVlIjoiLTIwMHB4IDEwcHgifSx7InBlcmNlbnRhZ2UiOjUwLCJ2YWx1ZSI6IjAgMCJ9XX0=",
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
    encodedAnimation:
      "eyJ0b3AiOlt7InBlcmNlbnRhZ2UiOjIwLCJ2YWx1ZSI6IjAifSx7InBlcmNlbnRhZ2UiOjI1LCJ2YWx1ZSI6IjEwcHgifSx7InBlcmNlbnRhZ2UiOjMwLCJ2YWx1ZSI6Ii01cHgifSx7InBlcmNlbnRhZ2UiOjM1LCJ2YWx1ZSI6IjVweCJ9LHsicGVyY2VudGFnZSI6NDAsInZhbHVlIjoiLTEwcHgifSx7InBlcmNlbnRhZ2UiOjQ1LCJ2YWx1ZSI6IjAifSx7InBlcmNlbnRhZ2UiOjUwLCJ2YWx1ZSI6Ii01cHgifSx7InBlcmNlbnRhZ2UiOjU1LCJ2YWx1ZSI6IjEwcHgifSx7InBlcmNlbnRhZ2UiOjYwLCJ2YWx1ZSI6Ii0xNXB4In0seyJwZXJjZW50YWdlIjo2NSwidmFsdWUiOiIwIn0seyJwZXJjZW50YWdlIjo3MCwidmFsdWUiOiItMTBweCJ9LHsicGVyY2VudGFnZSI6NzUsInZhbHVlIjoiM3B4In0seyJwZXJjZW50YWdlIjo4MCwidmFsdWUiOiIwIn0seyJwZXJjZW50YWdlIjo4NSwidmFsdWUiOiIxcHgifSx7InBlcmNlbnRhZ2UiOjkwLCJ2YWx1ZSI6Ii0ycHgifSx7InBlcmNlbnRhZ2UiOjk1LCJ2YWx1ZSI6IjNweCJ9LHsicGVyY2VudGFnZSI6MTAwLCJ2YWx1ZSI6Ii0xcHgifV0sImxlZnQiOlt7InBlcmNlbnRhZ2UiOjI1LCJ2YWx1ZSI6IjEwcHgifSx7InBlcmNlbnRhZ2UiOjM1LCJ2YWx1ZSI6IjVweCJ9LHsicGVyY2VudGFnZSI6NDUsInZhbHVlIjoiMCJ9LHsicGVyY2VudGFnZSI6NTUsInZhbHVlIjoiMTBweCJ9LHsicGVyY2VudGFnZSI6NjUsInZhbHVlIjoiMCJ9LHsicGVyY2VudGFnZSI6NzUsInZhbHVlIjoiM3B4In0seyJwZXJjZW50YWdlIjo4NSwidmFsdWUiOiIxcHgifSx7InBlcmNlbnRhZ2UiOjk1LCJ2YWx1ZSI6IjNweCJ9XSwicmlnaHQiOlt7InBlcmNlbnRhZ2UiOjIwLCJ2YWx1ZSI6IjAifSx7InBlcmNlbnRhZ2UiOjMwLCJ2YWx1ZSI6Ii01cHgifSx7InBlcmNlbnRhZ2UiOjQwLCJ2YWx1ZSI6Ii0xMHB4In0seyJwZXJjZW50YWdlIjo1MCwidmFsdWUiOiItNXB4In0seyJwZXJjZW50YWdlIjo2MCwidmFsdWUiOiItMTVweCJ9LHsicGVyY2VudGFnZSI6NzAsInZhbHVlIjoiLTEwcHgifSx7InBlcmNlbnRhZ2UiOjgwLCJ2YWx1ZSI6IjAifSx7InBlcmNlbnRhZ2UiOjkwLCJ2YWx1ZSI6Ii0ycHgifSx7InBlcmNlbnRhZ2UiOjEwMCwidmFsdWUiOiItMXB4In1dLCJoZWlnaHQiOlt7InBlcmNlbnRhZ2UiOjAsInZhbHVlIjoiNTBweCJ9LHsicGVyY2VudGFnZSI6MjAsInZhbHVlIjoiNTBweCJ9LHsicGVyY2VudGFnZSI6MjUsInZhbHVlIjoiMzBweCJ9LHsicGVyY2VudGFnZSI6MTAwLCJ2YWx1ZSI6IjMwcHgifV0sIndpZHRoIjpbeyJwZXJjZW50YWdlIjowLCJ2YWx1ZSI6IjUwcHgifSx7InBlcmNlbnRhZ2UiOjIwLCJ2YWx1ZSI6IjMwcHgifSx7InBlcmNlbnRhZ2UiOjI1LCJ2YWx1ZSI6IjcwcHgifSx7InBlcmNlbnRhZ2UiOjEwMCwidmFsdWUiOiI3MHB4In1dLCJib3JkZXItcmFkaXVzIjpbeyJwZXJjZW50YWdlIjowLCJ2YWx1ZSI6IjUwJSJ9LHsicGVyY2VudGFnZSI6MjAsInZhbHVlIjoiMzUlIDUwJSA1MCUgMzUlIn0seyJwZXJjZW50YWdlIjoyNSwidmFsdWUiOiI1MCUifSx7InBlcmNlbnRhZ2UiOjEwMCwidmFsdWUiOiI1MCUifV0sInRyYW5zbGF0ZSI6W3sicGVyY2VudGFnZSI6MCwidmFsdWUiOiIwIDAifSx7InBlcmNlbnRhZ2UiOjIwLCJ2YWx1ZSI6Ii0yMDBweCAwIn0seyJwZXJjZW50YWdlIjoyNSwidmFsdWUiOiIwIDAifSx7InBlcmNlbnRhZ2UiOjI1LCJ2YWx1ZSI6IjAgMCJ9LHsicGVyY2VudGFnZSI6NDUsInZhbHVlIjoiMCAwIn0seyJwZXJjZW50YWdlIjo1NSwidmFsdWUiOiItNzBweCAxMDBweCJ9LHsicGVyY2VudGFnZSI6ODUsInZhbHVlIjoiMCAwIn0seyJwZXJjZW50YWdlIjo5MCwidmFsdWUiOiItMTAwcHggMCJ9LHsicGVyY2VudGFnZSI6MTAwLCJ2YWx1ZSI6IjUwMDBweCAwIn1dLCJzY2FsZSI6W3sicGVyY2VudGFnZSI6NDUsInZhbHVlIjoiMSJ9LHsicGVyY2VudGFnZSI6NTUsInZhbHVlIjoiMS41In0seyJwZXJjZW50YWdlIjo4NSwidmFsdWUiOiIyIn0seyJwZXJjZW50YWdlIjoxMDAsInZhbHVlIjoiMiJ9XX0=",
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
