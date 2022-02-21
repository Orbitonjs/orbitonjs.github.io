Imagine you want to create a button on your site that gives a user an ability to login or log out of his account. You want to do it in a way that if the user in logged in, you render a button with the text login else it renders a button with the text logout.

So let us create the two button components
```jsx
// Assuming `login` and `logout` functions are already declared
const LoginButton = () => {
	return (
		<button onClick={login}>Login</button>
	)
}
const LogoutButton = () => {
	return (
		<button onClick={logout}>Logout</button>
	)
}
```

## Using if-else statements
Now that you have created the buttons. Let us assume we have a component that receives props that indicate whether the user is logged in or not. Let us call it `AuthButton`.
```jsx
function AuthButton(props) {
  if (props.isLoggedIn) {
    return <LogoutButton/>
  } else {
    return <LogginButton/>
  }
}
```

## Inline If-Else with Conditional Operator

In the above example, we used an if-else statement to return what king of button we want to render. However, imagine you want only the text within an element to change when a certain condition is met. For example:
You want to render the text `You are ` and if the user is logged in you will add on logged in or else add on logged out. 
You definitely would not want to create a completely new component that just renders the text `logged in` or `logged out`. Instead, you can just use the tannery operator.

```jsx
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      You are <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

>  - An important fact to not is that since we utilize JSX while writing orbiton Apps, you can use any form or conditional way to render something if you where using normal JavaScript.
> - Also keep in mind that a component rerenders only if state changes so your should be aware of what data you are using to determine how your app is being rendered. 
