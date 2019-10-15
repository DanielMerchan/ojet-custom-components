/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['knockout', 'ojc-rte-quill/loader', 'ojs/ojbutton'
],
    function (ko) {

        function CustomerViewModel() {
            var self = this;
            // Below are a set of the ViewModel methods invoked by the oj-module component.
            // Please reference the oj-module jsDoc for additional information.

            self.editorElement;
            self.editorValue = ko.observable("<p><strong>I am a hardcoded initial value provided :)</strong></p>");

            self.testTextChange = event => {
                console.log("[on-ojc-text-change]" + event.detail.value.delta);
                console.log("[on-ojc-text-change]" + event.detail.value.oldDelta);
                console.log("[on-ojc-text-change]" + event.detail.value.source);
            }

            self.testSelectionChange = event => {
                console.log("[on-ojc-selection-change]" + event.detail.value.oldRange);
                console.log("[on-ojc-selection-change]" + event.detail.value.range);
                console.log("[on-ojc-selection-change]" + event.detail.value.source);
            }

            self.testEditorChange = event => {
                console.log("[on-ojc-editor-change]" + event.detail.value.eventName);
                console.log("[on-ojc-editor-change]" + event.detail.value.args[0]);
                console.log("[on-ojc-editor-change]" + event.detail.value.args[1]);
                console.log("[on-ojc-editor-change]" + event.detail.value.args[2]);

            }

            self.deleteText = (event, vm) => {
                self.editorElement.deleteText(1, 2);
            }

            self.getContents = (event, vm) => {
                console.log(self.editorElement.getContents(1, 40));
            }

            self.getLength = (event, vm) => {
                console.log(self.editorElement.getLength());
            }

            self.getText = (event, vm) => {
                console.log(self.editorElement.getText());
            }

            self.insertEmbed = (event, vm) => {
                console.log(self.editorElement.insertEmbed(10, 'image', 'https://avatars0.githubusercontent.com/u/7116480?s=460&v=4'));
            }

            self.insertText = (event, vm) => {
                console.log(self.editorElement.insertText(1, "Magic Goose", { bold: true }));
            }

            self.setContents = (event, vm) => {
                console.log(self.editorElement.setContents([{ insert: 'Test Text' }]));
            }

            self.setText = (event, vm) => {
                console.log(self.editorElement.setText('Hello everyone, I am too sexy \n'));
            }

            self.updateContents = (event, vm) => {
                // Delta vs Wrapp my own object to convert to Delta
            }

            self.getHTML = (event, vm) => {
                console.log(self.editorValue());
                console.log(self.editorElement.getHTML());
            }

            self.modules = {
                syntax: true
            }

            /**
             * Optional ViewModel method invoked after the View is inserted into the
             * document DOM.  The application can put logic that requires the DOM being
             * attached here.
             * This method might be called multiple times - after the View is created
             * and inserted into the DOM and after the View is reconnected
             * after being disconnected.
             */
            self.connected = function () {
                self.editorElement = document.getElementById('testEditor');
            };

            /**
             * Optional ViewModel method invoked after the View is disconnected from the DOM.
             */
            self.disconnected = function () {
                // Implement if needed
            };

            /**
             * Optional ViewModel method invoked after transition to the new View is complete.
             * That includes any possible animation between the old and the new View.
             */
            self.transitionCompleted = function () {
                // Implement if needed
            };
        }

        /*
         * Returns a constructor for the ViewModel so that the ViewModel is constructed
         * each time the view is displayed.  Return an instance of the ViewModel if
         * only one instance of the ViewModel is needed.
         */
        return new CustomerViewModel();
    }
);