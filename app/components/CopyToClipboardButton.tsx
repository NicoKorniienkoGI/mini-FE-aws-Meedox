"use client";

import { useState } from "react";

export default function CopyToClipboardButton({
  textToCopy,
}: {
  textToCopy: string;
}) {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess("Copied!");
      setTimeout(() => setCopySuccess(""), 2000); // Reset the message after 2 seconds
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <div className="text-sm text-gray-900">
      <button onClick={copyToClipboard} className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="icon-sm"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        Copy to Clipboard
      </button>
      {copySuccess && <span>{copySuccess}</span>}
    </div>
  );
}
