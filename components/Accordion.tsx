import { useState } from "react";
import { Beer } from "@/types/Beer";
import AccordionItem from "./AccordionItem";

type AccordionProps = {
    beers: Beer[];
};

const Accordion = ({ beers }: AccordionProps) => {
    const [active, setActive] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    };

    return (
        <>
            <div className="accordion h-auto max-w-5xl">
                {beers.map((beer, index) => {
                    return (
                        <AccordionItem
                            key={index}
                            active={active ?? 0}
                            handleToggle={handleToggle}
                            beer={beer}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Accordion;
