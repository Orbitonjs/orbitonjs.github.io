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
        name: "Components and Props",
        href: "/learn/components"
      },
      {
        name: "State Managment",
        href: "/learn/state-management"
      },
      {
        name: "Conditional Rendering",
        href: "/learn/conditional-rendering"
      },
    ]
  },
  {
    name: "Advanced",
    icon: <Icons.HowTo />,
    dropdownList: [
      {
        name: "Fragments",
        href: "/docs/advanced/fragments"
      },
      {
        name: "Hydrating",
        href: "/docs/advanced/hydrating"
      },
      {
        name: "Orbiton Server",
        href: "/docs/advanced/orbiton-server"
      },
    ]
  },
  {
    name: "How to Guides",
    icon: <Icons.HowTo />,
    dropdownList: [
      {
        name: "JSX in Orbiton",
        href: "/docs/how-to-guides/jsx-in-orbiton"
      },
      {
        name: "Server Side Rendering",
        href: "/docs/how-to-guides/server-side-rendering"
      },
      {
        name: "Contributing",
        href: "/docs/how-to-guides/contributing"
      },
    ]
  },
  {
    name: "API Reference",
    icon: <Icons.Code />,
    href: "/docs/api-reference",
  },
  {
    name: "Blog",
    icon: <Icons.Templates />,
    href: "/Blog"
  }
]

