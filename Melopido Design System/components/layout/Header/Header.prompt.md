Header is the fixed site-wide top bar: logo + wordmark, center rotating claim ("Sueño de seda" / "Descanso premium" / "Belleza mientras duermes"), hamburger opening the slide-in menu.

```jsx
<Header claim="Sueño de seda" claimSub="Piel y cabello más cuidados cada noche" />
```

On the real site it's `position: fixed` at z-index 2500; the claim text cross-fades every 4 seconds.
