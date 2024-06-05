import { Builder, withChildren } from "@builder.io/react";
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
          {
            name: "headlineStyle",
            type: "text",
            enum: [
              { label: "Light", value: "text-primaryLight" },
              { label: "Dark", value: "text-primaryDark" },
              { label: "Accent", value: "text-primaryAccent" },
            ],
          },
          { name: "subhead", type: "string" },
          { name: "buttonText", type: "string" },
          { name: "buttonUrl", type: "url" },
        ],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/ui/hero-carousel2")),
  {
    name: "Hero Carousel 2",
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
      {
        name: "placeholderText",
        label: "Placeholder Text",
        type: "string",
        defaultValue: "Search by Doctor, Condition or Specialty...",
      },
      {
        name: "buttonLabel",
        label: "Button Label",
        type: "string",
        defaultValue: "Search",
      },
    ],
  }
);

//  const { title, desc, icon, url, label } = props;
Builder.registerComponent(
  dynamic(() => import("./components/ui/icon-cta")),
  {
    name: "IconCTA",
    inputs: [
      { name: "title", type: "string" },
      {
        name: "desc",
        type: "string",
        defaultValue: "enter your description here",
      },
      { name: "label", type: "string" },
      { name: "url", type: "url", defaultValue: "#" },
      {
        name: "icon",
        type: "text",
        enum: [
          { label: "Doctor", value: "fa-user-md" },
          { label: "Map Marker", value: "fa-map-marker" },
          { label: "Calendar", value: "fa-calendar-check" },
          { label: "Ambulance", value: "fa-ambulance" },
          { label: "Hospital", value: "fa-hospital" },
          { label: "Phone", value: "fa-phone" },
          { label: "Medical Case", value: "fa-suitcase-medical" },
        ],
      },
    ],
  }
);

//  const { title, desc, icon, url, label } = props;
Builder.registerComponent(
  dynamic(() => import("./components/ui/icon-cta2")),
  {
    name: "IconCTA2",
    inputs: [
      { name: "title", type: "string" },
      {
        name: "desc",
        type: "string",
      },
      {
        name: "icon",
        type: "text",
        enum: [
          { label: "Doctor", value: "fa-user-md" },
          { label: "Map Marker", value: "fa-map-marker" },
          { label: "Calendar", value: "fa-calendar-check" },
          { label: "Ambulance", value: "fa-ambulance" },
          { label: "Hospital", value: "fa-hospital" },
          { label: "Phone", value: "fa-phone" },
          { label: "Medical Case", value: "fa-suitcase-medical" },
        ],
      },
      { name: "url", type: "url", defaultValue: "#" },
    ],
  }
);

//  const { title, desc, icon, url, label } = props;
//const { imageUrl, title, description, linkUrl } = props;
Builder.registerComponent(
  dynamic(() => import("./components/ui/cta-card")),
  {
    name: "CTACard",
    inputs: [
      {
        name: "imageUrl",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      },
      { name: "title", type: "string", defaultValue: "enter your title here" },
      {
        name: "description",
        type: "string",
        defaultValue: "enter your description here",
      },
      { name: "linkUrl", type: "url", defaultValue: "#" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/ui/practice-card")),
  {
    name: "Practice Card",
    inputs: [
      { name: "name", type: "string", defaultValue: "[name]" },
      { name: "title", type: "string", defaultValue: "[title]" },
      { name: "thumbnail", type: "file" },
    ],
  }
);

Builder.registerComponent(
  withChildren(dynamic(() => import("./components/ui/card-container"))),
  {
    name: "Card Container",
    childRequirements: {
      message: "You can only put in Card components",
      query: {
        "component.name": { $in: ["CTACard", "IconCTA2", "IconCTA"] },
      },
    },
    inputs: [
      {
        name: "headline",
        type: "text",
        defaultValue: "[Default Headline]",
      },
    ],
  }
);
