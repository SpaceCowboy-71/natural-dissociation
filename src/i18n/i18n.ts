//
// i18n.ts
// 
//
// Created by Thomas Schönmann on 08.02.2020
// Copyright © 2020. All rights reserved.
//
// 
//

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-chained-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import XHR from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

/*
 *
 * Setup.
 *
 */

export default i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    backend: {
      backends: [XHR, LocalStorageBackend],
      backendOptions: [
        {
          /* below options */
        },
        {
          loadPath: "/locales/{{lng}}/{{ns}}.json" // xhr load path for my own fallback
        }
      ]
    },
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });
