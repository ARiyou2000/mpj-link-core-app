import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "com_mpj_link_core_app",
    name: "MPJ-Link",
    short_name: "MPJ-Link",
    scope: "/",
    start_url: "/",
    description: "Smart home management system",
    lang: "fa",
    dir: "auto",
    theme_color: "#D67174",
    background_color: "#1C1F20",
    display: "fullscreen",
    display_override: ["window-controls-overlay"],
    orientation: "portrait",
    // shortcuts: [
    //   {
    //     name: "Login",
    //     url: "/",
    //     description: "Lock page",
    //   },
    // ],
    // screenshots:[],
    icons: [
      {
        src: "/icons/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/apple-icon.png",
        // sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/apple-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/apple-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/apple-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/apple-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/apple-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/apple-icon-precomposed.png",
        // sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/favicon.ico",
        // sizes: "512x512",
        // type: "image/ico",
        purpose: "any",
      },
      {
        src: "/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/ms-icon-70x70.png",
        sizes: "70x70",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/ms-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/ms-icon-150x150.png",
        sizes: "150x150",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/ms-icon-310x310.png",
        sizes: "310x310",
        type: "image/png",
        purpose: "any",
      },

      {
        src: "maskable_icon.png",
        // sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "maskable_icon_x48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "maskable_icon_x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "maskable_icon_x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "maskable_icon_x128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "maskable_icon_x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "maskable_icon_x384.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "maskable_icon_x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}