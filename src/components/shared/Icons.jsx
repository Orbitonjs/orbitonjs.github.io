import Orbiton from 'orbiton';

// export const MenuIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>

export const MenuWhite = <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none" color="white" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" color="white" /></svg>

export const ArrowBack = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" /></svg>

export const Star = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>

export const Favorite = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fa6875"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>

export const Search = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#808080"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>

export const Github = (props) => <svg className={props.className || ""}
  style={{
    color: props.color || "inherit"
  }}
  fill="currentColor" focusable="false" viewBox="0 0 24 24"  ><path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path></svg>

export const NightIcon = (props) => <svg className={props.className || ""}
  style={{
    color: props.color || "inherit"
  }}
  fill="currentColor" focusable="false" viewBox="0 0 24 24" ><path d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"></path></svg>

export const DoubleMenu = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none" className={props.className || ""} ><rect x="1" y="5" width="14" height="1.5" rx="1" fill="#007FFF"></rect><rect x="1" y="9" width="14" height="1.5" rx="1" fill="#007FFF"></rect></svg>

export const DayIcon = (props) => <svg className={props.className || ""}
  fill="currentColor" focusable="false" viewBox="0 0 24 24" ><path d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>
export const SearchIcon = (props) => <svg
  className={props.className || ""}
  fill="currentColor"
  focusable="false" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>

export const Docs = (props) => <span className="material-icons material-icons-outlined">class</span>

export const Next = (props) => <span class={`material-icons material-icons-outlined ${props.className}`}>
  navigate_next
</span>

export const Code = (props) => <span className="material-icons material-icons-outlined">
  code
</span>
export const Busket = <span class="material-icons material-icons-outlined">
  shopping_basket
</span>

export const System = (props) => <span class="material-icons material-icons-outlined">
  folder_special
</span>

export const Pencil = (<span class="material-icons material-icons-outlined">
  edit
</span>)

export const Book = (props) => <span className="material-icons material-icons-outlined">
  auto_stories
</span>

export const Eye = (props) => <svg className={props.className || ""} fill="currentColor" viewBox="0 0 24 24"><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"></path></svg>

export const Templates = (props) => <span className="material-icons material-icons-outlined">
  newspaper
</span>

export const HowTo = (props) => <span className="material-icons material-icons-outlined">
  handyman
</span>

export const Tree = (props) => <span class="material-icons material-icons-outlined">
  account_tree
</span>

export const TreeTwo = (props) => <span class="material-icons material-icons-outlined">
  lan
</span>

export const Advanced = (props) => <span class="material-icons material-icons-outlined">
  insights
</span>

export const Devices = (props) => <span class="material-icons material-icons-outlined">
  important_devices
</span>

export function MenuIcon(props) {
  const size = props.size || "1em"
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={`${size}`}
      viewBox="0 0 24 24"
      width={`${size}`}
      stroke="currentColor"
      className={props.className || ""}
      style={{
        color: props.color || "inherit"
      }}
      fill="currentColor"
      strokeWidth="0"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  )
}
