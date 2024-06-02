import { Dispatch, PropsWithChildren, SetStateAction, createContext, useEffect, useState } from "react"
import { ControlAnimation, setAnimationTime } from "../utils/controlAnimation"

type Animations = Record<string, Array<{
    percentage: number
    value: string
}>>

interface IAnimationContext {
    html: string
    setHtml: Dispatch<SetStateAction<string>>
    css: string
    setCss: Dispatch<SetStateAction<string>>
    time: number
    setTime: Dispatch<SetStateAction<number>>
    currentTimePercentage: number
    setCurrentTimePercentage: Dispatch<SetStateAction<number>>
    play: boolean
    setPlay: Dispatch<SetStateAction<boolean>>
    animations: Animations
    setAnimations: Dispatch<SetStateAction<Animations>>
    openAddModal: boolean
    setOpenAddModal: Dispatch<SetStateAction<boolean>>
    animationType: AnimationType
    setAnimationType: Dispatch<SetStateAction<AnimationType>>
}

type PreGenerateAnimation = Record<string, Array<{ 
    propertie: string;
    value: string
}>>

type AnimationType = "ease" | "ease-in" | "ease-out" | "ease-in-out"

export const AnimationContext = createContext<IAnimationContext>({} as IAnimationContext)

export default function AnimationProvider({ children }: PropsWithChildren) {
    const [html, setHtml] = useState<string>(`<div class="element"></div>`)
    const [css, setCss] = useState<string>("")
    const [time, setTime] = useState<number>(3000)
    const [currentTimePercentage, setCurrentTimePercentage] = useState<number>(0)
    const [play, setPlay] = useState<boolean>(false)
    const [animations, setAnimations] = useState<Animations>({
        "rotate": [
            {
                "percentage": 0,
                "value": "0deg"
            },
            {
                "percentage": 45,
                "value": "-20deg"
            },
            {
                "percentage": 55,
                "value": "120deg"
            },
            {
                "percentage": 65,
                "value": "70deg"
            },
            {
                "percentage": 75,
                "value": "100deg"
            },
            {
                "percentage": 85,
                "value": "80deg"
            },
            {
                "percentage": 95,
                "value": "95deg"
            },
            {
                "percentage": 100,
                "value": "90deg"
            },
        ],
        "scale": [
            {
                "percentage": 0,
                "value": "1"
            },
            {
                "percentage": 45,
                "value": "2"
            },
            {
                "percentage": 55,
                "value": "1"
            },
        ]
    })
    const [openAddModal, setOpenAddModal] = useState<boolean>(false)
    const [animationType, setAnimationType] = useState<AnimationType>("ease-in-out")

    const insertCss = (cssString: string) => {
        try {
            const styleSheet = document.createElement('style');
            document.head.appendChild(styleSheet);
        
            // Validate the CSS before inserting
            if (styleSheet.sheet) {
                try {
                    styleSheet.sheet.insertRule(cssString, styleSheet.sheet.cssRules.length);
                } catch (error) {
                    console.error("Failed to parse CSS rule:", (error as { message: string }).message);
                    console.error("Offending CSS:", cssString);
                }
            } else {
                console.error("Failed to access stylesheet");
            }
        } catch (error) {
            console.error("Error creating stylesheet:", error);
        }
    }

    useEffect(() => {
        const preGenerateAnimation: PreGenerateAnimation = {}

        Object.entries(animations).forEach(([propertie, keyframes]) => {
            keyframes.forEach(({ percentage, value }) => {
                preGenerateAnimation[percentage] = [
                    ...(preGenerateAnimation[percentage] ?? []),
                    {
                        propertie,
                        value
                    }
                ]
            })
        })

        const elementStyle = `
.element {
    width: 200px;
    height: 200px;
    background: white;
    animation: ${time}ms ${animationType} custom-animation infinite;
}`

        const keyframeString = `
@keyframes custom-animation {
${Object.entries(preGenerateAnimation).map(([percentage, properties]) => {
const values = properties.map(({ propertie, value }) => `${propertie}: ${value};`).join("\n\t\t")

return `\t${percentage}% {\n\t\t${values}\n\t}`;
}).join('\n')}
}
        `

        setCss(`${elementStyle}
${keyframeString}`)

        insertCss(keyframeString)
        insertCss(elementStyle)
    }, [animations, play])

    useEffect(() => {
        setAnimationTime(Math.fround(currentTimePercentage * time))
    }, [currentTimePercentage])

    useEffect(() => {
        ControlAnimation("pause")
    }, [play])

    return (
        <AnimationContext.Provider value={{
            html,
            setHtml,
            css,
            setCss,
            time,
            setTime,
            currentTimePercentage,
            setCurrentTimePercentage,
            play,
            setPlay,
            animations,
            setAnimations,
            openAddModal,
            setOpenAddModal,
            animationType,
            setAnimationType
        }}>
            {children}
        </AnimationContext.Provider>
    )
}
