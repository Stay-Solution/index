// utils/getIdFromQueryString.ts

export function getIdFromQueryString(): string | null {
    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');
    return id;
  }
  