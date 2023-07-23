# Antd

```playround
<script>
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      )
    }
  ]
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser']
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ]

  export default () => <Table columns={columns} dataSource={data} />
</script>
```

# 横向

```playround
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

```playround
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
