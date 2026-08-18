import localforage from 'localforage'

export async function saveJSON(key, obj){ await localforage.setItem(key, obj) }
export async function loadJSON(key){ return await localforage.getItem(key) }
export async function clearKey(key){ await localforage.removeItem(key) }
