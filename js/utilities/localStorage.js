export const isLocalStorageAvailable = () => window && window.localStorage

export const localStorageGetInitialize = (key, initialValue) => {
  const noLocalStorageAvailable = !isLocalStorageAvailable()
  if (noLocalStorageAvailable) return;
  let local = window.localStorage.getItem(key)

  if (!local && initialValue) {
    window.localStorage.setItem(key, JSON.stringify(initialValue))
    return initialValue
  }

  return JSON.parse(local);
}

export const localStorageSet = (key, value) => {
  if (!isLocalStorageAvailable()) return;
  window.localStorage.setItem(key, JSON.stringify(value))
}