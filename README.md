# Neovim configuration
```vim
set scrolloff=8 
set number
set relativenumber
set tabstop=2 softtabstop=2
set shiftwidth=2
set expandtab
set smartindent

call plug#begin('~/.vim/plugged')

Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'
Plug 'projekt0n/github-nvim-theme'
Plug 'prettier/vim-prettier', { 'do': 'npm install --only=production' }
Plug 'dense-analysis/ale'
Plug 'jiangmiao/auto-pairs'
Plug 'kdheepak/lazygit.nvim'
Plug 'preservim/nerdcommenter'

call plug#end()

colorscheme github_dark_default

let g:prettier#autoformat = 1
let g:prettier#autoformat_require_pragma = 0

let g:ale_linters = {
    \   'javascript': ['eslint'],
    \}

nnoremap <C-p> :GFiles<CR>
nnoremap <C-j> :cnext<CR>
nnoremap <C-k> :cprev<CR>
let mapleader = " "
nnoremap <leader>e :Vex<CR><C-w>o
nnoremap <leader><CR> :so ~/.config/nvim/init.vim<CR>

"Git diff
nnoremap <leader>d :LazyGit<CR>

"Comments
nnoremap <leader>/ 0i//<ESC>

"Copy
vnoremap <leader>y "+y

"Move selection
vnoremap J :m '>+1<CR>gv=gv
vnoremap K :m '<-2<CR>gv=gv

```
