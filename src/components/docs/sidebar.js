import Orbiton from "orbiton"

import * as Icons from "../shared/Icons.jsx"

export const SIDEBAROBJS = [
  {
    name: "Getting Started",
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
    name: "Blog",
    icon: <Icons.Templates />,
    href: "https://medium.com/orbiton"
  }
]

