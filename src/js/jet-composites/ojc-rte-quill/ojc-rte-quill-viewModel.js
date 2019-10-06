/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
'use strict';
define(
  ['ojs/ojlogger', 'ojs/ojmessaging', 'ojs/ojtranslation', 'knockout', 'ojL10n!./resources/nls/ojc-rte-quill-strings', './libs/katex/katex.min', './libs/highlight/highlight.pack',
   './libs/quill/quill.min', 'css!./libs/katex/katex.min', 'css!./libs/quill/quill.snow', 'css!./libs/highlight/styles/monokai-sublime',
  ],

  function (Logger, Message, Translations, ko, componentStrings, katex, hljs, Quill) {

    /**
     * @name RichTextEditorQuillComponentModel
     * @param {object} context - Contains the component.json properties
     * @constructor
     */
    function RichTextEditorQuillComponentModel(context) {
      var self = this;
      console.log(katex);
      //At the start of your viewModel constructor
      self.composite = context.element;
      self.loggingIdentity = self.loggingIdentity = 'ojc-rte-quill (' + context.uniqueId + '): ';
      self.componentContainerId = context.uniqueId + '_ctn';
      self.toolbarContainerId = context.uniqueId + "_tlb";
      self.editorContainerId = context.uniqueId + '_rte';
      self.messagesSubId = context.uniqueId + '_msg';
      self.properties = context.properties;
      self.res = componentStrings['ojc-rte-quill'];
      self.messageQueue = ko.observableArray([]);

      // Generate options based on input parameters
      self.quillOptions = {};
      self.quillOptions.debug = self.properties.debug;
      self.quillOptions.bounds = self.properties.bounds;
      self.quillOptions.formats = self.properties.formats;
      self.quillOptions.modules = self.properties.modules;
      self.quillOptions.readOnly = self.properties.readOnly;
      self.quillOptions.placeholder = self.properties.placeholder;
      self.quillOptions.scrollingContainer = self.properties.scrollingContainer;
      self.quillOptions.theme = self.properties.theme;
      self.quillOptions.modules.toolbar = '#' + self.toolbarContainerId;

      const loggerInitQuillOptionsMessage = Translations.applyParameters(self.res['loggerInitQuillOptions'], self.quillOptions);
      Logger.info(self.loggingIdentity + loggerInitQuillOptionsMessage);

      // Handle Custom Toolbar Module properties
      // Font Format Block
      self.fontBlockFormatDisplay = 'none';
      self.fontFormatDisplay = 'none';
      self.fontSizeFormatDisplay = 'none';
      // Font Style Format Block
      self.fontStyleBlockFormatDisplay = 'none';
      self.fontStyleBoldFormatDisplay = 'none';
      self.fontStyleItalicFormatDisplay = 'none';
      self.fontStyleUnderlineFormatDisplay = 'none';
      self.fontStyleStrikeFormatDisplay = 'none';
      // Font Color Format Block
      self.fontColorBlockFormatDisplay = 'none';
      self.fontColorFormatDisplay = 'none';
      self.fontColorBackgroundFormatDisplay = 'none';
      // Script Block
      self.scriptBlockFormatDisplay = 'none';
      self.scriptSubFormatDisplay = 'none';
      self.scriptSuperFormatDisplay = 'none';
      // Header Block
      self.headerBlockFormatDisplay = 'none';
      self.headerFormatDisplay = 'none';
      // Text Block
      self.blockFormatDisplay = 'none';
      self.blockBlockquouteDisplay = 'none';
      self.blockCodeblockDisplay = 'none';
      // List Indent Block
      self.indentListBlockFormatDisplay = 'none';
      self.listFormatDisplay = 'none';
      self.indentFormatDisplay = 'none';
      // Align - Direction Block
      self.alignDirectionBlockFormatDisplay = 'none';
      self.directionFormatDisplay = 'none';
      self.alignFormatDisplay = 'none';
      // Add Item Block
      self.addBlockFormatDisplay = 'none';
      self.addLinkFormatDisplay = 'none';
      self.addVideoFormatDisplay = 'none';
      self.addFormulaFormatDisplay = 'none';
      self.addImageFormatDisplay = 'none';
      // Clean Format
      self.cleanBlockFormatDisplay = 'none';
      self.cleanFormatDisplay = 'none';

      // If Toolbar is provided as non static array, then the toolbar is completily removed
      self.properties.toolbarOptions.forEach(toolbarOption => {
        switch (toolbarOption) {
          case self._quillToolbarOptionsEnum.FONT: {
            self.fontBlockFormatDisplay = '';
            self.fontFormatDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.SIZE: {
            self.fontBlockFormatDisplay = '';
            self.fontSizeFormatDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.BOLD: {
            self.fontStyleBlockFormatDisplay = '';
            self.fontStyleBoldFormatDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.ITALIC: {
            self.fontStyleBlockFormatDisplay = '';
            self.fontStyleItalicFormatDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.UNDERLINE: {
            self.fontStyleBlockFormatDisplay = '';
            self.fontStyleUnderlineFormatDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.STRIKETHROUGH: {
            self.fontStyleBlockFormatDisplay = '';
            self.fontStyleStrikeFormatDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.COLOR: {
            self.fontColorBlockFormatDisplay = '';
            self.fontColorFormatDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.BACKGROUND: {
            self.fontColorBlockFormatDisplay = '';
            self.fontColorBackgroundFormatDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.SUB_SCRIPT: {
            self.scriptBlockFormatDisplay = '';
            self.scriptSubFormatDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.SUPER_SCRIPT: {
            self.scriptBlockFormatDisplay = '';
            self.scriptSuperFormatDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.HEADER: {
            self.headerBlockFormatDisplay = '';
            self.headerFormatDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.BLOCKQUOUTE: {
            self.blockFormatDisplay = '';
            self.blockBlockquouteDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.CODE_BLOCK: {
            self.blockFormatDisplay = '';
            self.blockCodeblockDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.LIST: {
            self.indentListBlockFormatDisplay = '';
            self.listFormatDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.INDENT: {
            self.indentListBlockFormatDisplay = '';
            self.indentFormatDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.DIRECTION: {
            self.alignDirectionBlockFormatDisplay = '';
            self.directionFormatDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.ALIGNMENT: {
            self.alignDirectionBlockFormatDisplay = '';
            self.alignFormatDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.LINK: {
            self.addBlockFormatDisplay = '';
            self.addLinkFormatDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.IMAGE: {
            self.addBlockFormatDisplay = '';
            self.addImageFormatDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.VIDEO: {
            self.addBlockFormatDisplay = '';
            self.addVideoFormatDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.FORMULA: {
            self.addBlockFormatDisplay = '';
            self.addFormulaFormatDisplay = 'inline';
            break;
          }
          case self._quillToolbarOptionsEnum.CLEAN: {
            self.cleanBlockFormatDisplay = '';
            self.cleanFormatDisplay = 'inline';
            break;
          }
          default:
            const loggerToolbarOptionNotValidMessage = Translations.applyParameters(self.res['loggerToolbarOptionNotValid'], toolbarOption);
            Logger.warn(self.loggingIdentity + loggerToolbarOptionNotValidMessage);
            break;
        }
      });
    };


    // Support Enums for QuillJS

    /**
     * Enum for the Error Messgae Keys that can be used within the component
     * @readonly
     * @enum {string}
     */
    RichTextEditorQuillComponentModel.prototype._errorMessageKeysEnum = {
      QUILL_NOT_INITIALIZED: "quillNotInitialized"
    }

    /**
     * Enum for the Formats allowed / disallowed in the Quill JS Editor.
     * This is used in combination with toolbar-options.
     * @name _quillFormatsAllowedEnum
     * @readonly
     * @enum {String}
     */
    RichTextEditorQuillComponentModel.prototype._quillFormatsAllowedEnum = {
      INLINE_BACKGROUND_COLOR: "background",
      INLINE_BOLD: "bold",
      INLINE_COLOR: "color",
      INLINE_FONT: "font",
      INLINE_CODE: "code",
      INLINE_ITALIC: "italic",
      INLINE_LINK: "link",
      INLINE_SIZE: "size",
      INLINE_STRIKETHROUGH: "strikethrough",
      INLINE_SUPERSCRIPT: "script",
      INLINE_UNDERLINE: "underline",
      BLOCK_BLOCKQUOUTE: "blockquoute",
      BLOCK_HEADER: "header",
      BLOCK_INDENT: "indent",
      BLOCK_LIST: "list",
      BLOCK_TEXT_ALIGNMENT: "align",
      BLOCK_TEXT_DIRECTION: "direction",
      BLOCK_CODE_BLOCK: "code-block",
      EMBEDS_FORMULA: "formula",
      EMBEDS_VIDEO: "video",
      EMBEDS_IMAGE: "image",
    }

    /**
     * Enum for the Formats that can be used within Quill JS
     * @readonly
     * @enum {string}
     */
    RichTextEditorQuillComponentModel.prototype._quillToolbarOptionsEnum = {
      FONT: "font",
      SIZE: "size",
      BOLD: "bold",
      UNDERLINE: "underline",
      ITALIC: "italic",
      STRIKETHROUGH: "strikethrough",
      COLOR: "color",
      BACKGROUND: "background",
      SUB_SCRIPT: "sub-script",
      SUPER_SCRIPT: "super-script",
      HEADER: "header",
      BLOCKQUOUTE: "blockquoute",
      CODE_BLOCK: "code-block",
      INDENT: "indent",
      LIST: "list",
      ALIGNMENT: "align",
      DIRECTION: "direction",
      FORMULA: "formula",
      VIDEO: "video",
      IMAGE: "image",
      LINK: "link",
      CLEAN: "clean"
    }

    // LIFECYCLE methods

    /**
     * Bindings Applied Lifecycle Method - Invoked after the bindings has been applied in the View
     * @param {object} context - Contains the component.json properties
     */
    RichTextEditorQuillComponentModel.prototype.bindingsApplied = function (context) {
      var self = this;

      // Initializes Quill JS 
      self.quill = new Quill('#' + self.editorContainerId, self.quillOptions);

      // QUILL JS - Events API
      if (self.quill) {
        self._quillInitializeEvents();

      } else {
        self._reportError(self._errorMessageKeysEnum.QUILL_NOT_INITIALIZED, { 'editorContainerId': self.editorContainerId });
      }
    };

    RichTextEditorQuillComponentModel.prototype.activated = function (context) {
      console.log("[rte] activated");
    };

    RichTextEditorQuillComponentModel.prototype.connected = function (context) {
      console.log("[rte] connected");
    };

    RichTextEditorQuillComponentModel.prototype.disconnect = function (context) {
      console.log("[rte] disconnect");
    };

    RichTextEditorQuillComponentModel.prototype.propertyChanged = function (context) {
      console.log("[rte] propertyChanged");
    };;

    // Quill JS Events Initialization Auxiliar methods
    /**
     * Initializes the QuillJS Events depending if they have been provided within the CCA
     */
    RichTextEditorQuillComponentModel.prototype._quillInitializeEvents = function () {
      var self = this;
      const ojcTextChange = self.composite.getAttribute('on-ojc-text-change');
      const ojcSelectionChange = self.composite.getAttribute('on-ojc-selection-change');
      const ojcEditorChange = self.composite.getAttribute('on-ojc-editor-change');
      if (ojcTextChange) {
        self._quillOnTextChangeEvent();
      }
      if (ojcSelectionChange) {
        self._quillOnSelectionChangeEvent();
      }
      if (ojcEditorChange) {
        self._quillOnEditorChangeEvent();
      }
    }

    /**
     * Auxiliar method to register QuillJS - text-change Event
     */
    RichTextEditorQuillComponentModel.prototype._quillOnTextChangeEvent = function () {
      var self = this;
      self.quill.on('text-change', (delta, oldDelta, source) => {
        const params = {
          'bubbles': true,
          'detail': {
            'value': {
              'delta': delta,
              'oldDelta': oldDelta,
              'source': source
            }
          }
        }
        self.composite.dispatchEvent(new CustomEvent('ojcTextChange', params));
      })
    }

    /**
     * Auxiliar method to register QuillJS - selection-change Event
     */
    RichTextEditorQuillComponentModel.prototype._quillOnSelectionChange = function () {
      var self = this
      self.quill.on('selection-change', (range, oldRange, source) => {
        const params = {
          'bubbles': true,
          'detail': {
            'value': {
              "range": range,
              "oldRange": oldRange,
              "source": source
            }
          }
        }
        self.composite.dispatchEvent(new CustomEvent('ojcSelectionChange'), params);
      });
    }

    /**
     * Auxiliar method to register QuillJS - editor-change Event
     */
    RichTextEditorQuillComponentModel.prototype._quillOnEditorChange = function () {
      var self = this;
      self.quill.on('editor-change', (eventName, ...args) => {
        const params = {
          'bubbles': true,
          'detail': {
            'value': {
              'eventName': eventName,
              'args': args
            }
          }
        }
        self.composite.dispatchEvent(new CustomEvent('ojcEditorChange'), params);
      });
    }

    // QUILLJS - Content API

    /**
     * Deletes text from the editor, returning a Delta representing the change. Source may be "user", "api", or "silent". Calls where the source is "user" when the editor is disabled are ignored.
     * @param {number} index - Position were to start deleting text
     * @param {number} length - Number of characters to be removed
     * @param {?string} source - 'api' | 'user' | 'silent'
     * 
     * @return {Delta} - Delta information
     * {@link https://quilljs.com/docs/delta/}
     * 
     * @example 
     * quill.deleteText(1, 2); // Delete two text characters after the index / cursor position 2. 'I am a sexy Goose' -> 'Im a sexy Goose'
     */
    RichTextEditorQuillComponentModel.prototype._quillDeleteText = function (index, length, source = 'api') {
      var self = this;
      return self.quill.deleteText(index, length, source);
    }

    /**
     * Retrieves contents of the editor, with formatting data, represented by a Delta object.
     * @param {number} index - Start index to start getting the editor content
     * @param {number} length - How many content to be taken from the starting index. It wraps the content in different objects.
     * 
     * @return {Delta} - Delta information
     * {@link https://quilljs.com/docs/delta/}
     * 
     * @example
     * var delta = quill.getContents(); // Delta -> {ops: [{insert: "I am a sexy Goose"}, {insert: {image: "data/image/png..."}},...]}
     * var delta = quill.getContents(1,2); // Delta -> {ops: [{insert: "I am a sexy Goose"}
     */
    RichTextEditorQuillComponentModel.prototype._quillGetContents = function (index, length) {
      var self = this;
      return self.quill.getContents(index, length);
    }

    /**
     * Retrieves the length of the editor contents. Note even when Quill is empty, there is still a blank line represented by ‘\n’, so getLength will return 1.
     * 
     * @return {number} - Length of the editor contents
     */
    RichTextEditorQuillComponentModel.prototype._quillGetLength = function () {
      var self = this;
      return self.quill.getLength();
    }

    /**
     * Retrieves the string contents of the editor. Non-string content are omitted, so the returned string’s length may be shorter than the editor’s as returned by getLength. Note even when Quill is empty, there is still a blank line in the editor, so in these cases getText will return ‘\n’.
     * The length parameter defaults to the length of the remaining document.
     * @param {number} index - Start index to start getting the editor content
     * @param {number} length - How many characters to be taken
     * 
     * @return {Delta} - Delta information
     * {@link https://quilljs.com/docs/delta/}
     */
    RichTextEditorQuillComponentModel.prototype._quillGetText = function (index, length) {
      var self = this;
      return self.quill.getText(index, length);
    }

    /**
     * Insert embedded content into the editor, returning a Delta representing the change. Source may be "user", "api", or "silent". 
     * Calls where the source is "user" when the editor is disabled are ignored.
     * @param {number} index - Start index where to embed the conent
     * @param {string} type - Type of the content 'image' | 'video' | 'link' | 'formula'
     * @param {any} value - The content to be inserted
     * @param {?string} source - 'api' | 'user' | 'silent'
     * 
     * @return {Delta}
     * {@link https://quilljs.com/docs/delta/}
     */
    RichTextEditorQuillComponentModel.prototype._quillInsertEmbed = function (index, type, value, source = 'api') {
      var self = this;
      return self.quill.insertEmbed(index, type, value, source);
    }

    /**
     * Inserts text into the editor, optionally with a specified format or multiple formats. Returns a Delta representing the change. Source may be "user", "api", or "silent". Calls where the source is "user" when the editor is disabled are ignored.
     * @param {number} index - Start index
     * @param {string} text - Text to be introduced after the selected index
     * @param {?object} formats - JSON Object containing multiple formats and values at the same time
     * @param {?string} source - 'api' | 'user' | 'silent'
     * 
     * @return {Delta}
     * {@link https://quilljs.com/docs/delta/}
     * 
     * @see RichTextEditorQuillComponentModel._quillFormatsAllowedEnum
     */
    RichTextEditorQuillComponentModel.prototype._quillInsertText = function (index, text, formats, source = 'api') {
      var self = this;
      self.quill.insertText(index, text, formats, source);
    }

    /**
     * Overwrites editor with given contents. Contents should end with a newline. Returns a Delta representing the change. This will be the same as the Delta passed in, if given Delta had no invalid operations. Source may be "user", "api", or "silent". Calls where the source is "user" when the editor is disabled are ignored.
     * @param {Delta} delta - New Content based on a Quill Delta object
     * @param {?string} source - 'api' | 'user' | 'silent'
     * 
     * @return {Delta}
     * {@link https://quilljs.com/docs/delta/}
     * 
     * @example 
     * quill.setContents([{ insert: 'Hello ' },{ insert: 'World!', attributes: { bold: true } },{ insert: '\n' }]);
     */
    RichTextEditorQuillComponentModel.prototype._quillSetContents = function (delta, source = 'api') {
      var self = this;
      
      // return self.quill.setContents(delta, source);
    }

    // TODO (Daniel Merchan): Add rest of API supported by QuillJS

    // QUILLJS - Formatting API

    // QUILLJS - Selection API

    // QUILLJS - Editor API

    // QUILLJS - Model API

    // QUILLJS - Extension API

    /**
     * Auxuliar method for reporting errors while initializing the RTE Component
     * @param {string} errorMessageKey - Key Resource Bundle to be used to identify the translatable string for the error
     * @param {?object} params - JSON Object with the params to be logged along the error
     */
    RichTextEditorQuillComponentModel.prototype._reportError = (errorMessageKey, params) => {
      var self = this;
      var resolvedSummary = Translations.applyParameters(self.res[errorMessageKey], params);
      var resolvedDetail = Translations.applyParameters(self.res[errorMessageKey + 'Detail'], params);

      Logger.error(self.loggingIdentity + resolvedSummary);
      Logger.error(self.loggingIdentity + resolvedDetail);
      if (self.messageQueue === undefined) {
        self.messageQueue = ko.observableArray([]);
      }
      self.messageQueue.push({ summary: resolvedSummary, detail: resolvedDetail, severity: Message.SEVERITY_TYPE.ERROR });
    };

    return RichTextEditorQuillComponentModel;
  });