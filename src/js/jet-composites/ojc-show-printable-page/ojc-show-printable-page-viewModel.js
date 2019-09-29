/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
'use strict';
define(
  ['ojL10n!./resources/nls/ojc-show-printable-page-strings', 'ojs/ojbutton'], function (componentStrings) {

    function ShowPrintablePageComponentModel(context) {
      var self = this;

      //At the start of your viewModel constructor
      var busyContext = oj.Context.getContext(context.element).getBusyContext();
      var options = { "description": "CCA Startup - Waiting for data" };
      self.busyResolve = busyContext.addBusyState(options);
      self.composite = context.element;

      self.properties = context.properties;
      self.resourceBundle = componentStrings['ojc-show-printable-page'];

      // Default button text
      self.printButtonText = self.properties.printButtonText || self.resourceBundle['print'];

      //Once all startup and async activities have finished, relocate if there are any async activities
      self.busyResolve();
    };

    // Functional Methods
    ShowPrintablePageComponentModel.prototype.print = function (event, vm) {
      vm.invokePrint();
    }

    // Methods
    ShowPrintablePageComponentModel.prototype.invokePrint = function () {
      const self = this;
      const element = document.getElementById(self.properties.printElement) || document.documentElement;
      const mywindow = window.open('', '_blank', '');

      mywindow.document.write('<html><head><title>' + document.title + '</title>');
      // Add the current styles present in the document
      const linkElements = document.querySelectorAll('link');
      linkElements.forEach(linkElement => {
        if ("stylesheet" === linkElement.rel) {
          mywindow.document.write(linkElement.outerHTML);
        }
      });
      const styleElements = document.querySelectorAll('style');
      styleElements.forEach(styleElement => {
        mywindow.document.write(styleElement.outerHTML);
      });
      mywindow.document.write('</head><body>');
      mywindow.document.write(element.outerHTML);

      // Add the requires JavaScript
      const scriptElements = document.querySelectorAll('script');
      scriptElements.forEach(scriptElement => {
        mywindow.document.head.write(scriptElement.outerHTML);

      })

      mywindow.document.write('</body>');
      mywindow.document.write('</html>');

      mywindow.document.close();
      mywindow.focus();
      if (self.properties.forcePrint) {
        mywindow.print();
        mywindow.close();
      }
    }

    //Lifecycle methods - uncomment and implement if necessary 
    //ExampleComponentModel.prototype.activated = function(context){
    //};

    //ExampleComponentModel.prototype.connected = function(context){
    //};

    //ExampleComponentModel.prototype.bindingsApplied = function(context){
    //};

    //ExampleComponentModel.prototype.disconnect = function(context){
    //};

    //ExampleComponentModel.prototype.propertyChanged = function(context){
    //};

    return ShowPrintablePageComponentModel;
  });