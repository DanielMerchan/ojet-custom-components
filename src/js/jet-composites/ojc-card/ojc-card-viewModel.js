/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
'use strict';
define(['ojs/ojavatar'],

    function () {
        /**
         * @name CardComponentModel
         * @param {object} context - Contains the component.json properties
         * @constructor
         */
        function CardComponentModel(context) {
            var self = this;
            self.initials = null;
            self.workFormatted = null;
            self.composite = context.element;

            /**
             * Formats a 10 digit number as a phone number.
             * @param  {number} number The number to format
             * 
             * @return {string} - The formatted phone number
             */
            const formatPhoneNumber = function (number) {
                return Number(number).toString().replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
            }

            if (context.properties.name) {
                var initials = context.properties.name.match(/\b\w/g);
                self.initials = (initials.shift() + initials.pop()).toUpperCase();
            }
            if (context.properties.workNumber)
                self.workFormatted = formatPhoneNumber(context.properties.workNumber);

            /**
             * Flips a card
             * @param  {MouseEvent} event The click event
             */
            self.flipCard = function (event) {
                if (event.type === 'click' || (event.type === 'keypress' && event.keyCode === 13)) {
                    // It's better to look for View elements using a selector
                    // instead of by DOM node order which isn't gauranteed.
                    $(self.composite).children('.ojc-card-flip-container').toggleClass('ojc-card-flipped');
                }
            };
        }

        return CardComponentModel;
    }
)
