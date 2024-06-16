import React, { useState, useRef, useEffect } from "react";

function AdditionalInfo({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    if (isOpen) {
      content.style.height = `${content.scrollHeight}px`;
      console.log(content.scrollHeight);
      content.style.transition = "height 0.5s ease";
      content.addEventListener(
        "transitionend",
        () => {
          content.style.height = "auto";
        },
        { once: true }
      );
    } else {
      content.style.height = `${content.scrollHeight}px`;
      requestAnimationFrame(() => {
        content.style.transition = "height 0.5s ease";
        content.style.height = "0";
      });
    }
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="additional-info">
      <div className="adin-tog con mpara sflex" onClick={toggleOpen}>
        <span>Additional Information</span>
        <span className={`adin-tarr ${isOpen ? "open" : ""}`}>&#9662;</span>
      </div>
      <div ref={contentRef} className={`adin-incon`}>
        <div className="content-inner con">
          <table className="ad-info-tb">
            <tbody>
              {data &&
                data.map((row, index) => (
                  <tr key={index}>
                    <td className="para">{row}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdditionalInfo;
