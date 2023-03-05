import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { Beer } from "@/types/Beer";
import { useRef } from "react";

type AccordionItemProps = {
    active: number;
    handleToggle: void;
    beer: Beer;
};

const AccordionItem = ({ active, handleToggle, beer }: AccordionItemProps) => {
    const { id, name, first_brewed, tagline, description } = beer;
    const accordionBody = useRef<HTMLDivElement>(null);

    return (
        <div
            className="accordion__item mb-2 overflow-hidden rounded-md bg-tertiary-light text-base text-tertiary-dark"
            onClick={() => handleToggle(id)}
        >
            <div className="accordion__item__header group flex h-12 cursor-pointer items-center justify-between px-6 transition-all duration-300 ease-in-out hover:bg-secondary">
                <h2 className="font-bold group-hover:text-white">{name}</h2>
                {active === id ? (
                    <MdExpandLess className="h-6 w-6 group-hover:text-white" />
                ) : (
                    <MdExpandMore className="h-6 w-6 group-hover:text-white" />
                )}
            </div>
            <div
                ref={accordionBody}
                className={`accordion__item__body ${
                    active === id ? "show" : ""
                }`}
                style={
                    active === id
                        ? { height: accordionBody.current.scrollHeight }
                        : { height: "0px" }
                }
            >
                <div className="p-6">
                    <p className="mb-1">{first_brewed}</p>
                    <h3 className="mb-2 font-semibold">{tagline}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
