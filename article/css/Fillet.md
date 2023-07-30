# 横向

```playground
<template>
  <div class="container">
    <div>Tab1</div>
    <div>Tab2</div>
    <div>Tab3</div>
  </div>
</template>

<style type="text/less">
  .container {
    display: flex;
    gap: 12px;
    div {
      position: relative;
      background: #1677ff;
      color: #fff;
      padding: 5px 12px;
      cursor: pointer;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      &:nth-child(2)::before,
      &:nth-child(2)::after {
        content: ' ';
        position: absolute;
        width: 12px;
        height: 12px;
      }

      &:nth-child(2)::before {
        bottom: 0;
        left: -12px;
        background: -webkit-radial-gradient(left top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 70%, #1677ff 70%);
      }
      &:nth-child(2)::after {
        bottom: 0;
        right: -12px;
        background: -webkit-radial-gradient(right top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 70%, #1677ff 70%);
      }
    }
  }
</style>
```

# 纵向

```playground
<template>
  <div class="container">
    <div>Tab1</div>
    <div>Tab2</div>
    <div>Tab3</div>
  </div>
</template>

<style type="text/less">
  .container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 200px;
    div {
      position: relative;
      background: #1677ff;
      color: #fff;
      padding: 5px 12px;
      cursor: pointer;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      &:nth-child(2)::before,
      &:nth-child(2)::after {
        content: ' ';
        position: absolute;
        width: 12px;
        height: 12px;
      }

      &:nth-child(2)::before {
        top: -12px;
        right: 0;
        background: -webkit-radial-gradient(top left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 70%, #1677ff 70%);
      }
      &:nth-child(2)::after {
        bottom: -12px;
        right: 0;
        background: -webkit-radial-gradient(bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 70%, #1677ff 70%);
      }
    }
  }
</style>
```
