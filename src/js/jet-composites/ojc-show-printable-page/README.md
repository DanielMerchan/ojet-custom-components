# OJC Show Printable Page

```<ojc-show-printable-page>``` it is a Web Component to trigger a Print of the current 

## Versioning

> IMPORTANT: The component properties, methods, events and slots are suitable for big changes till release 1.0.0 happens

|Version| Description  |
|--|--|
| 0.1.0 | API + Component together, in testing phase. Works, but with browser errors |

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

Copy and paste the ``ojc-show-printable-page`` Web Component located in:
```
jet-composites/ojc-show-printable-page
``` 
Into your Oracle JET Application 
```
src/js/jet-composites/ojc-show-printable-page
```
## Usage
Import it in your Module as follows:
```javascript
define([...,'ojc-show-printable-page/loader', ...])
```
Use it in your Module HTML as follows:
```html
<ojc-show-printable-page force-print="false">My Custom Print Text</ojc-show-printable-page>
```
## Properties
|Option|Type|Required|Description|Default Value
|--|--|--|--|--|
|printElement|string|``false``|Identifier of the HTML Container parent used for Printing|``document``|
|forcePrint|string|``false``|Invokes automatically window.print() in the printable page|``true``|

## Methods
The following methods are available within this Web Component
### print
Returns the HTML contained in the text editor
Example
```html
<ojc-show-printable-page id="spp">
```
```javascript
const sppElement = document.getElementById('spp');
console.log(sppElement.print());
```

## Events
No events triggered

## Slots
### startIcon
Used for providing an startIcon to the Button
```html
<ojc-show-printable-page id="spp">
    <span>
        <oj-bind-text value="[[label]]"></oj-bind-text>
    </span>
    <span slot="startIcon" class="oj-fwk-icon oj-fwk-icon-arrowbox-n"></span>
</ojc-show-printable-page>
```

### endIcon
Used for providing an endIcon to the Button
```html
<ojc-show-printable-page id="spp">
    <span>
        <oj-bind-text value="[[label]]"></oj-bind-text>
    </span>
    <span slot="endIcon" class="oj-fwk-icon oj-fwk-icon-arrowbox-n"></span>
</ojc-show-printable-page>
```

## Styles
No CSS available

## Tests
Not implemented yet

## Limitations known in current release: 1.0.0
No current limitations detected