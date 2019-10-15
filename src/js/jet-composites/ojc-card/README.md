# OJC Card

```<ojc-card>``` is a Card HTML Container to display Employee information based on [Oracle JET Cookbook Demo Card](https://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=composite&demo=basic)

## Versioning

> IMPORTANT: The component properties, methods, events and slots are suitable for big changes till release 1.0.0 happens

|Version| Description  |
|--|--|
| 1.0.0 | Re-factor version of the Cookbook |

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

Copy and paste the ``ojc-card`` Web Component located in:
```
jet-composites/ojc-card
``` 
Into your Oracle JET Application 
```
src/js/jet-composites/ojc-card
```
## Usage
Import it in your Module as follows:
```javascript
define([...,'ojc-card/loader', ...])
```
Use it in your Module HTML as follows:
```html
<oj-bind-for-each data="[[employees]]" as="employee">
    <template>
        <ojc-card class="oj-flex-item" name="[[employee.data.name]]" avatar="[[employee.data.avatar]]"
                work-title="[[employee.data.title]]" work-number="[[employee.data.work]]"
                email="[[employee.data.email]]">
        </ojc-card>
    </template>
</oj-bind-for-each>
```
## Properties

|Option|Type|Required|Description|Default Value
|--|--|--|--|--|
|name|string|``false``|Name displayed in the card|``empty``|
|avatar|string|``false``|URL of the image used in the card|``empty``|
|work-title|string|``false``|Work title displayed in the card|``empty``|
|work-number|number|``false``|Work number displayed in the card|``empty``|
|email|string|``false``|Email address displayed in the card|``empty``|

## Methods
No methods available

## Events
No events triggered

## Slots
Not available

## Styles
You can add a background-image using your own css
```css
#component-container ojc-card .ojc-card-front-side {
    background-image: url('../images/composites/card-background_1.png');
}
```
## Tests
Not implemented yet

## Limitations known in current release: 1.0.0
No current limitations detected