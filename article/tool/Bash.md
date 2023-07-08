# 编辑

```bash
vim ~/.bash_profile

# or

vim ~/.bashrc
```

# 配置

## alias

```bash
# git
alias gcl="git clone"
alias gst="git status"
alias gdf="git diff"
alias gpl="git pull"
alias gps="git push"
alias gmg="git merge"
alias gbr="git branch"
alias gadd="git add"
alias gct="git commit -m"
alias gcta="git commit -am"
alias grm="git rm"
alias gmv="git mv"
alias gcp="git cherry-pick"
alias gstash="git stash"
alias greset="git reset"
alias glog="git log"

# npm
alias start="npm start"
alias build="npm run build"
alias release="npm run release"
alias version_patch="npm run version:patch"
alias version_minor="npm run version:minor"
alias version_major="npm run version:major"

# dir
alias cdgithu="cd ~/Documents/GitHub"

# sublime
alias st="subl"
```

## export

```bash

# Sublime
export PATH="/Applications/Sublime Text.app/Contents/SharedSupport/bin:$PATH"

# MacPorts
export PATH="/opt/local/bin:/opt/local/sbin:$PATH"

# Homebrew
export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.ustc.edu.cn/homebrew-bottles/"
```

# 保存

```bash
source ~/.bash_profile
```
