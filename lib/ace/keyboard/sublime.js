// ======================== =================== ===============
// SUBLIME SHORTCUTS IN EXPRESSIONIST 1.0
// ======================== =================== ===============
// Go Sub Word Left	        Alt-Left
// Go Sub Word Right	    Alt-Right
// Scroll Line Up	        Ctrl-Alt-Up
// Scroll Line Down	        Ctrl-Alt-Up
// Split Selection by Line	Shift-Cmd-L
// Indent Less	            Shift-Tab	        Shift-Tab
// Select Line	            Cmd-L
// Delete Line	            Cmd-Shift-K	        Ctrl-Shift-K
// Select Scope	            Shift-Cmd-Space	    Ctrl-Shift-Space
// Select Between Brackets	Shift-Cmd-M	        Ctrl-Shift-M
// Go to Bracket	        Cmd-M
// Swap Line Up	            Cmd-Ctrl-Up	        Shift-Ctrl-Up
// Swap Line Down **        Cmd-Ctrl-Down	    Shift-Ctrl-Down
// Toggle Comment *         Cmd-/	
// Join Lines *             Cmd-J
// Duplicate Line	        Shift-Cmd-D	        Ctrl-Shift-D
// Transpose(Swap) Chars *  Cmd-T
// Sort Lines	            F9
// Sort Lines Insensitive	Cmd-F9
// Delete Line Right *      Cmd-K Cmd-K
// Uppercase at Cursor	    Cmd-K Cmd-U
// Lowercase at Cursor	    Cmd-K Cmd-L
// ======================== =================== ===============

define(function (require, exports, module) {
    "use strict";

    // require("../incremental_search");
    // var iSearchCommandModule = require("../commands/incremental_search_commands");
    // exports.handler.addCommands(iSearchCommandModule.iSearchStartCommands);

    var HashHandler = require("./hash_handler").HashHandler;
    exports.handler = new HashHandler();
    exports.handler.$id = "ace/keyboard/sublime";

    function bindKey(win, mac) {
        return { win: win, mac: mac };
    }

    var commands = [
        {
            // codemirror: 'indentLess',
            command: 'outdent',
            bindKey: bindKey('Shift-Tab', 'Shift-Tab')
        },
        {
            // codemirror: 'deleteLine',
            command: 'removeline',
            bindKey: bindKey('Shift-Ctrl-K', 'Shift-Ctrl-K')
        },
        // {
        //     // NOTE Doesn't exist in Sublime?
        //     command: 'wrapLines',
        //     bindKey: bindKey('Alt-Q', 'Alt-Q')
        // },
        {
            // codemirror: 'goSubwordLeft',
            command: 'gotowordleft',
            bindKey: bindKey('Alt-Left', 'Ctrl-Left')
        },
        {
            // codemirror: 'goSubwordRight',
            command: 'gotowordright',
            bindKey: bindKey('Alt-Right', 'Ctrl-Right')
        },
        {
            // codemirror: 'scrollLineUp',
            command: 'scrollup',
            bindKey: bindKey('Ctrl-Up', 'Ctrl-Alt-Up')
        },
        {
            // codemirror: 'scrollLineDown',
            command: 'scrolldown',
            bindKey: bindKey('Ctrl-Down', 'Ctrl-Alt-Down')
        },
        {
            // codemirror: 'selectLine',
            command: 'expandtoline',
            bindKey: bindKey('Ctrl-L', 'Cmd-L')
        },
        {
            // codemirror: 'splitSelectionByLine',
            command: 'splitline',
            bindKey: bindKey('Shift-Ctrl-L', 'Shift-Cmd-L')
        },
        {
            // codemirror: 'singleSelectionTop',
            command: 'singleSelection',
            bindKey: bindKey('Esc', 'Esc')
        },
        {
            // codemirror: 'insertLineAfter',
            command: 'addlineafter',
            bindKey: bindKey('Ctrl-Alt-Enter', 'Cmd-Alt-Enter')
        },
        {
            // codemirror: 'insertLineBefore',
            command: 'addlinebefore',
            bindKey: bindKey('Shift-Alt-Ctrl-Enter', 'Shift-Alt-Cmd-Enter')
        },
        {
            // codemirror: 'selectNextOccurrence',
            command: 'selectNextAfter',
            bindKey: bindKey('Ctrl-D', 'Cmd-D')
        },
        {
            // codemirror: 'selectScope',
            command: 'expandToMatching',
            bindKey: bindKey('Shift-Ctrl-Space', 'Shift-Cmd-Space')
        },
        {
            // codemirror: 'selectBetweenBrackets',
            command: 'selecttomatching',
            bindKey: bindKey('Shift-Ctrl-M', 'Shift-Cmd-M')
        },
        {
            // codemirror: 'goToBracket',
            command: 'jumptomatching',
            bindKey: bindKey('Ctrl-M', 'Cmd-M')
        },
        {
            // codemirror: 'swapLineUp',
            command: 'movelinesup',
            bindKey: bindKey('Shift-Ctrl-Up', 'Cmd-Ctrl-Up')
        },
        {
            // codemirror: 'swapLineDown',
            command: 'movelinesdown',
            bindKey: bindKey('Shift-Ctrl-Down', 'Cmd-Ctrl-Down')
        },
        {
            // codemirror: 'toggleCommentIndented',
            command: 'togglecomment',
            bindKey: bindKey('Ctrl-/', 'Cmd-/')
        },
        {
            // codemirror: 'joinLines',
            command: 'joinlines',
            bindKey: bindKey('Ctrl-J', 'Cmd-J')
        },
        {
            // codemirror: 'duplicateLine',
            command: 'copylinesdown',
            bindKey: bindKey('Shift-Ctrl-D', 'Shift-Cmd-D')
        },
        {
            // codemirror: 'sortLines',
            command: 'sortlines',
            bindKey: bindKey('F9', 'F9')
        },
        // {
        //     command: 'sortLinesInsensitive',
        //     bindKey: bindKey('Ctrl-F9', 'Cmd-F9')
        // },
        // {
        //     command: 'nextBookmark',
        //     bindKey: bindKey('F2', 'F2')
        // },
        // {
        //     command: 'prevBookmark',
        //     bindKey: bindKey('Shift-F2', 'Shift-F2')
        // },
        // {
        //     command: 'toggleBookmark',
        //     bindKey: bindKey('Ctrl-F2', 'Cmd-F2')
        // },
        // {
        //     command: 'clearBookmarks',
        //     bindKey: bindKey('Shift-Ctrl-F2', 'Shift-Cmd-F2')
        // },
        // {
        //     command: 'clearBookmarks',
        //     bindKey: bindKey('Ctrl-K Ctrl-G', 'Cmd-K Cmd-G')
        // },
        // {
        //     command: 'selectBookmarks',
        //     bindKey: bindKey('Alt-F2', 'Alt-F2')
        // },
        // {
        //     command: 'smartBackspace',
        //     bindKey: bindKey('Backspace', 'Backspace')
        // },
        {
            // codemirror: 'upcaseAtCursor',
            command: 'touppercase',
            bindKey: bindKey('Ctrl-K Ctrl-U', 'Cmd-K Cmd-U')
        },
        {
            // codemirror: 'downcaseAtCursor',
            command: 'tolowercase',
            bindKey: bindKey('Ctrl-K Ctrl-L', 'Cmd-K Cmd-L')
        },
        // {
        //     command: 'setSublimeMark',
        //     bindKey: bindKey('Ctrl-K Ctrl-Space', 'Cmd-K Cmd-Space')
        // },
        // {
        //     command: 'selectToSublimeMark',
        //     bindKey: bindKey('Ctrl-K Ctrl-A', 'Cmd-K Cmd-A')
        // },
        // {
        //     command: 'deleteToSublimeMark',
        //     bindKey: bindKey('Ctrl-K Ctrl-W', 'Cmd-K Cmd-W')
        // },
        // {
        //     command: 'swapWithSublimeMark',
        //     bindKey: bindKey('Ctrl-K Ctrl-X', 'Cmd-K Cmd-X')
        // },
        // {
        //     command: 'sublimeYank',
        //     bindKey: bindKey('Ctrl-K Ctrl-Y', 'Cmd-K Cmd-Y')
        // },
        {
            // codemirror: 'showInCenter',
            command: 'centerselection',
            bindKey: bindKey('Ctrl-K Ctrl-C', 'Cmd-K Cmd-C')
        },
        {
            // codemirror: 'delLineLeft',
            command: 'removetolinestart',
            bindKey: bindKey('Ctrl-K Ctrl-Backspace', 'Cmd-K Cmd-Backspace')
        },
        {
            // codemirror: 'delLineRight',
            command: 'removetolineend',
            bindKey: bindKey('Ctrl-K Ctrl-K', 'Cmd-K Cmd-K')
        },
        {
            command: 'fold',
            bindKey: bindKey('Shift-Ctrl-[', 'Shift-Cmd-[')
        },
        {
            command: 'unfold',
            bindKey: bindKey('Shift-Ctrl-]', 'Shift-Cmd-]')
        },
        {
            // codemirror: 'unfoldAll',
            command: 'foldall',
            bindKey: bindKey('Ctrl-K Ctrl-1', 'Cmd-K Cmd-1')
        },
        {
            // codemirror: 'unfoldAll',
            command: 'unfoldall',
            bindKey: bindKey('Ctrl-K Ctrl-J', 'Cmd-K Cmd-J')
        },
        {
            // codemirror: 'addCursorToPrevLine',
            command: 'addCursorAbove',
            bindKey: bindKey('Ctrl-Alt-Up', 'Ctrl-Shift-Up')
        },
        {
            // codemirror: 'addCursorToNextLine',
            command: 'addCursorBelow',
            bindKey: bindKey('Ctrl-Alt-Down', 'Ctrl-Shift-Down')
        },
        // {
        //     command: 'findUnder',
        //     bindKey: bindKey('Ctrl-F3', 'Cmd-F3')
        // },
        // {
        //     command: 'findUnderPrevious',
        //     bindKey: bindKey('Shift-Ctrl-F3', 'Shift-Cmd-F3')
        // },
        // {
        //     command: 'findAllUnder',
        //     bindKey: bindKey('Alt-F3', 'Alt-F3')
        // },
        // {
        //     command: 'findIncremental',
        //     bindKey: bindKey('Ctrl-I', 'Cmd-I')
        // },
        // {
        //     command: 'findIncrementalReverse',
        //     bindKey: bindKey('Shift-Ctrl-I', 'Shift-Cmd-I')
        // },
        // {
        //     command: 'replace',
        //     bindKey: bindKey('Ctrl-H', 'Cmd-H')
        // },
        // {
        //     command: 'findNext',
        //     bindKey: bindKey('F3', 'F3')
        // },
        // {
        //     command: 'findPrev',
        //     bindKey: bindKey('Shift-F3', 'Shift-F3')
        // }
    ];

    commands.forEach(function (k) {
        var bindKey = k.bindKey;
        if (typeof bindKey == "object")
            bindKey = bindKey[exports.handler.platform];
        exports.handler.bindKey(bindKey, k.command);
    });

    exports.handler.addCommands({
        addlinebefore: function (editor) {
            editor.navigateLineStart();
            var newLine = editor.session.doc.getNewLineCharacter();
            editor.insert(newLine);
        },
        addlineafter: function (editor) {
            editor.navigateLineEnd();
            var newLine = editor.session.doc.getNewLineCharacter();
            editor.insert(newLine);
        },
    });
});
