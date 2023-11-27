import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./components/ui/hero-carousel")),
  {
    name: "Hero Carousel",
    inputs: [
      {
        name: "slides",
        type: "list",
        subFields: [
          {
            name: "image",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
          },
          { name: "headline", type: "string" },
          { name: "subhead", type: "string" },
          { name: "buttonText", type: "string" },
          { name: "buttonUrl", type: "url" },
        ],
      },
    ],
  }
);

//  const { title, desc, icon, url, label } = props;
Builder.registerComponent(
  dynamic(() => import("./components/search/provider-search-form")),
  {
    name: "Provider Search",
    inputs: [
      { name: "placeholderText", label: "Placeholder Text", type: "string", defaultValue: "Search by Doctor, Condition or Specialty..." },
      { name: "buttonLabel", label: "Button Label", type: "string", defaultValue: "Search" },
    ],
  },  
);


//  const { title, desc, icon, url, label } = props;
Builder.registerComponent(
  dynamic(() => import("./components/ui/icon-cta")),
  {
    name: "Icon CTA",
    inputs: [
      { name: "title", type: "string" },
      { name: "desc", type: "string", defaultValue: "enter your description here" },
      { name: "label", type: "string", defaultValue: "button label here" },
      { name: "url", type: "url", defaultValue: "#" },
      { name: "icon", type: "text",
        enum: [
          { label: "Doctor", value: "fa-user-md" },
          { label: "Map Marker", value: "fa-map-marker" },
          { label: "Calendar", value: "fa-calendar-check" },
        ],
    },
    ],
  },  
);
