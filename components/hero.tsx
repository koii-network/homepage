import Image from "next/image";
import { Button } from "./ui/Button";
import { IconButton } from "@/components/ui/Button";
import styles from "../styles/home.module.css"

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className="grid grid-cols-2 gap-6 place-content-between px-64 py-36" >
                <div className="title text-6xl font-light leading-8">
                Earn for every
                <p className="font-semibold mt-12">view.</p>
                </div>
                <div className="content text-2xl leading-8">
                You put talent and hard work into what you create online. 
                <p className="mt-3.5">It’s time you got paid for it.</p>
                <div className="link pt-14">
                <Button
                label="Prove it."
                className="bg-mint border-mint border-solid border-2 p-[8px] w-[186px] h-[40px] rounded-3xl leading-3"/>
                </div>
                
                </div>
            </div>

            <div className="grid grid-cols-4 justify-items-center px-[28rem] my-16">
                <IconButton as="twitter" fill="#8585BC" px="40"/>
                <IconButton as="discord" fill="#8585BC" px="40"/>
                <IconButton as="telegram" fill="#8585BC" px="40"/>
                <IconButton as="github" fill="#8585BC" px="40"/>
            </div>

            <svg viewBox="0 0 1441 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.488281 0.571289V94H1440.49V0.571289C1234.41 52.6445 986.809 82.9995 720.488 82.9995C454.169 82.9995 206.568 52.6445 0.488281 0.571289Z" fill="url(#paint0_linear_1510_2500)"/>
            <defs>
            <linearGradient id="paint0_linear_1510_2500" x1="1015.5" y1="94" x2="1111" y2="-37" gradientUnits="userSpaceOnUse">
            <stop stop-color="#171751"/>
            <stop offset="1" stop-color="#24295D"/>
            </linearGradient>
            </defs>
            </svg>

        </div>
    )
}