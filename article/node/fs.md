# 读取文件

```js
fs.readFile(path, options, callback)
fs.readFileSync(path, options)
```

# 写入文件

```js
fs.writeFile(path, data, options, callback)
fs.writeFileSync(path, data, options)
```

# 创建目录

```js
fs.mkdir(path, options, callback)
fs.mkdirSync(path, options)
```

# 读取目录

```js
fs.readdir(path, options, callback)
fs.readdirSync(path, options)
```

# 查看文件/目录信息

```js
fs.stat(path, options, =, {, bigint:, false, }, callback);
fs.statSync(path, options, =, {, bigint:, false, });

fs.lstat(path, options, =, {, bigint:, false, }, callback);
fs.lstatSync(path, options, =, {, bigint:, false, });
```

# 检查文件/目录是否存在

```js
fs.exists(path, callback)
fs.existsSync(path)
```

# 获取文件的绝对路径

```js
fs.realpath(p, options, callback)
fs.realpathSync(p, options)
```

# 修改文件时间

```js
fs.utimes(path, atime, mtime, callback)
fs.utimesSync(path, atime, mtime)
```

# 修改文件/目录的读取权限

```js
fs.chmod(path, mode, callback)
fs.chmodSync(path, mode)
```

# 移动/重命名文件

```js
fs.rename(oldPath, newPath, callback)
fs.renameSync(oldPath, newPath)
```

# 创建和删除硬连接

```js
fs.link(existingPath, newPath, callback)
fs.linkSync(existingPath, newPath)
```

# 截断文件

```js
fs.truncate(path, len, callback)
fs.truncateSync(path, len)
```

# 删除空目录

```js
fs.rmdir(path, options, callback)
fs.rmdirSync(path, options)
```

# 监视文件/目录

```js
fs.watchFile(filename, options, listener)
fs.unwatchFile(filename, listener)
```

# Reference

- [https://nodejs.org/api/fs.html](https://nodejs.org/api/fs.html)
