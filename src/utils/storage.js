const STORAGE_KEY = "portfolio-craft-data-v1";

export function loadPortfolio(fallback) {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    console.warn("Could not load the saved portfolio.", error);
    return fallback;
  }
}

export function savePortfolio(portfolio) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(portfolio));
  } catch (error) {
    console.warn("Could not save the portfolio.", error);
  }
}

export function clearPortfolio() {
  localStorage.removeItem(STORAGE_KEY);
}
