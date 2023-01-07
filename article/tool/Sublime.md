# 最佳配置

```json
{
  "caret_style": "smooth",
  "detect_indentation": false,
  "draw_white_space": "all",
  "file_exclude_patterns": [
    "*.pyc",
    "*.pyo",
    "*.exe",
    "*.dll",
    "*.obj",
    "*.o",
    "*.a",
    "*.lib",
    "*.so",
    "*.dylib",
    "*.ncb",
    "*.sdf",
    "*.suo",
    "*.pdb",
    "*.idb",
    ".DS_Store",
    "*.class",
    "*.psd",
    "*.db",
    "*.sublime-workspace",
    "._*"
  ],
  "find_selected_text": true,
  "folder_exclude_patterns": [".svn", ".git", ".hg", "CVS", "node_modules"],
  "font_size": 18,
  "highlight_line": true,
  "ignored_packages": ["Vintage"],
  "indent_to_bracket": true,
  "match_brackets_angle": false,
  "match_brackets_braces": false,
  "tab_size": 4,
  "translate_tabs_to_spaces": true,
  "trim_trailing_white_space_on_save": true,
  "ensure_newline_at_eof_on_save": true,
  "word_wrap": false
}
```

# [Package Control](https://packagecontrol.io/installation)

```py
import urllib.request,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

# 插件

- Emmet
- A File Icon
- CSS3
- jQuery
- LESS
- SCSS
- CSScomb
- JsPrettier
- JsFormat
- Quote HTML
- HTML-CSS-JS Prettify
- All Autocomplete
- AutoFileName
- DocBlockr
- DeleteBlankLines
- Console API Snippets
- SFTP
- Nodejs

# 快捷键

## 文件

- cmd+o 打开文件
- cmd+n 新建标签页
- cmd+shift+n 新建窗口
- cmd+w 关闭标签页
- cmd+shift+w 关闭窗口
- cmd+shift+p 打开命令面板
- cmd+p 搜索项目中的文件
- ctrl+g 跳到指定行
- ctrl+\` 打开控制台
- cmd+k,b 显示/隐藏文件目录

## 编辑

- cmd+c 复制（选中部分/当前行）
- cmd+x 剪切（选中部分/当前行）
- cmd+v 粘贴
- cmd+shift+v 粘贴+缩进
- cmd+alt+v 打开粘贴板
- cmd+z 撤销
- cmd+y 重复上次操作

## 选择

- cmd+a 全选
- cmd+d 选择单词
- cmd+l 选择一行
- shift+alt+up 添加上一行
- shift+alt+down 添加下一行
- esc 只留第一个选择
- cmd+shift+空格 扩展到 scope
- cmd+shift+a 光标所在标签的全部内容
- cmd+shift+j 光标所在标签的父标签的全部内容（最近的{}）
- ctrl+shift+m 选中光标所在括号（小括号，中括号，大括号）里面的全部内容

### 行

- cmd+ctrl+up 上移一行
- cmd+ctrl+down 下移一行
- cmd+shift+d 复制并粘贴行
- ctrl+shift+k 删除行
- cmd+j 合并行

### 注释

- cmd+/
- cmd+shift+/

### 缩进

- cmd+[
- cmd+]

## 大小写

- cmd+k,u 大写
- cmd+k,l 小写

### 文本

- cmd+enter 往下插入行
- cmd+shift+enter 往上插入行
- cmd+delete 删除光标至行首
- ctrl+k 删除光标至行尾
- ctrl+t 交换光标左右字符

### 标签

- cmd+alt+. 补全标签
- alt+shift+w 为选中域包裹一对闭合标签
- ctrl+alt+enter 为选中域包裹一对闭合标签（比楼上的命令更高级）
- ctrl+e 将选中的单词补全为一对闭合标签

### 折叠

- cmd+alt+[ 折叠
- cmd+alt+] 展开
- cmd+k,j 展开所有
- cmd+k,t 折叠标签属性
- cmd+k,数字 折叠 n 层

### 排序

- f9 行按升序排
- ctrl+f9 行按升序排，区分大小写

# 命令行[打开文件或者目录]

## subs

```
Sublime Text 提供命令行的工具: subs
路径: /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl
```

## ln

```
ln  /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl /usr/local/bin/subl
或者
ln  /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl /usr/local/bin/st
```

## file or folder

```
st index.js
或者
st img
```
