# Components And Props

<a href="https://www.interserver.net/r/656116"><img src="https://www.interserver.net/logos/WH_728x90.gif.gif" alt="InterServer Web Hosting and VPS" /></a>

## Components

Components are one if the building blocks of every Orbiton JS application. The make it possible for a developer to reuse code and create largescale apps. Think of how your write a function once and can be able to reuse it in different areas in your code without rewriting the whole function logic. That is how components work. Components helps in quite a lot of ways, they help in reusing code, code splitting and even clustering your application.
Let us get into an Example that might help you understand components well.
Imagine if you were the engineer building an Instagram clone. In the Application you will have an avatar for the user. But this avatar appears in may areas of the application. And it contains the following:

- A user profile picture
- The user name.

Your avatar code might look something like this.

```html
<div>
  <img src=”https://yourdomain.com/path/to/image” />
  <span> Username</span>
</div>
```

You can choose to add the above code to your app in two ways:

- Copy and paste it everywhere the avatar will be.
- Create a component and use that component each time you need it.

The first method gets tiresome the code you want to reuse scales up and this makes your code hard. To read.
The second method works like this.

```jsx
// create the Avatar once
const Avatar = <div>
  <img src="https://yourdomain.com/path/to/image" />
  <span> Username</span>
</div>
// just reuse it anywhere you need it
<Avatar /> 
```

The example used might seem small but as your application, scales up you will see the importance of components.
Now that you have the basic knowledge on Components, let us look at the types of components.

<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4708563499603847" data-ad-slot="3293369059"
      data-ad-format="auto" data-full-width-responsive="true"></ins>

## Types of components

There are three groups of components in Orbiton.

- Variable components
- Functional Components
- Class Components

As you can guess from the names. Variables, functions and classes respectively create them. Variable components are just normal variables just like what we used in the above example.
Functional and Class components and more advanced compared to variable components and this brings use to props.

## Props

As we explained above on how components were like functions. Props also act like parameters. They are actually parameters passed into components. As we said, functions help you to reuse code. However, in some instances you want to use the same function logic but on different pieces of data, so you pass in the data to the function as parameters. So even in components you want to render components with the same structure but with different data.

Take an example of the Instagram clone we were talking of. Imagine you are creating the feed page, on the feed page there are posts. Each post has the following piece of data:

- An image
- A like button
- A caption
- Number of likes.

The information above has to be dynamic for each post so you cannot use a variable component as we used in the Avatar example. In this case, we shall need to introduce the use of props and functional components.

A functional component is a function that returns an Orbiton element. The logic within the function does not matter as long as it returns an Orbiton element it will be an Orbiton Functional component.
Lets continue to create the post element. We shall firstbegein with the layout then we shal make it introduce props.

```jsx
function Post() {
  return (
    <section>
      <img src="https://yourdomain.com/path/to/image" />
      <p>100 likes</p>
      <button onClick={like}></button>
      <p>caption</p>
    </section>
  )
}
```

The above is a functional component with the layout of our Post and we have added some placeholder content so let us introduce props and make it dynamic.

First lets imagine you are fetching the posts from an API and it returns an Array of post objects with this structure:

```js
{
  image: "https://domain.com/path/to/img",
  likes: 100,
  caption: "Lorem ipsum ....."
}
```

<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4708563499603847" data-ad-slot="3293369059"
      data-ad-format="auto" data-full-width-responsive="true"></ins>

### Making component dynamic

Let us make the component render content based on props.

```jsx
function Post(props) {
  return (
    <section>
      <img src={props.image} />
      <p>{props.likes} likes</p>
      <button onClick={like}></button>
      <p>{props.caption}</p>
    </section>
  )
}
```

### Parsing in props

We shall Make a feed component that contains the Posts and we will map through the array of posts using the `.map()` method of an Array pass each object into the Post component as props.

```jsx
// Assuming the Array or posts is named `post`
function Feed() {
  return (
    <main>
    {posts.map((post)=> {
      return <Post likes={post.likes} image={post.image} caption={post.caption}>
    })}
    </main>
  )
}
```

As you can see, the usage of props makes it easy to render elements dynamically. Imagine if the Post Array was like 100 objects in it. We would have been able to render 100 objects using less than 10 lines of code
For now, that is it. We shall look at class components in the next section when learning about state management and data binding.

<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4708563499603847" data-ad-slot="3293369059"
      data-ad-format="auto" data-full-width-responsive="true"></ins>

## The createComponent function

So far we have learnt how to create components and we have used them in JSX but we haven’t learnt how to add the to an Orbiton tree of elements or how the JSX compiler differentiates components from elements in JSX.

### Using the `createComponent`

Using the `createComponent` function if easy all you need Is the component and its props.
The `createComponent` function takes in three arguments, the first is the component which is required then the props which are optional. The third is an argument used by Orbiton internally so you can just ignore it.
Example:

```js
import {createComponent} from "orbiton"

const App = createComponent(Component, props);
```

> When using JSX, the compiler differentiates a component from an element by the first character of the tag. If the first character is a Camel case latter( capital letter ) it will be transpiled to createComponent else it will be createElement. For example `<Section>` will be created as a `createComponent(Section)` and `<section>` will become `createElement("section")`. So you should always name your components using that convention.


<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4708563499603847" data-ad-slot="3293369059"
      data-ad-format="auto" data-full-width-responsive="true"></ins>
