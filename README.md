# Header animation tuning

The top header reveal can be adjusted from the `.hero-header` CSS variables in `styles.css`.

## 1) Bush image looks cut on the sides
Change `--bush-width` to control how much of each bush image is visible.

- Increase it if you still see clipping.
- Decrease it if bushes cover too much of the center.

```css
.hero-header {
  --bush-width: min(64vw, 760px);
}
```

## 2) Move initial bush position closer/farther from center
Change `--bush-start-offset`.

- Lower value: bushes start closer to the middle.
- Higher value: bushes start farther from the middle.

```css
.hero-header {
  --bush-start-offset: 85%;
}
```

## 3) Make animation slower/faster
Change `--bush-reveal-duration`.

- Higher value = slower animation.
- Lower value = faster animation.

```css
.hero-header {
  --bush-reveal-duration: 3.6s;
}
```

## Optional: force full reveal distance
If the path is not fully revealed, increase `--bush-end-offset`.

```css
.hero-header {
  --bush-end-offset: 190%;
}
```
