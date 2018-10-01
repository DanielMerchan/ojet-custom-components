/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojnavigationlist', 'jet-composites/demo-card/loader'],
        function(oj, ko, $) {

            function DemoCardViewModel() {
                var self = this;
                // Below are a set of the ViewModel methods invoked by the oj-module component.
                // Please reference the oj-module jsDoc for additional information.

                self.employees = ko.observableArray([
                    {
                        name: 'Deb Raphaely',
                        avatar: 'images/fakepeople/100.png',
                        title: 'Purchasing Director',
                        work: 5171278899,
                        email: 'deb.raphaely@oracle.com'
                    },
                    {
                        name: 'Sonia Fripp',
                        avatar: 'images/fakepeople/106.png',
                        title: 'IT Manager',
                        work: 6501232234,
                        email: 'adam.fripp@oracle.com'
                    },
                    {
                        name: 'Daniel Merchan',
                        avatar: 'images/fakepeople/nopic.png',
                        title: 'CEO',
                        work: 6501232784,
                        email: 'daniel.merchan@oracle.com'
                    }
                ]);

                /**
                 * Optional ViewModel method invoked after the View is inserted into the
                 * document DOM.  The application can put logic that requires the DOM being
                 * attached here.
                 * This method might be called multiple times - after the View is created
                 * and inserted into the DOM and after the View is reconnected
                 * after being disconnected.
                 */
                self.connected = function() {
                    // Implement if needed
                };

                /**
                 * Optional ViewModel method invoked after the View is disconnected from the DOM.
                 */
                self.disconnected = function() {
                    // Implement if needed
                };

                /**
                 * Optional ViewModel method invoked after transition to the new View is complete.
                 * That includes any possible animation between the old and the new View.
                 */
                self.transitionCompleted = function() {
                    // Implement if needed
                };
            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constructed
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new DemoCardViewModel();
        }
);