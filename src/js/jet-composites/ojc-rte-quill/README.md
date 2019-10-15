
# OJC Rich Text Editor based on QuillJS

```<ojc-rte-quill>``` is a Rich Text Editor based on the famous Rich Text Editor Quill JS
https://quilljs.com

## Versioning

> IMPORTANT: The component properties, methods, events and slots are suitable for big changes till release 1.0.0 happens

|Version| Description  |
|--|--|
| 0.0.1 | Initial version commit, work in progress  |
| 0.0.2 | Added maxLength property (suitable for validators change) |
| 0.1.0 | Tested, bug fixing and releases this minor release that can be used |

## Pre-requisites
 - [NodeJS](https://nodejs.org/es/download/): Make sure you have the latest version of NodeJS downloaded and installed 
 - [Oracle JET](https://www.oracle.com/webfolder/technetwork/jet/index.html) version 7.x.x
```
>npm install -g @oracle/ojet-cli
>ojet --version

Oracle JET Command Line Interface, version: 7.2.0
```

## Installation
>NOTE: A NPM package is planned for the future for installing using npm cli

Copy and paste the ``ojc-rte-quill`` Web Component located in:
```
jet-composites/ojc-rte-quill
``` 
Into your Oracle JET Application 
```
src/js/jet-composites/ojc-rte-quill
```
## Usage
Import it in your Module as follows:
```javascript
define([...,'ojc-rte-quill/loader', ...])
```
Use it in your Module HTML as follows:
```html
<ojc-rte-quill  id="myEditor" value="{{editorValue}}"  
                max-length="100"  modules="[[modules]]" theme="snow"  
                on-ojc-text-change="[[myTextChangeHandler]]" placeholder="Text to be displayed when empty">
</ojc-rte-quill>
```
## Properties

|Option|Type|Required|Description| Quill JS API? |Default Value
|--|--|--|--|--|--|
|value|string|``false``|HTML value of the Quill Editor|Custom|``undefined``
|maxLength|number|``false``|Maximum text length allowed. ``-1`` means no limit|Custom|``-1``|
|bounds|HTMLElement|``false``|DOM Element or a CSS selector for a DOM Element, within which the editor’s ui elements (i.e. tooltips, etc.) should be confined. Currently, it only considers left and right boundaries.|Quill JS|```document.body```|
|debug|string|``false``|Shortcut for debug. Note debug is a static method and will affect other instances of Quill editors on the page. Only warning and error messages are enabled by default.|Quill JS|warn|
|formats*|``array<string>``|``false``|Whitelist of the Formats allowed in the editor (This does not mean the toolbar options will appear or not, they only disable them)|Quill JS|``["background","bold","color","font","code","italic","link","size","strike","script","underline","blockquote", "header","indent","list","align","direction","code-block","image","video"]``|
|modules*|object|``false``|Quill JS modules to enable excepting Toolbar which is enabled by default in this component|Quill JS|{}|
|*toolbar-options|``array<string>``|``false``|Describe the Toolbar Controls to be displayed. (Enable Toolbar Module of Quill JS)|Custom|``["font","size","bold","underline","italic","strikethrough","color","background","sub-script","super-script","header","blockquoute", "code-block","indent","list","align","direction","formula","video","image","link","clean"]``
|placeholder|string|``false``|Placeholder text to show when editor is empty.|Quill JS|``empty``|
|read-only|boolean|``false``|Whether to instantiate the editor to read-only mode.|Quill JS|``false``|
|scrolling-container|HTMLElement|``false``|DOM Element or a CSS selector for a DOM Element, specifying which container has the scrollbars (i.e. overflow-y: auto), if is has been changed from the default ql-editor with custom CSS. Necessary to fix scroll jumping bugs when Quill is set to auto grow its height, and another ancestor container is responsible from the scrolling.|Quill JS|``null``|
|theme|string|``false``|Name of theme to use. The builtin options are ``bubble`` or ``snow``. An invalid or falsy value will load a default minimal theme.|Quill JS|``snow``|
>*: These property values explained in the following sub-sections

### Property - Modules
QuillJS Modules can be configured through the **modules** property which expects a JSON as explained in Quill JS - Modules documentation: https://quilljs.com/docs/modules/

Example:
```json
{
	"syntax": true,
	"history": {
	      "delay": 2000,
	      "maxStack": 500,
	      "userOnly": true
    }
} 
```
**Toolbar** module is NOT SUPPORTED as it is pre-configure within the Web Component. You can configure the Toolbar by using **toolbar-options** and 
>Note: 0.0.2 - Only accepts 'syntax' and 'history'. Other modules will be supported in later releases
### Property - Formats
It described which formats are allowed / denied of the Rich Text Editor. 
Check https://quilljs.com/docs/formats/ for possible values

Example of "All Formats"
```javascript
["background","bold","color","font","code","italic","link","size","strike",
"script","underline","blockquote","header","indent",
"list","align","direction","code-block","image","video"]
```

**Note**: This does not mean they will be rendered or not, this is controlled via **toolbar-options** property

### Property - ToolbarOptions
This Web Component uses the **Toolbar Module** of Quill JS for rendering the toolbar options allowed: https://quilljs.com/docs/modules/toolbar/
The possible values are:
```javascript
["font","size","bold","underline","italic","strikethrough","color",
"background","sub-script","super-script","header",
"blockquoute","code-block","indent","list",
"align","direction","formula","video","image","link","clean"]
```
## Methods
The following methods are available within this Web Component
###  Custom API
### getHTML
Returns the HTML contained in the text editor
Example
```html
<ojc-rte-quill  id="editor">
</ojc-rte-quill>
```
```javascript
const editor = document.getElementById('editor');
console.log(editor.getHTML());
```

### Quill JS API
The Web Component proxy some of the official Quill JS Content API 
https://quilljs.com/docs/api/#content
>Note: Check component.json for more details of the methods of the API exposed
 
 **In future releases Formatting and other API will be exposed too**

## Events
The following events of Quill JS are exposed: https://quilljs.com/docs/api/#events
### ojc-text-change
Emitted when the contents of Quill have changed. Details of the change, representation of the editor contents before the change, along with the source of the change are provided.

The changesa are provided in Quill.Delta: https://quilljs.com/docs/delta/

```html
<ojc-rte-quill  id="editor" on-ojc-text-change="[[handleTextChange]]">
</ojc-rte-quill>
```
```javascript
define([...,'ojc-rte-quill/loader', ...], function(...) {
	function MyViewModel() {
	   var self = this;
	   self.handleTextChange = function(event) {
	      console.log(event.detail.value.delta);
	      console.log(event.detail.value.oldDelta);
	      console.log(event.detail.value.source);
	   }
	}
	return new MyViewModel();
})
```

### ojc-selection-change
Emitted when a user or API causes the selection to change, with a range representing the selection boundaries. A null range indicates selection loss (usually caused by loss of focus from the editor). You can also use this event as a focus change event by just checking if the emitted range is null or not.
```html
<ojc-rte-quill  id="editor" on-ojc-selection-change="[[handleSelectionChange]]">
</ojc-rte-quill>
```
```javascript
define([...,'ojc-rte-quill/loader', ...], function(...) {
	function MyViewModel() {
	   var self = this;
	   self.handleTextChange = function(event) {
		console.log(event.detail.value.oldRange);
		console.log(event.detail.value.range);
		console.log(event.detail.value.source);
	   }
	}
	return new MyViewModel();
})
```

### ojc-editor-change
Emitted when either text-change or selection-change would be emitted, even when the source is "silent". The first parameter is the event name, either text-change or selection-change, followed by the arguments normally passed to those respective handlers.
```html
<ojc-rte-quill  id="editor" on-ojc-editor-change="[[handleEditorChange]]">
</ojc-rte-quill>
```
```javascript
define([...,'ojc-rte-quill/loader', ...], function(...) {
	function MyViewModel() {
	   var self = this;
	   self.handleEditorChange = function(event) {
	      console.log(event.detail.value.eventName);
          console.log("[on-ojc-editor-change]" + event.detail.value.args[0]);
          console.log("[on-ojc-editor-change]" + event.detail.value.args[1]);
          console.log("[on-ojc-editor-change]" + event.detail.value.args[2]);
	   }
	}
	return new MyViewModel();
})
```

## Slots
Not implemented yet (support of custom toolbar, fonts planned)

## Styles
To be defined

## Tests
Not implemented yet

## Limitations known in current release: 0.1.0
 - Only **snow** theme is supported at this moment
 - Only the **default Fonts** are supported at this moment
 - **Formula still does NOT work**. KaTex loads properly, but do not add the Formulas to the editor.
 - Not all QuillJS API has been exposed within the component yet.
 - Unit Test are still not implemented
 - **maxLength** validation is not using the Validators framework of Oracle JET. Potentially it will be re-written in next versions
 - Dependencies contained in libs folder instead of NPM dependencies