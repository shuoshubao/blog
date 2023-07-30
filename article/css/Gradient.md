```playround
<template>
  <div class="white-grad">Some text here</div>

  <div class="white-grad">Some long long long text here</div>

  <div class="white-grad">Some long long <br />long text here</div>
</template>

<style>
  .white-grad {
    background: linear-gradient(#ccc 0 0) padding-box, /*this is your grey background*/ linear-gradient(
          to right,
          #9c20aa,
          #fb3570
        ) border-box;
    color: #313149;
    padding: 10px;
    border: 5px solid transparent;
    border-radius: 15px;
    display: inline-block;
    margin: 75px 0;
  }
</style>
```

```playround
<template>
  <div class="white-grad"></div>

  <div class="white-grad" style="--b:10px;--c:linear-gradient(140deg,red,yellow,green)"></div>

  <div class="white-grad" style="--b:8px;--c:linear-gradient(-40deg,black 50%,blue 0)"></div>

  <div class="white-grad" style="--b:20px;--c:conic-gradient(black,orange,purple)"></div>
</template>

<style>
  .white-grad {
    --b: 5px; /* border width*/

    color: #313149;
    display: inline-block;
    margin: 10px;
    width: 150px;
    aspect-ratio: 1;
    position: relative;
    z-index: 0;
  }

  .white-grad:before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0;
    background: var(--c, linear-gradient(to right, #9c20aa, #fb3570));
    padding: var(--b);
    border-radius: 50%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
</style>
```

# Reference

https://stackoverflow.com/questions/51496204/border-gradient-with-border-radius
