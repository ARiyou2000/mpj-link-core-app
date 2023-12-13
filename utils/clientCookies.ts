"use client";

const clientCookies = {
  get(name: string) {
    const regex = new RegExp(`(^|; )${name}=([^;]*)(;|$)`);
    const matches = regex.exec(window.document.cookie);

    if (matches) {
      return matches[2];
    }
    return null;
  },

  // async getModernApiCookie(name: string) {
  //   return await window.cookieStore.get(name);
  // },
};

export default clientCookies;
