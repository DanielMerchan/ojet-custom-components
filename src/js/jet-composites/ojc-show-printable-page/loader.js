/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./ojc-show-printable-page-view.html', './ojc-show-printable-page-viewModel', 'text!./component.json', 'css!./ojc-show-printable-page-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('ojc-show-printable-page', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);