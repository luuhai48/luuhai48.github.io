#!/bin/bash

# ============================= HOW TO USE? ===================================
#
# bash -c "$(curl https://luuhai48.github.io/starter.sh)"
#
# OR
#
# bash -c "$(wget -O- https://luuhai48.github.io/starter.sh)"
#
# =============================================================================

if [[ ! "$OSTYPE" == "linux-gnu"* ]]; then
    echo "OS not supported!"
    exit 1
fi

if [ ! -x /usr/bin/apt ]; then
    echo "APT not found!"
    exit 1
fi

sudo -p "Please enter you admin password: " whoami 1>/dev/null

# Renders a text based list of options that can be selected by the
# user using up, down and enter keys and returns the chosen option.
#
#   Arguments   : list of options, maximum of 256
#                 "opt1" "opt2" ...
#   Return value: selected index (0 for opt1, 1 for opt2 ...)
function select_option {
    # little helpers for terminal print control and key input
    ESC=$(printf "\033")
    cursor_blink_on() { printf "$ESC[?25h"; }
    cursor_blink_off() { printf "$ESC[?25l"; }
    cursor_to() { printf "$ESC[$1;${2:-1}H"; }
    print_option() { printf "   $1 "; }
    print_selected() { printf "  $ESC[7m $1 $ESC[27m"; }
    get_cursor_row() {
        IFS=';' read -sdR -p $'\E[6n' ROW COL
        echo ${ROW#*[}
    }
    key_input() {
        read -s -n3 key 2>/dev/null >&2
        if [[ $key = $ESC[A ]]; then echo up; fi
        if [[ $key = $ESC[B ]]; then echo down; fi
        if [[ $key = "" ]]; then echo enter; fi
    }

    # initially print empty new lines (scroll down if at bottom of screen)
    for opt; do printf "\n"; done

    # determine current screen position for overwriting the options
    local lastrow=$(get_cursor_row)
    local startrow=$(($lastrow - $#))

    # ensure cursor and input echoing back on upon a ctrl+c during read -s
    trap "cursor_blink_on; stty echo; printf '\n'; exit" 2
    cursor_blink_off

    local selected=0
    while true; do
        # print options by overwriting the last lines
        local idx=0
        for opt; do
            cursor_to $(($startrow + $idx))
            if [ $idx -eq $selected ]; then
                print_selected "$opt"
            else
                print_option "$opt"
            fi
            ((idx++))
        done

        # user key control
        case $(key_input) in
        enter) break ;;
        up)
            ((selected--))
            if [ $selected -lt 0 ]; then selected=$(($# - 1)); fi
            ;;
        down)
            ((selected++))
            if [ $selected -ge $# ]; then selected=0; fi
            ;;
        esac
    done

    # cursor position back to normal
    cursor_to $lastrow
    printf "\n"
    cursor_blink_on

    return $selected
}

# Docker ======================================================================
echo "Do you want to install Docker?"

docker_options=("Yes" "no")

select_option "${docker_options[@]}"
docker_choice=$?

INSTALL_DOCKER=true
if [ "$docker_choice" = 1 ]; then
    INSTALL_DOCKER=false
fi
# =============================================================================

# docker-compose ==============================================================
echo "Do you want to install docker-compose?"

docker_compose_options=("Yes" "no")

select_option "${docker_compose_options[@]}"
docker_compose_choice=$?

INSTALL_DOCKER_COMPOSE=true
if [ "$docker_compose_choice" = 1 ]; then
    INSTALL_DOCKER_COMPOSE=false
fi
# =============================================================================

# Oh-My-ZSH ===================================================================
echo "Do you want to install Oh-My-ZSH?"

ohmyzsh_options=("Yes" "no")

select_option "${ohmyzsh_options[@]}"
ohmyzsh_choice=$?

INSTALL_OHMYZSH=true
if [ "$ohmyzsh_choice" = 1 ]; then
    INSTALL_OHMYZSH=false
fi
# =============================================================================

OHMYZSH_THEME="af-magic"
if [ "$INSTALL_OHMYZSH" = true ]; then
    echo "Please choose a theme for Oh-My-ZSH?"

    theme_options=("af-magic" "agnoster" "robbyrussell" "apple" "daveverwer" "emotty" "fino-time" "gnzh" "half-life" "jnrowe" "simple")

    select_option "${theme_options[@]}"
    theme_choice=$?

    OHMYZSH_THEME="${theme_options[$theme_choice]}"
fi

# NeoVim ======================================================================
echo "Do you want to install NeoVim?"

neovim_options=("Yes" "no")
select_option "${neovim_options[@]}"
neovim_choice=$?

INSTALL_NEOVIM=true
if [ "$neovim_choice" = 1 ]; then
    INSTALL_NEOVIM=false
fi

# Start installing ============================================================
if [ "$INSTALL_NEOVIM" = true ]; then
    sudo add-apt-repository ppa:neovim-ppa/unstable -y
fi
sudo apt update
sudo apt install -y git curl zip unzip

if [ "$INSTALL_DOCKER" = true ]; then
    echo "Installing Docker ..."
    curl -Lso- https://get.docker.com | bash
fi

if [ "$INSTALL_DOCKER_COMPOSE" = true ]; then
    echo "Installing docker-compose ..."
    sudo apt install -y docker-compose
fi

if [ "$INSTALL_OHMYZSH" = true ]; then
    echo "Installing Oh-My-ZSH ..."
    sudo apt install -y zsh
    sudo chsh -s $(which zsh) $(whoami)

    curl -L git.io/antigen >~/.antigen.zsh
    cat <<EOT >>~/.zshrc
source ~/.antigen.zsh

# Load the oh-my-zsh's library.
antigen use oh-my-zsh

# Bundles from the default repo.
antigen bundle git
antigen bundle command-not-found

# Syntax highlighting bundle.
antigen bundle zsh-users/zsh-syntax-highlighting
antigen bundle zsh-users/zsh-autosuggestions

# Load the theme.
antigen theme $OHMYZSH_THEME

# Tell Antigen that you're done.
antigen apply
EOT
fi

if [ "$INSTALL_NEOVIM" = true ]; then
    sudo apt install neovim -y
    mkdir -p ~/.config
    git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth=1
fi

echo "DONE!"
if [ "$INSTALL_OHMYZSH" = true ]; then
    echo "ZSH is now your default shell. Please restart session to see changes."
fi
