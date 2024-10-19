Zsh is a powerful terminal which brings more features than bash. Below is a instruction for installing zsh and useful plugins when you get a new machine.

## Install zsh

```shell
sudo apt install zsh
```

Run `zsh` command to activate zsh terminal after installing.
## Install oh my zsh
oh my zsh is a power zsh management tool, it provides many plugins to improve efficiency.

```shell
$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### Install plugins

1. zsh-syntax-highlighting

This is a command highlight plugin.

```shell
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```
