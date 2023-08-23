`width` 和 `padding-bottom` 使用相同的百分比即可实现正方形

```css
.item {
  height: 0;
  width: 100%;
  padding-bottom: 100%;
}

/* 或者 */
.item {
  height: 0;
  width: n%;
  padding-bottom: n%;
}
```

```playground
<style type="text/less">
  .list {
    display: flex;
    flex-wrap: wrap;
    padding: 24px;
    .item {
      height: 0;
      text-align: center;
      color: #fff;
    }
  }
</style>

<script>
  import { useState } from 'react'
  import { Form, InputNumber, Slider } from 'antd'

  const colors = [
    '#2ec7c9',
    '#b6a2de',
    '#5ab1ef',
    '#ffb980',
    '#d87a80',
    '#8d98b3',
    '#e5cf0d',
    '#97b552',
    '#95706d',
    '#dc69aa',
    '#07a2a4',
    '#9a7fd1',
    '#588dd5',
    '#f5994e',
    '#c05050',
    '#59678c',
    '#c9ab00',
    '#7eb00a',
    '#6f5553',
    '#c14089'
  ]

  export default () => {
    const [demoKey, setDemoKey] = useState(Date.now())

    const [form] = Form.useForm()

    const initialValues = {
      amount: 10,
      column: 4
    }

    const onValuesChange = () => {
      setDemoKey(Date.now())
    }

    return (
      <>
        <Form form={form} initialValues={initialValues} onValuesChange={onValuesChange} layout="inline">
          <Form.Item label="Amount" name="amount">
            <InputNumber min={1} max={100} style={{ width: 100 }} />
          </Form.Item>
          <Form.Item label="Column" name="column">
            <Slider min={1} max={10} style={{ width: 200 }} />
          </Form.Item>
        </Form>
        <div className="list" key={demoKey}>
          {Array(form.getFieldValue('amount') ?? initialValues.amount)
            .fill()
            .map((v, i) => {
              const width = [100 / (form.getFieldValue('column') ?? initialValues.column), '%'].join('')
              return (
                <div
                  className="item"
                  style={{
                    background: colors[i % colors.length],
                    width,
                    paddingBottom: width
                  }}
                >
                  {i}
                </div>
              )
            })}
        </div>
      </>
    )
  }
</script>
```
