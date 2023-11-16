import React from "react";
import { useState } from "react";

const IframeDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        open popup
      </button>
      {open ? (
        <iframe
          title="ifram"
          src="https://momentjscom.readthedocs.io/en/latest/moment/02-get-set/20-set/"
          width="540"
          height="450"
        ></iframe>
      ) : (
        ""
      )}
    </div>
  );
};

export default IframeDemo;
