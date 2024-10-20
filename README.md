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
