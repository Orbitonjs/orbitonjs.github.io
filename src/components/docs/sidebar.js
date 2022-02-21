import Orbiton from "orbiton"

import * as Icons from "../shared/Icons.jsx"

export const SIDEBAROBJS = [
  {
    name: "Getting Started",
    rootPath: "/docs/getting-started/",
    icon: <Icons.Book />,
    dropdownList: [
      {
        name: "Quick Start",
        href: "/docs/getting-started/quick-start"
      },
      {
        name: "Installation",
        href: "/docs/getting-started/installation"
      },
      {
        name: "Usage",
        href: "/docs/getting-started/usage"
      },
    ]
  },
  {
    name: "Learn",
    icon: <Icons.Pencil />,
    rootPath: "/learn",
    dropdownList: [
      {
        name: "Overview",
        href: "/learn"
      },
      {
        name: "The Orbiton Element",
        href: "/learn/creating-an-element"
      },
      {
        name: "Attributes, Styles and Events",
        href: "/learn/events-and-attributes"
      },
      {
        name: "Conditional Rendering",
        href: "/learn/conditional-rendering"
      },
      {
        name: "Components and Props",
        href: "/learn/components"
      },
      {
        name: "State Managment",
        href: "/learn/state-management"
      },
      {
        name: "Lifecycles",
        href: "/learn/lifecycles"
      },
      {
        name: "Forms",
        href: "/learn/forms"
      },
      {
        name: "What Next",
        href: "/learn/what-next"
      },
    ]
  },
  {
    name: "How to Guides",
    icon: <Icons.HowTo />,
    dropdownList: [
      {
        name: "Overview",
        href: "/docs/getting-started/overview"
      },
      {
        name: "Installation",
        href: "/docs/getting-started/installation"
      },
      {
        name: "Usage",
        href: "/docs/getting-started/usage"
      },
    ]
  },
  {
    name: "API Reference",
    icon: <Icons.Code />,
    rootPath: "/docs/api-reference",
    dropdownList: [
      {
        name: "append",
        href: "/docs/api-reference#append"
      },
      {
        name: "createElement",
        href: "/docs/api-reference"
      },
      {
        name: "createComponent",
        href: "/docs/api-reference"
      },
      {
        name: "LogicalComponent",
        href: "/docs/api-reference"
      },
      {
        name: "withComponent",
        href: "/docs/api-reference"
      },
      {
        name: "render",
        href: "/docs/api-reference"
      },
    ]
  },
  {
    name: "Blog",
    icon: <Icons.Templates />,
    href: "https://orbitonjs.medium.com"
  }
]

