# rehype-spaced
Rehype plugin to preserve spacing on elements passed as children into jsx components


Existing issue:

When passing in code blocks in mdx either through props
```jsx
<Component code={`fun someCode() {
  console.log('test');
}`} />
```

Or through children objects

```jsx
<Component>
fun someCode() {
  console.log('test');
}
</Component>
```

We run into various issues which do not achieve our goals.  Either via failing parsing or losing newlines / spaces.

Instead with the rehype spaced plugin we can simply pass a code block with the `spaced` designation to achieve our goals.

After applying the plugin simply write
````jsx
<Component>
```spaced
fun someCode() {
  console.log('test');
}
```
</Component>
````
And we will pass in html elements with the text wrapped in \<pre\> tags, preserving any formatting put in.

## Usecase
An example use case we have is with [Kotlin Playground](https://github.com/JetBrains/kotlin-playground/).

By using [Kotlin Playground React Component](https://github.com/zsmoore/kotlin-playground-react-component) we can write Kotlin in markdown and display it in our playground editor.  
````jsx
<KTPlayground theme={"darcula"}>
```spaced
fun abc() {
  println("abc");
}

fun main() {
  abc()
}
```
</KTPlayground>
````
results in

<img width="806" alt="Screenshot 2024-10-20 at 11 06 42 PM" src="https://github.com/user-attachments/assets/e12d72fd-989d-4ae6-a086-9925fdcb8439">
