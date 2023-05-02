import { Scroll, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState } from "react"

const Section = (props) => {
    return (
        <section className={`block-info w-screen h-screen flex flex-col justify-center p-10`}
          style={{
            opacity: props.opacity,
          }}
        >
            <div className="w-1/2 flex items-center justifu-center">
                <div className="max-w-sm w-full">
                    <div className="runded-lg px-8 py-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Overlay = () => {

    const scroll = useScroll()
    const [opacityFirstSection, setOpacityFirstSection] = useState(1)
    const [opacitySecondSection, setOpacitySecondSection] = useState(1)
    const [opacityLastSection, setOpacityLastSection] = useState(1)
  
    useFrame(() => {
      setOpacityFirstSection(1 - scroll.range(0, 1 / 3))
      setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3))
      setOpacityLastSection(scroll.range(2 / 3, 1 / 3))
    })

    return (
        <Scroll html>
            <div className="w-screen" opacity={opacityFirstSection}>
                <Section>
                    <h1 className="font-semibold font-serif text-2xl">
                        Hello, I'm Pikli
                    </h1>
                    <p>Welcome to my portfolio</p>
                    <p className="mt-3"><b>I know:</b></p>
                    <ul className="leading-9">
                        <li>How to code</li>
                        <li>How to learn</li>
                        <li>How to deliver</li>
                    </ul>
                    <p className="animate-bounce  mt-6">↓</p>
                </Section>
                <Section opacity={opacitySecondSection}>
                    <h1 className="font-semibold font-serif text-2xl">
                        Here are my skillsets
                    </h1>
                    <p className="text-gray-500">I never test</p>
                    <p className="mt-3">
                        <b>Frontend:</b>
                    </p>
                    <ul className="leading-9">
                        <li>ReactJS</li>
                        <li>Tailwind</li>
                        <li>Scss</li>
                        <li>Jquery</li>
                    </ul>
                    <p className="mt-3">
                        <b>CMS:</b>
                    </p>
                    <ul className="leading-9">
                        <li>Wordpress</li>
                    </ul>
                    <p className="animate-bounce  mt-6">↓</p>
                </Section>
                <Section opacity={opacityLastSection}>
                <h1 className="font-semibold font-serif text-2xl">
                        My profile
                    </h1>
                    <ul className="leading-9">
                        <li><a href="https://github.com/AmiFudo" target="_blank">Github</a></li>
                        <li><a href="https://vk.com/id_pikli" target="_blank">Vk</a></li>
                        <li><a href="https://steamcommunity.com/profiles/76561198136585667/" target="_blank">Steam</a></li>
                        <li><a href="https://soundcloud.com/user-938376053" target="_blank">SoundCloud</a></li>
                    </ul>
                </Section>
            </div>
        </Scroll>
    )
}

export default Overlay