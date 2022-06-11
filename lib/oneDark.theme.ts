import type { editor } from 'monaco-editor'

export const oneDarkTheme: editor.IStandaloneThemeData = {
  base: 'vs-dark',
  inherit: true,
  colors: {
    'activityBar.background': '#2f333d',
    'activityBar.foreground': '#d7dae0',
    'activityBarBadge.background': '#a86bd5',
    'activityBarBadge.foreground': '#f8fafd',
    'button.background': '#a86bd5',
    'diffEditor.insertedTextBackground': '#00809b33',
    'dropdown.background': '#1d1f23',
    'dropdown.border': '#181a1f',
    'editor.background': '#282c34',
    'editor.findMatchBackground': '#42557b',
    'editor.findMatchHighlightBackground': '#314365',
    'editor.lineHighlightBackground': '#383e4a',
    'editor.selectionBackground': '#3e4451',
    'editorCursor.foreground': '#f8f8f0',
    'editorError.foreground': '#c24038',
    'editorGroup.border': '#181a1f',
    'editorGroup.emptyBackground': '#181a1f',
    'editorGroupHeader.tabsBackground': '#21252b',
    'editorHoverWidget.background': '#21252b',
    'editorHoverWidget.border': '#181a1f',
    'editorIndentGuide.background': '#3b4048',
    'editorInlayHint.background': '#00000000',
    'editorInlayHint.foreground': '#bbbbbb55',
    'editorLineNumber.foreground': '#495162',
    'editorRuler.foreground': '#484848',
    'editorSuggestWidget.background': '#21252b',
    'editorSuggestWidget.border': '#181a1f',
    'editorSuggestWidget.selectedBackground': '#2c313a',
    'editorUnnecessaryCode.opacity': '#000000c0',
    'editorWhitespace.foreground': '#484a50',
    'editorWidget.background': '#21252b',
    'input.background': '#1d1f23',
    'list.activeSelectionBackground': '#2c313a',
    'list.activeSelectionForeground': '#d7dae0',
    'list.focusBackground': '#383e4a',
    'list.highlightForeground': '#c5c5c5',
    'list.hoverBackground': '#292d35',
    'list.inactiveSelectionBackground': '#2c313a',
    'list.inactiveSelectionForeground': '#d7dae0',
    'notifications.background': '#21252b',
    'scrollbarSlider.activeBackground': '#747d9180',
    'scrollbarSlider.background': '#4e566680',
    'scrollbarSlider.hoverBackground': '#5a637580',
    'sideBar.background': '#21252b',
    'sideBarSectionHeader.background': '#282c34',
    'statusBar.background': '#21252b',
    'statusBar.debuggingBackground': '#21252b',
    'statusBar.foreground': '#9da5b4',
    'statusBar.noFolderBackground': '#21252b',
    'statusBarItem.hoverBackground': '#2c313a',
    'tab.activeBackground': '#383e4a',
    'tab.border': '#181a1f',
    'tab.inactiveBackground': '#21252b',
    'terminal.ansiBlack': '#282c34',
    'terminal.ansiBlue': '#61afef',
    'terminal.ansiBrightBlack': '#5a6374',
    'terminal.ansiBrightBlue': '#61afef',
    'terminal.ansiBrightCyan': '#56b6c2',
    'terminal.ansiBrightGreen': '#98c379',
    'terminal.ansiBrightMagenta': '#c678dd',
    'terminal.ansiBrightRed': '#e06c75',
    'terminal.ansiBrightWhite': '#dcdfe4',
    'terminal.ansiBrightYellow': '#e5c07b',
    'terminal.ansiCyan': '#56b6c2',
    'terminal.ansiGreen': '#98c379',
    'terminal.ansiMagenta': '#c678dd',
    'terminal.ansiRed': '#e06c75',
    'terminal.ansiWhite': '#dcdfe4',
    'terminal.ansiYellow': '#e5c07b',
    'terminal.background': '#282c34',
    'terminal.foreground': '#abb2bf',
    'titleBar.activeBackground': '#282c34',
    'titleBar.activeForeground': '#9da5b4',
    'titleBar.inactiveBackground': '#282c34',
    'titleBar.inactiveForeground': '#6b717d',
  },
  rules: [
    { token: 'attribute-name', foreground: '#98C379' },
    { token: 'brace', foreground: '#ABB2BF' },
    { token: 'delimiter', foreground: '#ABB2BF' },
    { token: 'class', foreground: '#61AFEF' },
    { token: 'comment', foreground: '#676F7D' },
    { token: 'constant-char', foreground: '#56B6C2' },
    { token: 'constant', foreground: '#56B6C2' },
    { token: 'deprecated', foreground: '#F8F8F0', background: '#56B6C2' },
    { token: 'diff', foreground: '#75715E' },
    { token: 'embedded', foreground: '#C678DD' },
    { token: 'function-builtin', foreground: '#98C379' },
    { token: 'function-call', foreground: '#ABB2BF' },
    { token: 'function', foreground: '#98C379' },
    { token: 'import', foreground: '#61AFEF' },
    { token: 'inherited-class', foreground: '#98C379' },
    { token: 'invalid', foreground: '#F8F8F0', background: '#C678DD' },
    { token: 'json-property', foreground: '#56B6C2' },
    { token: 'keyword', foreground: '#E06C75' },
    { token: 'lang-constant', foreground: '#56B6C2' },
    { token: 'lang-variable', foreground: '#E06C75' },
    { token: 'markup-deleted', foreground: '#E06C75' },
    { token: 'number', foreground: '#C678DD' },
    { token: 'operator', foreground: '#E06C75' },
    { token: 'parameter', foreground: '#D19A66', fontStyle: 'italic' },
    { token: 'pseudo-class', foreground: '#56B6C2' },
    { token: 'storage', foreground: '#E06C75' },
    { token: 'string', foreground: '#E5C07B' },
    { token: 'string-interpolated', foreground: '#D19A66', fontStyle: 'italic' },
    { token: 'string-escape', foreground: '#56B6C2' },
    { token: 'string-escape-invalid', foreground: '#F8F8F0', background: '#C678DD' },
    { token: 'string-invalid', foreground: '#F8F8F0', background: '#C678DD' },
    { token: 'support-constant', foreground: '#98C379' },
    { token: 'support-json', foreground: '#56B6C2' },
    { token: 'support-variable', fontStyle: '' },
    { token: 'support', foreground: '#56B6C2' },
    { token: 'tag-class', foreground: '#56B6C2' },
    { token: 'tag', foreground: '#E06C75' },
    { token: 'token-debug', foreground: '#B267E6' },
    { token: 'token-error', foreground: '#F44747' },
    { token: 'token-info', foreground: '#6796E6' },
    { token: 'token-warn', foreground: '#CD9731' },
    { token: 'variable-other', foreground: '#61AFEF' },
    { token: 'identifier', foreground: '#ABB2BF' },
    { token: 'variable', foreground: '#ABB2BF' },
  ],
}
