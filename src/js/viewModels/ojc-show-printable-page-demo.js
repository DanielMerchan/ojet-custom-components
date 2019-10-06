/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['knockout','ojs/ojbutton', 'ojs/ojknockout', 'ojs/ojchart','ojc-show-printable-page/loader'
    ],
    function(ko) {

        function CustomerViewModel() {
            var self = this;
            // Below are a set of the ViewModel methods invoked by the oj-module component.
            // Please reference the oj-module jsDoc for additional information.

            // OJET Cookbook - Example
            /* toggle button variables */
            self.stackValue = ko.observable('on');
            self.orientationValue = ko.observable('vertical');
            self.applyStackCategory = ko.observable("apply");


            var barSeriesWithStackCategory = [
                { name: "Customer - Indications", items: [10, 30], stackCategory: "Customer", color: "#195174", displayInLegend: 'off', categories: ["CustomerIndications"] },
                { name: "Customer - Hold Cover", items: [20, 10], stackCategory: "Customer", color: "#267db3", displayInLegend: 'off', categories: ["CustomerHoldCover"] },
                { name: "Customer - Unsubmitted", items: [55, 30], stackCategory: "Customer", color: "#4ca3d9", displayInLegend: 'off', categories: ["CustomerUnsubmitted"] },
                { name: "XX - Credit Limit Decisions", items: [70, 20], stackCategory: "Pigeon", color: "#777777", displayInLegend: 'off', categories: ["PigeonCreditLimitDecisions"] },
                { name: "YY - Credit Limit Decisions", items: [50, 30], stackCategory: "Duck", color: "#FF00FF", displayInLegend: 'off', categories: ["DuckCreditLimitDecisions"] }
            ];
            var barGroups = ["0-10", "11-20"];

            var legendsections = [{
                    title: "Goose",
                    items: [{ color: "#4ca3d9", text: "Indications", id: "GooseIndications" },
                        { color: "#267db3", text: "Hold Cover", id: "GooseHoldCover" },
                        { color: "#195174", text: "Unsubmitted", id: "GooseUnsubmitted" }
                    ]
                },

                {
                    title: "Pigeon",
                    items: [{ color: "#777777", text: "Credit Limit Decisions", id: "PigeonCreditLimitDecisions" }]
                }, {
                    title: "Duck",
                    items: [{ color: "#FF00FF", text: "Credit Limit Decisions", id: "DuckCreditLimitDecisions" }]
                }
            ];

            var legendData = { sections: legendsections };

            self.barSeriesValue = ko.observableArray(barSeriesWithStackCategory);
            self.barGroupsValue = ko.observableArray(barGroups);
            self.legendSections = ko.observable(legendData);

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
        return new CustomerViewModel();
    }
);