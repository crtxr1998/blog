---
category: System
tags:
  - world
date: 2021-04-09
title: Manjaro的安装及配置
meta:
  - name: description
    content: Manjaro的安装及配置
header-title: true
---

::: tip

Manjaro Linux的安装及配置

:::

<!-- more -->

### 下载官方iso(我选的是只有**2G大小的Minimal**无任何预装软件)

[https://manjaro.org/downloads/official/gnome/](https://manjaro.org/downloads/official/gnome/)

### 配置国内源

```shell
sudo pacman-mirrors -i -c China -m rank
```

### 设置 archlinuxcn 源,antergos源,arch4edu源:(都是基于Arch的源)

[可用源列表](https://github.com/archlinuxcn/mirrorlist-repo)

```shell
sudo nano /etc/pacman.conf
```

```csharp
[archlinuxcn]
SigLevel = Optional TrustedOnly
#清华源
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch

[antergos]
SigLevel = TrustAll
Server = https://mirrors.tuna.tsinghua.edu.cn/antergos/$repo/$arch

[arch4edu]
SigLevel = TrustAll
Server = https://mirrors.tuna.tsinghua.edu.cn/arch4edu/$arch
```

### 更新源列表

```undefined
sudo pacman-mirrors -g
```

## ARU包管理工具

```undefined
sudo pacman -S yay base-devel
```

### 更新yay(软件)数据库并全面更新系统

```shell
#我都是两个都跟新下......
sudo pacman -Syyu
or
yay -Syyu
```

### 防止PGP签名错误

```shell
yay -S archlinuxcn-keyring antergos-keyring
```

## 安装主题(Mojave Gtk Theme)

```shell
##1.install Theme
yay -S gtk-engine-murrine gtk-engines sassc
##2.install icons（git 下载太慢可以看gitee有没有别人fork好的仓库）
git clone https://github.com/vinceliuice/McMojave-circle.git && cd McMojave-circle/ && sh ./install.sh
```

## 设置主题

```shell
 有个叫`优化`的应用程序>外观
```

## 安装软件

## 安装搜狗拼音输入法

```bash
yay -S fcitx-im fcitx-configtool fcitx-sogoupinyin
```

```bash
##添加输入法配置文件
echo 'export GTK_IM_MODULE=fcitx                                          
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"'>~/.xprofile
```

## neofetch(查看系统信息)可在命令行中显示图片(但是在下没成功......)

```shell
yay -S neofetch
```

### 安装plank(选装`类mac`)

```shell
##安装
yay -S plank
##开机启动 (可以关掉原有的dock扩展)
sudo ln -s /usr/share/applications/plank.desktop /etc/xdg/autostart/
```

### 安装谷歌浏览器

```shell
yay -S google-chrome
```

### 安装扩展（这些貌似是自带的）

```shell
yay -S gnome-tweak-tool gnome-shell-extensions chrome-gnome-shell
```

https://www.gnome-look.org/)

### 使用zsh-theme-powerlevel10k主题(默认已安装zsh)

```shell
##安装主题（也可以git clone 原项目构建）
yay -S --noconfirm zsh-theme-powerlevel10k-git
echo 'source /usr/share/zsh-theme-powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
```

### 透明的终端

```shell
yay -S gnome-terminal-transparency
```

### 安装vscode

```shell
yay -S visual-studio-code-bin
```

### 安装微信

```shell
yay -S electronic-wechat
```

# 参考

### Gnome Shell 扩展（谷歌安装必须要访问助手,火狐不需要......）

[extensions.gnome](https://extensions.gnome.org)

[gnome-look社区](https://www.gnome-look.org/)