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

    const handleKeyPress = (e: any) => {
        if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") {
            handleToggle(id);
        }
    };

    return (
        <div
            className="accordion__item mb-2 overflow-hidden rounded-md bg-tertiary-light text-base text-tertiary-dark"
            onClick={() => handleToggle(id)}
        >
            <div
                aria-controls="accordion__item__body"
                aria-expanded={active === id}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => handleKeyPress(e)}
                aria-pressed="false"
                id="accordion__item__header"
                className="accordion__item__header group flex h-12 cursor-pointer items-center justify-between rounded-t-md px-6 transition-all duration-300 ease-in-out hover:bg-secondary focus-visible:rounded-b-md"
            >
                <h2 className="font-bold group-hover:text-white">{name}</h2>
                {active === id ? (
                    <MdExpandLess className="h-6 w-6 group-hover:text-white" />
                ) : (
                    <MdExpandMore className="h-6 w-6 group-hover:text-white" />
                )}
            </div>
            <div
                ref={accordionBody}
                id="accordion__item__body"
                role="region"
                aria-labelledby="accordion__item__header"
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
