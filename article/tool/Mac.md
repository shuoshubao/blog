# 终端自动补全忽略大小写

```sh
vim ~/.inputrc

# 粘贴配置

bind -f ~/.inputrc
```

```text
set completion-ignore-case on
set show-all-if-ambiguous on
Tab: menu-complete
```

# 关闭/开启 Spotlight

## 关闭

```bash
sudo launchctl unload -w /System/Library/LaunchDaemons/com.apple.metadata.mds.plist
```

## 开启

```bash
sudo launchctl load -w /System/Library/LaunchDaemons/com.apple.metadata.mds.plist
```

# 快捷键

- cmd+, 打开当前 app 的设置
- cmd+w 关闭当前标签页
- cmd+q 退出当前程序
- cmd+h 隐藏除了当前窗口
- cmd+alt+h 隐藏除了当前窗口以外的所有窗口
- cmd+shift+delete 清空垃圾桶
- cmd+alt+shift+delete 清空垃圾桶（无提示）
- cmd+左右 行首/末
- cmd+上下 顶/底部
- fn+上下 翻页

# 关闭/开启 自动生成 .DS_Store 文件

## 关闭

```bash
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE
```

## 开启

```bash
defaults delete com.apple.desktopservices DSDontWriteNetworkStores
```

# 显示/隐藏 隐藏文件(夹)

## 显示

```bash
defaults write com.apple.Finder AppleShowAllFiles YES
```

## 隐藏

```bash
defaults write com.apple.Finder AppleShowAllFiles NO
```
