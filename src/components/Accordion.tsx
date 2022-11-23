import { useState } from "react";
import './Accordion.css'

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const Accordion = ({ title, children }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion">
      <div>
        <h3 className="accordion-title">{title}</h3>
        <button onClick={() => setOpen(!open)}>
          {open ? "Close" : "Open"}
        </button>
      </div>
      {open && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
