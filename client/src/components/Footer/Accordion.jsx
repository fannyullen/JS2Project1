import { useState } from "react";

const Accordion = ({ title, links, isOpen, onClick }) => {
  return (
    <div className="border border-[#f96c6c] rounded-xl shadow-md mb-2 w-full">
      <button
        className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200"
        onClick={onClick}
      >
        <span className="font-semibold text-[#f96c6c]">{title}</span>
        <span className="text-[#f96c6c]">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          <div className="list-disc pl-5">
            {links.map((link, index) => (
              <div key={index}>
                <a href={link.url} className="cursor-pointer hover:underline" target="_blank" rel="noopener noreferrer">
                  {link.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const AccordionGroup = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    { 
      title: "Mina sidor", 
      links: [
        { text: "Mina ordrar", url: "https://react.dev/" },
        { text: "Mitt konto", url: "https://react.dev/reference/react" }
      ]
    },
    { 
      title: "Kundtjänst", 
      links: [
        { text: "Returer", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { text: "Leverans", url: "https://eloquentjavascript.net/" },
        { text: "Integritetspolicy", url: "https://eloquentjavascript.net/" },
        { text: "Villkor", url: "https://eloquentjavascript.net/" }
      ]
    },
    { 
      title: "Allmänt", 
      links: [
        { text: "FAQ", url: "https://tailwindcss.com/" },
        { text: "Jobba hos oss", url: "https://vitejs.dev/" },
        { text: "Cookies", url: "https://vitejs.dev/" }
      ]
    }
  ];

  return (
    <div className="max-w-md mx-auto mt-10">
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          links={item.links}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default AccordionGroup;

