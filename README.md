# snowfall-animation

Get snowfall on your website. HTML 5 canvas animation

# Features

- Set as background for any webpage
- Automatically adapts to different screen sizes
- Customize directly from HTML
- Change speed, color, density


# Preview

<img src="https://i.imgur.com/PIEEjGo.gif"/>

<a href="https://iam.engineer/demo/snowfall.html">Live Demo</a>

# How to use?

1. Copy snowfall.js to your directory.
2. Add the following code at the bottom of your HTML `<body>`.

```
<canvas id="snowfall"></canvas>
<script src="snowfall.js"></script>
```

# How to customize?

Add a `<script>` block below the 2 lines. Then alter the parameters as necessary.

**Remember to always call invalidate() method after editing the parameters.**

## Editable parameters:

- **\_snowColor** : Snow color
- **\_snowBg** : Background color
- **\_snowCount** : Number of snow particles
- **\_snowMinRadius** : Minimum radius of snow particle
- **\_snowMaxRadius** : Maximum radius of snow particle
- **\_snowMaxXVel** : Maximum speed in horizontal direction
- **\_snowMinYVel** : Minimum vertical speed
- **\_snowMaxYVel** : Maximum vertical speed

Check index.html for a sample on how to implement as well as how to customize.
