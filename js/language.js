(() => {
  "use strict";
  const STORAGE_KEY = "otokuInstall.language";
  const SUPPORTED = ["ja", "en", "zh-CN", "zh-TW", "ko"];
  const FALLBACK = "ja";
  const select = document.getElementById("languageSelect");
  let messages = {};
  function normalizeLanguage(value) {
    if (!value) return FALLBACK;
    const raw = String(value).trim();
    if (SUPPORTED.includes(raw)) return raw;
    const lower = raw.toLowerCase();
    if (lower.startsWith("zh")) return /tw|hk|mo/.test(lower) ? "zh-TW" : "zh-CN";
    if (lower.startsWith("ko")) return "ko";
    if (lower.startsWith("en")) return "en";
    if (lower.startsWith("ja")) return "ja";
    return FALLBACK;
  }
  function initialLanguage() {
    try { const saved = localStorage.getItem(STORAGE_KEY); if (SUPPORTED.includes(saved)) return saved; } catch (_) {}
    return normalizeLanguage(navigator.languages?.[0] || navigator.language);
  }
  function lookup(dict, key) { return key.split(".").reduce((v, k) => v && v[k], dict); }
  async function applyLanguage(language, persist = false) {
    const selected = normalizeLanguage(language);
    let dict = {};
    try { const response = await fetch(`languages/${selected}.json`, {cache:"no-cache"}); if (!response.ok) throw new Error("Translation unavailable"); dict = await response.json(); }
    catch (error) { console.warn("Language load failed; falling back to Japanese.", error); try { const response = await fetch("languages/ja.json", {cache:"no-cache"}); if (response.ok) dict = await response.json(); } catch (_) {} }
    messages = dict;
    document.documentElement.lang = selected;
    document.querySelectorAll("[data-i18n]").forEach(el => { const value = lookup(messages, el.dataset.i18n); if (typeof value === "string") el.textContent = value; });
    if (select) select.value = selected;
    if (persist) { try { localStorage.setItem(STORAGE_KEY, selected); } catch (error) { console.warn("Could not save language preference.", error); } }
    window.dispatchEvent(new CustomEvent("otoku:languagechange", {detail:{language:selected}}));
  }
  if (select) select.addEventListener("change", e => applyLanguage(e.target.value, true));
  window.OtokuLanguage = {get:() => document.documentElement.lang || FALLBACK, set:language => applyLanguage(language, true), supported:[...SUPPORTED], t:key => lookup(messages, key) ?? key};
  applyLanguage(initialLanguage());
})();