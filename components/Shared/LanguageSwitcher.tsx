"use client"

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import LanguageGlobalIcon from "../Icons/LanguageGlobalIcon";


declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: any;
      };
    };
  }
}

const Language = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ENGLISH");
  const [isLoaded, setIsLoaded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { label: "ENGLISH", code: "en" },
    { label: "FRENCH",  code: "fr" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Load saved language from localStorage
    const savedLang = localStorage.getItem("selectedLanguage");
    if (savedLang) {
      setSelectedLang(savedLang);
    }

    // Check if Google Translate is loaded and initialized
    const checkGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        setTimeout(() => {
          setIsLoaded(true);
          
          // Only apply translation if saved language is Polish
          if (savedLang === "FR") {
            changeLanguage("fr");
          }
          // If English (or default), do nothing - site is already in English
        }, 500);
      } else {
        setTimeout(checkGoogleTranslate, 100);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    checkGoogleTranslate();
    
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (languageCode: string) => {
    const tryTranslate = () => {
      // First check if Google Translate is loaded
      if (!window.google || !window.google.translate) {
        setTimeout(tryTranslate, 100);
        return;
      }

      // Wait for the translate element to be fully initialized
      const translateElement = document.querySelector('#google_translate_element');
      if (!translateElement) {
        setTimeout(tryTranslate, 100);
        return;
      }

      // Try to find the Google Translate select element
      let select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      
      // If not found, try to find it in iframes
      if (!select) {
        const iframes = document.querySelectorAll('iframe');
        for (const iframe of Array.from(iframes)) {
          try {
            if (iframe.contentDocument) {
              const iframeSelect = iframe.contentDocument.querySelector("select") as HTMLSelectElement;
              if (iframeSelect && iframeSelect.options.length > 0) {
                select = iframeSelect;
                break;
              }
            }
          } catch (e) {
            // Cross-origin iframe, skip
          }
        }
      }

      if (select) {
        // Set the value and trigger change
        select.value = languageCode;
        select.dispatchEvent(new Event("change", { bubbles: true }));
        
        // Also try to trigger the click event on the option
        const option = select.querySelector(`option[value="${languageCode}"]`) as HTMLOptionElement;
        if (option) {
          option.selected = true;
          select.dispatchEvent(new Event("change", { bubbles: true }));
        }
      } else {
        // If still not found, try again after a delay
        setTimeout(tryTranslate, 200);
      }
    };
  
    tryTranslate(); 
  };

  const selectedLanguage = languages.find(
    (lang) => lang.label === selectedLang
  );

  const handleLanguageSelect = (lang: typeof languages[0]) => {
    if (!isLoaded) {
      setSelectedLang(lang.label);
      localStorage.setItem("selectedLanguage", lang.label);
      setIsOpen(false);
      return;
    }
    
    setSelectedLang(lang.label);
    localStorage.setItem("selectedLanguage", lang.label);
    setIsOpen(false);
    changeLanguage(lang.code); 
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 cursor-pointer textPrimary text-xs leading-[100%] ${
          isLoaded 
            ? " " 
            : ""
        } `}
        disabled={!isLoaded}
      >
        {/* {selectedLanguage && (
          <Image
            src={selectedLanguage.image}
            alt={selectedLanguage.label}
            width={24}
            height={24}
            className="rounded-full w-5 h-5"
          />
        )} */}
        <span><LanguageGlobalIcon /> </span>
        <span className="notranslate textSecondary">{selectedLang}</span>
        {!isLoaded && (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200">
          {!isLoaded && (
            <div className="px-2 py-1 text-xs text-gray-500 border-b border-gray-100">
              Loading translator...
            </div>
          )}
          {languages.map((lang) => (
            <button
              key={lang.label}
              onClick={() => handleLanguageSelect(lang)}
              className={`flex items-center space-x-2 text-xs w-32 px-2 py-2 bg-[#1F274B] hover:bg-[#454F7B94] text-white cursor-pointer notranslate relative z-50 ${
                !isLoaded ? "opacity-50" : ""
              }`}
              disabled={!isLoaded}
            >
              {/* <Image
                src={lang.image}
                alt={lang.label}
                width={24}
                height={24}
                className="rounded-full w-6 h-6"
              /> */}
              <span >{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Language;