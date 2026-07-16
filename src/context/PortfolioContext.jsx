import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { defaultPortfolio } from "../data/defaultPortfolio";
import { clearPortfolio, loadPortfolio, savePortfolio } from "../utils/storage";

const PortfolioContext = createContext(null);

function cloneDefaultPortfolio() {
  return JSON.parse(JSON.stringify(defaultPortfolio));
}

export function PortfolioProvider({ children }) {
  const [portfolio, setPortfolio] = useState(() => loadPortfolio(cloneDefaultPortfolio()));
  const [saveStatus, setSaveStatus] = useState("saved");

  useEffect(() => {
    setSaveStatus("saving");
    const timer = window.setTimeout(() => {
      savePortfolio(portfolio);
      setSaveStatus("saved");
    }, 350);

    return () => window.clearTimeout(timer);
  }, [portfolio]);

  const updatePortfolio = useCallback((updater) => {
    setPortfolio((current) =>
      typeof updater === "function" ? updater(current) : { ...current, ...updater },
    );
  }, []);

  const updateNested = useCallback((section, key, value) => {
    setPortfolio((current) => ({
      ...current,
      [section]: {
        ...current[section],
        [key]: value,
      },
    }));
  }, []);

  const updateSettings = useCallback((key, value) => {
    setPortfolio((current) => ({
      ...current,
      settings: {
        ...current.settings,
        [key]: value,
      },
    }));
  }, []);

  const updateArrayItem = useCallback((collection, id, patch) => {
    setPortfolio((current) => ({
      ...current,
      [collection]: current[collection].map((item) =>
        item.id === id ? { ...item, ...patch } : item,
      ),
    }));
  }, []);

  const addArrayItem = useCallback((collection, item) => {
    setPortfolio((current) => ({
      ...current,
      [collection]: [...current[collection], item],
    }));
  }, []);

  const removeArrayItem = useCallback((collection, id) => {
    setPortfolio((current) => ({
      ...current,
      [collection]: current[collection].filter((item) => item.id !== id),
    }));
  }, []);

  const moveSection = useCallback((fromIndex, toIndex) => {
    setPortfolio((current) => {
      const sections = [...current.sections];
      const [moved] = sections.splice(fromIndex, 1);
      sections.splice(toIndex, 0, moved);
      return { ...current, sections };
    });
  }, []);

  const resetPortfolio = useCallback(() => {
    clearPortfolio();
    setPortfolio(cloneDefaultPortfolio());
    setSaveStatus("saved");
  }, []);

  const value = useMemo(
    () => ({
      portfolio,
      setPortfolio,
      updatePortfolio,
      updateNested,
      updateSettings,
      updateArrayItem,
      addArrayItem,
      removeArrayItem,
      moveSection,
      resetPortfolio,
      saveStatus,
    }),
    [
      portfolio,
      updatePortfolio,
      updateNested,
      updateSettings,
      updateArrayItem,
      addArrayItem,
      removeArrayItem,
      moveSection,
      resetPortfolio,
      saveStatus,
    ],
  );

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used inside PortfolioProvider.");
  }
  return context;
}
