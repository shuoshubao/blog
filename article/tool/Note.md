Nodejs 全局目录

```sh
npm root -g

# Mac
# /usr/local/lib/node_modules
```

Npm 全局安装的权限问题

```sh
sudo chown -R $(whoami) ~/.npm

sudo chown -R $(whoami) /usr/local/lib/node_modules
```
