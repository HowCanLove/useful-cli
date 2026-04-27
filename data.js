// 现代 CLI 神器集合
//
// os 字段在这个仓库里被复用为"使用形态"：
//   'windows'  →  💻 CLI 命令（输完命令出结果，管道友好）
//   'macos'    →  🖥️ TUI（全屏交互界面，键盘操控）
//   'cross'    →  🐚 Shell / 终端美化（prompt / 多路复用 / 历史 等环境工具）
//
// category:
//   system   → 🛠️ 系统监控
//   disk     → 📁 文件 / 搜索
//   files    → 📄 文本 / 数据
//   productivity → ⚡ 效率
//   dev      → 💻 Git / 开发
//   media    → 🐳 Docker / K8s
//   network  → 🌐 网络 / HTTP
//   security → 🤖 AI 终端
//   browser  → 🐚 Shell / 终端
//
// price 全部 'oss' 或 'free'。
// 大部分都是 GitHub 项目，repo 字段填了的 update-versions.mjs 能抓最新版本。

const CATALOG = [
  // ========== 💻 CLI 命令（os: 'windows'）==========
  {
    name: 'bat',
    desc: {
      zh: 'cat 的现代版：语法高亮 + 行号 + Git 修改指示器 + 自动分页。看代码 / 配置文件再也不会眼瞎。Rust 写的，启动飞快。',
      en: 'A modern cat: syntax highlighting, line numbers, Git change indicators, auto-paging. Rust-fast startup; no more squinting at config files.',
      ja: 'catのモダン版：構文ハイライト・行番号・Git変更マーカー・自動ページング。Rust製で起動が速く、設定ファイルが目に優しい。',
    },
    url: 'https://github.com/sharkdp/bat',
    repo: 'sharkdp/bat',
    os: 'windows', category: 'disk', price: 'oss',
  },
  {
    name: 'ripgrep (rg)',
    desc: {
      zh: '用 Rust 重写的 grep，速度比 grep / ack / silver_searcher 都快好几倍。默认尊重 .gitignore，递归搜索整个项目秒出结果。VS Code 内部搜索就是用的它。',
      en: 'Rust-rewritten grep, several times faster than grep / ack / ag. Respects .gitignore by default; project-wide search returns instantly. VS Code\'s built-in search is powered by ripgrep.',
      ja: 'Rust製のgrep代替、grep/ack/agより数倍高速。デフォルトで.gitignore尊重、プロジェクト全体検索が即座に完了。VS Code内蔵検索のエンジンも本ツール。',
    },
    url: 'https://github.com/BurntSushi/ripgrep',
    repo: 'BurntSushi/ripgrep',
    os: 'windows', category: 'disk', price: 'oss',
  },
  {
    name: 'fd',
    desc: {
      zh: 'find 的友好版：默认忽略 .git/.gitignore、彩色输出、并行执行。语法直观（fd pattern 不用 -name），常用 80% 用例都比 find 短得多。',
      en: 'Friendly find. Skips .git / .gitignore by default, colour output, parallelised. Intuitive syntax (no more -name flags) and shorter than find for 80% of cases.',
      ja: 'find代替の親しみやすい版。.git/.gitignoreデフォルトスキップ、カラー出力、並列実行。直感的な構文（-nameフラグ不要）で大半のケースでfindより短く書ける。',
    },
    url: 'https://github.com/sharkdp/fd',
    repo: 'sharkdp/fd',
    os: 'windows', category: 'disk', price: 'oss',
  },
  {
    name: 'eza (ls 替代)',
    desc: {
      zh: 'ls 的现代版（exa 的活跃 fork）：彩色 + 图标 + Git 状态 + 树状视图。`eza --tree --git` 一行看到项目结构 + 哪些文件被修改了。',
      en: 'Modern ls (active fork of exa). Colours, icons, Git status, tree view. `eza --tree --git` shows project structure plus what\'s modified, all in one line.',
      ja: 'lsのモダン版（exaのアクティブfork）。カラー・アイコン・Gitステータス・ツリー表示。`eza --tree --git`一発でプロジェクト構造と変更状況が把握可能。',
    },
    url: 'https://github.com/eza-community/eza',
    repo: 'eza-community/eza',
    os: 'windows', category: 'disk', price: 'oss',
  },
  {
    name: 'fzf',
    desc: {
      zh: '通用模糊搜索器，所有命令的"灵魂"。Ctrl+T 模糊找文件、Ctrl+R 模糊找历史命令、git checkout 用 fzf 选 branch……装上之后整个 shell 体验改写。',
      en: 'Universal fuzzy finder — the soul of any modern terminal. Ctrl+T to fuzzy-pick files, Ctrl+R for fuzzy history, integrate with git checkout to pick branches... once installed, your shell is reborn.',
      ja: '汎用ファジー検索器、現代ターミナルの魂。Ctrl+Tでファジーファイル選択、Ctrl+Rで履歴検索、git checkoutでブランチ選択など、インストール後のシェル体験は一変する。',
    },
    url: 'https://github.com/junegunn/fzf',
    repo: 'junegunn/fzf',
    os: 'windows', category: 'productivity', price: 'oss',
  },
  {
    name: 'zoxide (z) — 智能 cd',
    desc: {
      zh: 'cd 的进化版：记住你常去的目录，输入 `z proj` 就能跳到 ~/work/projects/some-project。比 autojump 快、跨平台、Rust 实现。',
      en: 'Smart cd. Learns your most-used directories, so `z proj` jumps to ~/work/projects/some-project. Faster than autojump, cross-platform, written in Rust.',
      ja: 'cdの進化版。よく使うディレクトリを学習、`z proj`で~/work/projects/some-projectに即移動。autojumpより高速・クロスプラットフォーム・Rust実装。',
    },
    url: 'https://github.com/ajeetdsouza/zoxide',
    repo: 'ajeetdsouza/zoxide',
    os: 'windows', category: 'productivity', price: 'oss',
  },
  {
    name: 'jq — JSON 命令行处理器',
    desc: {
      zh: 'CLI 必备：从 API 响应里提取字段、过滤、变形 JSON。`curl ... | jq .data[0].name` 这种黄金组合救命无数次。语法初学有点小怪，掌握后回不去。',
      en: 'CLI essential: extract fields, filter, transform JSON from API responses. `curl ... | jq .data[0].name` is a daily lifesaver. Quirky syntax at first, indispensable once you learn it.',
      ja: 'CLI必携：APIレスポンスからフィールド抽出・フィルタ・JSON変換。`curl ... | jq .data[0].name`の組み合わせは日常的に救命級。最初は文法が独特だが慣れると手放せない。',
    },
    url: 'https://github.com/jqlang/jq',
    repo: 'jqlang/jq',
    os: 'windows', category: 'files', price: 'oss',
  },
  {
    name: 'yq — YAML 版 jq',
    desc: {
      zh: '处理 YAML / JSON / XML 的命令行工具，语法和 jq 高度兼容。改 K8s manifest、CI 配置、Helm values 时秒杀手动编辑。',
      en: 'CLI processor for YAML / JSON / XML, syntax mostly compatible with jq. Beats hand-editing K8s manifests, CI configs and Helm values.',
      ja: 'YAML/JSON/XML処理用CLI、jqと高い互換性。K8s manifest・CI設定・Helm values編集で手動より圧倒的に速い。',
    },
    url: 'https://github.com/mikefarah/yq',
    repo: 'mikefarah/yq',
    os: 'windows', category: 'files', price: 'oss',
  },
  {
    name: 'xh — curl 但人类友好',
    desc: {
      zh: 'HTTPie 的 Rust 重写版，二进制单文件、启动快。`xh httpbin.org/get foo==bar` 比 curl 那一长串选项清爽 10 倍。开发调试 API 必装。',
      en: 'HTTPie rewritten in Rust — single static binary, blazing startup. `xh httpbin.org/get foo==bar` is 10× cleaner than curl\'s flag soup. Mandatory for API debugging.',
      ja: 'HTTPieのRust再実装、単一バイナリで起動高速。`xh httpbin.org/get foo==bar`はcurlのフラグ羅列より10倍読みやすい。API開発デバッグ必携。',
    },
    url: 'https://github.com/ducaale/xh',
    repo: 'ducaale/xh',
    os: 'windows', category: 'network', price: 'oss',
  },
  {
    name: 'curlie — curl + httpie 混血',
    desc: {
      zh: '保留 curl 完整选项的同时给你 httpie 风格的输出（自动着色、JSON 格式化）。从 curl 平滑过渡的最佳选择，老命令完全兼容。',
      en: 'Keeps curl\'s full flag set but pipes through httpie-style output (auto colours, JSON pretty-print). The smoothest curl-to-modern transition; old scripts still work.',
      ja: 'curlの全フラグを維持しつつ、httpie風出力（自動カラー、JSON整形）を提供。curlからの移行が最もスムーズで、既存スクリプト互換。',
    },
    url: 'https://github.com/rs/curlie',
    repo: 'rs/curlie',
    os: 'windows', category: 'network', price: 'oss',
  },
  {
    name: 'dust — du 的可视化版',
    desc: {
      zh: 'du -sh 看磁盘占用太丑了。dust 直接给你一棵树，柱状图标出每个目录占了多少。秒定位"哪个鬼东西占了 50G"。',
      en: 'du -sh output is ugly. dust draws a tree with bar charts showing each directory\'s size — instantly find "what the hell is eating 50GB".',
      ja: 'du -shの出力は読みにくい。dustはツリー表示と棒グラフで各ディレクトリ容量を可視化、「何が50GB食ってるか」が瞬時に判明。',
    },
    url: 'https://github.com/bootandy/dust',
    repo: 'bootandy/dust',
    os: 'windows', category: 'system', price: 'oss',
  },
  {
    name: 'duf — df 的彩色版',
    desc: {
      zh: 'df 输出又乱又丑，duf 给你一张漂亮的表格：本地磁盘 / 网络挂载 / 临时文件系统分组显示，使用率有色条。Go 实现，跨平台。',
      en: 'df\'s ugly output, made beautiful. duf groups local disks / network mounts / temp filesystems into a clean table with coloured usage bars. Go-built, cross-platform.',
      ja: 'dfの乱雑な出力を美しいテーブルに：ローカル/ネットワーク/一時ファイルシステムをグループ化、カラーバーで使用率表示。Go実装でクロスプラットフォーム。',
    },
    url: 'https://github.com/muesli/duf',
    repo: 'muesli/duf',
    os: 'windows', category: 'system', price: 'oss',
  },
  {
    name: 'hyperfine — 命令耗时基准测试',
    desc: {
      zh: '想知道你的脚本两个版本哪个更快？`hyperfine "v1.sh" "v2.sh"` 自动跑多次取平均，给出统计学意义的结论。比手动 `time` 严谨 100 倍。',
      en: 'Want to know which version of your script is faster? `hyperfine "v1.sh" "v2.sh"` runs each multiple times and gives statistically sound results. 100× more rigorous than manual `time`.',
      ja: 'スクリプトの2バージョンの速度比較に。`hyperfine "v1.sh" "v2.sh"`で複数回実行して統計的に有意な結論を出す。手動timeより100倍厳密。',
    },
    url: 'https://github.com/sharkdp/hyperfine',
    repo: 'sharkdp/hyperfine',
    os: 'windows', category: 'productivity', price: 'oss',
  },
  {
    name: 'tldr (tealdeer)',
    desc: {
      zh: 'man 页太啰嗦？`tldr tar` 直接给你 5 行最常用的 tar 命令。tealdeer 是 Rust 实现的快速版，启动毫秒级。',
      en: 'Man pages too verbose? `tldr tar` shows 5 lines of the most-used tar invocations. Tealdeer is the Rust implementation — millisecond startup.',
      ja: 'manが冗長すぎる時に。`tldr tar`で最も使うtarコマンドを5行で表示。tealdeerはRust実装版でミリ秒起動。',
    },
    url: 'https://github.com/dbrgn/tealdeer',
    repo: 'dbrgn/tealdeer',
    os: 'windows', category: 'productivity', price: 'oss',
  },
  {
    name: 'glow — 终端里读 Markdown',
    desc: {
      zh: 'README.md 在 cat 里看一片乱码？glow 渲染成漂亮的彩色版本，支持滚动、目录、表格、code block。本地或在线（GitHub）的 markdown 都能读。',
      en: 'README.md looks like spaghetti in cat? Glow renders it in beautiful colour, with scroll / TOC / tables / code blocks. Reads local or remote (GitHub) markdown.',
      ja: 'README.mdをcatで見ると文字化け？glowは美しいカラー表示、スクロール・目次・テーブル・コードブロック対応。ローカル/GitHub上のmarkdownを読める。',
    },
    url: 'https://github.com/charmbracelet/glow',
    repo: 'charmbracelet/glow',
    os: 'windows', category: 'files', price: 'oss',
  },
  {
    name: 'watchexec — 文件变化触发命令',
    desc: {
      zh: '改文件 → 自动跑测试 / 重启服务 / 重新生成。`watchexec -e py pytest` 监听 .py 文件改动自动跑 pytest。Rust 实现，比 nodemon 快还跨语言。',
      en: 'File changes → auto-run tests / restart server / regenerate. `watchexec -e py pytest` re-runs pytest on every .py change. Rust-built, faster than nodemon and language-agnostic.',
      ja: 'ファイル変更→自動でテスト実行/サーバ再起動/再生成。`watchexec -e py pytest`で.pyファイル変更時にpytest自動実行。Rust製でnodemonより速く、言語非依存。',
    },
    url: 'https://github.com/watchexec/watchexec',
    repo: 'watchexec/watchexec',
    os: 'windows', category: 'productivity', price: 'oss',
  },

  // ========== 🖥️ TUI 全屏界面（os: 'macos'）==========
  {
    name: 'lazygit',
    desc: {
      zh: 'Git 命令行用户的福音：全屏 TUI 界面，鼠标 / 键盘都能操作。stage / commit / branch / log / rebase / cherry-pick 全在一屏。装上一周后回不去 git CLI。',
      en: 'Salvation for git CLI users: full-screen TUI, mouse and keyboard friendly. stage / commit / branch / log / rebase / cherry-pick all in one screen. After a week you can\'t go back.',
      ja: 'gitコマンドライン派の救世主：フルスクリーンTUI、マウスとキーボード両対応。stage/commit/branch/log/rebase/cherry-pickが1画面で完結。1週間使うとgit CLIに戻れない。',
    },
    url: 'https://github.com/jesseduffield/lazygit',
    repo: 'jesseduffield/lazygit',
    os: 'macos', category: 'dev', price: 'oss',
  },
  {
    name: 'lazydocker',
    desc: {
      zh: 'Docker 版的 lazygit。看容器列表、查日志、进 shell、删镜像、清缓存全在 TUI 里。比 docker ps + docker logs 来回切方便 10 倍。',
      en: 'Docker\'s answer to lazygit. Container list, logs, shell-in, remove images, clean cache — all in one TUI. 10× nicer than juggling docker ps and docker logs.',
      ja: 'Docker版のlazygit。コンテナ一覧・ログ閲覧・シェル接続・イメージ削除・キャッシュクリアが全てTUI内で完結。docker ps/logs切替より10倍便利。',
    },
    url: 'https://github.com/jesseduffield/lazydocker',
    repo: 'jesseduffield/lazydocker',
    os: 'macos', category: 'media', price: 'oss',
  },
  {
    name: 'k9s',
    desc: {
      zh: 'Kubernetes 集群的 TUI 神器。pod / service / configmap / 日志 / 进 shell / 删 / 重启 全键盘搞定。装一次，告别 kubectl 百次切换。',
      en: 'TUI killer for Kubernetes. Pods / services / configmaps / logs / shell-in / delete / restart — all via keyboard. Install once, retire your kubectl muscle memory.',
      ja: 'KubernetesクラスタのTUI神器。pod/service/configmap/ログ/シェル/削除/再起動が全てキーボード操作。一度入れるとkubectl切替地獄から解放。',
    },
    url: 'https://github.com/derailed/k9s',
    repo: 'derailed/k9s',
    os: 'macos', category: 'media', price: 'oss',
  },
  {
    name: 'btop — 美到爆的系统监控',
    desc: {
      zh: 'top / htop 的颜值天花板。CPU / 内存 / 磁盘 / 网络全图表化，进程树鼠标点击操作。装上之后你的服务器/Mac 监控会被同事盯上问"这是啥"。',
      en: 'top / htop\'s gorgeous successor. CPU / memory / disk / network all charted, process tree clickable. Coworkers will ask "what is THAT" the first time they see your terminal.',
      ja: 'top/htopの美しすぎる後継。CPU/メモリ/ディスク/ネットワークを全てチャート化、プロセスツリーをクリック操作可能。同僚が「それ何？」と聞いてくる。',
    },
    url: 'https://github.com/aristocratos/btop',
    repo: 'aristocratos/btop',
    os: 'macos', category: 'system', price: 'oss',
  },
  {
    name: 'helix — 模式编辑器现代版',
    desc: {
      zh: '不是 vim 的另一个 vim：开箱即用的模态编辑器，Tree-sitter 语法高亮、内置 LSP、多光标。零配置就能写代码，配置文件比 nvim 简单 10 倍。',
      en: 'Not another vim — a modal editor that works out of the box. Tree-sitter highlighting, built-in LSP, multiple cursors. Code with zero config; configs are 10× simpler than nvim.',
      ja: 'もう一つのvimではなく、すぐ使えるモーダルエディタ。Tree-sitter構文ハイライト・LSP内蔵・マルチカーソル。設定ゼロでコーディング可能、設定ファイルはnvimより10倍シンプル。',
    },
    url: 'https://github.com/helix-editor/helix',
    repo: 'helix-editor/helix',
    os: 'macos', category: 'dev', price: 'oss',
  },
  {
    name: 'Neovim',
    desc: {
      zh: 'Vim 的现代复活版：原生 Lua 配置、内置 LSP、Tree-sitter、异步插件。配合 LazyVim / NvChad / AstroNvim 这种发行版，10 分钟就能搭出 IDE。',
      en: 'Vim, modernised. Native Lua config, built-in LSP, Tree-sitter, async plugins. Pair with LazyVim / NvChad / AstroNvim distributions and you have an IDE in 10 minutes.',
      ja: 'Vimのモダン復活版。Lua設定・LSP内蔵・Tree-sitter・非同期プラグイン。LazyVim/NvChad/AstroNvim等のディストリ併用で10分でIDE化可能。',
    },
    url: 'https://github.com/neovim/neovim',
    repo: 'neovim/neovim',
    os: 'macos', category: 'dev', price: 'oss',
  },
  {
    name: 'atuin — 加强版 Shell 历史',
    desc: {
      zh: '替代 Ctrl+R 的本地历史搜索，加上"按目录 / 按时间 / 按上次退出码"过滤。可选云端同步多机历史（端到端加密）。再也不会"上次那条命令长啥样"。',
      en: 'Replaces Ctrl+R with smarter history search — filter by directory / time / last exit status. Optional end-to-end encrypted cloud sync across machines. No more "what was that command".',
      ja: 'Ctrl+Rの強化版履歴検索。ディレクトリ/時刻/前回終了コードでフィルタ可能。複数マシン間でE2E暗号化クラウド同期もオプション。「あのコマンド何だっけ」が消える。',
    },
    url: 'https://github.com/atuinsh/atuin',
    repo: 'atuinsh/atuin',
    os: 'macos', category: 'productivity', price: 'oss',
  },
  {
    name: 'tig — Git 日志查看器',
    desc: {
      zh: '比 git log 漂亮 100 倍的 TUI 浏览器。回车看 commit diff、空格 stage hunks、c 创建 commit。比 lazygit 更轻量，老 vim 用户的习惯延伸。',
      en: '100× nicer than git log — a TUI browser. Enter to view commit diff, space to stage hunks, c to commit. Lighter than lazygit; perfect for vim-trained hands.',
      ja: 'git logより100倍美しいTUIブラウザ。Enterでcommit diff表示、Spaceでhunk stage、cでcommit。lazygitより軽量、vim派の指に馴染む。',
    },
    url: 'https://github.com/jonas/tig',
    repo: 'jonas/tig',
    os: 'macos', category: 'dev', price: 'oss',
  },

  // ========== 🐚 Shell / 终端美化（os: 'cross'）==========
  {
    name: 'Starship — 跨 shell 的极速 prompt',
    desc: {
      zh: '一个 prompt 配置走遍 zsh / bash / fish / pwsh。Rust 实现毫秒级渲染，自动显示 git 分支 / Node 版本 / Python venv / k8s 上下文……装上之后所有 shell 一致体验。',
      en: 'One prompt config across zsh / bash / fish / pwsh. Rust-rendered in milliseconds, auto-shows git branch / Node version / Python venv / k8s context. Unifies your shell experience.',
      ja: '一つの設定でzsh/bash/fish/pwshに対応。Rust実装でミリ秒描画、git branch/Node version/Python venv/k8s context自動表示。全シェル統一体験。',
    },
    url: 'https://starship.rs/',
    repo: 'starship/starship',
    os: 'cross', category: 'browser', price: 'oss',
  },
  {
    name: 'Oh My Zsh',
    desc: {
      zh: 'zsh 的"开箱即用"配置框架。300+ 主题、200+ 插件（git / docker / kubectl 自动补全等），一行命令安装。新机器 zsh 起步标配。',
      en: 'The batteries-included framework for zsh. 300+ themes, 200+ plugins (git / docker / kubectl autocomplete etc), one-line install. Standard zsh starter on a new machine.',
      ja: 'zshの「すぐ使える」設定フレームワーク。300以上のテーマ、200以上のプラグイン（git/docker/kubectl補完等）、ワンライナーインストール。新マシンのzshスタータの定番。',
    },
    url: 'https://ohmyz.sh/',
    repo: 'ohmyzsh/ohmyzsh',
    os: 'cross', category: 'browser', price: 'oss',
  },
  {
    name: 'fish shell',
    desc: {
      zh: '"开箱即用"的现代 shell：自动补全、语法高亮、跨会话历史无需任何配置。和 bash / zsh 不完全兼容（脚本要稍改），但日常交互体验最佳。',
      en: 'The "just works" modern shell. Autocomplete, syntax highlighting, persistent history all out of the box. Not fully bash/zsh compatible (scripts need tweaks) but unbeatable for interactive use.',
      ja: '「設定なしで動く」モダンシェル。自動補完・構文ハイライト・履歴永続化が箱出しで完備。bash/zshと完全互換ではない（スクリプトに調整必要）が、対話用途では最高。',
    },
    url: 'https://fishshell.com/',
    repo: 'fish-shell/fish-shell',
    os: 'cross', category: 'browser', price: 'oss',
  },
  {
    name: 'Zellij — 现代终端复用器',
    desc: {
      zh: 'tmux 的现代版：开箱即用、UI 友好（状态栏 + 快捷键提示）、可视化窗口分屏。配置用 KDL / YAML 不用看 tmux 那种密码本。Rust 写的。',
      en: 'A modern tmux. Works out of the box, friendly UI (status bar + hint toolbar), visual pane splits. Config in KDL / YAML, no more tmux\'s cryptic syntax. Rust-built.',
      ja: 'tmuxのモダン版。設定なしで動き、UIが親切（ステータスバー＋ヒント表示）、視覚的なウィンドウ分割。KDL/YAML設定でtmuxの暗号文不要。Rust製。',
    },
    url: 'https://zellij.dev/',
    repo: 'zellij-org/zellij',
    os: 'cross', category: 'browser', price: 'oss',
  },
  {
    name: 'tmux — 经典终端复用器',
    desc: {
      zh: 'tmux 是 Unix 服务器管理者的肌肉记忆。SSH 进服务器跑长任务、断开重连不丢、多窗口切来切去——服务器场景下还是它最稳。Zellij 现代但 tmux 还是无处不在。',
      en: 'Tmux is muscle memory for Unix server admins. SSH in, run long jobs, disconnect-reconnect without losing state, juggle windows. Zellij is modern but tmux is everywhere.',
      ja: 'tmuxはUnixサーバ管理者の身体的記憶。SSH接続→長時間タスク実行→切断再接続でも状態保持→複数ウィンドウ切替。Zellijは現代的だがtmuxは至る所に存在。',
    },
    url: 'https://github.com/tmux/tmux',
    repo: 'tmux/tmux',
    os: 'cross', category: 'browser', price: 'oss',
  },

  // ========== 🤖 AI 终端（os: 'cross'）==========
  {
    name: 'aider — 终端 AI 结对程序员',
    desc: {
      zh: '用大模型修改代码的命令行工具，自动 git commit、可指定多文件 context、支持 Claude/GPT/Gemini/本地 Ollama。比 Cursor / Copilot 更"agent"，让 AI 直接动手而不是建议。',
      en: 'CLI tool that edits your code with an LLM. Auto git-commits, accepts multi-file context, supports Claude / GPT / Gemini / local Ollama. More "agent" than Cursor / Copilot — AI changes files directly.',
      ja: 'LLMでコードを編集するCLI。自動git commit、複数ファイルコンテキスト指定可、Claude/GPT/Gemini/ローカルOllama対応。Cursor/Copilotより「エージェント」的で、AIが直接ファイルを編集。',
    },
    url: 'https://aider.chat/',
    repo: 'paul-gauthier/aider',
    os: 'cross', category: 'security', price: 'oss',
  },
  {
    name: 'Shell GPT (sgpt)',
    desc: {
      zh: '在终端里用 ChatGPT。`sgpt "把所有 .log 文件按时间排序"` → 直接给你命令并可一键执行。结合 shell 历史用尤其顺手。支持 Claude / 本地模型。',
      en: 'ChatGPT in your terminal. `sgpt "sort all .log files by time"` → returns a runnable command, executable with one keystroke. Especially smooth combined with shell history. Supports Claude / local models.',
      ja: 'ターミナルでChatGPT。`sgpt "全.logをタイムスタンプ順に"`→ワンキー実行可能なコマンドを返す。シェル履歴と組み合わせると特に快適。Claude/ローカルモデル対応。',
    },
    url: 'https://github.com/TheR1D/shell_gpt',
    repo: 'TheR1D/shell_gpt',
    os: 'cross', category: 'security', price: 'oss',
  },

  // ========== 网络 CLI（os: 'windows'，加在最后） ==========
  {
    name: 'gping — 带图表的 ping',
    desc: {
      zh: 'ping 但实时画延迟图表。一眼看到网络抖动 / 丢包模式，比一行行数字直观 10 倍。Rust 实现。',
      en: 'ping with a live latency graph. Spot jitter / packet-loss patterns at a glance — 10× more intuitive than scrolling numbers. Rust-built.',
      ja: 'pingにリアルタイム遅延グラフを追加。ジッタ/パケットロスのパターンが一目瞭然、数値羅列より10倍直感的。Rust実装。',
    },
    url: 'https://github.com/orf/gping',
    repo: 'orf/gping',
    os: 'windows', category: 'network', price: 'oss',
  },
  {
    name: 'dog — dig 的现代版',
    desc: {
      zh: 'dig 的彩色化更人性化版本：默认显示彩色、JSON 输出可选、语法更短（`dog example.com MX` 直接到位）。Rust 写的。',
      en: 'A colourful, human-friendly dig. Coloured by default, optional JSON output, shorter syntax (`dog example.com MX`). Rust-written.',
      ja: 'digのカラフル人間化版。デフォルトカラー出力、JSON出力オプション、短い文法（`dog example.com MX`一発）。Rust製。',
    },
    url: 'https://github.com/ogham/dog',
    repo: 'ogham/dog',
    os: 'windows', category: 'network', price: 'oss',
  },
];
