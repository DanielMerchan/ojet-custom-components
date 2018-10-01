
# Oracle JET : JETCustomComponents

**JETCustomComponents** is an *Oracle JET Application* for developing and testing *Oracle JET Composite Components* that can be re-used.

Oracle JET 5.2.0, Working with JET Composite Components
https://docs.oracle.com/en/middleware/jet/5.2/develop/working-oracle-jet-composite-components.html

# Install a JET Composite Component
- Copy the ```/jet-composite/[my-component]``` to your JavaScript Application ```/js``` location
- Add it to the View Model in the ```define (...,'jet-composites/[my-component]/loader'``` RequireJS function
- Use it in your HTML View ```<my-component></my-component>```

# Composite Components

## Demo Card (Oracle Demo)

Demo Card is the Oracle JET Cookbook Composite Component demonstration: (https://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=composite&demo=basic)

### Location
```
/js/jet-composites/demo-card
```
### Files
```loaded.js```  -> Registers the Composite Component.
```component.json``` -> Definition of the *demo-card* (metadata, version compatibility, properties, methods, events...)
```demo-card-view.html``` -> HTML View
```demo-card-viewModel.js``` -> View Model
```demo-card-styles.css``` -> CSS Styles
```/resources/nls/demo-card-strings.js``` -> Resource Bundle Multilanguage

### Usage
Include the JET Composite as part of you View Model JavaScript file
```js
define(['ojs/ojcore', 'knockout', 'jquery', 'jet-composites/demo-card/loader'],
```
```html
<oj-bind-for-each data="[[employees]]" as="employee">
    <template>
        <demo-card class="oj-flex-item" name="[[employee.data.name]]" avatar="[[employee.data.avatar]]" work-title="[[employee.data.title]]"
                   work-number="[[employee.data.work]]" email="[[employee.data.email]]">
        </demo-card>
    </template>
</oj-bind-for-each>
```
