```playground
<script>
  import React from 'react'
  import { Button, message } from 'antd'

  const sleep = ms => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(ms)
      }, ms)
    })
  }

  const handleClick = async () => {
    const arr = [500, 1200, 2000]

    for await (let item of arr) {
      const time = await sleep(item)
      console.log(time)
      message.info(time)
    }

    message.success('执行完毕')
  }

  export default () => (
    <Button type="primary" onClick={handleClick}>
      运行
    </Button>
  )
</script>
```
