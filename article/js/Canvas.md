# 初始化

```
const canvasDomEle = document.querySelector('#myCanvas')
const ctx = canvasDomEle.getContext('2d')
```

# 颜色、样式和阴影

## 属性

* fillStyle  // 设置或返回用于填充绘画的颜色、渐变或模式
* strokeStyle  // 设置或返回用于笔触的颜色、渐变或模式
* shadowColor  // 设置或返回用于阴影的颜色
* shadowBlur  // 设置或返回用于阴影的模糊级别
* shadowOffsetX  // 设置或返回阴影与形状的水平距离
* shadowOffsetY  // 设置或返回阴影与形状的垂直距离

```
ctx.fillStyle = color | gradient | pattern
ctx.strokeStyle = color | gradient | pattern
ctx.shadowColor = color
ctx.shadowBlur = number
ctx.shadowOffsetX = number
ctx.shadowOffsetY = number
```

## 方法

* createLinearGradient()  // 创建线性渐变（用在画布内容上）
* createRadialGradient()  // 创建放射状/环形的渐变（用在画布内容上）
* addColorStop()  // 规定渐变对象中的颜色和停止位置
* createPattern()  // 在指定的方向上重复指定的元素

```
const gradient = ctx.createLinearGradient(x0, y0, x1, y1)
const gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1)

gradient.addColorStop(stop, color) // stop: [0, 1]

const pattern = ctx.createPattern(imgDom, 'repeat | repeat-x | repeat-y | no-repeat')
```

# 线条样式

## 属性

* lineCap  // 设置或返回线条的结束端点样式
* lineJoin  // 设置或返回两条线相交时，所创建的拐角类型
* lineWidth  // 设置或返回当前的线条宽度
* miterLimit  // 设置或返回最大斜接长度

```
ctx.lineCap = 'butt | round | square'
ctx.lineJoin = 'miter | bevel | round' // 斜切 | 锥角 | 圆角
ctx.lineWidth = number
ctx.miterLimit = number // ctx.lineJoin = 'miter'
```

# 矩形

## 方法

* rect()  // 创建矩形
* fillRect()  // 绘制"被填充"的矩形
* strokeRect()  // 绘制矩形（无填充）
* clearRect()  // 在给定的矩形内清除指定的像素

```
ctx.rect(x, y, width, height)
ctx.fillRect(x, y, width, height)
ctx.strokeRect(x, y, width, height)
ctx.clearRect(x, y, width, height)
```

# 路径

## 方法

* beginPath()  // 起始一条路径，或重置当前路径
* lineTo()  // 添加一个新点，然后在画布中创建从该点到最后指定点的线条
* moveTo()  // 把路径移动到画布中的指定点，不创建线条
* closePath()  // 创建从当前点回到起始点的路径

* fill()  // 填充当前绘图（路径）
* stroke()  // 绘制已定义的路径

* clip()  // 从原始画布剪切任意形状和尺寸的区域

* quadraticCurveTo()  // 创建二次贝塞尔曲线
* bezierCurveTo()  // 创建三次贝塞尔曲线
* arc()  // 创建弧/曲线（用于创建圆形或部分圆）
* arcTo()  // 创建两切线之间的弧/曲线
* isPointInPath()  // 如果指定的点位于当前路径中，则返回 true，否则返回 false

```
ctx.beginPath()
ctx.lineTo(x, y)
ctx.moveTo(x, y)
ctx.closePath()

ctx.fill()
ctx.stroke()

ctx.clip()

ctx.quadraticCurveTo(cpx, cpy, x, y)
ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

ctx.arc(x, y, r, startAngle, endAngle, counterclockwise) // counterclockwise=true 逆时针
ctx.arcTo(x1, y1, x2, y2, r)
ctx.isPointInPath(x, y)
```

# 转换

## 方法

* scale()  // 缩放当前绘图至更大或更小
* rotate()  // 旋转当前绘图
* translate()  // 重新映射画布上的 (0,0) 位置
* transform()  // 替换绘图的当前转换矩阵
* setTransform()  // 将当前转换重置为单位矩阵然后运行 transform()

```
ctx.scale(scaleWidth, scaleHeight)
ctx.rotate(angle)
ctx.transform(a, b, c, d, e, f) // x缩放 | x倾斜 | y缩放 | y倾斜 | x平移 | y平移
ctx.setTransform(a, b, c, d, e, f) // x缩放 | x倾斜 | y缩放 | y倾斜 | x平移 | y平移
```

# 文本

## 属性

* font  // 设置或返回文本内容的当前字体属性
* textAlign  // 设置或返回文本内容的当前对齐方式
* textBaseline  // 设置或返回在绘制文本时使用的当前文本基线

```
ctx.font = 'font-style font-variant font-weight font-size/line-height font-family'
ctx.textAlign = 'center | end | left | right | start'
ctx.textBaseline = 'alphabetic | top | hanging | middle | ideographic | bottom'
```

## 方法

* fillText()  // 在画布上绘制"被填充的"文本
* strokeText()  // 在画布上绘制文本（无填充）
* measureText()  // 返回包含指定文本宽度的对象

```
ctx.fillText(text, x, y, maxWidth)
ctx.strokeText(text, x, y, maxWidth)
const measureTextWidth = ctx.measureText(text).width

TextMetrics {
    width [num]
}
```

# 图像绘制

## 方法

* drawImage(imgDom, sx, sy, swidth, sheight, x, y, width, height)  // 向画布上绘制图像、画布或视频

```
drawImage(imgDom, x, y)
drawImage(imgDom, x, y, width, height)
drawImage(imgDom, sx, sy, swidth, sheight, x, y, width, height)
```

# 像素操作 ImageData

## 属性

* width/height  // 返回 ImageData 对象的宽度/高度
* data  // 返回一个对象，其包含指定的 ImageData 对象的图像数据

```
ImageData {
    width [int]
    height [int]
    data [Uint8ClampedArray]
}
```

## 方法

* createImageData()  // 创建新的、空白的 ImageData 对象
* getImageData()  // 返回 ImageData 对象，该对象为画布上指定的矩形复制像素数据
* putImageData()  // 把图像数据（从指定的 ImageData 对象）放回画布上

```
const imgData = ctx.createImageData(width, height)
const imgData = ctx.createImageData(imgData0)

const imgData = ctx.getImageData(x, y, width, height)

ctx.putImageData(imgData, x, y, dirtyX, dirtyY, dirtyWidth, dirtyHeight)
```

# 其他

* getContext()
* toDataURL()
* save()
* restore()
* createEvent()

```
canvasDomEle.getContext('2d')
canvasDomEle.toDataURL()
```

# Reference

* [http://www.runoob.com/tags/ref-canvas.html](http://www.runoob.com/tags/ref-canvas.html)
