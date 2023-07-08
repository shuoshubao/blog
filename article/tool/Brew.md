# 官网

https://brew.sh/

# 安装 1

官方推荐, 但是失败率高

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

# 安装 2

使用清华大学的源

1. 创建文件夹

```bash
sudo mkdir /usr/local/Homebrew
```

2. git clone

```
sudo git clone https://mirrors.ustc.edu.cn/brew.git /usr/local/Homebrew
```

3. 创建链接

```bash
sudo ln -s /usr/local/Homebrew/bin/brew /usr/local/bin/brew
```

4. homebrew-core

```bash
sudo mkdir -p /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core

sudo git clone https://mirrors.ustc.edu.cn/homebrew-core.git /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core
```

5. 权限

```bash
sudo chown -R $(whoami) /usr/local/Homebrew
```

6. 环境变量

`~/.bash_profile`

```bash
# Homebrew
export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.ustc.edu.cn/homebrew-bottles/"
```
